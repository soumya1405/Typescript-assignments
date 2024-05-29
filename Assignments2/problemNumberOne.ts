// Create a function to update few properties from Student object.
//      it shouldn’t allow all properties, restrict type to allow to accept name and email (and don’t hard code name and email, it should be derived from Student type)


type student = {
    name:string;
    email: string;
    age:number;
    rollNo: number;
    gender: string;
}


const student:student = {
    name: "soumya",
    email: "s@gmail.com",
    age:22,
    rollNo: 20,
    gender: "female"
}

const updated:student ={
     name:"sakshi",
     email: "sakshi@gmail.com",
     age:27,
     rollNo: 25,
     gender: "male"
}

function getUpdated<Type, Key extends keyof Type> (obj: Type, key: Key, obj1:Type):void{
    obj[key] = obj1[key];
    console.log(obj);
  }
   
getUpdated(student, "gender", updated);
