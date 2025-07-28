document.addEventListener('DOMContentLoaded', () => {
  const taxToggle = document.getElementById("switchCheckDefault");

  if (taxToggle) {
    taxToggle.addEventListener("change", () => {
      const taxInfo = document.getElementsByClassName("tax-info");
      const displayStyle = taxToggle.checked ? "inline" : "none";

      for (let info of taxInfo) {
        info.style.display = displayStyle;
      }
    });

    // Optional: Initialize correct visibility on page load
    const event = new Event('change');
    taxToggle.dispatchEvent(event);
  }
});
