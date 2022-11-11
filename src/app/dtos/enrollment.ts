import { Course } from "./course";
import { Student } from "./student";

export class Enrollment {
    student: Student;
    course: Course;
    
    constructor(params: Enrollment) {
        this.student = params.student;
        this.course = params.course;
    }
}