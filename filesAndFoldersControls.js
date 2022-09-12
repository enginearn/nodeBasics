const readline = require('readline');
const fs = require('fs');

// create file
fs.writeFileSync('example.txt', 'This is an example.\n', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully created!');
    }
});

// read file
fs.readFileSync('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// rename file
fs.renameSync('example.txt', 'example2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully renamed!');
    }
});

// append file
fs.appendFileSync('example2.txt', 'Some data being appended.\n', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully appended!');
    }
});

// delete file
fs.unlinkSync('example2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully deleted!');
    }
});

// create folder
if (fs.existsSync('sampleDir'), (err) => {
    fs.rmdir('sampleDir');
    fs.mkdir('sampleDir', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Folder successfully created!');
        }
    });
});

// delete folder
fs.rmdir('sampleDir', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Folder successfully deleted!');
    }
});

// create folder and file and write to it
if (!fs.existsSync('sampleDir')) {
    fs.mkdir('sampleDir', (err) => {
        if (err) console.log(err);
        else {
            console.log('Folder successfully created!');
            fs.writeFileSync('./sampleDir/example.txt', 'This is an example.\n', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('File successfully created!');
                }
            });
        }
    });
}
