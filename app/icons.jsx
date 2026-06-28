/* icons + native visualizations */

const Icon = ({ name, className, size = 24 }) => {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    data: <g {...p}><ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6"/><path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6"/></g>,
    layout: <g {...p}><path d="M3 8.5 12 3l9 5.5-9 5.5z"/><path d="M3 8.5V16l9 5.5M21 8.5V16l-9 5.5M12 14v7.5"/></g>,
    refresh: <g {...p}><path d="M20 11a8 8 0 0 0-14.3-4.5M4 5v4h4"/><path d="M4 13a8 8 0 0 0 14.3 4.5M20 19v-4h-4"/></g>,
    check: <g {...p}><path d="M20 6 9 17l-5-5"/></g>,
    truck: <g {...p}><path d="M2 7h11v8H2zM13 10h4l3 3v2h-7z"/><circle cx="6" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/></g>,
    chart: <g {...p}><path d="M4 20V4M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/></g>,
    clock: <g {...p}><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></g>,
    box: <g {...p}><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></g>,
    pin: <g {...p}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></g>,
    arrow: <g {...p}><path d="M5 12h14M13 6l6 6-6 6"/></g>,
    lock: <g {...p}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></g>,
    file: <g {...p}><path d="M13 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V9z"/><path d="M13 3v6h6"/></g>,
    ruler: <g {...p}><rect x="3" y="8" width="18" height="8" rx="1.5"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/></g>,
    phone: <g {...p}><path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"/></g>,
    mail: <g {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/></g>,
    calendar: <g {...p}><rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17M8 3.5v3.5M16 3.5v3.5"/></g>,
  };
  return <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" style={{ display: "block", flex: "none" }}>{paths[name]}</svg>;
};

/* deterministic PRNG */
function mulberry(seed){ return function(){ let t = seed += 0x6D2B79F5; t = Math.imul(t ^ t>>>15, t|1); t ^= t + Math.imul(t ^ t>>>7, t|61); return ((t ^ t>>>14)>>>0)/4294967296; }; }

/* map 0..1 velocity to heatmap color */
function heat(v){
  const stops = [
    [0.00, [39,72,160]],   // cold blue
    [0.30, [47,111,230]],  // blue
    [0.55, [120,200,120]], // green
    [0.70, [194,238,59]],  // lime
    [0.85, [245,166,35]],  // amber
    [1.00, [242,106,53]],  // orange
  ];
  for (let i=0;i<stops.length-1;i++){
    const [a,ca]=stops[i],[b,cb]=stops[i+1];
    if (v<=b){ const t=(v-a)/(b-a); const c=ca.map((x,k)=>Math.round(x+(cb[k]-x)*t)); return `rgb(${c[0]},${c[1]},${c[2]})`; }
  }
  return "rgb(242,106,53)";
}

/* top-down DC velocity layout. mode: 'before' (scattered) | 'after' (clustered near dock at top) */
function VelocityGrid({ cols = 22, rows = 11, mode = "before", seed = 7 }) {
  const rng = React.useMemo(() => mulberry(seed + (mode === "after" ? 999 : 0)), [seed, mode]);
  const cells = React.useMemo(() => {
    const out = [];
    for (let r=0;r<rows;r++){
      for (let c=0;c<cols;c++){
        const aisle = c % 6 === 5;            // vertical aisle gaps
        let v;
        if (mode === "after") {
          // fast movers concentrated near dock (top rows)
          const prox = 1 - r/(rows-1);        // 1 at top
          v = Math.min(1, Math.max(0, prox * (0.7 + rng()*0.5) - 0.12 + (rng()-0.5)*0.12));
        } else {
          // scattered randomly
          v = rng();
          v = v*v*1.05; // skew so most are cool, hot ones random everywhere
        }
        out.push({ aisle, v, empty: rng() > 0.93 });
      }
    }
    return out;
  }, [cols, rows, mode, rng]);
  return (
    <div className="dc-floor" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {cells.map((cell, i) => (
        <div key={i} className="cell" style={{
          background: cell.aisle ? "rgba(255,255,255,0.03)" : cell.empty ? "rgba(255,255,255,0.06)" : heat(cell.v),
          opacity: cell.aisle ? 0.4 : 1,
        }} />
      ))}
    </div>
  );
}

Object.assign(window, { Icon, VelocityGrid, heat });
