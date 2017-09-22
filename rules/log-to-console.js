function (user, context, callback) {
  //test 3
  console.log(JSON.stringify({ user: user, context: context }, null, 2));
  callback(null, user, context);
}
