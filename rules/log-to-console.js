function (user, context, callback) {
  //test 32
  console.log(JSON.stringify({ user: user, context: context }, null, 2));
  callback(null, user, context);
}
