const navbar=document.querySelector("navbar-menu");
const sectionOne=document.querySelector("hero");

const sectionOneOptions = {
    rootMargin:"-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
    entries,
    sectionOneObserver
) {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            navbar.classList.add("");
        }
        else {
            navbar.classList.remove("");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);