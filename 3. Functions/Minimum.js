function min(arg1, arg2) {
    if (arg1 < arg2) return arg1;
    return arg2;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
