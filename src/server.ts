import { Server } from "@overnightjs/core";
import * as express from 'express';
import { EachMessagePayload } from "kafkajs";
import { ClassworkConsumer } from "./app/consumers/classwork.consumer";
import { CourseConsumer } from "./app/consumers/course.consumer";
import { StudentConsumer } from "./app/consumers/student.consumer";
import { CourseController } from "./app/controllers/courses.controller";
import { KafkaConsumer } from "./app/util/kafka/kafka.consumer";
import { toJSON } from "./app/util/kafka/kafka.message";
import * as JsonServer from 'json-server';

export class SchoolAPIServer extends Server {

    constructor() {
        super();

        const router = JsonServer.router('db.json');
        const server = JsonServer.create();
        const middlewares = JsonServer.defaults();

        this.app.use(server)
        this.app.use(middlewares)
        this.app.use('/sync', router)
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        super.addControllers([new CourseController()]);
        
        this.runConsumers();
    }

    public start(port: number) {
        this.app.listen(port, () => console.log('Server listening on port: ' + port))
    }

    public async runConsumers() {
        const kafkaConsumer = new KafkaConsumer();
        await kafkaConsumer.addConsumer({ topics: ['moodle-course'] }, { eachMessage: (p) => this._syncMessage(p, CourseConsumer.sync) });
        await kafkaConsumer.addConsumer({ topics: ['moodle-student'] }, { eachMessage: (p) => this._syncMessage(p, StudentConsumer.sync) });
        await kafkaConsumer.addConsumer({ topics: ['moodle-classwork'] }, { eachMessage: (p) => this._syncMessage(p, ClassworkConsumer.sync) });
    }

    private async _syncMessage(payload: EachMessagePayload, consumer: Function) {
        console.log(payload.message.value);
        if (!payload.message.value) return;
        
        return consumer(toJSON(payload.message.value));
    }
}