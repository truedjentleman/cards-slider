const slides = document.querySelectorAll('.slide');

//  add class 'active' on click event, 
for (const slide of slides) {   // create variable 'slide' on each iteration of loop
    slide.addEventListener('click', () => {
        clearActiveClasses()   // invoke clear 'active' classes function for not clicked elements 
        
        slide.classList.add('active');
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {  //  forEach instead of for loop
        slide.classList.remove('active');
    })
}