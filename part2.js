// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero (arr){
    let result = false
    
      for(let i = 0; i<arr.length; i++){
          for(let j =arr.length; j>-1; j--){
             if (arr[i] + arr[j] === 0){
              result = true
             }
          }
        
      }  
    console.log(result)
  }
  
//   O(n^2)

// For example:

addToZero([]);
// // -> False

addToZero([1]);
// // -> False

addToZero([1, 2, 3]);
// // -> False

addToZero([1, 2, 3, -2]);
// // -> True


// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueCharacters(word) {
        console.log(new Set(word).size == word.length);
      }

    //   O(1)

// For example:

hasUniqueChars("Monday");
// // -> True

hasUniqueChars("Moonday");
// // -> False


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(text){

    let alpha = /[abcdefghijklmnopqrstuvwxyz]/gi;
    let word = text.toLowerCase().match(alpha);
  let set = new Set(word);
  let arr = [...set];
  
  
    if(arr.length === 26){
       console.log(true)      
    }else{
        console.log(false)
    }

}

// O(n)

// For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

isPangram("I like cats, but not mice");
// // -> False

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr){
    let length = arr.map((elem) => elem.length);
    length.sort(function(a, b){return b - a});
    console.log(length[0]);
}

// O(n)

// For example:

findLongestWord(["hi", "hello"]);
// // -> 5