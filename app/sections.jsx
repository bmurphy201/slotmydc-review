/* problem · flipped model · program · steps — copy VERBATIM, no eyebrows */
const { Icon: SI, VelocityGrid: SVG } = window;

function Problem() {
  return (
    <section className="section" id="problem">
      <div className="sheet">
        <h2 className="h2 reveal" style={{ maxWidth: "20ch" }}>Most warehouses try slotting software, run it once, and let it <span className="hl">collect dust.</span></h2>

        <div className="factband reveal">
          <div className="f">Picking is <span className="sig">50 to 65%</span> of warehouse operating cost.</div>
          <div className="f">Travel between slots eats <span className="sig">more than half</span> of every picker's shift.</div>
          <div className="f">Most DCs re-slot <span className="sig">once a year</span> off a spreadsheet. Some never re-slot at all.</div>
        </div>

        <div className="callout reveal">
          <p>The fast movers stay in the wrong zone. The dimensioner sits on a shelf. Labor cost climbs.</p>
          <p className="small">This isn't a tooling gap. It's an operating-model gap. Dimensioners sit unused because nobody owns the monthly re-slot. SlotMyDC owns it.</p>
        </div>
      </div>
    </section>
  );
}

function FlippedModel() {
  const [mode, setMode] = React.useState("before");
  return (
    <section className="section dark" id="flipped">
      <div className="sheet">
        <h2 className="h2 reveal" style={{ maxWidth: "14ch" }}>We flipped the <span className="hl">model.</span></h2>
        <p className="flip-lead reveal">SlotMyDC isn't software you have to learn. It's a managed program.</p>
        <p className="lead reveal" style={{ marginTop: 18 }}>
          Our team handles the optimization. Our team handles the monthly re-slotting. You get the device, the layout,
          the reports, and the savings. We do the work.
        </p>

        <div className="flip-toggle reveal" style={{ marginTop: "clamp(34px,4vw,48px)" }}>
          <button className={mode === "before" ? "on" : ""} onClick={() => setMode("before")}>Before re-slot</button>
          <button className={mode === "after" ? "on" : ""} onClick={() => setMode("after")}>After re-slot</button>
        </div>

        <div className="flip-grid reveal">
          <div className="layout-card">
            <div className="lc-head"><span className="lc-title">Before</span><span className="lc-badge">Fast movers scattered</span></div>
            <SVG mode="before" cols={20} rows={11} seed={11} />
            <div className="dc-dock"><span className="dot"></span> Dock · long travel paths to prime SKUs</div>
          </div>
          <div className="layout-card">
            <div className="lc-head"><span className="lc-title">After</span><span className="lc-badge good">Velocity-clustered at dock</span></div>
            <SVG mode="after" cols={20} rows={11} seed={11} />
            <div className="dc-dock"><span className="dot"></span> Dock · fast movers within reach</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Program() {
  const rows = [
    ["Full slotting optimization", "10 to 25% less travel time"],
    ["Monthly re-slotting", "8 to 20% productivity gain"],
    ["KPI reporting every month", "2 to 5% additional pick-rate gain compounding each quarter"],
  ];
  return (
    <section className="section" id="program">
      <div className="sheet">
        <h2 className="h2 reveal" style={{ maxWidth: "18ch" }}>One program. Every month. Built for the mid-market and <span className="hl">large DC.</span></h2>

        <div className="ledger reveal">
          <div className="ledger-head">
            <div className="c">What's included</div>
            <div className="c r">What it's doing</div>
          </div>
          {rows.map((r, i) => (
            <div className="ledger-row" key={i}>
              <div className="c"><span className="ic"><SI name="check" size={22} /></span><span className="lab">{r[0]}</span></div>
              <div className="c r"><span className="up">↑</span><span className="gain">{r[1]}</span></div>
            </div>
          ))}
        </div>
        <div className="ledger-foot reveal">Already designed for DCs from 100K to 1M+ sq ft.</div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { n: "1", ic: "data", t: "We get your data.", p: "Order history. SKU master. Current layout. The bundled QBOID device handles the dimensioning capture.", skip: null },
    { n: "2", ic: "layout", t: "We optimize your slotting.", p: "Our team builds the 3D layout from your real velocity data. Fast movers near the dock. Slow movers off prime real estate. Every storage type in one model.", skip: null },
    { n: "3", ic: "refresh", t: "We keep it aligned.", p: "Monthly re-slotting. Reporting. Adjustments as inventory and demand shift.", skip: "Monthly is the part most slotting tools skip." },
  ];
  return (
    <section className="section panel" id="steps">
      <div className="sheet">
        <h2 className="h2 reveal" style={{ maxWidth: "14ch" }}>Three steps. <span className="hl">We do the work.</span></h2>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step reveal" key={i}>
              <div className="sidx">{s.n}</div>
              <div className="sbody">
                <span className="sic"><SI name={s.ic} size={30} /></span>
                <h3 className="h3">{s.t}</h3>
                <p>{s.p}</p>
                {s.skip && <span className="skip">{s.skip}</span>}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36 }} className="reveal">
          <a className="tlink" href="how-it-works.html">See How It Works in Detail <span className="ix">→</span></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Problem, FlippedModel, Program, Steps });
