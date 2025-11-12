// Theme toggle script
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  if(current === 'dark') root.setAttribute('data-theme','dark');
  function setTheme(t){
    if(t === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
    localStorage.setItem('theme', t);
  }
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const now = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(now);
    });
  }
})();
