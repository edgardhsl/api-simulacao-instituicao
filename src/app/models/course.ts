export interface Course {
    fullname: string,
    shortname: string,
    categoryid: number,
    idnumber: string
}

export interface CourseResponse {
    id: number,
    shortname: string
}