function RemoveDuplicates(nums: number[]): number {
    if(nums.length === 0) return 0;
    let x = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};