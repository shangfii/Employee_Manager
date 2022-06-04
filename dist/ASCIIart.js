// ASCII-art Logo for the Application
// Establish required package

const logo = require('asciiart-logo');

const ASCIIart = (color) => {
    console.log(
        logo({
            name: 'Employee Manager APP',
            font: 'ANSI Shadow',
            lineChars: 9,
            padding: 1,
            margin: 3,
            borderColor: `${color}`,
            logoColor: `bold-${color}`,
            textColor: `${color}`,
        })
        .emptyLine()
        .right('version 0.0.1')
        .render()
    );
}

// Exporting module

module.exports = ASCIIart