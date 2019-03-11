var findJudge = function(N, trust) {
  let trustKeyNum = 0
  let trustMap = {}
  let trustKeyMap = {}
  if (N === 1 && trust.length === 0) {
    return 1
  }
  if (N === 2 && trust.length === 1) {
    return trust[0][1]
  }
  for (var i = 0; i <trust.length;i++) {
      let bUser = trust[i][1]
      if(trustMap[bUser]) {
          trustMap[bUser]++
      } else {
          trustMap[bUser] = 1
          trustKeyNum++
      }
      trustKeyMap[trust[i][0]] = 1
  }
  if (trustKeyNum === N) {
      return -1
  }

  for (var key in trustMap) {
      if (trustMap[key] === N-1 && !trustKeyMap[key]) {
          return key
      }
  }
  return -1
};
console.log(findJudge(2, [[1,2],[2,1]]))
console.log('==============================>')
console.log(findJudge(3, [[1,3],[2,3],[3,1]]))
