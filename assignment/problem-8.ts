{
    type ValidateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => Boolean;
    
    const validateKeys: ValidateKeys = (obj, keys) =>{
        return keys.every(key => key in obj)
    };

    const person = {name: "alice", age: 30, email: "alice@gmail.com"};

    console.log(validateKeys(person, ["name", "age"]));
    console.log(validateKeys(person, ["name", "email"]));

}