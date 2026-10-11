      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");

      menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });

      document.getElementById("year").textContent = new Date().getFullYear();

      // Small rotating role text, without requiring an external JavaScript library.
      const roles = [
        "web experiences",
        "useful applications",
        "my development skills",
      ];
      const roleElement = document.getElementById("typedRole");
      let roleIndex = 0;
      setInterval(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleElement.textContent = roles[roleIndex];
      }, 2300);