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

      window.addEventListener("scroll", setActive, { passive: true });
      window.addEventListener("load", setActive);