import './style.css';

/* ===================== ICON SYSTEM (no emoji) ===================== */
const ICONS = {
  home:'<path d="M4 11.3 12 4.3l8 7"/><path d="M6.2 10v8.4a1 1 0 0 0 1 1h3v-6h3.6v6h3a1 1 0 0 0 1-1V10"/>',
  calendar:'<rect x="4" y="5.3" width="16" height="15" rx="3"/><path d="M8 3.3v4.2M16 3.3v4.2M4.3 9.8h15.4"/>',
  ledger:'<rect x="5.2" y="3.8" width="13.6" height="16.4" rx="2.4"/><path d="M8.3 8.3h7.4M8.3 11.6h7.4M8.3 14.9h4.6"/>',
  chart:'<path d="M5 19V11M11 19V5.5M17 19v-8"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M12 3.3v2.5M12 18.2v2.5M20.7 12h-2.5M5.8 12H3.3M17.8 6.2l-1.75 1.75M8 16l-1.75 1.75M17.8 17.8l-1.75-1.75M8 8 6.25 6.25"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  close:'<path d="M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7"/>',
  chevL:'<path d="M15 5.5l-6.5 6.5 6.5 6.5"/>',
  chevR:'<path d="M9 5.5l6.5 6.5-6.5 6.5"/>',
  download:'<path d="M12 4v11.5"/><path d="M7.3 11.6 12 16.3l4.7-4.7"/><path d="M5 19.5h14"/>',
  trash:'<path d="M5 7.4h14"/><path d="M9.4 7.4V5.7a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1v1.7"/><path d="M6.8 7.4l.8 11.4a1.4 1.4 0 0 0 1.4 1.3h6a1.4 1.4 0 0 0 1.4-1.3l.8-11.4"/>',
  refresh:'<path d="M5 12a7 7 0 0 1 11.7-5.2M19 12a7 7 0 0 1-11.7 5.2"/><path d="M16.2 4.6v3.2h-3.2M7.8 19.4v-3.2H11"/>',
  export:'<path d="M12 4v11.5"/><path d="M7.3 11.6 12 16.3l4.7-4.7"/><path d="M5 19.5h14"/>',
  arrowUp:'<path d="M12 19V6M6.5 11.5 12 6l5.5 5.5"/>',
  arrowDown:'<path d="M12 5v13M17.5 12.5 12 18l-5.5-5.5"/>',
  dot:'<circle cx="12" cy="12" r="4"/>',
  eth:'<path d="M12 4.5v15M4.5 12h15" /><path d="M7.5 7.5l9 9M16.5 7.5l-9 9"/>',
  wallet:'<path d="M4.3 7.8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6.3a2 2 0 0 1-2-2z"/><path d="M15.6 12.3h3.2"/>',
  bank:'<path d="M4 10.3 12 5l8 5.3"/><path d="M5.6 10.3V19M9.4 10.3V19M14.6 10.3V19M18.4 10.3V19"/><path d="M4 19h16"/>',
  cash:'<rect x="3.3" y="7" width="17.4" height="11" rx="2.2"/><circle cx="12" cy="12.5" r="2.4"/>',
  mobile:'<rect x="7.6" y="3.3" width="8.8" height="17.4" rx="2"/><path d="M10.6 17.3h2.8"/>',
  card:'<rect x="3.3" y="6" width="17.4" height="12.5" rx="2.4"/><path d="M3.3 10.2h17.4"/>',
  piggy:'<path d="M5.6 12.8a5.6 4.7 0 0 1 5.9-4.7c2.7.1 4.9 1.8 5.4 4l1.7.15c.4 0 .55.5.25.8l-1.2 1.15v1.6c0 .75-.6 1.35-1.35 1.35h-1v1.4a.8.8 0 0 1-.8.8H13a.8.8 0 0 1-.8-.8v-.5H9.4v.5a.8.8 0 0 1-.8.8H7.2a.8.8 0 0 1-.8-.8v-1.2a3.7 3.7 0 0 1-2.1-3.2c0-.4.05-.65.15-.95"/><circle cx="14.3" cy="11" r=".25" fill="currentColor" stroke="none"/>',
  coin:'<circle cx="12" cy="12" r="7.6"/><path d="M9.5 9.7c.3-1 1.3-1.6 2.5-1.6 1.5 0 2.6.85 2.6 1.95 0 2.35-3.7 1.85-3.7 4.05 0 1.1 1 1.9 2.4 1.9 1.2 0 2.15-.6 2.45-1.6M12 6.6v1.1M12 16.3v1.1"/>',
  food:'<circle cx="12" cy="12" r="7.4"/><path d="M9.1 8v8M8.2 8v3a1 1 0 0 0 1.8 0V8M15.4 8c-1 0-1.7.9-1.7 2.2 0 1 .55 1.8 1.2 2.1V16"/>',
  transport:'<rect x="4.2" y="6.2" width="15.6" height="9.6" rx="2.6"/><path d="M4.2 10.8h15.6"/><circle cx="8" cy="17.6" r="1.3"/><circle cx="16" cy="17.6" r="1.3"/>',
  coffee:'<path d="M5.6 8.6h10v5.8a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4z"/><path d="M15.6 9.6H17a2.2 2.2 0 1 1 0 4.4h-1.1"/><path d="M8.1 5.3c0 .8.9 1-.85 2.2M11.6 5.3c0 .8.9 1-.85 2.2"/>',
  shopping:'<path d="M6.6 9 7.8 5.4A2 2 0 0 1 9.7 4h4.6a2 2 0 0 1 1.9 1.4L17.4 9"/><rect x="4.8" y="9" width="14.4" height="10.7" rx="2.2"/>',
  bills:'<path d="M13.2 3.6 6.7 13.2h4.6L10.8 20.4 17.3 11h-4.6z"/>',
  housing:'<path d="M4.2 11.8 12 5.2l7.8 6.6"/><rect x="9.1" y="12.7" width="5.8" height="6.7" rx="1"/><circle cx="12" cy="16" r=".2" fill="currentColor" stroke="none"/>',
  health:'<path d="M12 19c-4.3-2.6-7.3-5.2-7.3-8.4C4.7 8 6.6 6 9 6c1.25 0 2.4.6 3 1.6C12.6 6.6 13.75 6 15 6c2.4 0 4.3 2 4.3 4.6 0 3.2-3 5.8-7.3 8.4z"/>',
  education:'<path d="M12 5.2 3.5 9l8.5 3.8 8.5-3.8z"/><path d="M7.4 11v4.6c0 1.1 2.1 2 4.6 2s4.6-.9 4.6-2V11"/><path d="M20.2 9.2v4.2"/>',
  entertainment:'<circle cx="12" cy="12" r="7.4"/><path d="M10.3 9.2 15 12l-4.7 2.8z"/>',
  family:'<circle cx="9" cy="8.4" r="2.3"/><circle cx="15.6" cy="9.5" r="2"/><path d="M4.4 19c.4-3 2.2-4.7 4.6-4.7s4.2 1.7 4.6 4.7"/><path d="M13.6 14.5c1.9.25 3.4 1.85 3.8 4.5"/>',
  other:'<path d="M4 8.2 12 4l8 4.2-8 4.2-8-4.2z"/><path d="M4 8.2v7.4L12 19.7l8-4.1V8.2"/><path d="M12 12.5v7.2"/>',
  salary:'<rect x="3.6" y="8" width="16.8" height="10.6" rx="2.2"/><path d="M8.4 8V6.2A1.3 1.3 0 0 1 9.7 5h4.6a1.3 1.3 0 0 1 1.3 1.2V8"/><path d="M3.6 12.6h16.8"/>',
  business:'<path d="M4 16.6 9.6 11l3.3 3.3 6.8-6.8"/><path d="M15.1 7.1h4.8v4.8"/>',
  gift:'<rect x="4.4" y="10" width="15.2" height="9.7" rx="1.6"/><path d="M4.4 13.6h15.2M12 10v9.7"/><path d="M9 10c-1.8-2-1-4.5 1-4.8 1.5-.2 2 2.1 2 4.8M15 10c1.8-2 1-4.5-1-4.8-1.5-.2-2 2.1-2 4.8"/>',
  freelance:'<path d="M7.2 4h7l3 3v13a1 1 0 0 1-1 1H7.2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M14.2 4v3h3"/><path d="M9 12.3h6M9 15.4h6M9 9.2h3"/>'
};
function icon(name, size){
  size = size||20;
  const body = ICONS[name] || ICONS.other;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+body+'</svg>';
}
function hexA(hex,a){
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16), g = parseInt(h.substring(2,4),16), b = parseInt(h.substring(4,6),16);
  return 'rgba('+r+','+g+','+b+','+a+')';
}
function catTile(cat, size){
  size = size||42;
  const rs = Math.round(size*0.31);
  return '<div class="cat-tile" style="width:'+size+'px;height:'+size+'px;border-radius:'+rs+'px;background:'+hexA(cat.color,0.15)+';color:'+cat.color+'">'+icon(cat.icon, Math.round(size*0.48))+'</div>';
}
function fillIconBtn(id, name, size){ const el=document.getElementById(id); if(el) el.innerHTML = icon(name, size||18); }

const COLOR_PALETTE = ['#C9971A','#4C7CE0','#8B5E34','#C15FC1','#E2703A','#1F6E43','#B0432F','#5CB3B3','#8B2E3C','#8A6BD1','#6E637A','#1F6E43','#4C7CE0','#C15FC1','#5CB3B3','#E0B93D'];
const ICON_KEYS = ['food','transport','coffee','shopping','bills','housing','health','education','family','entertainment','other','salary','business','gift','freelance','coin','wallet','bank','cash','mobile','card','piggy'];
const ACCOUNT_ICON_KEYS = ['bank','cash','mobile','card','piggy','coin'];

/* ===================== ETHIOPIAN CALENDAR MATH ===================== */
const JD_EPOCH = 1723856;
function gregorianToJDN(y,m,d){
  const a = Math.floor((14-m)/12), yy = y+4800-a, mm = m+12*a-3;
  return d + Math.floor((153*mm+2)/5) + 365*yy + Math.floor(yy/4) - Math.floor(yy/100) + Math.floor(yy/400) - 32045;
}
function jdnToGregorian(jdn){
  let a=jdn+32044, b=Math.floor((4*a+3)/146097), c=a-Math.floor((146097*b)/4);
  let d=Math.floor((4*c+3)/1461), e=c-Math.floor((1461*d)/4), m=Math.floor((5*e+2)/153);
  const day=e-Math.floor((153*m+2)/5)+1, month=m+3-12*Math.floor(m/10), year=100*b+d-4800+Math.floor(m/10);
  return {y:year,m:month,d:day};
}
function jdnToEthiopian(jdn){
  const r=(jdn-JD_EPOCH)%1461;
  const n=(r%365)+365*Math.floor(r/1460);
  const year=4*Math.floor((jdn-JD_EPOCH)/1461)+Math.floor(r/365)-Math.floor(r/1460);
  const month=Math.floor(n/30)+1, day=(n%30)+1;
  return {y:year,m:month,d:day};
}
function ethiopianToJDN(y,m,d){ return d + 30*(m-1) + 365*(y-1) + Math.floor(y/4) + JD_EPOCH - 1; }
function gregToEth(y,m,d){ return jdnToEthiopian(gregorianToJDN(y,m,d)); }
function ethToGreg(y,m,d){ return jdnToGregorian(ethiopianToJDN(y,m,d)); }
function isEthLeap(y){ return y%4===3; }
function ethMonthLen(y,m){ return m<=12 ? 30 : (isEthLeap(y)?6:5); }
function weekdayOfEth(y,m,d){ const g = ethToGreg(y,m,d); return new Date(Date.UTC(g.y,g.m-1,g.d)).getUTCDay(); }
const ETH_MONTHS = [
  {am:'መስከረም',en:'Meskerem'},{am:'ጥቅምት',en:'Tikimt'},{am:'ኅዳር',en:'Hidar'},{am:'ታኅሳስ',en:'Tahsas'},
  {am:'ጥር',en:'Tir'},{am:'የካቲት',en:'Yekatit'},{am:'መጋቢት',en:'Megabit'},{am:'ሚያዝያ',en:'Miyazya'},
  {am:'ግንቦት',en:'Ginbot'},{am:'ሰኔ',en:'Sene'},{am:'ሐምሌ',en:'Hamle'},{am:'ነሐሴ',en:'Nehase'},{am:'ጳጉሜ',en:'Pagume'}
];
const ETH_WEEKDAYS = ['እ','ሰ','ማ','ረ','ሐ','ዓ','ቅ'];
function todayEth(){ const now=new Date(); return gregToEth(now.getFullYear(), now.getMonth()+1, now.getDate()); }
function fmtEthDate(e){ return ETH_MONTHS[e.m-1].am+' '+e.d+', '+e.y; }
function fmtEthShort(e){ return ETH_MONTHS[e.m-1].am+' '+e.d; }

/* ===================== STATE ===================== */
const DEFAULT_CATS = [
  {id:'c1',type:'expense',name:'Food & Drink',icon:'food',color:'#C9971A'},
  {id:'c2',type:'expense',name:'Transport',icon:'transport',color:'#4C7CE0'},
  {id:'c3',type:'expense',name:'Coffee',icon:'coffee',color:'#8B5E34'},
  {id:'c4',type:'expense',name:'Shopping',icon:'shopping',color:'#C15FC1'},
  {id:'c5',type:'expense',name:'Bills',icon:'bills',color:'#E2703A'},
  {id:'c6',type:'expense',name:'Housing',icon:'housing',color:'#1F6E43'},
  {id:'c7',type:'expense',name:'Health',icon:'health',color:'#B0432F'},
  {id:'c8',type:'expense',name:'Education',icon:'education',color:'#5CB3B3'},
  {id:'c9',type:'expense',name:'Family',icon:'family',color:'#8B2E3C'},
  {id:'c10',type:'expense',name:'Entertainment',icon:'entertainment',color:'#8A6BD1'},
  {id:'c11',type:'expense',name:'Other',icon:'other',color:'#6E637A'},
  {id:'c12',type:'income',name:'Salary',icon:'salary',color:'#1F6E43'},
  {id:'c13',type:'income',name:'Business',icon:'business',color:'#4C7CE0'},
  {id:'c14',type:'income',name:'Gift',icon:'gift',color:'#C15FC1'},
  {id:'c15',type:'income',name:'Freelance',icon:'freelance',color:'#5CB3B3'},
  {id:'c16',type:'income',name:'Other',icon:'coin',color:'#E0B93D'},
];
const DEFAULT_ACCOUNTS = [
  {id:'a1',name:'Cash',icon:'cash',color:'#1F6E43',start:2500},
  {id:'a2',name:'CBE Bank',icon:'bank',color:'#4C7CE0',start:18400},
  {id:'a3',name:'Telebirr',icon:'mobile',color:'#C9971A',start:1200},
];
function seedTx(){
  const t = todayEth();
  const mk=(dOff,type,cat,acc,amt,note)=>{
    let d=t.d+dOff, m=t.m, y=t.y;
    while(d<1){ m--; if(m<1){m=13;y--;} d+=ethMonthLen(y,m); }
    return {id:'s'+Math.random().toString(36).slice(2,9), type, categoryId:cat, accountId:acc, amount:amt, note, date:{y,m,d}, sample:true};
  };
  return [
    mk(0,'expense','c3','a1',60,'Buna at Tomoca'),
    mk(-1,'expense','c1','a1',350,'Lunch'),
    mk(-1,'income','c12','a2',12000,'Monthly salary'),
    mk(-2,'expense','c2','a3',120,'Taxi to clinic'),
    mk(-3,'expense','c5','a2',900,'Electricity bill'),
    mk(-4,'expense','c4','a2',760,'New shoes'),
    mk(-6,'expense','c9','a1',500,'Sent to family'),
    mk(-8,'income','c13','a2',3200,'Side project'),
    mk(-10,'expense','c7','a1',280,'Pharmacy'),
    mk(-12,'expense','c6','a2',3500,'Rent share'),
  ];
}
let state = loadState();
function loadState(){
  try{ const raw = localStorage.getItem('yenebirr_state_v2'); if(raw) return JSON.parse(raw); }catch(e){}
  return { theme:'gold', showGregorian:false, accounts:DEFAULT_ACCOUNTS, categories:DEFAULT_CATS, transactions:seedTx(), budgets:[] };
}
function saveState(){ try{ localStorage.setItem('yenebirr_state_v2', JSON.stringify(state)); }catch(e){} }

/* ===================== HELPERS ===================== */
function fmt(n){ return 'ብር ' + Number(n||0).toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:2}); }
function catById(id){ return state.categories.find(c=>c.id===id) || {icon:'other',name:'Other',color:'#6E637A'}; }
function accById(id){ return state.accounts.find(a=>a.id===id) || {name:'—',icon:'wallet',color:'#6E637A'}; }
function accBalance(id){
  const acc = accById(id); let bal = acc.start||0;
  state.transactions.forEach(t=>{ if(t.accountId===id) bal += (t.type==='income'?t.amount:-t.amount); });
  return bal;
}
function totalBalance(){ return state.accounts.reduce((s,a)=>s+accBalance(a.id),0); }
function sameMonth(t,y,m){ return t.date.y===y && t.date.m===m; }
function monthTotals(y,m){
  let inc=0, exp=0;
  state.transactions.forEach(t=>{ if(sameMonth(t,y,m)){ if(t.type==='income') inc+=t.amount; else exp+=t.amount; } });
  return {inc,exp};
}
function toast(msg){ const el=document.getElementById('toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),1600); }

/* ===================== NAV ===================== */
let currentScreen='home';
function go(s){
  currentScreen=s;
  document.querySelectorAll('.screen').forEach(el=>el.classList.remove('active'));
  document.getElementById('screen-'+s).classList.add('active');
  document.querySelectorAll('.navbtn').forEach(el=>el.classList.toggle('active', el.dataset.s===s));
  window.scrollTo(0,0);
  render();
}

/* ===================== STATIC ICON FILLS ===================== */
function fillStaticIcons(){
  fillIconBtn('settingsBtn','settings');
  fillIconBtn('calTodayBtn','dot');
  fillIconBtn('calPrev','chevL',18);
  fillIconBtn('calNext','chevR',18);
  fillIconBtn('ledgerAddBtn','plus');
  fillIconBtn('budgetBackBtn','chevL');
  fillIconBtn('catBackBtn','chevL');
  fillIconBtn('catAddBtn','plus');
  fillIconBtn('addCloseBtn','close',15);
  fillIconBtn('accCloseBtn','close',15);
  fillIconBtn('catCloseBtn','close',15);
  fillIconBtn('exportBtn2','download',15);
  fillIconBtn('clearBtn2','refresh',15);
  fillIconBtn('resetBtn2','refresh',15);
  document.getElementById('navHome').insertAdjacentHTML('afterbegin', icon('home',20));
  document.getElementById('navCalendar').insertAdjacentHTML('afterbegin', icon('calendar',20));
  document.getElementById('navLedger').insertAdjacentHTML('afterbegin', icon('ledger',20));
  document.getElementById('navAnalysis').insertAdjacentHTML('afterbegin', icon('chart',20));
  document.getElementById('navFab').innerHTML = icon('plus',24);
  document.getElementById('arrAnalysis').innerHTML = icon('chevR',13);
  document.getElementById('arrLedger').innerHTML = icon('chevR',13);
  document.getElementById('hpIncome').innerHTML = icon('arrowDown',15);
  document.getElementById('hpExpense').innerHTML = icon('arrowUp',15);
  document.getElementById('moreBudgetIc').style.background = hexA('#C9971A',0.16);
  document.getElementById('moreBudgetIc').style.color = '#C9971A';
  document.getElementById('moreBudgetIc').innerHTML = icon('chart',18);
  document.getElementById('moreCatIc').style.background = hexA('#4C7CE0',0.16);
  document.getElementById('moreCatIc').style.color = '#4C7CE0';
  document.getElementById('moreCatIc').innerHTML = icon('other',18);
  setIconCircle('setGregIc','calendar','#4C7CE0');
  setIconCircle('setExportIc','download','#1F6E43');
  setIconCircle('setClearIc','refresh','#C9971A');
  setIconCircle('setResetIc','refresh','#B0432F');
}
function setIconCircle(id,ic,color){
  const el=document.getElementById(id);
  el.style.background = hexA(color,0.16); el.style.color = color;
  el.innerHTML = icon(ic,17);
}

/* ===================== RENDER: HOME ===================== */
function renderHome(){
  const t = todayEth(); const g = new Date();
  document.getElementById('homeGreeting').innerHTML =
    '<span class="amh">'+greetingAm()+'</span> · '+fmtEthDate(t)+(state.showGregorian? ' <span style="opacity:.7">('+g.toLocaleDateString('en-GB',{day:'numeric',month:'short'})+')</span>':'');
  document.getElementById('heroBalance').textContent = fmt(totalBalance());
  const mt = monthTotals(t.y,t.m);
  document.getElementById('heroIncome').textContent = fmt(mt.inc);
  document.getElementById('heroExpense').textContent = fmt(mt.exp);

  document.getElementById('homeQuick').innerHTML = [
    {ic:'arrowDown',c:'#1F6E43',t:'Add Income',fn:"openAdd('income')"},
    {ic:'arrowUp',c:'#B0432F',t:'Add Expense',fn:"openAdd('expense')"},
    {ic:'calendar',c:'#C9971A',t:'Calendar',fn:"go('calendar')"},
    {ic:'download',c:'#4C7CE0',t:'Export',fn:"exportCSV()"},
  ].map(q=>'<div class="qbtn" onclick="'+q.fn+'"><div class="ic-circle" style="background:'+hexA(q.c,0.15)+';color:'+q.c+'">'+icon(q.ic,17)+'</div><div class="t">'+q.t+'</div></div>').join('');

  document.getElementById('homeDonutCard').innerHTML = donutBlock(t.y,t.m);

  const recent = [...state.transactions].sort((a,b)=> ethiopianToJDN(b.date.y,b.date.m,b.date.d)-ethiopianToJDN(a.date.y,a.date.m,a.date.d) || (b.id>a.id?1:-1)).slice(0,5);
  document.getElementById('homeRecent').innerHTML = txListHTML(recent, true);
}
function greetingAm(){ const h=new Date().getHours(); if(h<12) return 'እንደምን አደርክ'; if(h<17) return 'እንደምን ዋልክ'; return 'እንደምን አመሸህ'; }
function txListHTML(list, showAccount){
  if(!list.length) return '<div class="empty"><div class="ic-circle">'+icon('ledger',22)+'</div>No transactions yet.<br>Tap the + button to add one.</div>';
  return list.map(t=>{
    const c = catById(t.categoryId); const a = accById(t.accountId);
    return '<div class="tx-row">'+catTile(c,42)+
      '<div class="tx-mid"><div class="tx-name">'+(t.note||c.name)+'</div>'+
      '<div class="tx-sub">'+c.name+(showAccount?' · '+a.name:'')+' · '+fmtEthShort(t.date)+'</div></div>'+
      '<div class="tx-amt '+(t.type==='income'?'in':'out')+'">'+(t.type==='income'?'+':'−')+fmt(t.amount)+'</div>'+
    '</div>';
  }).join('');
}
const CHART_COLORS = ['#C9971A','#8B2E3C','#1F6E43','#4C7CE0','#C15FC1','#5CB3B3','#E2703A','#8A6BD1'];
function donutBlock(y,m){
  const cats={}; let total=0;
  state.transactions.forEach(t=>{ if(t.type!=='expense') return; if(!sameMonth(t,y,m)) return; cats[t.categoryId]=(cats[t.categoryId]||0)+t.amount; total+=t.amount; });
  return donutBlockFromCats(cats,total);
}
function donutBlockFromCats(cats,total){
  const entries = Object.entries(cats).sort((a,b)=>b[1]-a[1]);
  if(!total) return '<div class="empty"><div class="ic-circle">'+icon('chart',22)+'</div>No expenses recorded yet.</div>';
  let acc=0; const R=46, C=2*Math.PI*R;
  let circles = entries.map((e,i)=>{
    const c = catById(e[0]);
    const frac = e[1]/total, dash = frac*C;
    const seg = '<circle cx="60" cy="60" r="'+R+'" fill="none" stroke="'+c.color+'" stroke-width="14" stroke-dasharray="'+dash+' '+(C-dash)+'" stroke-dashoffset="'+(-acc)+'" stroke-linecap="butt" transform="rotate(-90 60 60)"/>';
    acc += dash; return seg;
  }).join('');
  let legend = entries.slice(0,7).map(e=>{
    const c = catById(e[0]); const pct = Math.round(e[1]/total*100);
    return '<div class="legend-row"><div class="sw" style="background:'+c.color+'"></div><div class="nm">'+c.name+'</div><div class="pct">'+pct+'%</div></div>';
  }).join('');
  return '<div style="display:flex; align-items:center; gap:18px;">'+
    '<svg width="120" height="120" viewBox="0 0 120 120" style="flex-shrink:0;">'+circles+
    '<text x="60" y="57" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)" font-family="Manrope">'+Math.round(total).toLocaleString()+'</text>'+
    '<text x="60" y="71" text-anchor="middle" font-size="8.5" fill="var(--ink-soft)" font-family="Manrope">ETB</text></svg>'+
    '<div class="legend" style="flex:1; min-width:0;">'+legend+'</div></div>';
}

/* ===================== RENDER: CALENDAR ===================== */
let calView = todayEth(); let calSelected = null;
function calShift(dir){ calView.m+=dir; if(calView.m>13){calView.m=1;calView.y++;} if(calView.m<1){calView.m=13;calView.y--;} calSelected=null; renderCalendar(); }
function calToday(){ calView=todayEth(); calSelected={...calView}; renderCalendar(); }
function renderCalendar(){
  const mo = ETH_MONTHS[calView.m-1];
  document.getElementById('calMonthAm').textContent = mo.am+' '+calView.y;
  const gFirst = ethToGreg(calView.y,calView.m,1);
  document.getElementById('calMonthG').textContent = mo.en+' — '+new Date(gFirst.y,gFirst.m-1,gFirst.d).toLocaleDateString('en-GB',{month:'short',year:'numeric'});
  document.getElementById('calWeekdays').innerHTML = ETH_WEEKDAYS.map(w=>'<div class="amh">'+w+'</div>').join('');

  const len = ethMonthLen(calView.y,calView.m);
  const startWd = weekdayOfEth(calView.y,calView.m,1);
  const t = todayEth();
  let cells='';
  for(let i=0;i<startWd;i++) cells += '<div class="day pad"></div>';
  for(let d=1; d<=len; d++){
    const hasInc = state.transactions.some(x=>x.date.y===calView.y&&x.date.m===calView.m&&x.date.d===d&&x.type==='income');
    const hasExp = state.transactions.some(x=>x.date.y===calView.y&&x.date.m===calView.m&&x.date.d===d&&x.type==='expense');
    const isToday = t.y===calView.y&&t.m===calView.m&&t.d===d;
    const isSel = calSelected && calSelected.y===calView.y&&calSelected.m===calView.m&&calSelected.d===d;
    cells += '<div class="day '+(isToday?'today ':'')+(isSel?'sel ':'')+'" onclick="calPick('+d+')"><div>'+d+'</div>'+
      '<div class="dots">'+(hasInc?'<div class="dot inc"></div>':'')+(hasExp?'<div class="dot exp"></div>':'')+'</div></div>';
  }
  document.getElementById('calGrid').innerHTML = cells;

  if(calSelected && calSelected.m===calView.m && calSelected.y===calView.y){
    const list = state.transactions.filter(x=>x.date.y===calSelected.y&&x.date.m===calSelected.m&&x.date.d===calSelected.d);
    document.getElementById('calDayTitle').textContent = fmtEthDate(calSelected);
    document.getElementById('calDayList').innerHTML = txListHTML(list, true);
  } else {
    document.getElementById('calDayTitle').textContent = 'Select a day';
    const mt = monthTotals(calView.y,calView.m);
    document.getElementById('calDayList').innerHTML = '<div style="display:flex; justify-content:space-between; align-items:center; padding:4px 2px;"><div style="color:var(--ink-soft); font-size:12px; font-weight:700;">Month total</div><div style="font-size:13px;"><span style="color:var(--good); font-weight:800;">+'+fmt(mt.inc)+'</span> &nbsp; <span style="color:var(--danger); font-weight:800;">−'+fmt(mt.exp)+'</span></div></div>';
  }
}
function calPick(d){ calSelected={y:calView.y,m:calView.m,d}; renderCalendar(); }

/* ===================== RENDER: LEDGER ===================== */
let ledgerFilter='all';
function renderLedger(){
  document.getElementById('accScroll').innerHTML = state.accounts.map(a=>
    '<div class="acc-card">'+catTile({icon:a.icon,color:a.color},36)+'<div class="n">'+a.name+'</div><div class="b">'+fmt(accBalance(a.id))+'</div></div>'
  ).join('') + '<div class="acc-card add" onclick="openAddAccount()">'+icon('plus',22)+'<div class="n">Add account</div></div>';

  document.getElementById('ledgerChips').innerHTML = '<div class="chip '+(ledgerFilter==='all'?'active':'')+'" onclick="setLedgerFilter(\'all\')">All</div>' +
    state.accounts.map(a=>'<div class="chip '+(ledgerFilter===a.id?'active':'')+'" onclick="setLedgerFilter(\''+a.id+'\')">'+icon(a.icon,14)+a.name+'</div>').join('');

  let list = [...state.transactions];
  if(ledgerFilter!=='all') list = list.filter(t=>t.accountId===ledgerFilter);
  list.sort((a,b)=> ethiopianToJDN(b.date.y,b.date.m,b.date.d)-ethiopianToJDN(a.date.y,a.date.m,a.date.d));
  document.getElementById('ledgerList').innerHTML = txListHTML(list, true);
}
function setLedgerFilter(id){ ledgerFilter=id; renderLedger(); }

/* ===================== RENDER: ANALYSIS ===================== */
let analysisPeriod=1;
function renderAnalysis(){
  document.querySelectorAll('#analysisPeriod .tab').forEach(el=>{
    el.classList.toggle('active', Number(el.dataset.p)===analysisPeriod);
    el.onclick = ()=>{ analysisPeriod=Number(el.dataset.p); renderAnalysis(); };
  });
  const t = todayEth(); const months=[]; let y=t.y,m=t.m;
  for(let i=0;i<analysisPeriod;i++){ months.push({y,m}); m--; if(m<1){m=13;y--;} }
  const cats={}; let total=0;
  state.transactions.forEach(tr=>{ if(tr.type!=='expense') return; if(!months.some(pm=>pm.y===tr.date.y&&pm.m===tr.date.m)) return; cats[tr.categoryId]=(cats[tr.categoryId]||0)+tr.amount; total+=tr.amount; });
  document.getElementById('analysisDonut').innerHTML = donutBlockFromCats(cats,total);

  const trendMonths=[]; y=t.y; m=t.m;
  for(let i=0;i<6;i++){ trendMonths.unshift({y,m}); m--; if(m<1){m=13;y--;} }
  const maxV = Math.max(1,...trendMonths.map(pm=>{const mt=monthTotals(pm.y,pm.m); return Math.max(mt.inc,mt.exp);}));
  let bars = trendMonths.map(pm=>{
    const mt = monthTotals(pm.y,pm.m);
    const hInc = Math.max(2,Math.round(mt.inc/maxV*80)), hExp = Math.max(2,Math.round(mt.exp/maxV*80));
    return '<div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px;">'+
      '<div style="display:flex; align-items:flex-end; gap:3px; height:84px;">'+
      '<div style="width:9px; height:'+hInc+'px; background:var(--good); border-radius:4px 4px 0 0;"></div>'+
      '<div style="width:9px; height:'+hExp+'px; background:var(--danger); border-radius:4px 4px 0 0;"></div></div>'+
      '<div style="font-size:9.5px; color:var(--ink-soft); font-weight:700;" class="amh">'+ETH_MONTHS[pm.m-1].am+'</div></div>';
  }).join('');
  document.getElementById('analysisTrend').innerHTML =
    '<div style="display:flex; gap:4px; align-items:flex-end;">'+bars+'</div>'+
    '<div style="display:flex; gap:16px; margin-top:16px; font-size:11px; font-weight:700; color:var(--ink-soft);">'+
    '<div><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:var(--good);margin-right:6px;"></span>Income</div>'+
    '<div><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:var(--danger);margin-right:6px;"></span>Expense</div></div>';
}

/* ===================== RENDER: BUDGET ===================== */
function renderBudget(){
  const t = todayEth();
  document.getElementById('budgetMonth').innerHTML = '<span class="amh">'+ETH_MONTHS[t.m-1].am+'</span> '+t.y;
  const mt = {};
  state.transactions.forEach(tr=>{ if(tr.type==='expense'&&sameMonth(tr,t.y,t.m)) mt[tr.categoryId]=(mt[tr.categoryId]||0)+tr.amount; });
  const expCats = state.categories.filter(c=>c.type==='expense');
  document.getElementById('budgetList').innerHTML = expCats.map(c=>{
    const b = state.budgets.find(x=>x.categoryId===c.id && x.y===t.y && x.m===t.m);
    const spent = mt[c.id]||0;
    if(!b){
      return '<div class="budg-row"><div class="budg-top">'+catTile(c,38)+'<div class="nm">'+c.name+'</div>'+
        '<div class="amt" style="color:var(--ink);" onclick="promptBudget(\''+c.id+'\')">Set budget</div></div></div>';
    }
    const pct = Math.min(100, Math.round(spent/b.limit*100));
    const cls = pct>=100?'over':pct>=80?'warn':'';
    return '<div class="budg-row"><div class="budg-top">'+catTile(c,38)+'<div class="nm">'+c.name+'</div>'+
      '<div class="amt" onclick="promptBudget(\''+c.id+'\')">'+fmt(spent)+' / '+fmt(b.limit)+'</div></div>'+
      '<div class="bar-bg"><div class="bar-fill '+cls+'" style="width:'+pct+'%"></div></div></div>';
  }).join('');
}
function promptBudget(catId){
  const t = todayEth();
  const existing = state.budgets.find(x=>x.categoryId===catId && x.y===t.y && x.m===t.m);
  const val = prompt('Monthly budget for '+catById(catId).name+' (ETB):', existing?existing.limit:'');
  if(val===null) return;
  const num = parseFloat(val);
  if(isNaN(num) || num<=0){ toast('Enter a valid amount'); return; }
  if(existing) existing.limit=num; else state.budgets.push({categoryId:catId, y:t.y, m:t.m, limit:num});
  saveState(); renderBudget();
}

/* ===================== RENDER: CATEGORIES ===================== */
let catTab='expense';
function setCatTab(tab){ catTab=tab; document.getElementById('catTabExpense').classList.toggle('active',tab==='expense'); document.getElementById('catTabIncome').classList.toggle('active',tab==='income'); renderCategories(); }
function renderCategories(){
  const list = state.categories.filter(c=>c.type===catTab);
  document.getElementById('catManageGrid').innerHTML = list.map(c=>
    '<div class="catcell" onclick="deleteCategory(\''+c.id+'\')">'+catTile(c,40)+'<div class="n">'+c.name+'</div></div>'
  ).join('') + '<div class="catcell" onclick="openAddCategory()"><div class="cat-tile" style="width:40px;height:40px;background:var(--chip-bg);color:var(--ink-soft);">'+icon('plus',18)+'</div><div class="n">Add</div></div>';
}
function deleteCategory(id){ if(!confirm('Remove this category?')) return; state.categories=state.categories.filter(c=>c.id!==id); saveState(); renderCategories(); }
let newCatType='expense', selectedCatIcon='other', selectedCatColor=COLOR_PALETTE[0];
function openAddCategory(){
  newCatType=catTab; setCatType(newCatType);
  document.getElementById('catName').value='';
  selectedCatIcon = ICON_KEYS[0];
  document.getElementById('catIconGrid').innerHTML = ICON_KEYS.map((k,i)=>'<div class="iconcell '+(i===0?'sel':'')+'" onclick="pickCatIcon(this,\''+k+'\')" style="color:var(--ink);">'+icon(k,19)+'</div>').join('');
  selectedCatColor = COLOR_PALETTE[0];
  document.getElementById('catColorGrid').innerHTML = COLOR_PALETTE.slice(0,12).map((c,i)=>'<div class="iconcell '+(i===0?'sel':'')+'" onclick="pickCatColor(this,\''+c+'\')" style="padding:0;"><div style="width:22px;height:22px;border-radius:50%;background:'+c+';margin:auto;"></div></div>').join('');
  document.getElementById('catOverlay').classList.add('show');
}
function pickCatIcon(el,k){ selectedCatIcon=k; document.querySelectorAll('#catIconGrid .iconcell').forEach(c=>c.classList.remove('sel')); el.classList.add('sel'); }
function pickCatColor(el,c){ selectedCatColor=c; document.querySelectorAll('#catColorGrid .iconcell').forEach(x=>x.classList.remove('sel')); el.classList.add('sel'); }
function setCatType(t){ newCatType=t; document.getElementById('catTypeExpense').classList.toggle('active',t==='expense'); document.getElementById('catTypeIncome').classList.toggle('active',t==='income'); }
function saveCategory(){
  const name = document.getElementById('catName').value.trim();
  if(!name){ toast('Enter a category name'); return; }
  state.categories.push({id:'c'+Date.now(), type:newCatType, name, icon:selectedCatIcon, color:selectedCatColor});
  saveState(); closeSheet('catOverlay'); renderCategories(); toast('Category added');
}

/* ===================== ADD ACCOUNT ===================== */
let selectedAccIcon='bank';
function openAddAccount(){
  document.getElementById('accName').value=''; document.getElementById('accStart').value='';
  selectedAccIcon = ACCOUNT_ICON_KEYS[0];
  document.getElementById('accIconGrid').innerHTML = ACCOUNT_ICON_KEYS.map((k,i)=>'<div class="iconcell '+(i===0?'sel':'')+'" onclick="pickAccIcon(this,\''+k+'\')" style="color:var(--ink);">'+icon(k,19)+'</div>').join('');
  document.getElementById('accOverlay').classList.add('show');
}
function pickAccIcon(el,k){ selectedAccIcon=k; document.querySelectorAll('#accIconGrid .iconcell').forEach(c=>c.classList.remove('sel')); el.classList.add('sel'); }
function saveAccount(){
  const name = document.getElementById('accName').value.trim();
  if(!name){ toast('Enter an account name'); return; }
  const start = parseFloat(document.getElementById('accStart').value)||0;
  state.accounts.push({id:'a'+Date.now(), name, icon:selectedAccIcon, color:COLOR_PALETTE[state.accounts.length%COLOR_PALETTE.length], start});
  saveState(); closeSheet('accOverlay'); renderLedger(); toast('Account added');
}

/* ===================== ADD TRANSACTION ===================== */
let addType='expense', addCatId=null, addAccId=null, addAmountStr='';
function openAdd(type){
  setAddType(type); addAmountStr=''; renderAmt();
  document.getElementById('addNote').value='';
  fillDateSelectors(todayEth());
  buildKeypad();
  document.getElementById('addOverlay').classList.add('show');
}
function closeAdd(){ closeSheet('addOverlay'); }
function closeSheet(id){ document.getElementById(id).classList.remove('show'); }
function setAddType(type){
  addType=type;
  document.getElementById('typeExpense').classList.toggle('active', type==='expense');
  document.getElementById('typeIncome').classList.toggle('active', type==='income');
  const cats = state.categories.filter(c=>c.type===type);
  addCatId = cats[0] ? cats[0].id : null;
  document.getElementById('addCatGrid').innerHTML = cats.map(c=>
    '<div class="catcell '+(c.id===addCatId?'sel':'')+'" onclick="pickAddCat(this,\''+c.id+'\')">'+catTile(c,40)+'<div class="n">'+c.name+'</div></div>'
  ).join('');
  addAccId = state.accounts[0] ? state.accounts[0].id : null;
  document.getElementById('addAccChips').innerHTML = state.accounts.map(a=>
    '<div class="chip '+(a.id===addAccId?'active':'')+'" onclick="pickAddAcc(this,\''+a.id+'\')">'+icon(a.icon,14)+a.name+'</div>'
  ).join('');
}
function pickAddCat(el,id){ addCatId=id; document.querySelectorAll('#addCatGrid .catcell').forEach(c=>c.classList.remove('sel')); el.classList.add('sel'); }
function pickAddAcc(el,id){ addAccId=id; document.querySelectorAll('#addAccChips .chip').forEach(c=>c.classList.remove('active')); el.classList.add('active'); }
function renderAmt(){ document.getElementById('addAmountDisplay').textContent = addAmountStr ? addAmountStr : '0'; }
function setAmt(v){ const cur=parseFloat(addAmountStr||'0'); addAmountStr=String(Math.round((cur+v)*100)/100); renderAmt(); }
function buildKeypad(){
  const keys = ['1','2','3','4','5','6','7','8','9','.','0','back'];
  document.getElementById('keypad').innerHTML = keys.map(k=>{
    if(k==='back') return '<div class="key" onclick="kpBack()">'+icon('close',16)+'</div>';
    return '<div class="key" onclick="kpPress(\''+k+'\')">'+k+'</div>';
  }).join('');
}
function kpPress(v){
  if(v==='.' && addAmountStr.includes('.')) return;
  if(addAmountStr.replace('.','').length>=9) return;
  addAmountStr += v; renderAmt();
}
function kpBack(){ addAmountStr = addAmountStr.slice(0,-1); renderAmt(); }
function fillDateSelectors(e){
  const moSel = document.getElementById('addDateMonth');
  moSel.innerHTML = ETH_MONTHS.map((mo,i)=>'<option value="'+(i+1)+'">'+mo.am+'</option>').join('');
  moSel.value = e.m;
  const len = ethMonthLen(e.y, e.m);
  const daySel = document.getElementById('addDateDay');
  daySel.innerHTML = Array.from({length:len},(_,i)=>i+1).map(d=>'<option value="'+d+'">'+d+'</option>').join('');
  daySel.value = e.d;
  document.getElementById('addDateYear').value = e.y;
  document.getElementById('addDateLabel').textContent = fmtEthDate(e);
  moSel.onchange = ()=>{ const y=parseInt(document.getElementById('addDateYear').value); const len2=ethMonthLen(y, parseInt(moSel.value)); daySel.innerHTML = Array.from({length:len2},(_,i)=>i+1).map(d=>'<option value="'+d+'">'+d+'</option>').join(''); };
}
function saveTransaction(){
  const amount = parseFloat(addAmountStr);
  if(!amount || amount<=0){ toast('Enter a valid amount'); return; }
  if(!addCatId){ toast('Pick a category'); return; }
  if(!addAccId){ toast('Pick an account'); return; }
  const y = parseInt(document.getElementById('addDateYear').value);
  const m = parseInt(document.getElementById('addDateMonth').value);
  const d = parseInt(document.getElementById('addDateDay').value);
  const note = document.getElementById('addNote').value.trim();
  state.transactions.push({id:'t'+Date.now(), type:addType, categoryId:addCatId, accountId:addAccId, amount, note, date:{y,m,d}});
  saveState(); closeAdd(); toast((addType==='income'?'Income':'Expense')+' added'); render();
}

/* ===================== SETTINGS ===================== */
const THEMES = [ {id:'gold', name:'Meskel Gold', c1:'#FAF8F1', c2:'#C9971A'}, {id:'coffee', name:'Coffee', c1:'#241712', c2:'#D4A24C'}, {id:'indigo', name:'Indigo', c1:'#171A33', c2:'#E0B93D'} ];
function renderSettings(){
  document.getElementById('themeRow').innerHTML = THEMES.map(th=>
    '<div class="theme-sw '+(state.theme===th.id?'sel':'')+'" onclick="setTheme(\''+th.id+'\')"><div class="swatch" style="background:linear-gradient(135deg,'+th.c1+' 50%,'+th.c2+' 50%)"></div><div class="lbl">'+th.name+'</div></div>'
  ).join('');
  document.getElementById('swGreg').classList.toggle('on', state.showGregorian);
}
function setTheme(id){ state.theme=id; document.body.setAttribute('data-theme', id); saveState(); renderIcons(); renderSettings(); }
function toggleGregorian(){ state.showGregorian=!state.showGregorian; saveState(); renderSettings(); if(currentScreen==='home') renderHome(); }
function clearSample(){ state.transactions = state.transactions.filter(t=>!t.sample); saveState(); toast('Sample data cleared'); render(); }
function resetApp(){
  if(!confirm('This erases all your data. Continue?')) return;
  localStorage.removeItem('yenebirr_state_v2'); state = loadState();
  document.body.setAttribute('data-theme', state.theme); renderIcons(); go('home');
}

/* ===================== EXPORT CSV ===================== */
async function exportCSV(){
  const rows = [['Date (Ethiopian)','Type','Category','Account','Amount','Note']];
  [...state.transactions].sort((a,b)=>ethiopianToJDN(a.date.y,a.date.m,a.date.d)-ethiopianToJDN(b.date.y,b.date.m,b.date.d))
    .forEach(t=>{ rows.push([fmtEthDate(t.date), t.type, catById(t.categoryId).name, accById(t.accountId).name, t.amount, (t.note||'').replace(/,/g,';')]); });
  const csv = rows.map(r=>r.join(',')).join('\n');
  try{
    const downloads = await claude.use('downloads');
    if(downloads){ await downloads.save({filename:'yenebirr-transactions.csv', data:csv}); toast('CSV ready to save'); return; }
  }catch(e){}
  try{
    const blob = new Blob([csv], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='yenebirr-transactions.csv';
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    toast('CSV downloaded');
  }catch(e){ toast('Export not available here'); }
}

/* ===================== APP ICON (SVG) ===================== */
function iconSVG(){
  return '<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+
    '<defs><linearGradient id="ibg" x1="0" y1="0" x2="1" y2="1">'+
    '<stop offset="0" stop-color="#2A1B3D"/><stop offset="0.55" stop-color="#4A2A55"/><stop offset="1" stop-color="#C9971A"/></linearGradient></defs>'+
    '<rect width="100" height="100" fill="url(#ibg)"/>'+
    '<g transform="translate(50,50)">'+
      [0,90,180,270].map(a=>'<path transform="rotate('+a+')" d="M0,0 L0,-34 A17,17 0 0 1 17,-17 Z" fill="#F3E9DD" opacity="0.95"/>').join('')+
      '<circle r="9" fill="#E0B93D"/></g></svg>';
}
function renderIcons(){ document.getElementById('homeIcon').innerHTML=iconSVG(); document.getElementById('bigIcon').innerHTML=iconSVG(); }

/* ===================== MASTER RENDER ===================== */
function render(){
  if(currentScreen==='home') renderHome();
  else if(currentScreen==='calendar') renderCalendar();
  else if(currentScreen==='ledger') renderLedger();
  else if(currentScreen==='analysis') renderAnalysis();
  else if(currentScreen==='more') renderSettings();
  else if(currentScreen==='budget') renderBudget();
  else if(currentScreen==='categories') renderCategories();
}

/* ===================== INIT ===================== */
document.body.setAttribute('data-theme', state.theme || 'gold');
calSelected = todayEth();
fillStaticIcons();
renderIcons();
render();

/* ===================== EXPOSE TO WINDOW (for inline onclick handlers) ===================== */
Object.assign(window, {
  go, openAdd, closeAdd, closeSheet, exportCSV,
  calToday, calShift, calPick,
  openAddAccount, pickAccIcon, saveAccount,
  setLedgerFilter,
  openAddCategory, pickCatIcon, pickCatColor, setCatType, saveCategory, deleteCategory, setCatTab,
  promptBudget,
  setAddType, pickAddCat, pickAddAcc, setAmt, kpPress, kpBack, saveTransaction,
  setTheme, toggleGregorian, clearSample, resetApp
});
