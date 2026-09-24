(function(){
  const items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});items.forEach(i=>io.observe(i));}else{items.forEach(i=>i.classList.add('visible'));}
  document.querySelectorAll('.accordion-btn').forEach(btn=>{btn.addEventListener('click',()=>{const panel=btn.nextElementSibling;const open=panel.classList.toggle('open');btn.setAttribute('aria-expanded',open);btn.querySelector('span').textContent=open?'−':'+';});btn.setAttribute('aria-expanded','false');});
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}}));
})();
