const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question("What's your favourite anime?", (answer1) => {
  rl.question("What's your favourite book?", (answer2) => {
    rl.question("What do you listen to while exercising?", (answer3) => {
      rl.question("What is your superpower? In a few words, tell us what you are amazing at!:", (answer4) => {
        rl.question("Which sport is your absolute favourite?", (answer5) => {
          rl.question("Which meal is your favourite?", (answer6) => {
            rl.question("What's your favourite thing to eat for that meal?", (answer7) => {
              rl.question("What do you listen to while doing homework?", (answer8) => {





  // TODO: Log the answer in a database
  console.log(`\n
   My favourite anime is: ${answer1}\n
   My favourite book is: ${answer2}\n
   I listen to: ${answer3}, while exercising.\n
   My favourite superpower is: ${answer4}\n
   My favourite sport is: ${answer5}\n
   My favourite meal is: ${answer6}
   My favourite thing to eat is: ${answer7}\n
   I listen to : ${answer8}\n`)

  rl.close();
});
});
});
});
});
});
});
});
