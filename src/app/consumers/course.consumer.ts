import { Course } from 'app/models/course';
import { Moodle } from '../util/moodle';

export class CourseConsumer {

    static async sync(course: Course) {
        return await Moodle.course.create(course);
    }

}