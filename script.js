const submit = document.getElementById("submit");
const timeoutAudio = document.getElementById("timeout_audio");

function onClickTimer() {

    const dtInput = document.getElementById("dtinput").value;
    const endDate = new Date(dtInput);
    const nowDate = new Date();

    const diff = (endDate - nowDate) / 1000 / 3600;
    console.log(diff);

//    if(diff<-1){
//     clearInterval(timer);
//    }
    // if (diff <=0) {
    //     timeoutAudio.play()
    //     clearInterval(timer)
    //     return;
    // }
    
    const dOut = document.getElementById("dvalue");
    const hOut = document.getElementById("hvalue");
    const mOut = document.getElementById("mvalue");
    const sOut = document.getElementById("svalue");

    const days = Math.floor(diff / 24);
    const hours = Math.floor(diff % 24);
    const minutes = Math.floor((diff * 60) % 60);
    const seconds = Math.floor((diff * 3600) % 60);
    
    if(diff>0){
    dOut.innerHTML = days;
    hOut.innerHTML = hours;
    mOut.innerHTML = minutes;
    sOut.innerHTML = seconds;
    }else if(diff<0 && diff>-1) {
        timeoutAudio.play();
        clearInterval(timer);
         
    }else{
        resetTimer(); 
    }
}

var timer =submit.addEventListener('click', function()  {
    setInterval(onClickTimer, 1000);
})

function resetTimer() {
  location.reload();
}