const hamburger = document.getElementById("hamburger");
console.log('items', hamburger);

const navMenu = document.getElementById("navBar");


// for (el of hamburger) {
//  console.log('el', el);
// }

hamburger.addEventListener("click", () => {
    // console.log('')
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
});


document.querySelectorAll('.nav-link').forEach((value)=>{
    value.addEventListener('click', ()=>{
        console.log('click test');
        navMenu.classList.toggle("active");
    })
});