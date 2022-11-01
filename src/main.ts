import { Authorize, Moodle } from "./app/util/moodle";
import { SchoolAPIServer } from "./server";

const server = new SchoolAPIServer();
Moodle.init(new Authorize(__dirname + '/app/config/credentials.json')).then(_ => {
    server.start(3000);
});