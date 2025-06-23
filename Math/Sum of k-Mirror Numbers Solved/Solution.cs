public class Solution
{
    public long KMirror(int k, int n)
    {
        long total = 0;
        int count = 0;
        int len = 1;

        while (count < n)
        {
            foreach (var num in GeneratePalindromes(len))
            {
                if (count >= n) break;

                if (IsPalindrome(ToBase(num, k)))
                {
                    total += num;
                    count++;
                }
            }
            len++;
        }

        return total;
    }
    
    private IEnumerable<long> GeneratePalindromes(int length)
    {
        if (length == 1)
        {
            for (int i = 1; i <= 9; i++)
                yield return i;
            yield break;
        }

        int half = (length + 1) / 2;
        int start = (int)Math.Pow(10, half - 1);
        int end = (int)Math.Pow(10, half);

        for (int i = start; i < end; i++)
        {
            string left = i.ToString();
            string right = new string(left.Reverse().ToArray());

            if (length % 2 == 1)
                right = right.Substring(1); 

            yield return long.Parse(left + right);
        }
    }

    private bool IsPalindrome(string s)
    {
        int i = 0, j = s.Length - 1;
        while (i < j)
        {
            if (s[i] != s[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    private string ToBase(long n, int k)
    {
        if (n == 0) return "0";

        var sb = new StringBuilder();
        while (n > 0)
        {
            sb.Insert(0, n % k);
            n /= k;
        }
        return sb.ToString();
    }
}
