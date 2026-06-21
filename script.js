


window.addEventListener('scroll', () => {
    const header = document.getElementById('slow-header');
    const scrollPosition = window.scrollY;
  
    const speedFactor = 0.095; 
    
    const yOffset = - scrollPosition * speedFactor;
    header.style.transform = `translateY(${yOffset}vw)`;
  });