import { Api } from "@app/http/api";
import { Course as Course2 } from "app/models/course";

export class Course {

    private api: Api = new Api();
    
    constructor() { }

    public async create(course: any): Promise<Course2> {
        try {
            return await this.api.post('courses', course).then(resp => resp.data);
        } catch (ex) {
            console.log(ex);
            throw { code: -1, message: 'Não foi possível criar o curso' };
        }
    }

    public async update(course: any): Promise<Course2> {
        try {
            console.log("teste");
            return await this.api.put(`courses/${course.id}`, course).then(resp => resp.data);
        } catch (ex) {
            console.log(ex);
            throw { code: -1, message: 'Não foi possível atualizar o curso' };
        }
    }

    public async get(courseId: string) {
        try {
            return await this.api.get(`courses/${courseId}`).then(resp => resp.data);
        } catch (ex) {
            console.log(ex);
            return { code: -1, message: 'Não foi possível retornar o curso com o id indicado.' };
        }
    }

    public async list() {
        try {
            return await this.api.get(`courses`).then(resp => resp.data);
        } catch (ex) {
            console.log(ex);
            return { code: -1, message: 'Não foi possível retornar a lista de cursos.' };
        }
    }

    public async getStudents(courseId: string) {
        try {
            return await this.api.get(`courses/${courseId}/`).then(resp => resp.data?.students);
        } catch (ex) {
            console.log(ex);
            return { code: -1, message: 'Não foi possível retornar a lista de estudantes.' };
        }
    }

    public async getForums(courseId: string) {
        try {
            return await this.api.get(`courses/${courseId}`).then(resp => resp.data?.messages);
        } catch (ex) {
            console.log(ex);
            return { code: -1, message: 'Não foi possível retornar a lista de fóruns.' };
        }
    }

}