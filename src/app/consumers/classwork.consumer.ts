import { Classwork } from 'app/models/classwork';
import { Moodle } from '../util/moodle';

export class ClassworkConsumer {

    static async sync(user: Classwork) {
        const response = await Moodle.classwork.create(user);
        return response;
    }

}