# lab-06-e-commerce-site

## Requirements of product
Property | Description
---|---
`id` | a unique string that identifies this product
`name` | user friendly name of the product
`image` | image file name for this image (should live in `assets`)
`description` | a longer description of the product
`category` | the category this product belongs to, limit to one
`price` | the price the user will pay


## Lab 6
- Create homepage that has a link to the products page.
- Create products page.
    - Products page needs to generate a list of products from the product data.

### Step 1 
- Wire frame then build the html for one product
    - ACP this

### Step 2
- Write out the object literals for each product. 
    - Create variable with an array of the all the products (array of objects)
    - Export the array
- ACP after this

### Step 3
- Create the test that passes a single product to a function and asserts that the return dom with .toOuterHTML matches the static html example.

### Step 4
- Generate Product list
    - Import data and DOM generation function
    - Locate list element where the products will go
    - loop through your data
    1. Create a variable that is the singular of your domain list and assign based on the current array index. For example, `const fruit = fruits[i];`
    1. Pass to your DOM generation function and capture result in variable
    1. Append to the top-level list element
