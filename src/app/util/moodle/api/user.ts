import { Api } from "@app/http/api";
import { Student, StudentResponse } from "app/models/student";

export class User {

    private api: Api = new Api();

    constructor(api: any) {
        this.api = api;
    }

    public async get(params: Array<{ k: string, v: string }>) {
        try {
            const filters = params.map(item => [`${item.k}=${item.v}`]);
            return this.api.get(`/user?${filters.join('&')}`);
        } catch (ex) {
            console.log(ex);
            return { code: -1, message: 'Não foi possível retornar a lista de usuários.' };
        }
    }

    public async create(user: Student): Promise<StudentResponse> {
        try {
            return this.api.post(`/user`, user);
        } catch (ex) {
            console.log(ex);
            throw { code: -1, message: 'Não foi possível retornar a lista de usuários.' };
        }
    }

    public async enroll(user: Student): Promise<Student> {
        try {
            return this.api.post(`/user/enroll`, user);
        } catch (ex) {
            console.log(ex);
            throw { code: -1, message: 'Não foi possível vincular um usuário ao curso.' };
        }
    }
}