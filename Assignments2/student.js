var student = {
    name: "soumya",
    email: "s@gmail.com",
    age: 22,
    rollNo: 20,
    gender: "female"
};
var updated = {
    name: "sakshi",
    email: "sakshi@gmail.com",
    age: 27,
    rollNo: 25,
    gender: "male"
};
function getUpdated(obj, key, obj1) {
    obj[key] = obj1[key];
    console.log(obj);
}
getUpdated(student, "gender", updated);
