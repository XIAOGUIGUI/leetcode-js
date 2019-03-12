/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let list1 = version1.split('.'),
  list2 = version2.split('.')
  let len = Math.max(list1.length, list2.length)
  for(let index=0;index<len;index++){
      let list1Data = list1[index] ? ~~list1[index] : 0
      let list2Data = list2[index] ? ~~list2[index] : 0
      if (list1Data > list2Data) {
        return 1
      } else if (list1Data < list2Data) {
        return -1
      }
  }
  return 0
};
