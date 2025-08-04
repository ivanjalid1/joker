import"https://unpkg.com/lucide@latest/dist/umd/lucide.js";let m=0,u=0;document.addEventListener("mousemove",n=>{m=n.clientX,u=n.clientY,document.querySelectorAll(".btn-primary, .btn-secondary").forEach(e=>{const o=e.getBoundingClientRect(),s=o.left+o.width/2,d=o.top+o.height/2,i=m-s,a=u-d,r=Math.sqrt(i*i+a*a);if(r<150){const l=(150-r)/150,c=i*l*.1,p=a*l*.1;e.style.transform=`translate(${c}px, ${p}px)`}else e.style.transform="translate(0, 0)"})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".particle").forEach((t,e)=>{const o=Math.random()*2;t.style.animationDelay=`${o}s`,setInterval(()=>{const s=t.getBoundingClientRect(),d=s.left+s.width/2,i=s.top+s.height/2,a=m-d,r=u-i,l=Math.sqrt(a*a+r*r);if(l<100){const c=(100-l)/100;t.style.filter=`blur(0px) brightness(${1+c})`,t.style.transform=`scale(${1+c*.5})`}else t.style.filter="blur(0.5px) brightness(1)",t.style.transform="scale(1)"},50)})});document.addEventListener("click",n=>{const t=document.createElement("div");t.className="click-ripple",t.style.cssText=`
      position: fixed;
      left: ${n.clientX-10}px;
      top: ${n.clientY-10}px;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(0, 255, 136, 0.6) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      animation: ripple-expand 0.6s ease-out forwards;
    `,document.body.appendChild(t),setTimeout(()=>{t.remove()},600)});window.addEventListener("scroll",()=>{const n=window.pageYOffset;document.querySelectorAll(".main-container::before, .main-container::after").forEach((e,o)=>{const s=.5+o*.2;e.style.transform=`translateY(${n*s}px)`})});const f=document.createElement("style");f.textContent=`
    @keyframes ripple-expand {
      0% {
        transform: scale(1);
        opacity: 0.8;
      }
      100% {
        transform: scale(20);
        opacity: 0;
      }
    }
  `;document.head.appendChild(f);document.addEventListener("DOMContentLoaded",()=>{typeof lucide<"u"&&lucide.createIcons()});window.addEventListener("load",()=>{setTimeout(()=>{document.body.classList.add("loaded"),y(),setTimeout(()=>{document.querySelectorAll('[style*="will-change"], .hero-title, .logo-container, .action-block').forEach(t=>{t.style.willChange="auto"})},5e3)},1e3)});function y(){setTimeout(()=>{h()},2e3),setTimeout(()=>{g()},3e3),setTimeout(()=>{E()},4e3)}function h(){document.querySelectorAll(".decorative-cofre, .decorative-gambling").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.15) rotate(5deg)",e.style.filter="brightness(1.3) saturate(1.2)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1) rotate(0deg)",e.style.filter="brightness(1) saturate(1)"})});const t=document.querySelector(".joker-text");t&&t.addEventListener("mouseenter",()=>{t.style.animation+=", wave-text 0.8s ease-in-out 3"})}function g(){let n=0;document.addEventListener("mousemove",t=>{const e=Date.now();e-n>100&&Math.random()>.7&&(v(t.clientX,t.clientY),n=e)})}function v(n,t){const e=document.createElement("div");e.style.position="fixed",e.style.left=n-2+"px",e.style.top=t-2+"px",e.style.width="4px",e.style.height="4px",e.style.background="rgba(0, 255, 136, 0.4)",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.zIndex="9999",e.style.animation="sparkle 0.8s ease-out forwards",document.body.appendChild(e),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},800)}function E(){document.querySelectorAll(".particle").forEach((t,e)=>{e%4===0&&setTimeout(()=>{t.style.animation+=", magnetic-pulse 6s ease-in-out infinite"},e*500),e%2===0&&setTimeout(()=>{t.style.animation+=", super-float 5s ease-in-out infinite"},e*300)})}
