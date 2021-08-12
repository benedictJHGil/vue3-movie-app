exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'benedictJHGil',
      age: 85,
      email: 'benedictJHGil@gmail.com'
    })
  }
}