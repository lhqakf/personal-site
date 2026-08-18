const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 80}ms`;
  observer.observe(element);
});

document.querySelector('.player button')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  button.textContent = button.textContent === '▶' ? 'Ⅱ' : '▶';
});

const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=`${e.clientX}px`;glow.style.top=`${e.clientY}px`});window.addEventListener('scroll',()=>document.querySelector('.read-progress').style.width=`${scrollY/(document.documentElement.scrollHeight-innerHeight)*100}%`);
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.timeline-item').forEach(x=>x.classList.toggle('filtered',b.dataset.filter!=='all'&&x.dataset.type!==b.dataset.filter))}));
document.querySelectorAll('.tilt-card').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${x*4}deg) rotateX(${-y*4}deg) translateY(-4px)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
const projects={creator:['个人自媒体账号运营','自 2025 年 1 月起，独立运营多个平台的舞蹈短视频账号。持续追踪潮流趋势与平台规则，自主完成热点选题、脚本构思、出镜拍摄和内容发布，并熟悉品牌提案、PR 沟通、商务洽谈、内容报备及发布复盘流程。从个人作品到集体舞台，全权主导参与不同形式的舞蹈内容创作，覆盖选题策划、出镜演绎与内容传播。多条作品获得高传播，代表作最高浏览量达 116.5 万。',['1 年+','数百条','116.5 万']]},detail=document.querySelector('.detail-dialog');document.querySelectorAll('.project-open').forEach(b=>b.addEventListener('click',()=>{const[t,p,s]=projects[b.dataset.project];detail.querySelector('h2').textContent=t;detail.querySelector('p').textContent=p;detail.querySelector('.detail-stats').innerHTML=s.map((v,i)=>`<span><b>${v}</b>${['运营时间','原创作品','代表作最高浏览'][i]}</span>`).join('');detail.showModal()}));document.querySelector('.detail-close').addEventListener('click',()=>detail.close());
let timer;document.querySelectorAll('.photo').forEach(p=>{const show=()=>{const t=document.querySelector('.story-toast');t.textContent=p.dataset.story;t.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>t.classList.remove('show'),3500)};p.addEventListener('click',show);p.addEventListener('keydown',e=>e.key==='Enter'&&show())});
const matlabCard=document.querySelector('.skill-card-open'),matlabDetail=document.querySelector('.skill-detail-dialog');
const openMatlabDetail=()=>matlabDetail?.showModal();
matlabCard?.addEventListener('click',openMatlabDetail);
matlabCard?.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openMatlabDetail()}});
document.querySelector('.skill-detail-close')?.addEventListener('click',()=>matlabDetail.close());
matlabDetail?.addEventListener('click',event=>{if(event.target===matlabDetail)matlabDetail.close()});
document.querySelector('.matlab-report-preview')?.addEventListener('click',()=>window.open('matlab-error-comparison.png','_blank','noopener'));

const mobileMenuToggle=document.querySelector('.mobile-menu-toggle'),mobileMenu=document.querySelector('.mobile-menu');
function closeMobileMenu(){mobileMenu?.classList.remove('open');mobileMenuToggle?.setAttribute('aria-expanded','false');mobileMenuToggle?.setAttribute('aria-label','打开导览菜单')}
mobileMenuToggle?.addEventListener('click',()=>{const willOpen=!mobileMenu.classList.contains('open');mobileMenu.classList.toggle('open',willOpen);mobileMenuToggle.setAttribute('aria-expanded',String(willOpen));mobileMenuToggle.setAttribute('aria-label',willOpen?'关闭导览菜单':'打开导览菜单')});
mobileMenu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMobileMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMobileMenu()});
