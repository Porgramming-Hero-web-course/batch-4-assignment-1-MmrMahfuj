
type CountWordOccurrences = (sentence: string, word: string)=> number;

const countWordOccurrences: CountWordOccurrences= (sentence, word) => {

    const  convertLowerSentence: string = sentence.toLowerCase();
    const convertLowerWord: string = word.toLowerCase();

    const splitTheSentence: string[] = convertLowerSentence.split(/\W+/);

    let count: number = 0;
    for(let i = 0; i <splitTheSentence.length; i++){
        // console.log(`console i: ${splitTheSentence[i]}`);
        if (splitTheSentence[i] === convertLowerWord) {
            // console.log(splitTheSentence[i]);
            count++;
        };
    };

    return count;
};

// console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"))