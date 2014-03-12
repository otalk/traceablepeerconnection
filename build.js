var bundle = require('browserify')(),
    fs = require('fs');


bundle.add('./index');
bundle.bundle({standalone: 'PeerConnection'}).pipe(fs.createWriteStream('traceablepeerconnection.bundle.js'));
