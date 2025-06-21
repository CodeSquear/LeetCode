/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    var total = 0;
    for (var i = 0; i < s.length; i++) {
        var current = RomanAlphabet(s[i]);
        var next = RomanAlphabet(s[i + 1]);
        if (next > current) {
            total += next - current;
            i++;
        }
        else {
            total += current;
        }
    }
    return total;
}
;
function RomanAlphabet(char) {
    switch (char) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}