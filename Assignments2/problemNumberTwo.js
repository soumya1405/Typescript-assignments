// type T = "string";
function getString(str) {
    if (typeof (str) === "string") {
        return "Yes";
    }
    return "No";
}
console.log(getString(10));
