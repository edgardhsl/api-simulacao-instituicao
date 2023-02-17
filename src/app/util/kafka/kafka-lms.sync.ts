import axios, { Axios, AxiosInstance } from "axios";

export class KafkaLMSSync {

    private client: AxiosInstance;

    constructor(private platform: Platform) {
        this.client = axios.create({ baseURL: `http://localhost:2000/${platform}/` });
    }

    send(content: any) {
        const json = typeof content === 'string' ? JSON.parse(content) : content;
        for (const topic in json) {
            this.client.post(`/${this._castTopicTitle(topic)}`, json[topic]);
        }
    }

    /**
     * GAMBIARRA
     */
    private _castTopicTitle(key: string) {
        switch (key) {
            case 'disciplina': return Topic.Course;
            case 'curso': return Topic.Category;
            case 'atividade': return Topic.Classwork;
        }
    }
}

export enum Platform {
    Moodle = 'moodle',
    Classroom = 'classroom'
}


export enum Topic {
    Course = 'course',
    Category = 'category',
    Classwork = 'classwork'
}