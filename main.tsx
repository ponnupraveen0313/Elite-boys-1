import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const items = [
  ['⌁','Home'],['◔','Plan'],['◎','Goals'],['♡','Health'],['▦','Calc'],['▱','Learn'],['<>','AI Chat']
];

function App(){
  const [active,setActive]=useState('Home');
  return <div className="app">
    <header className="topbar">
      <div className="brandIcon">✓</div>
      <div className="brand">SmartVest<span>AI</span></div>
      <div className="demo">DEMO<br/>ADVISOR</div>
      <div className="advisor">✦ ON</div>
      <div className="currency">₹<br/><b>INR</b></div>
    </header>

    <main>
      <section className="card overview">
        <div className="eyebrow">PERSONALIZED<br/>DASHBOARD</div>
        <div className="pill">Moderate<br/>Investor</div>
        <h1>Your Financial Overview</h1>
        <p className="intro">Here is the simple breakdown of your money. Your monthly surplus is <b>₹3,850</b>, and you have enough emergency cash to cover <b>0.2 months</b> of essential living bills.</p>
        <div className="health">
          <div className="healthTitle">FINANCIAL HEALTH <span>Score</span></div>
          <div className="score">62 <small>/ 100</small></div>
          <div className="line"/>
          <div className="metrics">
            {['Save','Emerg','Debt','Goals','Ready'].map((x,i)=><div key={x}><label>{x}</label><strong>{[85,35,88,40,55][i]}</strong></div>)}
          </div>
          <button>Full diagnostic check →</button>
        </div>
      </section>
      <section className="placeholder card"><b>Personalized recommendations</b><p>Explore your plan, goals, health, calculations and AI chat from the navigation below.</p></section>
    </main>

    <nav className="bottom">
      {items.map(([icon,label])=><button className={active===label?'active':''} onClick={()=>setActive(label)} key={label}><span>{icon}</span>{label}{label==='AI Chat'&&<i/>}</button>)}
    </nav>
  </div>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
