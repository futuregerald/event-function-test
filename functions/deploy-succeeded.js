var https = require('https');

exports.handler = function(event, context, callback) {
  console.log('The deploy succeeded event has been triggered');
  console.log(event);
  const url = 'https://hookb.in/KAnnGg3N';

  https.get(url, res => {

    var data = JSON.stringify({
        name: "John"
    });
    
    var options = {
        host: "hookb.in",
        port: 443,
        path: "/KAnnGg3N",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(data)
        }
    };
    
    var req = https.request(options, function (res) {
        var response = "";
    
        res.setEncoding("utf8");
    
        res.on("data", function (chunk) {
            response += chunk;
        });
    
        res.on("end", function () {
            console.log(response);
        });
    });
    
    req.write(data);
    req.end();
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ Test: 'Yup, testing' }),
  });
};
