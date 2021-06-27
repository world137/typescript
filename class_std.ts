class Car{
    model : string
    doors : number
    isEletric : boolean

    constructor(model:string , doors:number , isElectric:boolean){
        this.model = model;
        this.doors = doors;
        this.isEletric = isElectric
    }
    displaymake() : void {
        console.log('this car is ' + this.model)
        console.log('this car has ' + this.doors + ' doors')
        console.log('this is an electric ' + this.isEletric)
    }
}
const BMW = new Car("BMW5" , 4 ,true)
const Lambo = new Car("Lambo2" , 2 ,false)
BMW.displaymake();
Lambo.displaymake();

interface Icar{
    model : string , 
    make : string , 
    display1() : void
}
const myCar : Icar = {
    model : "BMW",
    make : "BMWi8",
    display1() {
        console.log("This is" + myCar.make + " car. model :" + myCar.make)
    }
}
myCar.display1()