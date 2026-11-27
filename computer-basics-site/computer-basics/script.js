const $=i=>document.getElementById(i);
const slug=n=>n.toLowerCase().replace(/\(.*?\)/g,"").trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const root=document.documentElement;
try{const t=localStorage.getItem("theme");if(t)root.dataset.theme=t}catch(e){}
$("theme").onclick=()=>{const d=root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;root.dataset.theme=d?"light":"dark";try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}};
const pills=(el,list,cur,fn)=>{el.innerHTML=list.map(c=>`<button type="button" class="pill" aria-pressed="${c===cur}" data-c="${c}">${c}</button>`).join("");el.querySelectorAll("button").forEach(b=>b.onclick=()=>fn(b.dataset.c))};
const card=p=>`<article class="card"><div class="ph"><span class="badge">${p[1].toUpperCase()}</span><span>${p[0]}</span><img loading="lazy" src="images/${slug(p[0])}.jpg" alt="Photo of ${p[0]}" onerror="this.remove()"></div><div class="body"><h3>${p[0]}</h3><p>${p[2]}</p><p class="an">${p[3]}</p></div></article>`;
// Parts
let cat="All";
function parts(){const s=$("q").value.toLowerCase().trim(),r=PARTS.filter(p=>(cat==="All"||p[1]===cat)&&(p[0]+p[2]).toLowerCase().includes(s));
 pills($("pills"),["All","Internal","Input","Output","Storage","Ports","Other"],cat,c=>{cat=c;parts()});
 $("count").textContent=`Showing ${r.length} of ${PARTS.length} parts`;$("grid").innerHTML=r.map(card).join("")||"<p>No part matches. Try a shorter word.</p>"}
$("q").oninput=parts;parts();
// Paths
$("pathgrid").innerHTML=PATHS.map((p,i)=>`<div class="path"><small>${p.st.length} STEPS</small><h3>${p.t}</h3><p class="sub">${p.s}</p><button type="button" data-i="${i}">Start this path &rarr;</button></div>`).join("");
document.querySelectorAll(".path button").forEach(b=>b.onclick=()=>{const p=PATHS[b.dataset.i],v=$("pathview");
 v.innerHTML=`<h3>${p.t}</h3><ol>${p.st.map(s=>{const x=Array.isArray(s)?s:(PARTS.find(a=>a[0]===s)||[s,"",""]).filter((_,k)=>k===0||k===2);return `<li><b>${x[0]}</b><br>${x[1]}</li>`}).join("")}</ol><a class="btn" href="#quiz">Check what you learned</a>`;v.hidden=false;v.scrollIntoView({behavior:"smooth",block:"nearest"})});
// Simulator
let si=0;function sim(){$("sim").innerHTML=SIM.map((s,i)=>`<div class="step ${i<=si?"on":""} ${i===si?"now":""}"><b>${i+1}</b><div><strong>${s[0]}</strong><br>${i<=si?s[1]:""}</div></div>`).join("")+`<button class="btn" type="button" id="sn">${si<SIM.length-1?"Next step":"Start again"}</button>`;$("sn").onclick=()=>{si=si<SIM.length-1?si+1:0;sim()}}sim();
// Software
let tab="Word";const done={};
function soft(){pills($("tabs"),Object.keys(LESSONS),tab,t=>{tab=t;soft()});
 $("les").innerHTML=LESSONS[tab].map((l,i)=>`<li><input type="checkbox" id="l${tab}${i}" ${done[tab+i]?"checked":""} aria-label="Mark done"><label for="l${tab}${i}"><strong>${l[0]}</strong><br>${l[1]}</label></li>`).join("");
 document.querySelectorAll("#les input").forEach((c,i)=>c.onchange=()=>{done[tab+i]=c.checked;pr()});pr()}
function pr(){const n=LESSONS[tab].filter((_,i)=>done[tab+i]).length;$("prog").textContent=`${n} of ${LESSONS[tab].length} ${tab} lessons done`}soft();
// Quiz
let qi=0,sc=0;function quiz(){const b=$("qbox");
 if(qi>=QUIZ.length){b.innerHTML=`<h3>You scored ${sc} out of ${QUIZ.length}</h3><p>${sc>=5?"Great work.":"Review the parts and try again."}</p><button class="btn" type="button" id="qa">Try again</button>`;$("qa").onclick=()=>{qi=0;sc=0;quiz()};return}
 const q=QUIZ[qi];b.innerHTML=`<h3>${qi+1}. ${q[0]}</h3>`+q[1].map((o,i)=>`<button type="button" class="opt" data-i="${i}">${o}</button>`).join("")+`<p id="fb" aria-live="polite"></p>`;
 b.querySelectorAll(".opt").forEach(o=>o.onclick=()=>{const ok=+o.dataset.i===q[2];if(ok)sc++;b.querySelectorAll(".opt").forEach((x,j)=>{x.disabled=true;if(j===q[2])x.classList.add("ok");else if(x===o)x.classList.add("bad")});
  $("fb").innerHTML=(ok?"Correct. ":`Not quite. The answer is ${q[1][q[2]]}. `)+'<button class="btn" type="button" id="qn">Next</button>';$("qn").onclick=()=>{qi++;quiz()}})}quiz();
// Glossary
function gl(){const s=$("gq").value.toLowerCase();$("gl").innerHTML=GLOSS.filter(g=>(g[0]+g[1]).toLowerCase().includes(s)).sort((a,b)=>a[0].localeCompare(b[0])).map(g=>`<div><dt>${g[0]}</dt><dd>${g[1]}</dd></div>`).join("")}$("gq").oninput=gl;gl();
