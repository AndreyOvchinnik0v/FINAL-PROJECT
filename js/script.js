let OutPutField;  // Нужный
let b = [];
let nkey;
let v;
let c;
let z = [];
let arrkeys;
let downed;
let corAtt = [];
let wronAtt = [];
let KeyEv = [];

let timer = new Date();

//_______________таймер_________________

let time = 1;



//_________________добавление озвучки____________________
let soundErr = new Audio;
soundErr.src = "sounds/sound_error.mp3";


let soundCor = new Audio
soundCor.src = "sounds/sound_correct.mp3";

let starts = new Audio();
starts.src = "sounds/start1.mp3";


//_______________массив работающих клавиш______________________
arrkeys = document.getElementsByClassName("key1");


//____________поле вывода_____________________________
OutPutField = document.querySelector("p");

//____________поле ввода_____________________________
let input = document.querySelector("textarea")


//____________функция рандом буквы_____________________________



function rKey () {
  
  nkey = Math.floor(Math.random() * arrkeys.length)
  for(i = 0; i < arrkeys.length; i++ ){
    
    arrkeys[i].classList.remove("next_key");
    
  }
  OutPutField.textContent = arrkeys[nkey].textContent;
  
  arrkeys[nkey].classList.add("default");
  arrkeys[nkey].classList.add("next_key")

}

rKey();


//_________слушатели______________________________________

input.addEventListener("focus", inputFocus )
input.addEventListener("focusout", InputOutfocus)
input.addEventListener("input", inputValue )

//______прячет текст placeholdera при фокусе_______________

function inputFocus(){ 
  input.value = " "
}

//________выводит в поле ввода нажатую клавишу_______________

function  inputValue (event){
  input.value = event.data
}


//__возвращает placeholder при исчезновении фокуса___________________

function InputOutfocus(){
  input.classList.remove("focused")
  input.value = "Клик!"
}



//________слушатели___________________

init();

function init (){
  input.addEventListener("keydown", KeydownHandler);
  input.addEventListener("keyup", KeyupHandler);
  input.addEventListener("keypress", KeypressHandler);
}

function KeydownHandler(event) {

  
}

//________обрабатывает нажатие клавиш___________________


$(".targetdata").attr("data-content", 0);
$(".wrongnum").attr("data-content", 0);


function KeypressHandler (event) { 
 
   z = event.keyCode
  downed = document.getElementById(z)
  KeyEv.push(event)
  
  if (KeyEv.length == 1) {
   
  setInterval(function () {
     
      time--;
    if (time < 0) {
       time = 0;
     
    }
    console.log(time)
     $(".timer").attr("data-content", time);
     if (time == 0) {
 
     }
    }, 1000);
     
    

 }

    
  if (OutPutField.textContent == event.key) {
   clearClass();
   
   corAtt.push(event);
   corlen = corAtt.length;
    
   $(".targetdata").attr("data-content", corlen);
   
   arrkeys[nkey].classList.add("correct");
   soundCor.play();

   rKey();

 } else {
   clearClass();
   wronAtt.push(event);
   wronlen = wronAtt.length;
   
   
   $(".wrongnum").attr("data-content", wronlen);

   downed.classList.add("wrong_key")
   soundErr.play();
   rKey();
 }  
 


}
   
function KeyupHandler (event) {


}   

//_____удаляет подсветку с клавиш________________________________________________________
function clearClass (){
  
  for(i = 0; i < arrkeys.length; i++ ){
    arrkeys[i].classList.remove("correct");
    arrkeys[i].classList.remove("wrong_key")
   
  }  
}  

//_____функция закрытия попапа по клавише enter(также останавливает анимацию)_______________________
document.querySelector("a").addEventListener("click", () => {});{
 document.querySelector("a").click();

  document.addEventListener("keypress", keyBoardEvent);

  function keyBoardEvent(event) {
    
    if (event.keyCode == 13 ) {     
      document.querySelector(".close").click();
      $(".animate__animated").css("animation-play-state", "running");
      starts.play();
    }
  }
}


















    
