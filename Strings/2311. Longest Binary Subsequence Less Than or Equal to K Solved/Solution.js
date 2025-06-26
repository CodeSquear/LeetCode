var longestSubsequence = function(s, k) {
    let n = s.length;
    let dp = Array(n + 1).fill(0);
    let maxLength = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === '0') {
            dp[i + 1] = dp[i] + 1;
        } else {
            dp[i + 1] = dp[i];
        }
        if (parseInt(s.slice(0, i + 1), 2) <= k) {
            maxLength = Math.max(maxLength, dp[i + 1]);
        }
    }

    return maxLength;    
};