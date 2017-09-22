var M = module.exports = {}

var a = {id: "a", password: "1234"}
var b = {id: "b", password: "5678"}

var userGroup = {
    "a": a,
    "b": b
}

M.login = function (id, password) 
{
  var user = userGroup[id]
  if (user.password === password) 
  {
    return user
  }
}

var user1 = M.login("a","1234")
console.log("user1=%j", user1)
var user2 = M.login("b","5678")
console.log("user2=%j", user2)