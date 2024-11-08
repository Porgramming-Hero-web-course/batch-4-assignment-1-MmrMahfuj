
type RemoveDuplicates = (numbers: number[] ) => number[];

const removeDuplicates: RemoveDuplicates = (numbers) =>{
    return [... new Set(numbers)];
}

type DuplicatesArray = number[];
const duplicatesArray: DuplicatesArray = [1,2,3,3,4,2,5,3,6,7,3];

// console.log(`Remove duplicates: ${removeDuplicates(duplicatesArray)}`);