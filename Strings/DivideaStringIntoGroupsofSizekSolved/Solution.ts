function divideString(s: string, k: number, fill: string): string[] {
    if(s.length === 0) {
        return [];
    }
    const result: string[] = [];
    let currentSegment = '';
    for (let i = 0; i < s.length; i++) {
        currentSegment += s[i];
        if (currentSegment.length === k) {
            result.push(currentSegment);
            currentSegment = '';
        }
    }    if (currentSegment.length > 0) {
        while (currentSegment.length < k) {
            currentSegment += fill;
        }
        result.push(currentSegment);
    }
    return result;
};
