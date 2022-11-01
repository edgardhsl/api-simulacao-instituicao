import fs from 'fs';
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics, Kafka } from 'kafkajs';

export class KafkaConsumer {

    private readonly consumers: Consumer[] = []
    private readonly kafka: Kafka;

    constructor() {
        process.on('exit', () => {
            for (const consumer of this.consumers) {
                consumer.disconnect();
            }
        });

        this.kafka = new Kafka({
            clientId: 'my-app',
            brokers: [
                '35.224.210.161:9092'
            ],
        });
    }

    connect() {}

    private _getBrokers(): Array<string> {
        const kafkaBrokers: string = fs.readFileSync(__dirname + '/../../config/kafka_brokers.json', { encoding: 'utf8', flag: 'r' }) as any;
        return Array.from(JSON.parse(kafkaBrokers)).map((item: any) => `${item.host}:${item.port}`);
    }

    async addConsumer(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig) {
        console.log(`[${(new Date().toLocaleString('pt-BR', { hour12: false }))}] Adding consumer for topic: ${topic.topics.join(', ')}`);
        const consumer = this.kafka.consumer({ groupId: 'moodle-consumer' });
        await consumer.connect();
        await consumer.subscribe(topic);
        await consumer.run(config);
        this.consumers.push(consumer);
    }

}
