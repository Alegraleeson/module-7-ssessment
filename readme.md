|        | XL Array    | L Array     | M Array     | S array     | Tiny Array  |
|--------|-------------|-------------|-------------|-------------|-------------|
| insert | 869.4923 ms | 11.0398 ms  | 199.4 μs    | 58.1 μs     | 35.8 μs     |
| append | 2.8438 ms   | 476.7 μs    | 176 μs      | 267.5 μs    | 138.5 μs    |
|        |             |             |             |             |             |

Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?

The append function seems to scale better.  The time actually gets less as the array gets larger.  The insert functions seems fairly consistent time across the arrays, and also shows a slight drop in time with the larger array.The append (push) just adds an item to the end of an array, while the insert (unshift) moves all of the elements.  The insert function takes much longer when compared in ms when dealing with these arrays with the larger arrays, but it's actually quicker on the smallest two arrays.Unshift is slower than push because it also needs to unshift all the elements to the left once the first element is added.