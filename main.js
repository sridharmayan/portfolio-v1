console.log("main.js loaded");

// mobile menu toggle
      const toggleBtn = document.querySelector(".nav-toggle");
      const nav = document.querySelector(".nav");
      const header = document.querySelector(".site-header");

      toggleBtn?.addEventListener("click", () => {
        const open = header.classList.toggle("nav-open");
        toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
        nav.classList.toggle("show", open);
      });

      // close the menu when a link is clicked (mobile)
      nav?.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          header.classList.remove("nav-open");
          nav.classList.remove("show");
          toggleBtn?.setAttribute("aria-expanded", "false");
        });
      });

      // highlight active link on scroll
      const links = [...document.querySelectorAll(".nav a")];
      const sections = links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

      const setActive = () => {
        let current = null;
        const y =
          window.scrollY +
          (parseInt(
            getComputedStyle(document.documentElement).getPropertyValue("--h")
          ) || 64) +
          20;
        for (const sec of sections) {
          if (sec.offsetTop <= y) current = sec;
        }
        links.forEach((l) =>
          l.classList.toggle(
            "active",
            current && l.getAttribute("href") === "#" + current.id
          )
        );
      };

    // send message button

    const RECEIVER_EMAIL = "sridharan.mayan@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subjectRaw = document.getElementById("subject").value.trim();
    const messageRaw = document.getElementById("message").value.trim();

    if (!name || !email || !subjectRaw || !messageRaw) {
      document.getElementById("formStatus").textContent =
        "Please fill all required fields.";
      return;
    }

    const subject = encodeURIComponent(subjectRaw);

    const bodyText =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${messageRaw}`;

    const body = encodeURIComponent(bodyText);

    const mailtoLink =
      `mailto:${RECEIVER_EMAIL}?subject=${subject}&body=${body}`;

   

    window.location.href = mailtoLink;
  });
});

      window.addEventListener("scroll", setActive, { passive: true });
      window.addEventListener("load", setActive);