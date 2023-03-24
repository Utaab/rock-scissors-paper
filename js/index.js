const buttons = document.querySelectorAll("[data-selection]");
const resultGame = document.getElementById("result");
let myScore = document.getElementById("myScore");
let ComputerScore = document.getElementById("computerScore");
let myConter = 0;
let computerConter = 0;
const gameOptions = [
    {name:"paper", beats:"rock"},
    {name:"rock", beats:"scissors"},
    {name:"scissors", beats:"paper"},
]

let myChoise = "";
let showMyChoiseInDiv = document.getElementById("myChoisOption");
let computerChoise = "";
let showComputerChoiseInDiv = document.getElementById("computerChoisOption");

let statusGame ="";
// my choise function
buttons.forEach((btn)=>{
    btn.addEventListener("click",() => {
        myChoise = btn.dataset.selection
        showMyChoiseInDiv.innerHTML = `<img src="images/${myChoise}.svg">`;
        computerChoise = randomValue();
        showComputerChoiseInDiv.innerHTML = `<img src="images/${computerChoise}.svg">`;
        compareChoises();
    })
});

// generate computer chiose function 
const randomValue = () =>{
    const randomNumber = Math.floor(Math.random() * 3)
    return gameOptions[randomNumber].name
}

//myChoise VS. cumputerChiose
const compareChoises = () =>{
    if(myChoise === computerChoise){
        statusGame = "draw";
        resultGame.style.backgroundColor = "orange"
    }else {
        const findMyObject = gameOptions.find((item)=>item.name === myChoise)
        
        if(computerChoise === findMyObject.beats){
            statusGame = "win";
            resultGame.style.backgroundColor = "green"
            myConter += 1;
            myScore.innerHTML = myConter;
            
        }else{
            statusGame = "lose";
            resultGame.style.backgroundColor = "red";
            computerConter += 1;
            ComputerScore.innerHTML = computerConter;
        }
    }
    resultGame.innerHTML = `${statusGame}`
    console.log(statusGame);
}