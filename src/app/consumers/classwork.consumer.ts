import { Classwork } from 'app/models/classwork';
import { Moodle } from '../util/moodle';

export class ClassworkConsumer {

    static async sync(classwork: Classwork) {        
        if(!classwork.id) 
            return await Moodle.classwork.create(classwork);
            
        return await Moodle.classwork.update(classwork);
    }

}