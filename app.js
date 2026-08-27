const DATA={
"30-70":{name:"30% BR + 70% MUNDIAL",plans:[
{name:"START",followers:"500",likes:"5.000",views:"7.500",posts:5,comments:0,price:"R$ 14,99"},
{name:"BÁSICO",followers:"1.000",likes:"10.500",views:"17.500",posts:7,comments:0,price:"R$ 34,90"},
{name:"PRO",followers:"2.000",likes:"20.000",views:"30.000",posts:10,comments:5,price:"R$ 69,90",hot:1},
{name:"PREMIUM",followers:"5.000",likes:"45.000",views:"75.000",posts:15,comments:10,price:"R$ 159,90"},
{name:"MASTER",followers:"10.000",likes:"100.000",views:"150.000",posts:20,comments:20,price:"R$ 329,90"}]},
"50-50":{name:"50% BR + 50% MUNDIAL",plans:[
{name:"START",followers:"500",likes:"5.000",views:"7.500",posts:5,comments:0,price:"R$ 19,90"},
{name:"BÁSICO",followers:"1.000",likes:"10.500",views:"17.500",posts:7,comments:0,price:"R$ 39,90"},
{name:"PRO",followers:"2.000",likes:"20.000",views:"30.000",posts:10,comments:5,price:"R$ 79,90",hot:1},
{name:"PREMIUM",followers:"5.000",likes:"45.000",views:"75.000",posts:15,comments:10,price:"R$ 179,90"},
{name:"MASTER",followers:"10.000",likes:"100.000",views:"150.000",posts:20,comments:20,price:"R$ 349,90"}]},
"br":{name:"100% BRASILEIROS",plans:[
{name:"START",followers:"500",likes:"5.000",views:"7.500",posts:5,comments:0,price:"R$ 89,90"},
{name:"BÁSICO",followers:"1.000",likes:"10.500",views:"17.500",posts:7,comments:0,price:"R$ 149,90"},
{name:"PRO",followers:"2.000",likes:"20.000",views:"30.000",posts:10,comments:5,price:"R$ 249,90",hot:1},
{name:"PREMIUM",followers:"5.000",likes:"45.000",views:"75.000",posts:15,comments:10,price:"R$ 449,90"},
{name:"MASTER",followers:"10.000",likes:"100.000",views:"150.000",posts:20,comments:20,price:"R$ 799,90"}]}};
const key=new URLSearchParams(location.search).get("servico")||sessionStorage.getItem("servico")||"30-70",svc=DATA[key]||DATA["30-70"];
if(document.querySelector("#plans")){sessionStorage.setItem("servico",key);document.querySelector("#service").textContent=svc.name;document.querySelector("#plans").innerHTML=svc.plans.map((p,i)=>`<article class="plan ${p.hot?"hot":""}">${p.hot?"<mark>🔥 MAIS VENDIDO</mark>":""}<h3>${p.name}</h3><b class="big">${p.followers}</b><small>seguidores</small><ul><li>❤️ ${p.likes} curtidas</li><li>👁️ ${p.views} visualizações</li><li>📸 ${p.posts} publicações</li><li>💬 ${p.comments?p.comments+" comentários":"Sem comentários"}</li></ul><strong class="price">${p.price}</strong><button class="btn full" onclick="choose(${i})">ESCOLHER PLANO</button></article>`).join("")}
function choose(i){sessionStorage.setItem("pedido",JSON.stringify({service:svc.name,plan:svc.plans[i]}));location.href="checkout.html"}
if(document.querySelector("#summary")){const o=JSON.parse(sessionStorage.getItem("pedido")||"null");if(!o)location.href="index.html";else{const p=o.plan;document.querySelector("#summary").innerHTML=`<small>PLANO SELECIONADO</small><h2>${p.name}</h2><p>${o.service}</p><hr>👤 ${p.followers} seguidores<br>❤️ ${p.likes} curtidas<br>👁️ ${p.views} visualizações<br>📸 ${p.posts} publicações${p.comments?`<br>💬 ${p.comments} comentários`:""}<h2>${p.price}</h2>`;document.querySelector("#form").onsubmit=e=>{e.preventDefault();const text=`🚀 *NOVO PEDIDO — MIDIANET GROWTH*\n\n👤 *Nome:* ${nome.value}\n📱 *Instagram:* ${instagram.value}\n🌐 *Serviço:* ${o.service}\n📦 *Plano:* ${p.name} — ${p.followers} seguidores\n❤️ *Curtidas:* ${p.likes}\n👁️ *Visualizações:* ${p.views}\n📸 *Publicações:* ${p.posts}${p.comments?`\n💬 *Comentários:* ${p.comments}`:""}\n💳 *Pagamento:* ${pagamento.value}\n💰 *Valor:* ${p.price}\n\n✅ Quero finalizar meu pedido.`;window.open("https://wa.me/5521991689838?text="+encodeURIComponent(text),"_blank")}}}