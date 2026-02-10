let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        let btnPressed = button.innerText;



        //*Clear screen*//
    if(button.id === "clear"){
        screen.textContent = "0";
        return;
    }
    //Delete last character*//
    if(button.id === "delete"){
        if(screen.textContent.length ===1 || screen.textContent === "Syntax Error"){
            screen.textContent = "0";
        } else {
            screen.textContent = screen.textContent.slice(0, -1);       
        }
        return;
        }
    
        //*Evaluate expression*//
    if(button.id === "equal"){
        try{
            console.log(screen.textContent);
            screen.textContent = eval(screen.textContent);
        } catch{
            screen.textContent = "Syntax Error";
        }
        return;
    }
            //*Add content of button to display*//
    if(screen.textContent === "0" || screen.textContent === "Syntax Error"){
        screen.textContent = btnPressed;
    } else {
        screen.textContent += btnPressed;
    }
    });
});

//*Clock functionality*//
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function updateClock(){
    const now = new Date();
    hour.textContent = String(now.getHours()).padStart(2,'0');
    min.textContent = String(now.getMinutes()).padStart(2,'0');
    sec.textContent = String(now.getSeconds()).padStart(2,'0');
}
setInterval(updateClock, 100);