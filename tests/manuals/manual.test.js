// This test code is based on Stack Overflow answer: https://stackoverflow.com/questions/53095199/node-using-jest-with-esm-package

const esmImport = require('esm')(module)

esmImport('./manual.assert')
