const fs            = require('fs');
const path          = require('path');
const estraverse    = require('estraverse');
const escodegen     = require('escodegen');
const esprima       = require('esprima');
const simpleModel   = fs.readFileSync(__dirname + '/simple-model.js', 'utf8');

module.exports = (collection_name, objToInject) => {
    try {
        const ast           = esprima.parse(simpleModel);
        const obj           = 'const a = ' + JSON.stringify(objToInject);
        let contentInjected = false;
        // .replace(/\"([a-z]+)\"\:/gi, '$1:');

        const astOTI        = esprima.parse(obj);

        estraverse.traverse(ast, {
            enter: function (node, parent) {
                if (!contentInjected && node.type === 'ObjectExpression' && !node.properties.length) {
                    node.properties = astOTI.body[0].declarations[0].init.properties;
                    contentInjected = true;

                    return node;
                } else if ('Literal' === node.type) {
                    switch (node.value) {
                        case 'String':
                        case 'Boolean':
                        case 'Date':
                            node.type = 'Identifier';
                            node.name = node.value;
                            delete node.raw;
                            delete node.value;
                            break;
                        default:
                            break;
                    }

                    if (parent && parent.id && 'MODEL_NAME' === parent.id.name) {
                        node.value = collection_name;
                        node.raw = collection_name;
                    }

                    return node;
                }
            }
        });

        fs.writeFileSync(path.join(__dirname, '../models/' + collection_name + '-model.js'), escodegen.generate(ast), { flag: 'w' });

        return true;
    } catch (error) {
        return false;
    }
};