let openmodal=document.getElementById("openModal");
let modalReporte=document.getElementById("modal");
let closeModal=document.getElementById("close");


openmodal.onclick=function(){
modalReporte.style.visibility="visible";

}

modalReporte.onclick=function(){
    modalReporte.style.visibility="hidden";
}

closeModal.onclick=function(){
    modalReporte.style.visibility="hidden";
}