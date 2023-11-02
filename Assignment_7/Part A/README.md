# Calculator Web Application

## Overview

This simple web application is designed to function as a calculator with a login page and a calculator page. It is built using HTML, CSS, and JQuery, with specific validation rules applied for user inputs.

## Validation Details

### Login Page (index.html):

1. **Email Validation**:
   - Null checks.
   - Special characters check.
   - Valid email format.
   - Northeastern email ID validation.

2. **Username Validation**:
   - Null checks.
   - Special characters check.
   - Maximum username length (20 characters).

3. **Password Validation**:
   - Null checks.
   - Password length (8-20 characters).
   - At least one special character required.

4. **Confirm Password Validation**:
   - Null checks.
   - Match with the password field.

### Calculator Page (calculator.html):

1. **Input Fields (Number 1 and Number 2) Validation**:
   - Null checks.
   - Allow only numeric input.
   - Special character check.
   - Avoid infinite values.

2. **Arithmetic Operation Buttons (Add, Subtract, Multiply, Divide)**:
   - All operations performed using a single arrow function. The arrow function is implemented in `calculator.js`.

3. **Result Display**:
   - Display the results below the input fields.
   - Results are not editable.

## Implementation

- All validations are done using JQuery for client-side validation.
- No pop-ups are used for error messages; they are displayed below the fields in red color.

**Arrow Function**: The arrow function used to perform all four arithmetic operations (Add, Subtract, Multiply, Divide) is implemented in `calculator.js`.

## Usage

1. Open the `index.html` file to access the login page.
2. After successful login, the user is redirected to the `calculator.html` page.
3. Enter numerical values in the input fields and select an operation to see the results.


