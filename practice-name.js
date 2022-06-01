var shuffle = function(nums, n) {
   let newVals = []
   for(let i = 0; i < n; i ++)
   {
       newVals.push(nums[i], nums[i+n])
   }
   return newVals
};
console.log(shuffle([2,5,1,3,4,7],3))