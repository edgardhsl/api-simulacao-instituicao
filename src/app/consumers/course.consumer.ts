import { Classwork } from '@app/models/classwork';
import { Course } from '@app/models/course';
import { Moodle } from '../util/moodle';

export class CourseConsumer {

    static async sync(course: Course) {        
        if(!course.id) 
            return await Moodle.course.create(course);
            
        return await Moodle.course.update(course);
    }

}