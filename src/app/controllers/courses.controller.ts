import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { Moodle } from '../util/moodle';
import { NextFunction, Request, Response } from 'express';

@Controller('api/courses')
export class CourseController {

    @Get('')
    @Middleware([])
    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await Moodle.course.list();
            res.status(200).json(response);
        } catch (ex) {
            return res.status(500).json(ex);
        }
    }

    @Get(':id')
    @Middleware([])
    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await Moodle.course.get(req.params.id);
            res.status(200).json(response);
        } catch (ex) {
            return res.status(500).json(ex);
        }
    }

    @Get(':id/students')
    @Middleware([])
    async getStudents(req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await Moodle.course.getStudents(req.params.id);
            res.status(200).json(response);
        } catch (ex) {
            return res.status(500).json(ex);
        }
    }

    @Get(':id/forums')
    @Middleware([])
    async getForums(req: Request, res: Response, next: NextFunction) {
        try {
            const response: any = await Moodle.course.getForums(req.params.id);
            res.status(200).json(response);
        } catch (ex) {
            return res.status(500).json(ex);
        }
    }

}