const fs            = require('fs');
const estraverse    = require('estraverse');
const escodegen     = require('escodegen');
const esprima       = require('esprima');
const testModel     = fs.readFileSync(__dirname + '/src/lib/simple-model.js', 'utf8');
const a             = esprima.parse(testModel);

// 'function bar(){ const longconstiable; console.log("foo", longconstiable);}'
estraverse.traverse(a, {
    enter: function (node, parent) {
        // if (node.type === 'Identifier' && node.name === 'longconstiable') {
        console.log(node);
        // node.name = 'b';
        return node;
        // }
    }
});
const js = escodegen.generate(a);
console.log(js);