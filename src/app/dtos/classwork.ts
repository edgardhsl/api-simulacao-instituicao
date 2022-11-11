export class Classwork {
    title: string;
    id?: number;
    dueAt?: Date;
    createdAt?: Date = new Date();
    updatedAt?: Date;
    attachments?: Array<any>;

    constructor(params: Classwork) {
        this.title = params.title;
    }
}