function getSecondLargest(nums) {
  let lar = 0;
  let seclar = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > lar) {
      // when you find a new largest
      seclar = lar;
      lar = nums[i];
    }
    // if it's not the largest but bigger than current second largest
    else if (nums[i] > seclar && nums[i] < lar) {
      seclar = nums[i];
    }
  }

  return seclar;
}
