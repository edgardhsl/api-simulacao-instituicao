export interface Course {
    fullname: string,
    shortname: string,
    categoryid: number,
    idnumber: string,
    id: number;
}

export interface CourseResponse {
    id: number,
    shortname: string
}