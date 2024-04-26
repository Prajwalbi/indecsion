class Person{
    constructor(name){
        this.name = name;
    }
    getGreeting(){
        return `Hello ${this.name}`;
    }

}

const me = new Person("Prajwal B I");
console.log(me);

