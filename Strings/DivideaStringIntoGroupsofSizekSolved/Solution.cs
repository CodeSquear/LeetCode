public class Solution {
    public string[] DivideString(string s, int k, char fill)
    {
        if (s.Length % k > 0)
        {
            s += NewStrings(fill, Math.Abs(k - s.Length % k));
        }

        string[] res = new string[s.Length / k];
        int index = 0;
        for (int i = 0; i < s.Length; i+=k)
        {
            res[index++] = s.Substring(i, k); 
        }
        return res;
    }

    static string NewStrings(char fill, int t)
    {
        string res = "";
        for(int i = 0; i < t; i++)
            res += fill;
        return res;
    }
}