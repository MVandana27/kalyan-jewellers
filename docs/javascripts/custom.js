// Back to top button
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.innerHTML = '↑ Back to Top';
    btn.classList.add('back-to-top');
    document.body.appendChild(btn);
    
    btn.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });



