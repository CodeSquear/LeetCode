public class Solution {
    public int LongestSubsequence(string s, int k) {
        int n = s.Length , ans = 0;
        long cv = 0 , pov2 = 1;

        for(int i = n - 1; i >= 0; i--)
        {
            if(s[i] == '0') ans++;
            else 
            {
                if(cv + pov2 <= k)
                {
                    cv += pov2;
                    ans++;
                }
            }
            if(pov2 <= k) pov2 *= 2;
        }

        return ans;
    }
}