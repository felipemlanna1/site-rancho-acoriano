import{useState,useEffect}from'react'
import{motion,AnimatePresence}from'framer-motion'
import{useInView}from'react-intersection-observer'
import{List,X,Star,Phone,MapPin,Clock,ForkKnife,Fish,Wine,Quotes,CaretLeft,CaretRight,Translate}from'@phosphor-icons/react'

const pt={nav:['Cardápio','Sobre','Avaliações','Contato'],hero:{over:'Tradição Açoriana desde 1997',h1:'Frutos do mar',h1b:'da Ilha para a mesa',sub:'Referência nacional em gastronomia de frutos do mar no Ribeirão da Ilha, uma das comunidades mais antigas de Santa Catarina.'},cta:'Reservar Mesa',
pratos:[{t:'Ostras Gratinadas',d:'Especialidade da casa, direto dos cultivos do Ribeirão.'},{t:'Moqueca da Casa',d:'O carro-chefe, preparada com receita secreta da família.'},{t:'Camarão Tropical',d:'Empanado com coco e recheado com catupiry.'},{t:'Risoto de Frutos do Mar',d:'Arroz arbório com camarão, lula e mexilhão.'},{t:'Lula Frita',d:'Crocante por fora, macia por dentro. Perfeição.'},{t:'Bacalhau Grelhado',d:'Com batatas rosete e manjericão fresco.'}],
revs:[{n:'Roberto A.',t:'Melhor restaurante de frutos do mar de Florianópolis! A moqueca é divina e a vista é espetacular.',r:5},{n:'Claudia M.',t:'Vamos há mais de 10 anos. Qualidade sempre impecável. As ostras gratinadas são imperdíveis.',r:5},{n:'Fernando S.',t:'Lugar obrigatório para quem visita Floripa. Comida excepcional e atendimento caloroso.',r:5}],
contact:{tag:'Reserva',h2:'Reserve sua mesa'}}
const en={nav:['Menu','About','Reviews','Contact'],hero:{over:'Azorean Tradition since 1997',h1:'Seafood',h1b:'from the Island to the table',sub:'National reference in seafood gastronomy in Ribeirão da Ilha, one of the oldest communities in Santa Catarina.'},cta:'Book a Table',
pratos:[{t:'Gratin Oysters',d:'House specialty, from local Ribeirão farms.'},{t:'House Moqueca',d:'The flagship dish, with a secret family recipe.'},{t:'Tropical Shrimp',d:'Coconut-breaded and filled with catupiry.'},{t:'Seafood Risotto',d:'Arborio rice with shrimp, squid and mussels.'},{t:'Fried Squid',d:'Crispy outside, tender inside. Perfection.'},{t:'Grilled Cod',d:'With rosette potatoes and fresh basil.'}],
revs:[{n:'Roberto A.',t:'Best seafood restaurant in Florianópolis! The moqueca is divine.',r:5},{n:'Claudia M.',t:'We have been coming for 10+ years. Quality always impeccable.',r:5},{n:'Fernando S.',t:'Must-visit in Floripa. Exceptional food and warm service.',r:5}],
contact:{tag:'Booking',h2:'Book your table'}}

const biz={name:'Rancho Açoriano',phone:'(48) 3337-0848',address:'Rod. Baldicero Filomeno, 5618 - Ribeirão da Ilha, Florianópolis - SC, 88064-605',hours:'Seg: 11h-23h | Ter: Fechado | Qua-Sáb: 11h-23h | Dom: 11h-16h',rating:4.6,reviews:592,web:'https://www.ranchoacoriano.com.br'}

export default function App(){
const[lang,setLang]=useState('pt');const[sc,setSc]=useState(false);const[mo,setMo]=useState(false);const[cur,setCur]=useState(0)
const t=lang==='pt'?pt:en;const ids=['cardapio','sobre','deps','contato']
useEffect(()=>{const h=()=>setSc(window.scrollY>40);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h)},[])
return(<>
<motion.header initial={{y:-100}} animate={{y:0}} transition={{duration:0.8,ease:[0.22,1,0.36,1]}}
style={{position:'fixed',top:0,left:0,right:0,zIndex:1000,padding:'0 clamp(1rem,4vw,3rem)',height:80,display:'flex',alignItems:'center',justifyContent:'space-between',background:sc?'rgba(250,248,244,0.95)':'rgba(250,248,244,0.7)',backdropFilter:'blur(16px)',borderBottom:sc?'1px solid var(--border)':'1px solid transparent',transition:'all 0.4s'}}>
<a href="#hero" style={{fontFamily:'var(--heading)',fontSize:20,color:'var(--text)'}}>Rancho Açoriano</a>
<nav style={{display:'flex',alignItems:'center',gap:'1.5rem'}}>
<div className="dn" style={{display:'flex',gap:'1.5rem'}}>{t.nav.map((l,i)=><a key={i} href={`#${ids[i]}`} style={{fontSize:13,letterSpacing:0.5,textTransform:'uppercase',color:'var(--text-light)',fontWeight:500}}>{l}</a>)}</div>
<button onClick={()=>setLang(l=>l==='pt'?'en':'pt')} style={{display:'flex',alignItems:'center',gap:4,fontSize:11,fontWeight:700,color:'var(--accent)',border:'1px solid var(--accent)',padding:'6px 12px',borderRadius:100}}><Translate size={14}/>{lang==='pt'?'EN':'PT'}</button>
<a href={`tel:${biz.phone.replace(/\D/g,'')}`} style={{background:'var(--primary)',color:'#fff',padding:'10px 24px',borderRadius:100,fontSize:13,fontWeight:600,textTransform:'uppercase',display:'inline-flex',alignItems:'center',gap:6}}><Phone size={16} weight="fill"/>{t.cta}</a>
<button className="hm" onClick={()=>setMo(!mo)} style={{display:'none',color:'var(--text)'}}>{mo?<X size={28}/>:<List size={28}/>}</button>
</nav></motion.header>

<AnimatePresence>{mo&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} style={{position:'fixed',inset:0,top:80,background:'rgba(250,248,244,0.98)',zIndex:999,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2rem'}}>
{t.nav.map((l,i)=><a key={i} href={`#${ids[i]}`} onClick={()=>setMo(false)} style={{fontFamily:'var(--heading)',fontSize:28}}>{l}</a>)}</motion.div>}</AnimatePresence>

<section id="hero" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',background:'linear-gradient(160deg,#faf8f4 0%,#e8ddd0 50%,#c5b8a0 100%)',paddingTop:80}}>
<div style={{maxWidth:800,margin:'0 auto',padding:'2rem clamp(1.5rem,5vw,3rem)',textAlign:'center',position:'relative',zIndex:1}}>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,0.7)',padding:'8px 20px',borderRadius:100,marginBottom:'2rem',border:'1px solid var(--border)'}}>
{[...Array(5)].map((_,i)=><Star key={i} size={14} weight="fill" style={{color:'var(--accent)'}}/>)}<span style={{fontSize:13,color:'var(--text-light)'}}>{biz.rating} — {biz.reviews} {lang==='pt'?'avaliações':'reviews'}</span></motion.div>
<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} style={{fontSize:12,letterSpacing:4,textTransform:'uppercase',color:'var(--accent)',marginBottom:'1.5rem',fontWeight:600}}>{t.hero.over}</motion.p>
<motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.7,duration:1}} style={{fontFamily:'var(--heading)',fontSize:'clamp(2.5rem,6vw,4.5rem)',fontWeight:400,lineHeight:1.1,marginBottom:'1.5rem'}}>{t.hero.h1}<br/><em style={{fontStyle:'italic',color:'var(--primary)'}}>{t.hero.h1b}</em></motion.h1>
<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} style={{fontSize:'clamp(1rem,2vw,1.1rem)',color:'var(--text-light)',maxWidth:520,margin:'0 auto 2.5rem',lineHeight:1.7}}>{t.hero.sub}</motion.p>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.5}} style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
<a href={`tel:${biz.phone.replace(/\D/g,'')}`} style={{display:'inline-flex',alignItems:'center',gap:10,background:'var(--primary)',color:'#fff',padding:'16px 36px',borderRadius:100,fontSize:14,fontWeight:600,textTransform:'uppercase'}}><Phone size={20} weight="fill"/>{t.cta}</a>
<a href="#cardapio" style={{display:'inline-flex',border:'1.5px solid var(--border)',padding:'16px 36px',borderRadius:100,fontSize:14,fontWeight:500,textTransform:'uppercase'}}>{lang==='pt'?'Ver Cardápio':'View Menu'}</a>
</motion.div></div></section>

<section id="cardapio" style={{padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,3rem)'}}>
<div style={{maxWidth:'var(--max-w)',margin:'0 auto'}}>
<div style={{textAlign:'center',marginBottom:'clamp(2.5rem,5vw,4rem)'}}><p style={{fontSize:12,letterSpacing:4,textTransform:'uppercase',color:'var(--accent)',marginBottom:'1rem',fontWeight:600}}>{lang==='pt'?'Cardápio':'Menu'}</p><h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,3rem)'}}>Especialidades</h2></div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'1rem'}}>
{t.pratos.map((p,i)=><motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
style={{background:'var(--surface)',borderRadius:16,padding:'1.5rem',border:'1px solid var(--border)',display:'flex',gap:'1rem',alignItems:'flex-start',transition:'transform 0.3s'}}
onMouseOver={e=>e.currentTarget.style.transform='translateY(-4px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
<Fish size={24} weight="duotone" style={{color:'var(--accent)',flexShrink:0,marginTop:4}}/><div><h3 style={{fontFamily:'var(--heading)',fontSize:'1.1rem',marginBottom:'0.25rem'}}>{p.t}</h3><p style={{fontSize:'0.85rem',color:'var(--text-light)',lineHeight:1.6}}>{p.d}</p></div></motion.div>)}
</div></div></section>

<section id="sobre" style={{padding:'clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,3rem)',background:'linear-gradient(180deg,#ece4d4,var(--bg))'}}>
<div style={{maxWidth:700,margin:'0 auto',textAlign:'center'}}>
<Fish size={48} weight="duotone" style={{color:'var(--primary)',margin:'0 auto 1rem'}}/>
<h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,2.5rem)',marginBottom:'1.5rem'}}>{lang==='pt'?'Desde 1997 no Ribeirão da Ilha':'Since 1997 in Ribeirão da Ilha'}</h2>
<p style={{fontSize:'1rem',color:'var(--text-light)',lineHeight:1.8}}>{lang==='pt'?'O Rancho Açoriano nasceu em 1997 no Ribeirão da Ilha, uma das comunidades mais antigas de Santa Catarina. É parada obrigatória para quem visita Florianópolis e referência nacional em gastronomia de frutos do mar com ingredientes frescos e receitas da tradição açoriana.':'Rancho Açoriano was born in 1997 in Ribeirão da Ilha, one of the oldest communities in Santa Catarina. A must-stop for visitors to Florianópolis and a national reference in seafood gastronomy with fresh ingredients and Azorean traditional recipes.'}</p>
</div></section>

<section id="deps" style={{padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,3rem)'}}>
<div style={{maxWidth:700,margin:'0 auto',textAlign:'center'}}>
<p style={{fontSize:12,letterSpacing:4,textTransform:'uppercase',color:'var(--accent)',marginBottom:'1rem',fontWeight:600}}>{lang==='pt'?'Avaliações':'Reviews'}</p>
<h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,3rem)',marginBottom:'2.5rem'}}>{biz.rating}/5 — {biz.reviews}+</h2>
<AnimatePresence mode="wait"><motion.div key={cur} initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-40}} style={{background:'var(--surface)',borderRadius:24,padding:'clamp(2rem,4vw,3rem)',border:'1px solid var(--border)'}}>
<Quotes size={36} weight="fill" style={{color:'rgba(212,168,67,0.2)',marginBottom:'1rem'}}/><p style={{fontFamily:'var(--heading)',fontSize:'clamp(1.1rem,2.5vw,1.3rem)',fontStyle:'italic',lineHeight:1.7,marginBottom:'1.5rem'}}>"{t.revs[cur].t}"</p>
<div style={{display:'flex',gap:2,justifyContent:'center',marginBottom:'0.75rem'}}>{[...Array(5)].map((_,i)=><Star key={i} size={14} weight="fill" style={{color:'var(--accent)'}}/>)}</div><p style={{fontWeight:700}}>{t.revs[cur].n}</p>
</motion.div></AnimatePresence>
<div style={{display:'flex',justifyContent:'center',gap:'1rem',marginTop:'1.5rem'}}>
<button onClick={()=>setCur(c=>(c-1+t.revs.length)%t.revs.length)} style={{width:44,height:44,borderRadius:'50%',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--surface)'}}><CaretLeft size={18} weight="bold"/></button>
<div style={{display:'flex',alignItems:'center',gap:8}}>{t.revs.map((_,i)=><button key={i} onClick={()=>setCur(i)} style={{width:cur===i?24:8,height:8,borderRadius:100,background:cur===i?'var(--primary)':'var(--border)',transition:'all 0.3s'}}/>)}</div>
<button onClick={()=>setCur(c=>(c+1)%t.revs.length)} style={{width:44,height:44,borderRadius:'50%',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--surface)'}}><CaretRight size={18} weight="bold"/></button>
</div></div></section>

<section id="contato" style={{padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,3rem)',background:'linear-gradient(180deg,var(--bg),#e0dbd0)'}}>
<div style={{maxWidth:'var(--max-w)',margin:'0 auto'}}>
<div style={{textAlign:'center',marginBottom:'2rem'}}><p style={{fontSize:12,letterSpacing:4,textTransform:'uppercase',color:'var(--accent)',marginBottom:'1rem',fontWeight:600}}>{t.contact.tag}</p><h2 style={{fontFamily:'var(--heading)',fontSize:'clamp(2rem,4vw,3rem)'}}>{t.contact.h2}</h2></div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'1.5rem'}}>
<a href={`tel:${biz.phone.replace(/\D/g,'')}`} style={{background:'var(--primary)',borderRadius:20,padding:'2rem',color:'#fff',display:'flex',flexDirection:'column',gap:'1rem',transition:'transform 0.3s'}} onMouseOver={e=>e.currentTarget.style.transform='translateY(-4px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}><Phone size={36} weight="fill"/><h3 style={{fontSize:'1.2rem',fontWeight:700}}>{lang==='pt'?'Ligar Agora':'Call Now'}</h3><p style={{fontSize:'1.1rem',fontWeight:700}}>{biz.phone}</p></a>
<div style={{background:'var(--surface)',borderRadius:20,padding:'2rem',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:'1rem'}}><MapPin size={36} weight="duotone" style={{color:'var(--primary)'}}/><h3 style={{fontSize:'1.1rem',fontWeight:600}}>{lang==='pt'?'Localização':'Location'}</h3><p style={{fontSize:'0.85rem',color:'var(--text-light)',lineHeight:1.6}}>{biz.address}</p></div>
<div style={{background:'var(--surface)',borderRadius:20,padding:'2rem',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:'1rem'}}><Clock size={36} weight="duotone" style={{color:'var(--primary)'}}/><h3 style={{fontSize:'1.1rem',fontWeight:600}}>{lang==='pt'?'Horário':'Hours'}</h3><p style={{fontSize:'0.85rem',color:'var(--text-light)',lineHeight:1.6}}>{biz.hours}</p></div>
</div></div></section>

<footer style={{background:'#1e2a38',color:'#fff',padding:'clamp(3rem,6vw,4rem) clamp(1.5rem,5vw,3rem) 2rem'}}>
<div style={{maxWidth:'var(--max-w)',margin:'0 auto',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:'1rem'}}>
<div><p style={{fontFamily:'var(--heading)',fontSize:18}}>Rancho Açoriano</p><p style={{fontSize:11,opacity:0.5}}>Tradição Açoriana desde 1997 | Ribeirão da Ilha</p></div>
<p style={{fontSize:'0.75rem',opacity:0.4}}>© {new Date().getFullYear()} Rancho Açoriano. Florianópolis - SC.</p></div></footer>
<style>{`@media(max-width:900px){.dn{display:none!important}.hm{display:block!important}}`}</style>
</>)}
