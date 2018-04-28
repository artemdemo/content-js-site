const find = require('find');

find.file(/\.js$/, `${__dirname}/source/module`, function(files) {
    console.log(files);
});