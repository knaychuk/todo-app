//selectors + appends li item to ul when add button is clicked

function newElement() {
    let li = document.createElement("li");
    let input = document.getElementById('input').value;
    let text = document.createTextNode(input);
    li.appendChild(text);
    if(input === '') {
        alert("Add a To Do");
    } else {
        document.getElementById('tasks').appendChild(li);
    }
    document.getElementById('input').value = '';

    //creates trash icon and appends it to li item
    
    let icon = document.createElement('i');

    icon.className = 'fa-solid fa-trash-can close';
    li.appendChild(icon);

    //for each item, when trash icon is click, parent is deleted

    let close = document.getElementsByClassName('close');
    for(i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//adds checked class to li items on click

let list = document.getElementById('tasks');
list.addEventListener('click', e => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
})

// let today = new Date();
// let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(); 
// console.log(date);

