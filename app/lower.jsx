/* STA backing · old/new · pull-quote · FAQ · final CTA · footer — copy VERBATIM, no eyebrows */

function StaBacking() {
  return (
    <section className="section dark" id="sta">
      <div className="sheet sta-grid">
        <div className="reveal">
          <div className="sta-lock">
            <span className="sta-logo"><img src="uploads/stalogo.avif" alt="Strategic Transformation Advisors" /></span>
          </div>
          <h2 className="h2" style={{ marginTop: 22, maxWidth: "16ch" }}>Backed by <span className="hl">30+ years</span> of supply chain work.</h2>
          <p className="lead" style={{ marginTop: 22 }}>
            SlotMyDC is built by Strategic Transformation Advisors. We kept watching clients buy dimensioners that
            ended up on a shelf, and re-slot once a year off a spreadsheet that was wrong by Q2. So we built the
            program we wished they'd been buying.
          </p>
          <div style={{ marginTop: 30 }}>
            <a className="tlink" href="about.html">Meet the team and see who we have worked with <span className="ix">→</span></a>
          </div>
        </div>
        <div className="sta-metrics reveal">
          <div className="m"><span className="n tnum">30+</span><span className="l">years</span></div>
          <div className="m"><span className="n tnum">40+</span><span className="l">supply chain transformations</span></div>
          <div className="m"><span className="n">F500</span><span className="l">Fortune 500 manufacturers across electronics, industrial, and consumer goods</span></div>
        </div>
      </div>
    </section>
  );
}

function OldNew() {
  const rows = [
    ["Buy Manhattan WMS, wait 12 to 18 months, pay seven figures to access slotting", "Run SlotMyDC alongside the WMS you already have"],
    ["Buy Lucas or FORTNA, then hire someone to actually run the optimization", "We run the optimization. Every month."],
    ["Re-slot once a year, off a spreadsheet, by intuition", "Re-slot every month, off real data, by our team"],
  ];
  return (
    <section className="section" id="oldnew">
      <div className="sheet">
        <h2 className="h2 reveal" style={{ maxWidth: "20ch" }}>Slotting is no longer optional. And it no longer requires a <span className="hl">Manhattan budget.</span></h2>
        <div className="oldnew reveal">
          <div className="on-head">
            <div className="c old">Old way</div>
            <div className="c new">New way</div>
          </div>
          {rows.map((r, i) => (
            <div className="on-row" key={i}>
              <div className="c old">{r[0]}</div>
              <div className="c new">{r[1]}</div>
            </div>
          ))}
        </div>
        <div className="on-foot reveal">
          <span className="chip"><span className="x">✕</span> No WMS replacement</span>
          <span className="chip"><span className="x">✕</span> No in-house slotting team</span>
          <span className="chip"><span className="x">✕</span> No software to learn</span>
        </div>
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section className="section panel" id="pull">
      <div className="sheet" style={{ textAlign: "center" }}>
        <h2 className="q reveal" style={{ margin: "0 auto" }}>When was the last time someone <span className="hl">re-slotted</span> your warehouse?</h2>
        <div className="pq-body reveal">
          <p>If the answer is "I'm not sure," you are walking past $100K to $500K every year.</p>
          <p>Picking is the largest controllable cost in your building. Travel is the largest controllable cost inside picking. Slotting is the lever that moves both.</p>
          <p>Every month you wait is $8K to $40K of picker labor you can't get back.</p>
        </div>
        <div className="punch reveal">Typical SlotMyDC result: <span className="sig">$100K to $500K+</span> in annual labor savings, compounding month over month.</div>
      </div>
    </section>
  );
}

const FAQS = [
  ["What's bundled in the program?", "QBOID dimensioning device, slotting software, full optimization labor, monthly re-slotting, and monthly KPI reporting. One price. One program."],
  ["Do I need to replace my WMS?", "No. SlotMyDC runs alongside your existing WMS. We deliver the slotting plan as CSV, Excel, or direct WMS-format import."],
  ["Where does my data live?", "Under NDA before kickoff. We don't share, sell, or train models on your order history."],
  ["Who moves the product on the floor each month?", "Your team, on an off-shift pass. A typical monthly re-slotting plan touches 3 to 8% of SKUs."],
  ["How long until we see results?", "First slotting plan goes live within 3 to 6 weeks of kickoff. Labor savings typically show up in the first full month after the new layout is in place. Savings compound from there because we re-slot every month."],
  ["How is it priced?", "SlotMyDC is priced as a managed program, roughly the same total cost as buying a standalone dimensioner. We size pricing to your DC footprint and SKU count. Full quote on the discovery call, after the savings estimate."],
  ["What size warehouse is this for?", "Built for DCs from 100K to 1M+ sq ft. If you are smaller than 100K sq ft, the math may still work. Talk to us."],
];

function Faq() {
  const [open, setOpen] = React.useState(-1);
  return (
    <section className="section" id="faq">
      <div className="sheet">
        <h2 className="h2 reveal" style={{ maxWidth: "16ch" }}>Common <span className="hl">questions.</span></h2>
        <div className="faq">
          {FAQS.map(([q, a], i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{q}</span><span className="pm"></span>
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? 340 : 0 }}>
                <div className="inner">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section dark finalcta" id="cta">
      <div className="sheet">
        <h2 className="h2 reveal">Speak to our team now.</h2>
        <div className="row reveal">
          <a className="btn" href="contact.html">Book a working session <span className="ix">→</span></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="brand">
            <img src="uploads/logo-1782665428620.avif" alt="SlotMyDC" style={{ width: 36, height: 36 }} />
            <span className="wm" style={{ fontFamily: "var(--f-disp)", fontWeight: 600, fontSize: 23, color: "#fff", letterSpacing: "-0.02em" }}>Slot<b style={{ color: "var(--blue-soft)" }}>My</b>DC</span>
          </div>
          <p className="footer-tag">Built by Strategic Transformation Advisors. Redesigning warehouses since 1992.</p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <a href="index.html">Home</a>
          <a href="how-it-works.html">How It Works</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+16026616480">602-661-6480</a>
          <a href="mailto:contact@xform.me">contact@xform.me</a>
          <p>6617 N Scottsdale Rd, Suite 204, Scottsdale, AZ 85250</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 SlotMyDC.com</span>
        <span>Strategic Transformation Advisors</span>
      </div>
    </footer>
  );
}

Object.assign(window, { StaBacking, OldNew, PullQuote, Faq, FinalCta, Footer });
