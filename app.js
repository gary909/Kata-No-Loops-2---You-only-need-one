function check(a, x) {
    return a.indexOf(x) >= 0;
    // return a.includes[x];
};

console.log(check([66, 101], 66)); // 66 - True
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); // True
console.log(check(['t', 'e', 's', 't'], 'e')); // True
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // False
