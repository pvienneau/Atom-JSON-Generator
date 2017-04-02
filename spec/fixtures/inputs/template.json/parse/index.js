const fs = require('fs');
const path = require('path');

module.exports = {
    valid: fs.readFileSync(path.resolve(__dirname, 'valid.template.json')).toString(),
    validCollection: fs.readFileSync(path.resolve(__dirname, 'validCollection.template.json')).toString(),
    validGenerationFunction: fs.readFileSync(path.resolve(__dirname, 'validGenerationFunction.template.json')).toString(),
    validTransformFunction: fs.readFileSync(path.resolve(__dirname, 'validTransformFunction.template.json')).toString(),
};
