const quotes =[
  {
    quote: "The strongest of all warriors are\nthese two -- Time and Patience.",
    author: "Leo Tolstoy",
  },
  {
    quote: "Success is not the result of spontaneous combustion.\nYou must set yourself on fire.",
    author: "Reggie Leach",
  },
  {
    quote: "We cannot be sure of having something to live\nfor unless we are willing to die for it.",
    author: 'Ernesto "Che" Guevara',
  },
  {
    quote: "All Winter is on my head,\nbut eternal spring is in my heart.",
    author: "Bill Gates",
  },
  {
    quote: "Respect a man,\nhe will do the more.",
    author: "James Howell",
  },
  {
    quote: "While there's life,\nthere's hope.",
    author: "Cicero",
  },
  {
    quote: "To win without risk is\nto triumph without glory.",
    author: "Pierre Corneille",
  },
  {
    quote: "The less their ability,\nthe more their conceit.",
    author: "Ahad HaAm",
  },
  {
    quote: "Laughter is by definition healthy.",
    author: "Doris Lessing",
  },
  {
    quote: "The best way to predict\nthe future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Always read stuff that will make you look good\nif you die in the middle of it.",
    author: "P. J. O'Rourke",
  },
  {
    quote: "Zeus does not bring all men's plans\nto fulfillment.",
    author: "Homer",
  },
  {
    quote: "He who has never hoped\ncan never despair.",
    author: "George Bernard Shaw",
  },
  {
    quote: "All Success isn't permanent,\nand failure isn't fatal.",
    author: "Mike Ditka",
  },
  {
    quote: "No great man ever complains\nof want of opportunity.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "It's not that I'm so smart,\nit's just that I stay with problems longer.",
    author: "Albert Einstein",
  },
  {
    quote: "Our greatest glory is not in never falling,\nbut in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote: "Nothing shows a man's character\nmore than what he laughs at.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Always laugh when you can.\nIt is cheap medicine.",
    author: "Lord Byron",
  },
  {
    quote: "Learning to love yourself is\nthe greatest love of all.",
    author: "Michael Masser",
  },
  {
    quote: "All Nothing is permanent in this wicked world\n- not even our troubles.",
    author: "Charlie Chaplin",
  },
  {
    quote: "If we all did the things we are capable of doing,\nwe would literally astound ourselves.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Only those who will risk going too far can\npossibly find out how far one can go.",
    author: "T. S. Eliot",
  },
  {
    quote: "A likely impossibility is always preferable\nto an unconvincing possibility.",
    author: "Aristotle",
  },
  {
    quote: "Accept challenges, so that you may feel\nthe exhilaration of victory.",
    author: "George S. Patton",
  },
  {
    quote: "Pride breakfasted with plenty, dined with poverty,\nand supped with infamy",
   author: "Benjamin Franklin",
  },
  {
    quote: "Let no one ever come to you\nwithout leaving better and happier.",
    author: "Mother Teresa",
  },
  {
    quote: "Everyone is born with genius,\nbut most people only keep it a few minutes.",
    author: "Edgard Varese",
  },
  {
    quote: "The best thing about the future is\nthat it comes one day at a time.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Reading is to the mind\nwhat exercise is to the body.",
    author: "Sir Richard Steele",
  },
  {
    quote: "Everyone has his day and\nsome days last longer than others.",
    author: "Sir Winston Churchill",
  },
  {
    quote: "Only I can change my life.\nNo one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "It's only when the tide goes out\nthat you discover who's been swimming naked.",
    author: "Warren Buffett",
  },
  {
    quote: "Happiness lies in the joy of achievement\nand the thrill of creative effort.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: 'The worst is not So long as we can say,\n"This is the worst."',
    author: "William Shakespeare",
  },
  {
    quote: "To accomplish great things,\nwe must dream as well as act.",
    author: "Anatole France",
  },
  {
    quote: "If you don't learn to laugh at trouble,\nyou won't have anything to laugh at when you're old.",
    author: "Edgar Watson Howe",
  },
  {
    quote: "Never deprive someone of hope;\nit might be all they have.",
    author: "H. Jackson Brown Jr.",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;