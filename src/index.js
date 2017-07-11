import _ from 'lodash';
import { Buffer } from 'buffer'; 

class BufferMessage {
    static serialize = (obj) => {
        var pairs = _.toPairs(obj);
        var message = pairs.length + '|' + _.zip(...pairs).toString();
        return Buffer.from(message, 'utf8');
    }
    static deserialize = (readData) => {
        let buffer = Buffer.from(readData, 'hex');
        let packages = buffer.toString('utf-8').split('|');
        let packageSize = _.head(packages);
        let packageBody = _.last(packages).split(',');
        let unzippedResult = _.chunk(packageBody, packageSize);
        return _.zipObject(...unzippedResult);
    }
}

module.exports = BufferMessage;