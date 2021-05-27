# Tim-OMalley-Homework-10

- Team profile generator is an app that allows the user to input options for their coding team and then have a webpage of the team generated fo them.
- GitHub Repository: https://github.com/tmallz/Tim-OMalley-Homework-10

## Functionality

- This app prompts the user with questions about generating a team of employees. It starts by having the user make a manager, then they have the option to add engineers and interns.


## Technologies Used
- Javascript
- CSS (Framework: Materialize CSS)
- HTML
- Inquirer
- Path
- Jest

## App Demonstration 

https://user-images.githubusercontent.com/61262154/119864155-f9087e80-bedf-11eb-9041-b59d2b963356.mp4

![image](https://user-images.githubusercontent.com/61262154/119863144-e2adf300-bede-11eb-8013-8887ea84bf16.png)

## App Usage
- WHEN the user starts the app
- THEN the user prompted to make a manager
- WHEN the user finishes the manager
- THEN the user is asked if they want to make another employee
- WHEN the user selects yes
- THEN the user is asked if it should be an engineer or intern
  - IF the user chooses engineer
  - THEN they are prompted to make an engineer
  - IF the user chooses intern
  - THEN the user is prompted to make an intern
- WHEN the user makes a new employee
- THEN the user is again asked if they want to make a new employee
- WHEN the user selects NO
- THEN a web page with the team is created

## MIT License 

Copyright (c) 2021 Tim O'Malley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
