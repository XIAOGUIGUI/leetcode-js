/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.replace(/(^\s*)/g,"")
  let str1 = ''
  if (!/^\d+$/.test(str.charAt(0)) && str.charAt(0) !== '-' && str.charAt(0) !== '+') {
    return 0
  } else if (str.charAt(0) !== '-' && str.charAt(0) !== '+') {
    str1 = str.charAt(0)
  }
  for(i = 1;i < str.length; i++){
    if(/^\d+$/.test(str.charAt(i))){
      str1 = str1.concat(str.charAt(i))
    } else {
      break
    }
  }
  let resultData = str.charAt(0) !== '-' ? str1 - 0 : 0 - str1
  if(resultData > 2147483647){
    return 2147483647
  }else if(resultData < -2147483648){
    return -2147483648
  }
  return resultData
};
console.log(myAtoi('   -42'))
console.log(myAtoi('4193 with words'))
console.log(myAtoi('words and 987'))
console.log(myAtoi('-91283472332'))
