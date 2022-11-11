export class Student {
    name: string;
    birthday: Date;
    createdAt: Date = new Date();
    cpf: string;
    
    constructor(params: Student) {
        this.name = params.name;
        this.birthday = params.birthday;
        this.cpf = params.cpf;
    }
}