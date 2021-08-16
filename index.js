const readLineSync = require("readline-sync");
const chalk = require('chalk');
console.log(chalk.greenBright.bgMagenta("Welcome to Fun Friday ✨ Guess the Emojis\n "));
const userName = readLineSync.question(chalk.cyanBright("May i Know your name -> "));
console.log(chalk.hex('#DEADED')("\nHi " + userName + ". Let's Start \n"));
const questionOne = {
    question: `
  🙏🏳️‍🌈
  a:namaste China
  b:namaste London
  c:namaste England`,
    answer: "b"
}

const questionTwo = {
    question: `
  🙂🙏
  a:smile please
  b:namaste`,
    answer: "a"
}

const questionThree = {
    question: `
  🏡💐
  a:Housefull
  b:House flower
  c:Ghar sansar`,
    answer: "a"
}
const questionFour = {
    question: `
  🧍🏼🧍🏼‍♀️🧍🏼🧍🏼‍♀️🧍🏼🧍🏼‍♀️
  a:hum tum
  b:hum sath sath hai
  c:friends`,
    answer: "c"
}
const questionFive = {
    question: `
  🦇📓
  a:Gothan
  b:Black Book
  c:Vampire Dairy`,
    answer: "c"
}
const questionSix = {
    question: `
  🐷🏦
  a:piggybank
  b:pig bank `,
    answer: "a"
}
const questionSeven = {
    question: `
  👨‍⚕️🤷
  a:Greys Antony
  b:Dr.john
  c:Dr.who`,
    answer: "c"
}
const questionEight = {
    question: `
  🕐😴🧑
  a:wake up sid
  b:The time machine
  c:About time`,
    answer: "a"
}
const questionNine = {
    question: `
  🎮🪑
  a:Chair game
  b:game of musical chair
  c:Games of Throne`,
    answer: "c"
}
const questionTen = {
        question: `
  🎷🏡
  a:The Loud house
  b:full House
  c:River Dale`,
        answer: "a"
    }
    //var highScore=4;
let currScore = 0;

function play(queno, question, answer) {
    const userAnswer = readLineSync.keyIn(chalk.cyanBright("\n" + queno + ") " + question + "\n"));
    if (userAnswer === answer) {
        currScore++;
        console.log(chalk.greenBright("Right Answer 👏"));
    } else {
        console.log(chalk.redBright("Wrong Answer 🙁"));
    }
    console.log(chalk.yellowBright("Your current score is : " + currScore));
    console.log('---------------------\n');
}

const LevelOneQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

for (let i = 0; i < LevelOneQuestions.length; i++) {
    const currentQuestion = LevelOneQuestions[i];
    play(i + 1, currentQuestion.question, currentQuestion.answer);
}

if (currScore >= 5) {
    console.log(chalk.bold.hex('#DEADED')("Congratulations!! " + userName + " You Qualified for level 2 🎉 "));
} else {
    console.log(chalk.red("TRY AGAIN !! "));
}

console.log(chalk.yellowBright("Your final score is : " + currScore));