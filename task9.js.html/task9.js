//Activity 1:
document.getElementById("id").innerHTML="Hello";

document.querySelector('.color').style.backgroundColor = "red";


// Activity 2:
let div=document.createElement("div");
div.append("This is appended");
document.querySelector("body").appendChild(div);

let li=document.createElement("li");
li.append("banana");
let ul=document.querySelector("ul").appendChild(li);


//Activity 3:
let remove=document.getElementById("remove");
if(remove){
    remove.remove();
}

let last=document.getElementById("lastremove")
last.lastElementChild.remove();


//Activity 4:
document.getElementById("pic").setAttribute('src',"https://thumbs.dreamstime.com/b/extreme-sharp-detailed-study-2-mm-wasp-23505380.jpg");

let a=document.getElementById("text").style.color="green";
function myFunction() {
    const element = document.getElementById("remove");
    element.remove();
    let last=document.getElementById("lastremove")
    last.lastElementChild.remove();
}


//Activity 5:
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('.change').innerText = 'Succesfully change';
});