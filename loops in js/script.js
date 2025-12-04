// Print 1 to 10 using for

// for(let i=1; i<=10; i++)
// {
//     console.log(i)
// } 

//  Print even numbers between 1 to 20

//  for(let i=1; i<=20; i++)
//  {
//     if(i % 2==0)
//     {
//         console.log(i)
//     }
//  }

// print number from 10 to 1 using a for loop

// for(let i =10; i>0; i--)
// {
//     console.log(i)
// }

// print number from 10 to 1 using while loop

// let i=10;
// while(i>0)
// {
//     console.log(i);
//     i--;
// }

// Print even numbers from 1 to 20 using for loop

// for(let i=1; i<=20; i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i);
//     }
// }

// print odd number fron 1 to 16 using while loop

// for(let i=1; i<=16; i++)
//   {
//     if(i % 3 == 0)
//     {
//         console.log(i)
//     }
//   }


// print the multiplication table of 5

//   for(let i=1; i<=10; i++)
//   {
//     console.log(`5 * ${i} = ${ 5* i}` );
//   }

// Print all number betbeen 1 to 50 that are divisible by 3.

// for(let i=1; i<=50; i++)
// {
//     if(i % 3 == 0)
//     {
//         console.log(i);
//     }
// }

//  FIND  the sum of numbers from 1 to 100 using a loop


// let sum=0;
// for(let i=1; i<=100; i++)
// {
//    sum = sum +i;
// }
//  console.log(sum)


// Ask the user for a number and print
//  whether each number fron 1 to that number is evev or odd

// let val = prompt ("give a number");

// for (let i=1; i<=val; i++)
// {
//     if(i %2 ===0)
//     {
//         console.log(`${i} is even`);
//     }else{
//         console.log(`${i} is odd`);
//     }

// }

// count how many numbers between 1 to 100 are divisible by 3 and 5.

// for(let i=1; i<=100; i++)
// {
//     if(i%3===0 && i%5===0)
//     {
//         console.log(i);
//     }
// }

// Q1 . stop at first multiple of 7
// write a loop from 1 to100 that 
// print each number 
// stop complyetely when it finds the first number divisible by 7

// for(let i=1; i<=100; i++)
//     {
//     console.log(i);

//     if(i % 7 ===0)
//     {
//         break;
//     }
// }

// Q2. skip multiples of 3 
// write a loop from 1 to 20 that 
// skips numbers divisible by 3
// print all others 

// use continue

// Expected output:
// 1 2 4 5 7 8 10 11.... (no 3,6,9,etc)

// for(let i=1; i<=20; i++)
// {
//     if(i%3 === 0) continue;
//         console.log(i);
// }

// Q no 3.
let count =0;
for(let i=1; i<=100; i++)
{
    if(i%2===1 )
    {
        count++;
        console.log(i);
    }
    if(count ===5) break;
}



