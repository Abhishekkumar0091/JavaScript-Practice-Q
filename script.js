// 1. Print numbers from 1 to 10 using a loop.

for(let i=1; i<=10; i++)
{
    console.log(i);
}

// 2. Print all even numbers between 1 and 20.

for(let num = 1; num<=20; num++)
{
    if(num%2 ==0)
    {
        console.log(num);
    }
}

// 3. Print the multiplication table of 5.

// Example output:
// 5 × 1 = 5
// 5 × 2 = 10
// ...

for(let i =1; i<=10; i++)
{
    console.log(`5*${i}=`,i*5);
}

4. Print the numbers from 10 down to 1 (reverse order).

for(let num =10; num>=1; num--)
{
    console.log(`reverse is:`,num)
}

// 5. Print the sum of numbers from 1 to 50.

// (Use a loop and a variable to add values.)

// *********************************************
// Imp ✅ General Rule (easy to remember)
// Console.log INSIDE loop →

// ✔ when you want to print something on each step
// Example: numbers 1 to 10, printing array items, etc.

// Console.log OUTSIDE loop →

// ✔ when you want the final result
// Example: sum, average, count, factorial, etc.
// **************************************************

   let sum=0;
   for(let i =1; i<=50; i++)
   {
    sum+=i;
   }
   console.log(sum);

  

// 6. Print each element of an array using a loop.

Let array = [10, 20, 30, 40, 50]
  
let array = [10,20,30,40,50];
  for(let i =0; i<=array.length; i++)
    {
    console.log(array[i]);
  }
// 7. Count how many numbers in an array are even.

// Example: [2, 5, 8, 11, 14]

  let array =[2, 5, 8, 11, 14];
  let count =0;

  for(let i=0; i<=array.length; i++)
  {
    if(array[i] % 2 === 0)
    {
        console.log(array[i]);
        count++;
    }
  }
  console.log(`total even is `,count);

// 8. Print all odd numbers from 1 to 15 and total number of Odd.
    let count =0;
for (let i=1; i<=15; i++)
{
    if(i % 2 != 0)
    {
        console.log("odd num ",i);
        count++;
    }
}
console.log("Total Odd is =",count);

// 9. Print the factorial of a number (e.g., 5! = 120).
    let factorial = 1;
   for(let i=5; i>=1; i--)
   {
     factorial *=i;
   }
   console.log(`factorial of 5! =`,factorial);

// 10. Print the characters of a string one by one.

// Example: "Hello"

   let string = "hello";
   for(let i=0;i<string.length; i++)
   {
    console.log(string[i]);
   }

// 1. Print numbers from 1 to 100 but only multiples of 5.
  let count =0;
for(let num=1; num<=100; num++)
{
    if(num % 5 ===0)
    { 
        count++;
    }
}
// console.log("Total number is:",count);

// 2. Print the reverse of a string using a loop.
// Example: "Hello" → "olleH"

let string = "hello";
   for(let i=string.length-1; i>=0; i--)
   {
    console.log(string[i]);
   }

// 3. Count how many vowels are in a string.
// Example: "javascript"

let str ="javascript";
let count =0;
for(let i=0; i<str.length; i++)
{
    count++;
}
console.log("Total count is:",count);
 
// 4. Find the largest number in an array.
// Example: [10, 25, 3, 98, 45]

let array =[10,25,3,98,45];
let largest=array[0];
for(let i=0; i<array.length; i++)
{
    if(array[i] > largest)
    {
       largest = array[i];
}
}
console.log("Largest number is:",largest);

// 5. Print the square of each number from 1 to 10.

for(let i =1; i<=10; i++)
{
 console.log(i*i)
  
}

// 6. Calculate the factorial of any number (e.g., 6! = 720).

let factorial =1;
for(i=6; i>=1; i--)
{
    factorial*=i;
}
console.log(`factorial is:`,factorial);



