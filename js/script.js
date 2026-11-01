
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// =====================================
// CHARLTON PLUMBING DEMO CONTACT FORM
// =====================================

const charltonForm = document.getElementById(
  "charlton-contact-form"
);

if (charltonForm) {
  charltonForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Demo only: no enquiry is sent or stored.
    const successMessage = document.getElementById(
      "contact-form-success"
    );

    if (successMessage) {
      successMessage.hidden = false;
      successMessage.textContent =
        "Demo complete! This is a fictional plumbing business, so your enquiry has not been sent or stored.";
    }

    charltonForm.reset();
  });
}
