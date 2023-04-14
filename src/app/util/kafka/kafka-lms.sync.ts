import axios, { AxiosInstance } from "axios";

export class KafkaLMSSync {

    private client: AxiosInstance;

    constructor(platform: Platform) {
        this.client = axios.create({ baseURL: `http://localhost:2000/${platform}/` });
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
            case 'estudante': return Topic.Student;
        }
    }

    private asJson(content: any) {
        return typeof content === 'string' ? JSON.parse(content) : content
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