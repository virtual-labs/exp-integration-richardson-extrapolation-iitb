function trap(divisions) {
    let sum = 0;
    let ul = 0.8; //upper limit
    let ll = 0; //lower limit
    let h = (ul - ll) / divisions;
    for (let i = 0; i < divisions; i++) {
        sum += calculate_fx(ll + h * i) + calculate_fx(ll + h * (i + 1));
    }
    ;
    return (h / 2 * sum);
}
function calculate_fx(x) {
    let res = random_val + 25 * x - 200 * (Math.pow(x, 2)) + 675 * (Math.pow(x, 3)) - 900 * (Math.pow(x, 4)) + 400 * (Math.pow(x, 5));
    return res;
}
function calculate_error_percent(main_value, user_input) {
    let res = Math.abs((main_value - user_input) / main_value) * 100;
    return res;
}
//# sourceMappingURL=trap.js.map