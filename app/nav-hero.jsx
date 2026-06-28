/* sticky nav + hero — copy is VERBATIM from client */
const { VelocityGrid: HVG } = window;

const NAV_LINKS = [
  { key: "home", href: "index.html", label: "Home" },
  { key: "how", href: "how-it-works.html", label: "How It Works" },
  { key: "about", href: "about.html", label: "About" },
  { key: "contact", href: "contact.html", label: "Contact" },
];

function Nav({ active = "home" }) {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="nav">
      <a className="brand" href="index.html" aria-label="SlotMyDC home">
        <img src="uploads/logo-1782665428620.avif" alt="SlotMyDC" />
        <span className="wm">Slot<b>My</b>DC</span>
      </a>
      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l.key} href={l.href} className={active === l.key ? "active" : undefined}>{l.label}</a>
        ))}
      </div>
      <div className="nav-right">
        <a className="nav-tel" href="tel:+16026616480">602-661-6480</a>
        <a className="btn" href="contact.html">Talk to the team</a>
        <button className="btn btn-ghost nav-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>☰</button>
      </div>
      <div className={open ? "nav-menu open" : "nav-menu"}>
        {NAV_LINKS.map((l) => (
          <a key={l.key} href={l.href} className={active === l.key ? "active" : undefined} onClick={close}>{l.label}</a>
        ))}
        <a className="nav-menu-tel" href="tel:+16026616480" onClick={close}>602-661-6480</a>
        <a className="btn btn-blue nav-menu-cta" href="contact.html" onClick={close}>Talk to the team <span className="ix">→</span></a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <h1>Cut <span className="hl-sig">$100K to $500K</span> in picker labor. <span className="hl">Every year. Compounding monthly.</span></h1>
      <p className="hero-sub">
        SlotMyDC is the managed slotting program for distribution centers from 100K to 1M+ sq ft. We build the
        layout, re-slot it every month, and ship a QBOID dimensioner with the program so your SKU data is right
        on day one. Roughly the cost of the dimensioner alone.
      </p>
      <div className="hero-cta">
        <a className="btn btn-blue" href="contact.html">Talk to the team <span className="ix">→</span></a>
      </div>
      <p className="hero-builtfor">Built for Directors of Operations and VPs of Distribution. By Strategic Transformation Advisors. Redesigning warehouses since 1992.</p>

      <div className="hero-floor reveal">
        <div className="hf-cap">
          <span>Top-down DC layout, colored by SKU velocity</span>
          <span className="hf-leg">Slow<i className="hf-bar"></i>Fast</span>
        </div>
        <HVG mode="after" cols={40} rows={6} seed={9} />
      </div>
    </header>
  );
}

Object.assign(window, { Nav, Hero });
