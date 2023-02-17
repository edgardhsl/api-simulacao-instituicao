import { Api } from "@app/http/api";
import { Classwork as Claswork2 } from "app/models/classwork";

export class Classwork {

    private api: Api = new Api();
    
    constructor() { }

    public async create(classwork: any): Promise<Claswork2> {
        try {
            return await this.api.post('classworks', classwork).then(resp => resp.data);
        } catch (ex) {
            console.log(ex);
            throw { code: -1, message: 'Não foi possível criar a atividade' };
        }
    }

    public async update(classwork: any): Promise<Claswork2> {
        try {
            console.log("teste");
            return await this.api.put(`classworks/${classwork.id}`, classwork).then(resp => resp.data);
        } catch (ex) {
            console.log(ex);
            throw { code: -1, message: 'Não foi possível atualizar a atividade' };
        }
    }


}