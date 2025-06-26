function longestSubsequence(s: string, k: number): number {
    let n = s.length , ans = 0 , cv = 0 , pov2 = 1;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            ans++;
        } else {
            if (cv + pov2 <= k) {
                cv += pov2;
                ans++;
            }
        }
        pov2 *= 2;
    }
    return ans;
};