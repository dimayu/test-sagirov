document.querySelector('#burger').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active');
  document.querySelector('#burger').classList.toggle('active');
});

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  const header = document.querySelector('.header');
  
  scrollDistance > 90 ? header.classList.add('bg-visible') : header.classList.remove('bg-visible')
});