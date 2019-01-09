import * as request from "superagent";
import logger from "../utils/logger";

export class HttpService {

    constructor() {
    }

    async get(uri: string): Promise<any> {
        return request
            .get(uri)
            .then( res => res.body)
            .catch( err => {
                logger.error(err);
                return undefined;
            });
    }
}


