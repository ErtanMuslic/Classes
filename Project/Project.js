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

function hover(x){
    x.style.color='#7cc576';
}

function unhover(x){
    x.style.color='black';
}

function slika1(){
    document.getElementById('slika1').style.visibility="visible";
    document.getElementById('slika2').style.visibility="hidden";
    document.getElementById('slika3').style.visibility="hidden";
    document.getElementById('slika4').style.visibility="hidden";

    document.getElementById('slika1').style.opacity='1';
    document.getElementById('slika2').style.opacity='0';
    document.getElementById('slika3').style.opacity='0';
    document.getElementById('slika4').style.opacity='0';

    document.getElementById('h1').style.color='#7cc576';
    document.getElementById('h2').style.color='black';
    document.getElementById('h3').style.color='black';
    document.getElementById('h4').style.color='black';
}


function slika2(){
    document.getElementById('slika1').style.visibility="hidden";
    document.getElementById('slika2').style.visibility="visible";
    document.getElementById('slika1').style.opacity='0';
    document.getElementById('slika2').style.opacity='1';
    document.getElementById('slika3').style.opacity='0';
    document.getElementById('slika4').style.opacity='0';
    document.getElementById('slika3').style.visibility="hidden";
    document.getElementById('slika4').style.visibility="hidden";

    document.getElementById('h1').style.color='black';
    document.getElementById('h2').style.color='#7cc576';
    document.getElementById('h3').style.color='black';
    document.getElementById('h4').style.color='black';

}

function slika3(){
    document.getElementById('slika1').style.visibility="hidden";
    document.getElementById('slika2').style.visibility="hidden";
    document.getElementById('slika3').style.visibility="visible";
    document.getElementById('slika4').style.visibility="hidden";

    document.getElementById('slika1').style.opacity='0';
    document.getElementById('slika2').style.opacity='0';
    document.getElementById('slika3').style.opacity='1';
    document.getElementById('slika4').style.opacity='0';

    document.getElementById('h1').style.color='black';
    document.getElementById('h2').style.color='black';
    document.getElementById('h3').style.color='#7cc576';
    document.getElementById('h4').style.color='black';
}

function slika4(){
    document.getElementById('slika1').style.visibility="hidden";
    document.getElementById('slika2').style.visibility="hidden";
    document.getElementById('slika3').style.visibility="hidden";
    document.getElementById('slika4').style.visibility="visible";

    document.getElementById('slika1').style.opacity='0';
    document.getElementById('slika2').style.opacity='0';
    document.getElementById('slika3').style.opacity='0';
    document.getElementById('slika4').style.opacity='1';

    document.getElementById('h1').style.color='black';
    document.getElementById('h2').style.color='black';
    document.getElementById('h3').style.color='black';
    document.getElementById('h4').style.color='#7cc576';
}