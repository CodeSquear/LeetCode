function kMirror(k, n) {
    function check(x, k) {
        var s = [];
        while (x > 0) {
            s.push(x % k);
            x = Math.floor(x / k);
        }
        for (var i = 0, j = s.length - 1; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false;
            }
        }
        return true;
    }
    var ans = 0;
    for (var l = 1;; l++) {
        var x = Math.pow(10, Math.floor((l - 1) / 2));
        var y = Math.pow(10, Math.floor((l + 1) / 2));
        for (var i = x; i < y; i++) {
            var v = i;
            var j = l % 2 === 0 ? i : Math.floor(i / 10);
            while (j > 0) {
                v = v * 10 + (j % 10);
                j = Math.floor(j / 10);
            }
            if (check(v, k)) {
                ans += v;
                n--;
                if (n === 0) {
                    return ans;
                }
            }
        }
    }
}
