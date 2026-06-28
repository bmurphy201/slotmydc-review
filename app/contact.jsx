/* Contact — single-column hero band, two-column body (copy + calendar embed),
   three-column direct-contact row. Calendar is a placeholder embed slot. */
const { Icon: CIcon } = window;

function ContactHero() {
  return (
    <header className="ct-hero" id="top">
      <div className="sheet">
        <div className="ct-eyebrow">Contact</div>
        <h1>See your savings <span className="hl">before</span> you commit.</h1>
        <p className="ct-sub">
          <b>40+ warehouse transformations</b> since 1992. Typical SlotMyDC result:
          <b> $100K to $500K</b> in annual labor savings.
        </p>
      </div>
    </header>
  );
}

function ContactBody() {
  return (
    <section className="ct-section" id="schedule">
      <div className="sheet ct-grid">
        <div className="ct-copy reveal">
          <div className="ct-kicker">Get started</div>
          <h2 className="h2">Speak to our team.</h2>
        </div>

        <div className="ct-widget reveal" id="book">
          {/* Calendar embed placeholder — drop in Calendly / Cal.com iframe here */}
          <div className="cal-embed" role="img" aria-label="Scheduling calendar embed">
            <div className="cal-embed-top">
              <span className="cal-ic"><CIcon name="calendar" /></span>
              <span className="cal-embed-label">Calendar embed</span>
            </div>
            <div className="cal-embed-mid">
              <p>30 minutes. Working session, not a demo. We pull up your numbers together and build the estimate live on the call.</p>
            </div>
            <a className="btn btn-blue cal-cta" href="#book">
              Book a 30-Minute Working Session <span className="ix">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectContact() {
  const cols = [
    ["phone", "Phone", <a href="tel:+16026616480">602·661·6480</a>],
    ["mail", "Email", <a href="mailto:contact@xform.me">contact@xform.me</a>],
    ["pin", "Office", <React.Fragment>6617 N Scottsdale Rd, Suite 204<br/>Scottsdale, AZ 85250</React.Fragment>],
  ];
  return (
    <section className="ct-direct" id="direct">
      <div className="sheet">
        <div className="cd-head reveal">Direct contact</div>
        <div className="cd-row">
          {cols.map(([icon, label, val]) => (
            <div className="cd-col reveal" key={label}>
              <span className="cd-ic"><CIcon name={icon} /></span>
              <span className="cd-l">{label}</span>
              <span className="cd-v">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContactHero, ContactBody, DirectContact });
