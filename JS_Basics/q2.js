// Create an Object MetadataParser using constructor functions
// The Object should have private properties _version, _channel, _keyField 
// Object should have get and set function for each property
// Add a method in the class getKeyFields, which takes an array of JSON objects (eg [{channel: ‘A’}, {channel: ‘B’}, {channel ‘C’}]) as input and returns an array of values of _keyField, input array.

function MetadataParser(version, channel, keyField) {
    this._version = version;
    this._channel = channel;
    this._keyField = keyField;
    // Getter and Setter for version, channel and keyField
    this.getVersion = function () {
        return this._version;
    }
    this.setVersion = function (version) {
        this._version = version;
    }
    this.getChannel = function () {
        return this._channel;
    }
    this.setChannel = function (channel) {
        this._channel = channel;
    }
    this.getKeyField = function () {
        return this._keyField;
    }
    this.setKeyField = function (keyField) {
        this._keyField = keyField;
    }

    // Method to get the values of keyField from an array of JSON objects
    this.getKeyFields = function (arr) {
        let arr1 = [];
        for (let i = 0; i < arr.length; i++) {
            arr1.push(arr[i][this._keyField]);
        }
        return arr1;
    }
}

let obj = new MetadataParser(1, 'A', 'channel');
console.log(obj.getKeyFields([{ channel: 'A' }, { channel: 'B' }, { channel: 'C' }]));