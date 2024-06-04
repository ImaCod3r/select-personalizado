const select_button = document.getElementById("select-button");
const select_items = document.getElementById("select-items");
const items = document.querySelectorAll(".item");

function showItems(){
    let haveClass = select_items.classList.contains("disabled");

    if(haveClass){
        select_items.classList.remove("disabled");
    }
    else{
        select_items.classList.add("disabled");
    }
}

function changeValue(item){
    var itemValue = item.innerText;

    select_button.value = itemValue;
}

select_button.addEventListener("click", (e) => showItems());

