// Question 36)
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

console.log("\n\n Answer 36");

function make_shirt(size: string, message: string): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Calling the function
make_shirt("Large", "Hello, Mr_Shahzad!");
