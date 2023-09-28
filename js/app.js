let boxInput =document.querySelector('#box-input');
let list = document.querySelector('#box-list');

boxInput.addEventListener("keyup",function (event){
    if(event.key === "Enter"){
        agregarItem(this.value)
        this.value = ""
    }
})
let agregarItem = (boxInput) =>{
    let listaItem = document.createElement("li");
    listaItem.innerHTML = `${boxInput}<i></i>`;
    listaItem.addEventListener("click",function (){
        this.classList.toggle('done');

        listaItem.querySelector("i").addEventListener("click",function (){
            listaItem.remove()
        })
    })
    list.appendChild(listaItem);

}