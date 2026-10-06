function toggleMenu(){const n=document.getElementById('nav');if(n)n.style.display=n.style.display==='flex'?'none':'flex'}
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=850)document.getElementById('nav').style.display='none'}));
