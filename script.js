let userscore=0;
let compscore=0;

const maindiv =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userchoicepara =document.querySelector("#user-score");
const compchoicepara =document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame=() => {
    msg.innerText="draw";
};

const showwinner=(userwinner,userchoice,comchoice) => {
    if(userwinner)
    {
        userscore++;
        userchoicepara.innerText=userscore;
        msg.innerText="you win";
    }

    else
    {
        compscore++;
        compchoicepara.innerText= compscore;
        msg.innerText="computer wins";
    }
};

const game=(userchoice)=> {

      const comchoice= genCompChoice();

      if(userchoice==comchoice)
      {
        drawgame();
      }
        else{
            let userwinner=true;
            if(userchoice==="rock")
            {
              userwinner=comchoice === "paper" ? false : true;
            }
            else if(userchoice==="paper")
            {
               userwinner=comchoice ==="scissors" ? false : true;
            }
            else
            {
                userwinner=comchoice==="rock" ? false : true;
            }
            showwinner(userwinner,userchoice,comchoice);
        }
    };

    maindiv.forEach((choice) => {
        choice.addEventListener("click",()=>{
            const userchoice = choice.getAttribute("id");
            game(userchoice);
        });
        
    });




    





  

  
  
  