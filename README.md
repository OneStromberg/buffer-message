# buffer-message

## Buffer Message npm package

*was created for **fresh-mint** project to pass message by Bluetooth BLE*

**Very common and simple Buffer serilizer/deserilizer**

`npm install --save buffer-message`

#### How to use
`ES6`
**Serialize**
```
	import BufferMessage from 'buffer-message';

    //This is your object
    let obj = {
        a: 1,
        b: 2
    };
	let message = BufferMessage.serialize(obj);
```

**Deserialize**
```
	import BufferMessage from 'buffer-message';

	let object = BufferMessage.deserialize(message);

	/*
	And your object is:

		{
			a: 1,
			b: 2
		}
		
	*/
```