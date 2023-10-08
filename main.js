const navToggle = document.querySelector(".mobile-nav-toggle");
const navLink = document.querySelectorAll(".nav-links")

navToggle.addEventListener ("click", () => {
    document.body.classList.toggle('nav-open');
});

navLink .forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
});


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


  

   

