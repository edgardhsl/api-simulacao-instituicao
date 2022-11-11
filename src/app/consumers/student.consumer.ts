import { Student } from 'app/models/student';
import { Moodle } from '../util/moodle';

export class StudentConsumer {

    static async sync(user: Student) {
        const response = await Moodle.user.create(user);
        user.student.userid = response.id;
        this._enroll(user);

    }

    private static async _enroll(user: Student) {
        const response = await Moodle.user.enroll(user);
        console.trace(response)
    }

}