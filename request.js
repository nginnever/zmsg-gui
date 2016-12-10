/*var zcash = require('bitcoin')

var client = new zcash.Client({
  host: 'localhost',
  port: 8232,
  user: 'test',
  pass: 'test1234',
  timeout: 30000
});

client.getInfo( function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});*/

var bitcoin_rpc = require('node-bitcoin-rpc')

bitcoin_rpc.init('localhost', 8232, 'test', 'test1234')
bitcoin_rpc.call('getinfo', [], function (err, res) {
  if (err !== null) {
    console.log('I have an error :( ' + err + ' ' + res.error)
  } else {
    console.log(res.result)
  }
})
