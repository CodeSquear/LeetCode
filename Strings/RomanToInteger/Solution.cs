namespace LeetCode.Strings.RomanToInteger;

public class Solution
{
    public int RomanToInt(string s)
    {
        var sum = 0;
        
        for (int i = 0; i < s.Length; i++)
        {
            int temp = GetRomanInt(s[i]);
            if(i + 1 < s.Length && temp < GetRomanInt(s[i + 1]))
                sum -= temp;
            else 
                sum += GetRomanInt(s[i]);
        }
        return sum;
    }
    
    static int GetRomanInt(char c)
    {
        switch (c)
        {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
        }

        return 0;
    }
}
