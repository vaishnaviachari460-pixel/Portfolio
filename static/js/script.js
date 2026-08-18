/* =========================
   PORTFOLIO JAVASCRIPT
========================= */


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-text, " +
    ".about-cards, " +
    ".skill-category, " +
    ".project-card, " +
    ".timeline-item, " +
    ".certificate-card, " +
    ".contact-heading, " +
    ".contact-item, " +
    ".contact-card"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(
    ".nav-links a"
);


const activeSectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                });


                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach((section) => {

    activeSectionObserver.observe(section);

});


/* =========================
   PROJECT CARD TILT EFFECT
========================= */

const projectCards = document.querySelectorAll(
    ".project-card"
);


projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.querySelector(".footer-bottom p");

if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Vaishnavi Achari. All rights reserved.`;

}

const menuToggle = document.querySelector(".menu-toggle");
const mobileNavLinks = document.querySelector(".nav-links");

if (menuToggle && mobileNavLinks) {

    menuToggle.addEventListener("click", () => {

        mobileNavLinks.classList.toggle("open");

        const isOpen = mobileNavLinks.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            menuToggle.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        }

    });

}

