var modal_cont=document.getElementById('modal_cont');
var modal_btn1=document.getElementById("modal_btn1");
var modal_btn2=document.getElementById("modal_btn2");

window.addEventListener('load',()=>{
    createModal(`
        <h3 class=modal-titulo">Abrir ventana emergente</h3>

    `, "modal-aparecer");
})

modal_btn1.addEventListener("click", ()=>{
    createModal(`
        <h3 class=modal-titulo">Abrir ventana emergente</h3>
    `,"modal-desdeArriba");
})




