export class Course {
    name: string;
    id?: number;
    expiresIn?: Date;
    createdAt?: Date = new Date();
    updatedAt?: Date;
    attachments?: Array<any>;

    constructor(params: Course) {
        this.name = params.name;
    }
}