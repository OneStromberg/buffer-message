const mocha =  require('mocha');
const expect =  require('expect');
const BufferMessage = require('./index');

it('should serilize buffer', () => {

    var serilized = BufferMessage.serialize({
        a: 1,
        b: 2
    })

    expect(Buffer.from(serilized, 'hex').toString('utf-8')).toBe('2|a,b,1,2')
})

it('should deserilize buffer', () => {

    var serilized = BufferMessage.serialize({
        a: 1,
        b: 2
    })
    var result = BufferMessage.deserialize(serilized);
    expect(result).toInclude({ a: '1', b: '2' });
})