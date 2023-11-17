var  chng =  document.querySelector("h5")

var add = document.querySelector("#Add")

add.addEventListener("click", function(){
    chng.innerHTML = "Friends"
    chng.style.color = "green"
})

var remove = document.querySelector("#Remove")

remove.addEventListener("click", function(){
    chng.innerHTML = "Stranger"
    chng.style.color = "red"
})