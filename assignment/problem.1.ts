
type SumArray = (numbers: number[])=>number

const sumArray: SumArray = (numbers) =>{
    let sum: number = 0;
    for(let number of numbers){
        sum: number = sum + number;
    }
    return sum;
}

type ArrayNumbers =  number[];

const numbers: ArrayNumbers = [5,6,8,7,9,4];

console.log(`The sum result: ${sumArray(numbers)}`);