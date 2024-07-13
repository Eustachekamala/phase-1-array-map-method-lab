const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(function(tutorial) {
    let tutorialSpl = tutorial.split(" ");
    let capitalizedTutorial = tutorialSpl.map(function(title) {
      return title.charAt(0).toUpperCase() + title.slice(1);
    });
    const response = capitalizedTutorial.join(" ");
    return response;
  });
}

console.log(titleCased())