// Initialize Lenis
function lenis() {
    const lenis = new Lenis({
        autoRaf: true,
    });
    lenis.on('scroll', (e) => {
        // console.log(e);
    });
}
lenis()

// nav-functionality
function navFunc() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            nav.style.top = "0%";
        }
        else {
            nav.style.top = "3%";
        }
    })

    const menuIcon = document.getElementById('menu-icon');
    const navUl = document.querySelector("nav ul")
    let flag = 0;
    menuIcon.addEventListener('click', () => {
        if (flag === 0) {
            navUl.style.transform = "translateX(0%)";
            menuIcon.classList.add('ri-close-large-line')
            flag = 1;
        }
        else {
            navUl.style.transform = "translateX(100%)";
            menuIcon.classList.remove('ri-close-large-line')
            flag = 0;
        }
    })
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.matchMedia("(max-width: 600px)").matches) {
                navUl.style.transform = "translateX(100%)";
                menuIcon.classList.remove('ri-close-large-line')
                flag = 0;
            }
        })
    })

}

// FAQ's section
function faqs() {
    let faqQuestions = document.querySelectorAll(".faq-question");
    let faqAnswers = document.querySelectorAll(".faq-answer");

    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', () => {
            // If the clicked answer is already open, close it
            if (faqAnswers[index].style.display === 'block') {
                faqAnswers[index].style.display = 'none';
            } else {
                // Hide all answers
                faqAnswers.forEach((answer) => {
                    answer.style.display = 'none';
                });
                // Show the clicked one and update openAnswer
                faqAnswers[index].style.display = 'block';
            }
        });
    });
}

// gsap home and nav animation start

var tl = gsap.timeline()
tl.from(".nav-anim",{
    opacity:0,
    duration:.8,
    stagger:.2,
    y:20
})
tl.from(".home-top .say-hi",{
    y: 20,
    duration:.5,
    opacity:0
})
tl.from(".home-heading-container h1",{
        opacity: 0,
        y: 50,
        duration: 1,
        stagger:.3
})

// gsap home and nav animation end

const sections = [
    ".talent-page .main-heading-div h1",
    ".video-creation-page-headings h1",
    ".project-management-page-headings h1",
    "#faq-section .main-heading-div h1",
    ".join-page .main-heading-div h1"
];
sections.forEach((section) => {
    gsap.from(section, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: .4,
        scrollTrigger: {
            trigger: section,
            scroller: "body",
            start: "top 85%",
            end: "top 60%",
            scrub: 2
        }
    })
})


navFunc()
faqs();


