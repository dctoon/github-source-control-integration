function (user, context, callback) {
  //test 10
  console.log(JSON.stringify({ user: user, context: context }, null, 2));
  callback(null, user, context);
}
