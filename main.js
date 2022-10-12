const input = document.getElementById("text");
const btn = document.getElementById("btn")
const listItem = document.querySelector('ul');
const list = document.getElementsByTagName('li');
const dis = document.getElementById("dis");

function addlist(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    listItem.appendChild(li);
    input.value = '';

    function finished(){
        li.classList.toggle('done')
    }
    li.addEventListener("click", finished)

    var del = document.createElement('button');
    del.appendChild(document.createTextNode('x'));
    li.appendChild(del);
    del.addEventListener("click", deleteItem)

    function deleteItem(){
        li.style.display = 'none'
    }
}

btn.addEventListener("click",()=>{
    if(input.value.length>0){
        addlist()
    }
})
