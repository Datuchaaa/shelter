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
    
})


// let arr = ['<div><?',6,7,7];

document.querySelectorAll('.nav-link').forEach((value)=>{
    value.addEventListener('click', ()=>{
        console.log('click test');
        navMenu.classList.toggle("active");
    })
});



let getPetItem = (obj) => {
    return `<div class="animal-info">
                <div class="animal pet" style="background-image: url(${obj.img});">
                </div>
                <div class="name">
                    ${obj.name}
                </div>
                <div
                    data-name="${obj.name}" 
                    data-img="${obj.img}" 
                    data-type="${obj.type}"
                    data-breed="${obj.breed}"
                    data-description="${obj.description}"
                    data-age="${obj.age}" 
                    data-inoculations="${obj.inoculations}"
                    data-diseases="${obj.diseases}"
                    data-parasites="${obj.parasites}"
                    class="btn lern-more" >
                    Learn more
                </div>
         </div>`
        
};

const popUp = document.getElementById("popup")
const xIcon = document.getElementById("X-icon");

        xIcon.addEventListener("click", () => {
            popUp.style.display = "none"
        });

let getPetList = (petList) => {
   
    return petList.map((obj) => {
        return getPetItem(obj);
       
    }).join('')
    
}
let sliderAnimals = document.getElementById("sliderAnimalsWrapper")

fetch('./pets.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            sliderAnimals.innerHTML = getPetList(data)

            $('.slider-animals').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        // dots: true
                      }
                    }],
                    
                prevArrow: ' <div class="arrow left" style="background-image: url(../../assets/icons/arrow-left.png);"></div>',
                nextArrow: '<div class="arrow right" style="background-image: url(../../assets/icons/button_arrow.png);"></div>'
              });

            let items =  document.getElementsByClassName('lern-more');

            for (let node of items) {
                node.addEventListener('click', (e) => {
                    
                    let name = e.currentTarget.getAttribute('data-name');
                    document.getElementById("animal-name").innerHTML = name;

                    let img = e.currentTarget.getAttribute('data-img');
                    document.getElementById("animal-img").style.backgroundImage = `url(${img})`;

                    let type = e.currentTarget.getAttribute('data-type');
                    document.getElementById("animal-type").innerHTML = type;

                    let breed = e.currentTarget.getAttribute('data-breed');
                    document.getElementById("animal-breed").innerHTML = breed;

                    let description = e.currentTarget.getAttribute('data-description');
                    document.getElementById("animal-description").innerHTML = description;

                    let age = e.currentTarget.getAttribute('data-age');
                    document.getElementById("animal-age").innerHTML = age;

                    let inoculations = e.currentTarget.getAttribute('data-inoculations');
                    document.getElementById("animal-inoculations").innerHTML = inoculations;

                    let diseases = e.currentTarget.getAttribute('data-diseases');
                    document.getElementById("animal-diseases").innerHTML = diseases;

                    let parasites = e.currentTarget.getAttribute('data-parasites');
                    document.getElementById("animal-parasites").innerHTML = parasites;

                    popUp.style.display = "flex"


                    console.log('name', name);
                })
            }

        });




// document.querySelectorAll(".nav-link").forEach(n => n.
//     addEventListener("click", () => {navMenu.classList.toggle("active");
// }));



