import { Course as CourseApi } from './api/course';
import { User as UserApi } from './api/user';
import { Classwork as ClassworkApi } from './api/classwork';

import { Authorize } from '.';


export namespace Moodle {

    const _moodle = init();

    export const course = new CourseApi();
    export const user = new UserApi(_moodle);
    export const classwork = new ClassworkApi();
    
    export async function init(auth?: Authorize) {
        if (auth !== undefined) {
            return await auth.auth();
        }
    }

}
