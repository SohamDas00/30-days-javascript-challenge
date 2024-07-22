//Task 1 - Add a click event listener to a button that changes the text content of a paragraph
const doc  = document.getElementById("p1");
document.getElementById('btn').addEventListener('click', function(){
    doc.innerHTML = "Text changed"
})
//Task 3 - Add a mouseover event listener to an elemen that changes its backgroudn color.
const div1 = document.getElementById('div-1');
div1.addEventListener('mouseover', () =>{
  div1.style.backgroundColor = 'green';  
})


//Task 4 Add a mouseout event listener to an element that resets its background color.
div1.addEventListener('mouseout', () =>{
    div1.style.backgroundColor = '';
})

//Task 5 Add a keydown to an input field that logs the key pressed to the console
const input = document.querySelectorAll('input');
input[0].addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key)
})

//Task 6 Add a keyup event listener to an input filed that displays the current value in a paragraph
const displayPara = document.getElementById('displayPara');
input[1].addEventListener('keyup', function(e){
    displayPara.textContent = input[1].value;
})

//Task 7 Add a submit event listener to a form that prevents the default submission and logs the form data to the console
const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form)
    const formData = new FormData(form);
    formData.forEach((key, value) =>{
        console.log(key, value)
    })
});

const elem = document.getElementById('btn');
elem.addEventListener('click', function(){
    const elem2 = document.getElementById('name');
    console.log(elem2.value)
})


//Task 8 Add a change event listener to a select dropdown that displays the sleceted value in a paragragh.
const selectDropdown = document.getElementById('mySelect');
console.log(selectDropdown)
const para = document.getElementById('para');

selectDropdown.addEventListener('change', function(){
    para.textContent = 'Selected value: ' + selectDropdown.value;
})