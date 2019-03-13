//creat an arry of words
//make the computer choose random word
//creat underscor array base on the lenght of the word
//ask the user to guess 
// check if the user guess is right
// replace the underscore with the user guess
//creat array of right word
// if reight push to right arrey
//creat wrong huess arrey
//if user did wrong guess push it to rong array


document.write('<bgsound src="./assets/images/BaseAudioContext.mp3" loop="1">');
const words =['michael','madona','wham','prince','whitney'];
let underScores = [];
let wrongword = [];
let rightword = [];

let computerchoice = Math.floor(Math.random() * words.length);
let docunderscores = document.getElementsByClassName("underscores");
let docrightword = document.getElementsByClassName("rightword");
let docwrongword = document.getElementsByClassName("wrongword");
let choosenword = words[computerchoice];

console.log(choosenword);

// create underscore array
let creatUnderScore = () => {
  for (let i=0; i<choosenword.length; i++){
      underScores.push("_");
      }
    docunderscores[0].innerHTML= underScores;
    return underScores;
}
console.log(creatUnderScore());

// capture user guess
document.addEventListener('keypress',(event) =>{

  let keycode = event.keyCode;
  let keyword = String.fromCharCode(keycode);
// console.log(keyword);

if (choosenword.indexOf(keyword)>-1){
    rightword.push(keyword);
    docrightword[0].innerHTML = rightword;
    underScores[choosenword.indexOf(keyword)] = keyword;
    docunderscores[0].innerHTML = underScores.join(' ');
    
  // console.log(rightword);
    
    // console.log(underScores);
          if(underScores.join('')== choosenword)
                  {
                    alert("you won");
                  }
    }


        else{
          wrongword.push(keyword);
          docwrongword[0].innerHTML= wrongword;
          // console.log(wrongword);
          }       
});
// replace underscore with the right guess

