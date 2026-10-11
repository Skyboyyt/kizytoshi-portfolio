const root=document.documentElement,theme=document.querySelector('#theme');
function setTheme(value){root.dataset.theme=value;theme.textContent=value==='dark'?'☼':'☾';theme.setAttribute('aria-label',`Switch to ${value==='dark'?'light':'dark'} theme`)}
try{setTheme(localStorage.getItem('kizytoshi-theme')||'dark')}catch{setTheme('dark')}
theme.addEventListener('click',()=>{const value=root.dataset.theme==='dark'?'light':'dark';setTheme(value);try{localStorage.setItem('kizytoshi-theme',value)}catch{}});
const menu=document.querySelector('#menu'),nav=document.querySelector('nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});window.addEventListener('resize',()=>{if(innerWidth>850)closeMenu()});
const dialog=document.querySelector('#lightbox'),fullImage=document.querySelector('#full-image');document.querySelectorAll('.work-card').forEach(card=>card.addEventListener('click',()=>{fullImage.src=card.dataset.image;fullImage.alt=card.querySelector('img').alt;document.querySelector('#image-title').textContent=card.dataset.title;dialog.showModal()}));document.querySelector('#close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.section').forEach(section=>{section.classList.add('reveal');observer.observe(section)})}
