// type T = "string";
function getString<T>(str:T){
        if(typeof(str)=== "string"){
            return "Yes";
        }
        return "No";
}
console.log(getString(10));