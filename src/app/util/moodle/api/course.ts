import { CourseResponse } from "app/models/course";

export class Course {

    private moodle: any;
    
    constructor(moodle: any) {
        this.moodle = moodle;
    }

    public async create(course: any): Promise<CourseResponse> {
        try {
            return this.moodle.call({ wsfunction: 'core_course_create_courses', args: [course] });
        } catch (ex) {
            console.log(ex);
            throw { code: -1, message: 'Não foi possível criar o curso' };
        }
    }

    public async get(courseId: string) {
        try {
            return this.moodle.call({ wsfunction: 'core_course_get_courses', args: { options: { ids: [courseId] } } });
        } catch (ex) {
            console.log(ex);
            return { code: -1, message: 'Não foi possível retornar o curso com o id indicado.' };
        }
    }

    public async list() {
        try {
            return this.moodle.call({ wsfunction: 'core_course_get_courses' });
        } catch (ex) {
            console.log(ex);
            return { code: -1, message: 'Não foi possível retornar a lista de cursos.' };
        }
    }

    public async getStudents(courseId: string) {
        try {
            return this.moodle.call({ wsfunction: 'core_enrol_get_enrolled_users', args: { courseid: courseId } });
        } catch (ex) {
            console.log(ex);
            return { code: -1, message: 'Não foi possível retornar a lista de estudantes.' };
        }
    }

    public async getForums(courseId: string) {
        try {
            return this.moodle.call({ wsfunction: 'mod_forum_get_forums_by_courses', args: { courseids: [courseId] } });
        } catch (ex) {
            console.log(ex);
            return { code: -1, message: 'Não foi possível retornar a lista de fóruns.' };
        }
    }

}