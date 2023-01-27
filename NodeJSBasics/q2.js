// Use handlebars package
// Explore handlebars as provided in the documentation. Play around with it here - http://tryhandlebarsjs.com/ 
// Create handlebar template to generate a template as given under
// Handlebar feeder Data : data fed to compile 
// Expected XML Template : output

const Handlebars = require('handlebars');
const fs = require("fs");

// Read json file from q2data.json
const input = JSON.parse(fs.readFileSync("q2data.json", "utf8"));
console.log(input);

const outputTemplate = ` 
<products>
    {{#each products}}
    <product>
        <baseId>{{baseId}}</baseId>
        <isActive>{{isActive}}</isActive>
        {{#if contentType}}
        <contentType>
            <contentTypeValue>{{contentType.contentTypeValue}}</contentTypeValue>
        </contentType>
        {{/if}}
        {{#if features}}
        <features>
            {{#each features}}
            <feature>{{this}}</feature>
            {{/each}}
        </features>
        {{/if}}
        {{#if searchTerms}}
        <searchTerms>
            {{#each searchTerms}}
            <searchTermValue>{{this}}</searchTermValue>
            {{/each}}
        </searchTerms>
        {{/if}}
        <childProducts>
            {{#each childProducts}}
            <childProduct>
                <baseId>{{baseId}}</baseId>
                <isActive>{{isActive}}</isActive>
                {{#if features}}
                <features>
                    {{#each features}}
                    <feature>{{this}}</feature>
                    {{/each}}
                </features>
                {{/if}}
                {{#if searchTerms}}
                <searchTerms>
                    {{#each searchTerms}}
                    <searchTermValue>{{this}}</searchTermValue>
                    {{/each}}
                </searchTerms>
                {{/if}}
            </childProduct> 
            {{/each}}
        </childProducts>
    </product>
    {{/each}}
</products>
`;


const template = Handlebars.compile(outputTemplate);
const output = template(input);
console.log(output);

// Expected XML Template
// <products>
//    <product>
//        <baseId></baseId>
//        <isActive></isActive>
//        <contentType>
//            <contentTypeValue></contentTypeValue>
//        </contentType>
//        <features>
//            <feature></feature>
//        </features>
//        <searchTerms>
//            <searchTermValue></searchTermValue>
//        </searchTerms>
//        <childProducts>
//            <childProduct>
//                <baseId></baseId>
//                <isActive></isActive>
//                <features>
//                    <feature></feature>
//                </features>
//                <searchTerms>
//                    <searchTermValue></searchTermValue>
//                </searchTerms>
//            </childProduct>
//            <childProduct>
//                <baseId></baseId>
//                <isActive></isActive>
//                <features>
//                    <feature></feature>
//                </features>
//                <searchTerms>
//                    <searchTermValue></searchTermValue>
//                </searchTerms>
//            </childProduct>
//            <childProduct>
//                <baseId></baseId>
//                <isActive></isActive>
//                <features>
//                    <feature></feature>
//                </features>
//                <searchTerms>
//                    <searchTermValue></searchTermValue>
//                </searchTerms>
//            </childProduct>
//        </childProducts>
//    </product>
// </products>
