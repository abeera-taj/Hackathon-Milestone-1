(() => {
  let toggleSkillsButton = document.getElementById(
    "toggle-skills"
  ) as HTMLButtonElement | null;
  let skillsSection = document.getElementById(
    "skills-section"
  ) as HTMLElement | null;

  if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener("click", () => {
      if (
        skillsSection.style.display === "none" ||
        skillsSection.style.display === ""
      ) {
        skillsSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
      } else {
        skillsSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills";
      }
    });
  }
})();
