const services = [
  { id: "01", title: "AI Systems", text: "Private, practical intelligence built around the way your team actually works." },
  { id: "02", title: "Automation", text: "Quiet infrastructure that watches the routine, handles the repeatable, and escalates what matters." },
  { id: "03", title: "Digital Products", text: "Focused interfaces and tools that turn complicated operations into clear decisions." },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation"><a className="brand" href="#top"><span>LL</span> LOOKOUT LABS</a><div className="navLinks"><a href="#work">Capabilities</a><a href="#about">About</a></div><a className="signal" href="mailto:hello@lookout-labs.com">Start a project <b>↗</b></a></nav>
    <section className="hero shell" id="top"><div className="eyebrow"><i /> INDEPENDENT AI &amp; AUTOMATION STUDIO</div><h1>See further.<br/><em>Build smarter.</em></h1><p className="intro">We create intelligent systems, precise automations, and digital tools for teams that refuse to operate in the dark.</p><a className="cta" href="#work">Explore our work <span>↓</span></a><div className="art" aria-hidden="true"><div className="sweep"/><img src="/lookout-logo.png" alt="" /></div><div className="coordinates">18.0179° N<br/>76.8099° W</div></section>
    <section className="manifesto shell" id="about"><div><span className="sectionNo">/ 01</span><p>OUR POSITION</p></div><h2>Technology should sharpen your instincts, <span>not cloud them.</span></h2><p>Lookout Labs designs systems that feel less like software and more like an advantage—purposeful, capable, and always on watch.</p></section>
    <section className="services shell" id="work"><header><div><span className="sectionNo">/ 02</span><p>WHAT WE BUILD</p></div><p className="aside">FROM SIGNAL<br/>TO SYSTEM</p></header>{services.map((service) => <article key={service.id}><span>{service.id}</span><h3>{service.title}</h3><p>{service.text}</p><b>↗</b></article>)}</section>
    <section className="contact shell"><p>HAVE A MISSION IN MIND?</p><h2>Let’s build what’s<br/><em>over the horizon.</em></h2><a href="mailto:hello@lookout-labs.com">hello@lookout-labs.com <span>↗</span></a></section>
    <footer className="shell"><span>© 2026 LOOKOUT LABS</span><span>BUILT WITH INTENT // JAMAICA</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}
