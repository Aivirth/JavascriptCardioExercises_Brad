// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word

    //create a filtered array with only numbers and words
    const wordArray = sen.toLowerCase().match(/[a-z0-9]+/g);
    //sort by length
    const sorted = wordArray.sort((a, b)=> b.length - a.length);
    //return the first longest word
    //return sorted[0];


  // SOLUTION 2 - Return an array and include multiple words if they have the same length
    //if multiple words share the same max length
    const longestWordArr = sorted.filter(word => word.length === sorted [0].length);

  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    if(longestWordArr.length === 1){
      return longestWordArr[0];
    }else{
      return longestWordArr;
    }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  /*
  ///// solution 1
  //init chunked arr
  const chunkedArry = [];
  //set index
  let i = 0;
  //loop while index is less than the array length
  while(i< arr.length){
    //slice out from the index to the index + the chunk length and push on to the chunked array
    chunkedArry.push(arr.slice(i, i + len));
    //increment by chunk length
    i += len;
  }
  return chunkedArry;
  */

  /////solution 2
  //init chunked arr
  const chunkedArray = [];
  //loop through arr
  arr.forEach((val)=>{
    //get last element
    const last = chunkedArray[chunkedArray.length -1];
    //check if last and if last length is equal to the chunk len
    if(!last || last.length === len){
      chunkedArray.push([val]);
    }else{
      last.push(val);
    }
    return chunkedArray
  });

}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  ////Solution 1
    //return arrays.reduce((a, b)=> a.concat(b));
  //Solution 2
    //return [].concat.apply([],arrays);
  //Solution 3
  return [].concat(...arrays);

}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatString(str1) === formatString(str2);
}

//helper function
function formatString(str){
  return str
          .replace(/[^\w]/g, '')
          .toLowerCase()
          .split('')
          .sort()
          .join();
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newString = str.toLowerCase().replace(/[a-z]/gi, (char)=>{
    if(char === 'z' || char === 'Z'){
      return 'a';
    }else{
      return String.fromCharCode(char.charCodeAt() +1);
    }
    newString = newString.replace(/a|e|i|o|u/gi, (vowel)=> wovel.toUpperCase());
    return newString;
  });
}

// Call Function
//const output = longestWord('Hello, my name is Brad');
//const output = chunkArray([1,2,3,4,5,6,7], 2);
//const output = flattenArray([1, 2], [3, 4], [5, 6], [7]);
//const output = isAnagram('elbow', 'below');
const output = letterChanges('hello there');


console.log(output);
