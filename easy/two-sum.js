const twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == target - nums[i]) {
        return [i, j]
      }
    }
  }
}

const twoSum2 = (nums, target) => {
  let dValueMap = {}
  for (let i = 0; i < nums.length; i++) {
    let dValue = target - nums[i]
    if (dValueMap[dValue] || dValueMap[dValue] === 0) {
      return [dValueMap[dValue], i]
    } else {
      dValueMap[nums[i]] = i
    }
  }
}

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum1(nums, target))
console.log(twoSum2(nums, target))
