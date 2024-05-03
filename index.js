// TODO: Include packages needed for this application


import { writeFile } from 'fs';

import pkg from 'inquirer';
const { prompt } = pkg;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'How would you describe your project?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How do you install your project(step by step)?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPLv3'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project for (usage)?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who Contributed to this project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?'
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'lesson',
        message: 'What did you learn?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What should a user do to test funtionality?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where can the user reach you(email)?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => {
        if (err) {
          console.error(`[ERROR] Error writing to file: ${err}`);
        } else {
          console.log('README file created successfully!');
        }
      });
}

// TODO: Create a function to initialize app
async function init() {
    try {
      // Use inquirer to prompt the user for input (async/await approach)
      const answers = await prompt(questions);
  
      // Generate the README content based on user answers
      const readmeContent = `# ${answers.projectName}
        
        ##Description
        ${answers.projectDescription}

        ##Installation
        ${answers.Installation}

        ##Usage
        ${answers.usage}

        ##Why
        ${answers.why}

        ##Problem
        ${answers.problem}

        ##tests
        ${answers.tests}


        ##Motivation
        ${answers.motivation}

        ##Contributors
        ${answers.contributors}


         ##Emails
        ${answers.questions}

        This project is licensed under the ${answers.license} license.
  
        
        `;
  
      // Write the generated content to the README file
      writeToFile('README.md', readmeContent);
  
      console.log('README file created successfully!');
    } catch (err) {
      console.error(`[ERROR] Error prompting user: ${err}`);
    }
  }

// Function call to initialize app
init();
