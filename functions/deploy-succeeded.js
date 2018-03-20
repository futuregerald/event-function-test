exports.handler = function(event, context, callback) {
  console.log(event);
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ Test: 'Yup, testing' }),
  });
};
