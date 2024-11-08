class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year:number,){
        this.make = make;
        this.model = model;
        this.year = year;
    };

    getCarAge(): number {
        const currentYear: number = new Date().getFullYear();
        // console.log(currentYear);
        const sum: number = currentYear - this.year;
         return sum 
    };

    // getCarAge(): void{
    //     return console.log(`${this.getCarAge2} Assuming current year 2024`)
    // }
};

const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge())