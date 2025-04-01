
function getProduct(str) 
{ 
    let product = 1;                             // Initialize product to 1//

      
    for (let i = 0; i < str.length; i++)        // Loop through each character in the string//
    { 
      
        product = product * (parseInt(str[i])); // Convert character to number and multiply with product//
    } 
    return product;                             // Return the final product//
} 


let st = "234";  
console.log("Product of digits in", st, "is:", getProduct(st)); 
