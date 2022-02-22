const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./distribution/index.html', fileContent, err => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File Ceated'
            })
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './distribution/style.css', err => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File Copied'
            })
        })
    })
}

module.exports = { writeFile, copyFile };