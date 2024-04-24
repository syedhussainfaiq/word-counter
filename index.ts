import inquirer from  "inquirer";



const answers:{
    Sentence: string 
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"

    },
    
])

       const word = answers.Sentence.trim().split("")


       console.log(word);


       console.log(`Your sentence word count is ${word.length}`);