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
        const middlewares = JsonServer.defaults();

        this.app.use(middlewares)
        this.app.use(router)
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        super.addControllers([new CourseController()]);
        
        //this.runConsumers();
    }

    public start(port: number) {
        this.app.listen(port, () => console.log('Server listening on port: ' + port))
    }

    public runConsumers() {
        const kafkaConsumer = new KafkaConsumer();
        kafkaConsumer.addConsumer({ topics: ['moodle-course'] }, { eachMessage: (p) => this._syncMessage(p, CourseConsumer.sync) });
        kafkaConsumer.addConsumer({ topics: ['moodle-student'] }, { eachMessage: (p) => this._syncMessage(p, StudentConsumer.sync) });
        kafkaConsumer.addConsumer({ topics: ['moodle-classwork'] }, { eachMessage: (p) => this._syncMessage(p, ClassworkConsumer.sync) });
    }

    private async _syncMessage(payload: EachMessagePayload, consumer: Function) {
        if (!payload.message.value) return;
        
        return consumer(toJSON(payload.message.value));
    }
}