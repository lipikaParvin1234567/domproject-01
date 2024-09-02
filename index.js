const frameWork = document.querySelector("#frameWork");
const btnAdd = document.querySelector("#btnAdd");
const list = document.querySelector("#list");
const btnRemove = document.querySelector("#btnRemove");

btnAdd.addEventListener("click",(event)=>{
 event.preventDefault();
 if(frameWork.value === ""){
    alert("input filled is empty");
 }
 const option = new Option(frameWork.value, frameWork.value);
   list.add(option, undefined);
   frameWork.value = "";

});

btnRemove.addEventListener("click",(e)=>{
e.preventDefault();

let selected = [];
for( let i = 0; i<list.options.length; i++){
  selected[i] = list.options[i].selected;
}

let index = list.options.length;
while(index--){
    if(selected[index]){
        list.remove(index)
    }
}
})
