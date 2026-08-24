
document.addEventListener('DOMContentLoaded', function(){
  const toggle=document.querySelector('.menu-toggle');
  const menu=document.querySelector('.mobile-menu');
  if(!toggle||!menu)return;
  toggle.addEventListener('click',function(){
    const open=menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
});
