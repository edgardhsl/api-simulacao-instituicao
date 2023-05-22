import axios, { AxiosInstance } from "axios";

export class KafkaLMSSync {

    private client: AxiosInstance;
    private platform: Platform;

    constructor(platform: Platform) {
        this.platform = platform;
        this.client = axios.create({ baseURL: `http://localhost:2222/${platform}/` });
    }

    send(content: any) {
        const json = this.asJson(content);
        
        for (const topic in json) {
            this.client.post(`/${this._getTopicEndpoint(topic)}`, json[topic]);
        }
    }

    private _getTopicEndpoint(key: string) {
        switch (key) {
            case 'disciplina': return Topic.Course;
            case 'curso': return Topic.Category;
            case 'atividade': return Topic.Classwork;
            case 'usuario': return Topic.Student;
        }
    }

    private asJson(content: any) {
        content = typeof content === 'string' ? JSON.parse(content) : content
        
        if(this.platform === Platform.Classroom) this.mesclarDisciplinasCursos(content);;

        return content;
    }

    private mesclarDisciplinasCursos(content: any) {
        content['disciplina'] = Array.from(content['disciplina']).map((disciplina: any) => {
            const curso: any = Array.from(content['curso']).find((curso: any) => curso.id === disciplina.cursoId);
            disciplina['nome'] = `${curso.nome} - ${disciplina['nome']}`
            return disciplina;
        });
    }
}

export enum Platform {
    Moodle = 'moodle',
    Classroom = 'classroom'
}


export enum Topic {
    Course = 'course',
    Category = 'category',
    Classwork = 'classwork',
    Student = 'student'
}