// Find a package to convert an XML to JSON. (see https://www.npmjs.com/package/xml-parser for example)
// Write a wrapper over the package. Implement an XmlParser helper Object/function which exposes a methods to parse an XML and takes as an input options
// Implement a method which takes in options file path and reads an XML file from filesystem and returns it’s JSON. The method should have error handling for non-existent file paths.

const xml2json = require('xml2json');
const fs =  require('fs');
const parser = require('xml-parser');

class XmlParser {
    constructor() {
        this.xml = '';
    }

    readFile(options) {
        try {
            this.xml = fs.readFileSync(options.filePath, 'utf8');
            return this.xml;
        } catch (e) {
            if(!fs.existsSync(options.filePath)) {
                console.log("File not found");
            }
            else{
                console.log(e);
            }
        }
    }

    parseXml(options) {
        return parser(this.readFile(options));
    }

    xmlToJSON(options) {
        return xml2json.toJson(this.readFile(options));
    }
}

let obj = new XmlParser();
console.log(obj.parseXml({filePath: 'test.xml'}));
console.log(obj.xmlToJSON({filePath: 'test.xml'}));