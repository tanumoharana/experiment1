const heading = document.getElementById("main");
      const button = document.getElementById("manipulate-btn");
      const paragraphs = document.querySelectorAll(".text");

      button.addEventListener("click", function() {
        heading.textContent = "DOM manipulation successful!";
        paragraphs.forEach((p, index) => {
          p.textContent = `Paragraph ${index + 1} has been updated!`;
          p.classList.add("highlight");
        });
      });
