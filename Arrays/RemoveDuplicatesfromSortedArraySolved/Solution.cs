namespace LeetCode.Arrays.RemoveDuplicatesfromSortedArraySolved;

public class Solution
{
    public int RemoveDuplicates(int[] nums)
    {
        if (nums.Length == 0) return 0;

        int x = 1; 
        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[x] = nums[i];
                x++;
            }
        }
        
        return x;
    }
}
