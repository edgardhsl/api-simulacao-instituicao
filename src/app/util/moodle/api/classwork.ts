import { Classwork as Claswork2 } from "app/models/classwork";

export class Classwork {

    private moodle: any;

    constructor(moodle: any) {
        this.moodle = moodle;
    } 

    public async create(classwork: Claswork2): Promise<Claswork2> {
        try {
            return this.moodle.call({ wsfunction: 'mod_forum_get_forums_by_courses', args: [classwork] });
        } catch (ex) {
            console.log(ex);
            throw { code: -1, message: 'Não foi possível retornar cadastrar a atividade.' };
        }
    }

}