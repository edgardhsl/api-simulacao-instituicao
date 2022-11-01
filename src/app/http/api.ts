import { Axios } from "axios";

export class Api {

    private axios: Axios = new Axios({ baseURL: 'http://localhost:3000/' });

    get get() { return this.axios.get };
    get post() { return this.axios.post };
    get put() { return this.axios.put };
    get delete() { return this.axios.delete };
    get patch() { return this.axios.patch };

}