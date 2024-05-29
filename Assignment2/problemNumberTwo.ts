// Create a type which takes input type and returns "Yes" if passed type is string otherwise "No"

function getString<T>(str:T){
        if(typeof(str)=== "string"){
            return "Yes";
        }
        return "No";
}
console.log(getString(10));