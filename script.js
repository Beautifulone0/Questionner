document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav a');
  const sections = document.querySelectorAll('.section');
  const nextButtons = document.querySelectorAll('.next-btn');
  const prevButtons = document.querySelectorAll('.prev-btn');

  
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      activateSection(index);
    });
  });

 
  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentIndex = getCurrentSectionIndex();
      if (currentIndex < sections.length - 1) {
        activateSection(currentIndex + 1);
      }
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentIndex = getCurrentSectionIndex();
      if (currentIndex > 0) {
        activateSection(currentIndex - 1);
      }
    });
  });

 
  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', (e) => {
      const id = e.target.id;
      const value = e.target.value;
      const relatedInput = document.getElementById(id + '-other');
      if (relatedInput) {
        relatedInput.style.display = (value === 'others-specify' || value === 'other') ? 'block' : 'none';
      }
    });
  });

  
  function activateSection(index) {
    sections.forEach((section, i) => {
      section.classList.toggle('active', i === index);
      section.style.display = i === index ? 'block' : 'none';
    });

    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });
  }

  
  function getCurrentSectionIndex() {
    return Array.from(sections).findIndex(section => section.classList.contains('active'));
  }

  
  activateSection(0);
});
