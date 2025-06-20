function removeDuplicates(nums) {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            nums[x] = nums[i];
            x++;
        }
    }

    return x;
}