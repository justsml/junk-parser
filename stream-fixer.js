const EventEmitter = require('events');
const util         = require('util');
const readline     = require('readline');
const fs           = require('fs');
const {Parser}     = require('./index');

export function StreamFixer({stream, filename = null}) {
  if (!(this instanceof StreamFixer)) { return new StreamFixer({stream, filename}); }
  EventEmitter.call(this);
  const buffer = [];
  const rl = readline.createInterface({ input: stream || fs.createReadStream(filename) });
  var cols, rowCount = 0;
  rl.on('line', line => {
    rowCount++;
    if (rowCount === 1) {
      cols = cols ? cols : line;
    }
    // console.log('Line from file:', line);
    if (buffer.length >= 500) {
      setImmediate(() => _doParsing(cols, buffer));
    }
    buffer.push();
  });

}
util.inherits(StreamFixer, EventEmitter);

export function _doParsing(buffer) {

}
