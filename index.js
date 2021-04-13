const fs = require('fs');
const inquirer = require('inquirer');

//inquirer
    //prompt user to give manager information
    //then to add team members (engineers/interns) unitl they select they dont want to add anymore
    //each manager/memeber creates a new card in the html

//Use classes/sub classes for the employee managment
    //employees have a type, a name, an ID, and an email(main class)
    //the rest can be subclasses based off of employee class
        //managers have an office number
        //engineers have a github username
        //interns  have a school

//Take the info from inquirer/employee choice and generate the HTML