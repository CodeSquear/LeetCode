function divideString(s, k, fill) {
    if (s.length === 0) {
        return [];
    }
    var result = [];
    var currentSegment = '';
    for (var i = 0; i < s.length; i++) {
        currentSegment += s[i];
        if (currentSegment.length === k) {
            result.push(currentSegment);
            currentSegment = '';
        }
    }
    if (currentSegment.length > 0) {
        while (currentSegment.length < k) {
            currentSegment += fill;
        }
        result.push(currentSegment);
    }
    return result;
}
;