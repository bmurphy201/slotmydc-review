/* How It Works — sections built on the homepage system */
const { Icon: HI, VelocityGrid: HVG } = window;

/* compact hero + iso velocity card */
function HiwHero() {
  return (
    <header className="hiw-hero" id="top">
      <div className="sheet">
        <div className="eyebrow reveal">How it works · Managed slotting program</div>
        <h1 className="reveal">We do the slotting. <span className="hl">You watch the savings.</span></h1>
        <p className="sub reveal">
          First slotting plan live in <b>3 to 6 weeks</b>. Re-slotting <b>every month</b> after that.
          Here's exactly how the program runs.
        </p>
        <div className="cta reveal">
          <a className="btn btn-blue" href="contact.html">Book a 30-minute working session <span className="ix">→</span></a>
        </div>
      </div>

      <div className="iso-card reveal">
        <div className="iso-head">
          <span className="t">SlotMyDC <b>/ Velocity zones — top-down DC layout</b></span>
          <span className="spacer"></span>
          <span className="zone"><i style={{ background: "var(--signal)" }}></i> Fast</span>
          <span className="zone"><i style={{ background: "#5FB06A" }}></i> Medium</span>
          <span className="zone"><i style={{ background: "var(--heat-cold)" }}></i> Slow</span>
        </div>
        <div className="iso-body">
          <HVG mode="after" cols={40} rows={8} seed={21} />
          <div className="iso-legend"><span>Slow movers</span><span className="bar"></span><span>Fast movers · clustered at dock</span></div>
        </div>
      </div>
    </header>
  );
}

/* 3-card scan strip */
function ScanStrip() {
  const cards = [
    { n: "1", ic: "data", t: "We get your data.", p: "Order history, SKU master, current layout. The bundled QBOID device captures every SKU's dimensions." },
    { n: "2", ic: "layout", t: "We optimize your slotting.", p: "STA's team builds the 3D layout from real velocity. Fast movers near the dock. Slow movers off prime real estate." },
    { n: "3", ic: "refresh", t: "We keep it optimized.", p: "Every month. Fresh layout. Fresh KPI report. The cadence is the product." },
  ];
  return (
    <section className="section" id="overview">
      <div className="sheet">
        <div className="colsplit">
          <h2 className="h2 reveal">The whole program, in <span className="hl">three steps.</span></h2>
          <div className="reveal"><p className="lead">Fast scanners get the shape of the program in ten seconds. The full detail is right below.</p></div>
        </div>
        <div className="scan reveal">
          {cards.map((c) => (
            <div className="scan-card" key={c.n}>
              <div className="top">
                <span className="num">{c.n}</span>
                <span className="sic"><HI name={c.ic} /></span>
              </div>
              <h3>{c.t}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
        <div className="scan-note reveal">The same three steps, in detail below</div>
      </div>
    </section>
  );
}

/* STEP 1 — data, with flow diagram */
function Step1() {
  return (
    <section className="section panel" id="step-1">
      <div className="sheet">
        <div className="detail">
          <div className="d-copy reveal">
            <div className="d-kicker"><span className="sn">01</span><span className="sl">We get your data</span></div>
            <h2>Slotting accuracy rides on <span className="hl">three inputs.</span></h2>
            <p className="d-lead">
              Current inventory, item master file (including dimensions), and velocity.
              <b> Most warehouses nail the first two and skip the third.</b>
            </p>

            <div className="spec">
              <h4>From you</h4>
              <ul>
                <li><span className="mk"><HI name="chart" /></span><span><b>6 to 12 months of order history</b> — CSV from your WMS or ERP</span></li>
                <li><span className="mk"><HI name="file" /></span><span><b>SKU master file</b> — item numbers, descriptions, current locations</span></li>
                <li><span className="mk"><HI name="layout" /></span><span><b>Current warehouse layout</b> — CAD file, other drawing, or a walkthrough we rebuild from notes</span></li>
              </ul>
            </div>

            <div className="qboid-note">
              <div className="m">From the bundled QBOID device</div>
              <p>A handheld dimensioner captures <b>cubic dimensions and weight for every SKU</b> at roughly 200–300 SKUs/hour <span className="conf">[STA to confirm]</span>. Every downstream decision rides on these dimensions.</p>
            </div>

            <div className="trust">
              <span className="lk"><HI name="lock" /></span>
              <span>Your data stays yours. <b>NDA before kickoff.</b> Hosted in SOC 2 environments. We don't share, sell, or train models on your order history.</span>
            </div>
          </div>

          <div className="d-visual reveal">
            <div className="flow">
              <div className="ft">Four sources → one model</div>
              <div className="flow-sources">
                <div className="src"><span className="si"><HI name="chart" /></span><div className="sx"><div className="sl">Order history</div><div className="sd">6–12 MO · CSV</div></div></div>
                <div className="src"><span className="si"><HI name="file" /></span><div className="sx"><div className="sl">SKU master</div><div className="sd">ITEMS · LOCATIONS</div></div></div>
                <div className="src"><span className="si"><HI name="layout" /></span><div className="sx"><div className="sl">Current layout</div><div className="sd">CAD · DRAWING</div></div></div>
                <div className="src q"><span className="si"><HI name="ruler" /></span><div className="sx"><div className="sl">QBOID dimensions</div><div className="sd">CUBIC · WEIGHT</div></div></div>
              </div>
              <div className="flow-arrows"><span className="ar">↓</span></div>
              <div className="flow-model">
                <div className="fm-t">Slot<b>My</b>DC model</div>
                <div className="fm-d">One velocity-aware 3D model</div>
              </div>
              <div className="flow-out"><span className="ar">↓</span></div>
              <div className="flow-result"><span className="ic"><HI name="box" /></span> Optimized slotting layout</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* STEP 2 — optimization, visual-left flipped */
function Step2() {
  const [mode, setMode] = React.useState("after");
  const models = [
    "Fast movers in optimal location, within ergonomic pick height",
    "Slow movers cleared off prime real estate",
    "Multi-modal storage in one model — selective rack, bulk floor, drive-in, push-back, AS/RS, mezzanine, carton flow",
    "Aisle & zone constraints — forklift-only aisles, pick-only zones, ergonomic-only positions, hazmat segregation",
    "Heatmaps showing where items are now AND where they should be",
  ];
  return (
    <section className="section" id="step-2">
      <div className="sheet">
        <div className="detail flip">
          <div className="d-copy reveal">
            <div className="d-kicker"><span className="sn">02</span><span className="sl">We optimize your slotting</span></div>
            <h2>The same people who've redesigned DCs <span className="hl">since 1992.</span></h2>
            <p className="d-lead">STA's slotting team runs the model — and they've been doing this for thirty years.</p>

            <div className="spec">
              <h4>What we model</h4>
              <ul>
                {models.map((m, i) => (
                  <li key={i}><span className="mk"><HI name="check" /></span><span>{m}</span></li>
                ))}
              </ul>
            </div>

            <div className="deliver">
              <div className="m">What you get</div>
              <p>A <b>3D model of your warehouse</b> — your aisles, your racks, your fast movers re-positioned. Plus a <b>change list</b> for the floor team and a <b>KPI baseline</b> so we measure improvement from day one.</p>
            </div>
          </div>

          <div className="d-visual reveal">
            <div className="ba-card">
              <div className="ba-toggle">
                <button className={mode === "before" ? "on" : ""} onClick={() => setMode("before")}>Before re-slot</button>
                <button className={mode === "after" ? "on" : ""} onClick={() => setMode("after")}>After re-slot</button>
              </div>
              <div className="ba-floor">
                <HVG mode={mode} cols={22} rows={13} seed={31} />
              </div>
              <div className="ba-foot">
                <span className="dot"></span>
                <span>Dock — {mode === "after" ? "fast movers within reach" : "long travel paths to prime SKUs"}</span>
                <span className="spacer"></span>
                <span>{mode === "after" ? "Velocity-clustered" : "Scattered"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* STEP 3 — keep aligned, climbing chart */
function Step3() {
  const bars = [38, 41, 44, 48, 52, 55, 59, 63, 66, 70, 74, 78];
  const cadence = [
    ["Pull", "fresh order history"],
    ["Re-run", "the slotting model"],
    ["Recommend", "which SKUs move"],
    ["Report", "travel time & labor cost"],
  ];
  return (
    <section className="section panel" id="step-3">
      <div className="sheet">
        <div className="detail">
          <div className="d-copy reveal">
            <div className="d-kicker"><span className="sn">03</span><span className="sl">We keep it aligned</span></div>
            <h2>This is the part <span className="hl-sig">nobody else does.</span></h2>
            <p className="d-lead">
              Your inventory shifts. Demand shifts. New SKUs come in, old ones drop out, seasonality pushes the
              velocity curve around. <b>A plan that was right in January is wrong by April.</b>
            </p>

            <div className="spec">
              <h4>Every month, we</h4>
              <ul>
                <li><span className="mk"><HI name="data" /></span><span>Pull fresh order history</span></li>
                <li><span className="mk"><HI name="refresh" /></span><span>Re-run the slotting model</span></li>
                <li><span className="mk"><HI name="layout" /></span><span>Deliver a re-slotting recommendation — which SKUs move, which stay, the projected labor impact</span></li>
                <li><span className="mk"><HI name="chart" /></span><span>Send a KPI report — travel time and labor cost, month over month</span></li>
              </ul>
            </div>

            <div className="payoff">
              <div className="m">Why monthly</div>
              <p>Most slotting tools deliver a one-time layout and walk away. <b>We re-slot every month because the math demands it.</b></p>
            </div>
          </div>

          <div className="d-visual reveal">
            <div className="chart">
              <div className="chart-head">
                <span className="t">Pick rate · month over month</span>
                <span className="v">+18%</span>
              </div>
              <div className="chart-plot">
                {bars.map((h, i) => (
                  <div className={"bar" + (i === 0 ? " cold" : "")} key={i} style={{ height: h + "%" }}></div>
                ))}
              </div>
              <div className="chart-axis">
                {bars.map((_, i) => <span key={i}>M{i + 1}</span>)}
              </div>
              <div className="chart-cap">Each monthly re-slot compounds on the last. <b>The cadence is the product.</b></div>

              <div className="cadence">
                <span className="lbl">The monthly loop</span>
                {cadence.map((c, i) => (
                  <React.Fragment key={i}>
                    <span className={"node" + (i === cadence.length - 1 ? " loop" : "")}><span className="n">{String(i + 1).padStart(2, "0")}</span> {c[0]}</span>
                    <span className="arw">{i === cadence.length - 1 ? "↻" : "→"}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* mid-page proof strip */
function ProofStrip() {
  return (
    <section className="proof" id="proof">
      <div className="sheet">
        <p className="q reveal">
          A 600K sq ft food-service DC saw pick rate climb <span className="sig">18% in 90 days</span> on the monthly cadence.
        </p>
        <div className="pcta reveal">
          <a className="btn btn-blue" href="contact.html">Already nodding along? Book a 30-min session <span className="ix">→</span></a>
        </div>
      </div>
    </section>
  );
}

/* program tiles */
function ProgramTiles() {
  const tiles = [
    { n: "01", ic: "layout", t: "SlotMyDC Slotting Software", p: "3D modeling, heatmaps, multi-modal storage, dynamic dashboard." },
    { n: "02", ic: "truck", t: "STA's Optimization Team", p: "The actual slotting work, run by humans who've been doing this for 30+ years." },
    { n: "03", ic: "refresh", t: "Monthly Re-Slotting & Reporting", p: "Fresh slotting plan and KPI report every month. For as long as you're a customer." },
    { n: "04", ic: "ruler", t: "QBOID Mobile Dimensioner", p: "Handheld device that captures cubic dimensions and weight for every SKU.", opt: true },
  ];
  return (
    <section className="section" id="program">
      <div className="sheet">
        <div className="colsplit">
          <h2 className="h2 reveal">What's in the <span className="hl">program?</span></h2>
          <div className="reveal"><p className="lead">One bundle: the software, the team, the monthly cadence, and the device. One price for all of it.</p></div>
        </div>
        <div className="tiles reveal">
          {tiles.map((t) => (
            <div className="tile" key={t.n}>
              <div className="th">
                <span className="tn">{t.n}</span>
                <span className="tic"><HI name={t.ic} /></span>
                {t.opt && <span className="opt">Optional · or bring your own</span>}
              </div>
              <h3>{t.t}</h3>
              <p>{t.p}</p>
            </div>
          ))}
        </div>
        <div className="tiles-foot reveal">
          <span className="big">One price for the full program. <span className="sig">Roughly what a standalone dimensioner costs.</span></span>
          <span className="sub">Sized to your DC footprint & SKU count</span>
        </div>
      </div>
    </section>
  );
}

/* implementation timeline */
function Timeline() {
  const phases = [
    { w: "Week 1", t: "Discovery & Data", p: "Kickoff call. We collect order history, SKU master, current layout. QBOID device ships." },
    { w: "Weeks 1–3", t: "Dimensioning & Modeling", p: "Dimensioning sweep runs. STA builds the 3D model and runs the first slotting pass." },
    { w: "Weeks 3–6", t: "Plan Delivery", p: "First slotting layout delivered with change list, KPI baseline, and floor execution guide." },
  ];
  return (
    <section className="section panel" id="timeline">
      <div className="sheet">
        <div className="colsplit">
          <h2 className="h2 reveal">Typical implementation: <span className="hl">3 to 6 weeks</span> to first plan.</h2>
          <div className="reveal"><p className="lead">Three phases get you to a live layout. Then the program is the monthly cadence — that block is most of the relationship.</p></div>
        </div>
        <div className="timeline reveal">
          {phases.map((p, i) => (
            <div className="phase" key={i}>
              <span className="pw">{p.w}</span>
              <span className="pt">{p.t}</span>
              <p>{p.p}</p>
            </div>
          ))}
          <div className="phase ongoing">
            <span className="pw">Month 2 +  · for as long as you're a customer</span>
            <span className="pt">Every month after</span>
            <p>Fresh slotting plan. Fresh KPI report. The cadence is the product.</p>
          </div>
        </div>
        <div className="timeline-foot reveal">Larger DCs (500K+ sq ft, 25K+ SKUs) typically run 8 to 10 weeks. We confirm timing on the discovery call.</div>
      </div>
    </section>
  );
}

/* three things buyers ask first */
function BuyerQs() {
  const qs = [
    { q: "Where does our data live?", a: <>Under NDA, in <b>SOC 2 environments</b>. We don't share or sell it.</> },
    { q: "Do we replace our WMS?", a: <>No. We deliver the slotting plan as CSV, Excel, or <b>direct import</b> into your existing WMS — Manhattan, Blue Yonder, SAP EWM, HighJump, NetSuite WMS.</> },
    { q: "Who moves product on the floor?", a: <>Your team, on an <b>off-shift pass</b>. A typical monthly plan touches just 3 to 8% of SKUs.</> },
  ];
  return (
    <section className="section" id="buyer-qs">
      <div className="sheet">
        <div className="colsplit">
          <h2 className="h2 reveal">Three things buyers <span className="hl">ask first.</span></h2>
          <div className="reveal"><p className="lead">The rest live on the homepage FAQ. These are the ones that come up on every first call.</p></div>
        </div>
        <div className="bq reveal">
          {qs.map((x, i) => (
            <div className="bq-card" key={i}>
              <span className="qn">{String(i + 1).padStart(2, "0")}</span>
              <h3>{x.q}</h3>
              <p>{x.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HiwHero, ScanStrip, Step1, Step2, Step3, ProofStrip, ProgramTiles, Timeline, BuyerQs });
