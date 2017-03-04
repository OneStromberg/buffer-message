import _ from 'lodash';
import { Buffer } from 'buffer'; 

class BufferMessage {
    static create = (obj) => {
        var pairs = _.toPairs(obj);
        var message = pairs.length + ',' + _.zip(...pairs).toString();
        return Buffer.from(message, 'utf8');
    }
    static deserialize = (readData) => {
        let buffer = Buffer.from(readData, 'hex');
        let message =  buffer.toString('utf-8');
        let packages = message.split(',');
        let packageSize = packages[0];
        let packageBody = _.tail(packages);
        let unzippedResult = _.chunk(packageBody, packageSize);
        return _.zipObject(...unzippedResult);
    }
}

export default BufferMessage;