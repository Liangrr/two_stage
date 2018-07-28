let name ='wj';
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){}
}
class Dog extends Animal{
    constructor(color,name,age){
        super(name,age);
        this.color = color;
    }
}