(function(){
  const progress=document.getElementById('progress');
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open'); menu.setAttribute('aria-expanded',nav.classList.contains('open'));}); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}
  function updateProgress(){if(!progress)return;const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?(window.scrollY/h)*100:0)+'%';}
  window.addEventListener('scroll',updateProgress,{passive:true}); updateProgress();
})();
