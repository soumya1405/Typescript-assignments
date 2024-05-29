type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
  };
   
type address = {
    village:string,
    district: string
}

type user = {
    id: number,
    name:string,
    isLead? : boolean,
    read?: ()=>void,
    address?: address
}
 
type newUser = Concrete<user>

const username: newUser = {
    id: 1,
    name:"soumya",
    isLead : true,
    read:()=>{console.log('hii')},
    address:{village:"kashpelly", district:"manchirial"}
}
