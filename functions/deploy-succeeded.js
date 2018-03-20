const https = require('https');

exports.handler = function(event, context, callback) {
  console.log('The deploy succeeded event has been triggered');
  console.log(event);
  const url = 'https://hookb.in/KAnnGg3N';

  https.get(url, res => {
    res.setEncoding('utf8');
    let body = '';
    res.on('data', data => {
      body += data;
    });
    res.on('end', () => {
      body = JSON.parse(body);
      console.log(body);
    });
  });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ Test: 'Yup, testing' }),
  });
};
