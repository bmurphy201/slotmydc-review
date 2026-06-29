/* About — sections built on the homepage system. Copy is client-supplied. */
const { Icon: AI } = window;

/* hero + wide warehouse photo */
function AboutHero() {
  return (
    <header className="about-hero" id="top">
      <div className="sheet">
        <div className="eyebrow reveal">About · Strategic Transformation Advisors</div>
        <h1 className="reveal">Built by people who have been inside the warehouse <span className="hl">since 1992.</span></h1>
        <p className="sub reveal">
          SlotMyDC is built by <b>Strategic Transformation Advisors</b>. We have been redesigning DCs since 1992,
          and we built this program because we kept watching clients buy slotting software and dimensioners that
          ended up on a shelf.
        </p>
      </div>
      <div className="hero-photo reveal">
        <div className="ph-photo"></div>
      </div>
    </header>
  );
}

/* three decades — two column */
function StoryDecades() {
  return (
    <section className="section panel" id="story">
      <div className="sheet">
        <div className="story-grid">
          <div className="story-copy reveal">
            <h2 className="h2">Three decades of supply chain <span className="hl">work.</span></h2>
            <div className="story-body">
              <p>Strategic Transformation Advisors started in the early 1990s as Consult League. Over thirty years later, we have grown into a supply chain consultancy that helps companies design, build, and optimize distribution centers, from greenfield automated builds to operational process improvement inside live warehouses.</p>
              <p>We have worked with global manufacturers, electronics OEMs, eyewear and apparel brands, oilfield services companies, and 3PLs. We have designed automation networks, run process redesigns, and stood inside the building when the pickers are walking.</p>
            </div>
          </div>
          <div className="story-photo reveal">
            <div className="ph-photo"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* why we built — centered manifesto with pull quote */
function WhyBuilt() {
  return (
    <section className="section" id="why">
      <div className="sheet">
        <div className="manifesto">
          <h2 className="h2 reveal">Why we built <span className="hl">SlotMyDC.</span></h2>
          <p className="m-body reveal">
            Inside our consulting work, the same broken pattern kept showing up: a dimensioner bought, run twice,
            left on a shelf. Slotting done once a year off a spreadsheet, by intuition. Picker travel eating half
            the shift while labor costs climbed.
          </p>
          <div className="m-img reveal">
            <div className="ph-photo"></div>
          </div>
          <p className="pq reveal">We could keep delivering one-off slotting projects. Or we could <span className="hl">productize the work.</span> So we did.</p>
        </div>
      </div>
    </section>
  );
}

/* client logo wall */
const CLIENTS = ["Halliburton", "Celestica", "Luxottica", "Lexmark", "Sun Microsystems", "Qualcomm"];
function Clients() {
  return (
    <section className="section panel" id="clients">
      <div className="sheet">
        <div className="clients-head reveal">
          <h2 className="h2">Companies STA has <span className="hl">worked with.</span></h2>
          <p className="clients-stat"><b>40+ supply chain transformations over 30+ years.</b> Across electronics, industrial, consumer goods, and energy.</p>
        </div>
        <div className="logowall reveal">
          {CLIENTS.map((c) => (
            <div className="logo-cell" key={c}><span>{c}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* the team — 4 principals, 2x2 */
const TEAM = [
  { id: "team-1", name: "Mark Riedel", role: "Principal", lead: true, photo: "uploads/mark-riedel.jpg", bio: "" },
  { id: "team-2", name: "Jakub Dabrowski", role: "Principal", bio: "" },
  { id: "team-3", name: "Phil Wulff", role: "Principal", photo: "uploads/phil-wulff.jpg", bio: "" },
  { id: "team-4", name: "David Kilzer", role: "Principal", photo: "uploads/david-kilzer.jpg", bio: "" },
];
function Team() {
  return (
    <section className="section panel" id="team">
      <div className="sheet">
        <div className="team-head reveal">
          <h2 className="h2">The <span className="hl">team.</span></h2>
        </div>
        <div className="team reveal">
          {TEAM.map((p) => (
            <div className="person" key={p.id}>
              <div className="shot">
                {p.photo
                  ? <img className="shot-img" src={p.photo} alt={p.name} />
                  : <div className="ph-photo"></div>}
              </div>
              <div className="pbody">
                <div className="pname">{p.name}</div>
                <div className="prole">{p.role}</div>
                {p.bio ? <p className="pbio">{p.bio}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* why we bundled QBOID */
function QboidPartner() {
  return (
    <section className="section" id="partner">
      <div className="sheet">
        <div className="qboid-grid">
          <div className="qboid-visual reveal">
            <div className="qboid-photos">
              <img src="uploads/qboid-front.webp" alt="QBOID dimensioner, front — measurement screen" />
              <img src="uploads/qboid-back.webp" alt="QBOID dimensioner, back — cameras and scanner" />
            </div>
            <div className="qboid-mark">
              <span className="wm">QBOID</span>
              <span className="tag">Mobile dimensioning · hardware partner</span>
            </div>
          </div>
          <div className="qboid-copy reveal">
            <div className="eyebrow">Technology partner</div>
            <h2 className="h2">Why we bundled <span className="hl">QBOID.</span></h2>
            <div className="qboid-body">
              <p>We chose QBOID because it's the first truly mobile parcel and pallet dimensioner. Handheld. Accurate. <b>No fixed kiosk. No laser station. No five-figure installation cost.</b></p>
              <p>QBOID is our hardware partner. We resell and support the device as part of the SlotMyDC program. <b>If you ever exit the program, you keep the device.</b></p>
            </div>
            <div className="more">
              <a className="tlink" href="https://qboid.ai" target="_blank" rel="noopener">Learn more about QBOID · qboid.ai <span className="ix">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* closing band */
function CloseBand() {
  return (
    <section className="section dark closeband" id="cta">
      <div className="sheet">
        <h2 className="h2 reveal">Schedule a <span className="hl">working session</span> with the team.</h2>
        <p className="cb-sub reveal">
          Thirty minutes. Bring your DC numbers. We will walk through the savings math live and tell you,
          on the call, <b>whether SlotMyDC is the right fit</b> for your operation.
        </p>
        <div className="cb-cta reveal">
          <a className="btn" href="contact.html">Book a 30-Minute Working Session <span className="ix">→</span></a>
          <a className="btn btn-ghost" href="tel:+16026616480">602·661·6480</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutHero, StoryDecades, WhyBuilt, Clients, Team, QboidPartner, CloseBand });
