# password-generator
Created by Hunter Barton

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](assets/images/03-javascript-homework-demo.png)

## My Work

I accomplished the goals set out by the assignment using mostly HTML and JS. I have created a form for the user to enter the criteria they desire for the password. When the user clicks the generate password button all of the data in the form is validated. If anything is invalid an error message will appear on the form and let the user reenter it. Once this is done the criteria that were selected are passed to my function that generates the random password based on that. I used the Math.random function in JS to get random characters from an array of strings containing all the characters to be used in the password. 