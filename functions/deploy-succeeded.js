exports.handler = function(event, context, callback) {
  console.log('The deploy succeeded event has been triggered');
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ Test: 'Yup, testing' }),
  });
};
