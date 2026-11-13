import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const API_URL = (user) => `https://github-contributions-api.jogruber.de/v4/${user}?y=last`;

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DAY_MS = 86400000;
const WEEKS = 53;

// GitHub exact color scheme for contribution levels
const LEVELS = [
  "bg-[#ebedf0] dark:bg-[#161b22]", // Level 0 - empty
  "bg-[#9be9a8] dark:bg-[#0e4429]", // Level 1 - low
  "bg-[#40c463] dark:bg-[#006d32]", // Level 2 - medium-low
  "bg-[#30a14e] dark:bg-[#26a641]", // Level 3 - medium-high
  "bg-[#216e39] dark:bg-[#39d353]", // Level 4 - high
];

export default function GithubContributionGraph({ username }) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    fetch(API_URL(username))
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad response"))))
      .then((json) => {
        if (cancelled) return;
        setData(json);
        setStatus("ok");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <h2 className="text-xl font-bold">GitHub Activity</h2>

      {status === "error" && (
        <p className="py-6 text-center text-xs text-neutral-600">
          Couldn't load the live contribution graph right now. Check back later or{" "}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="text-green-600 hover:underline dark:text-green-400"
          >
            visit my GitHub
          </a>
          .
        </p>
      )}

      {status === "loading" && <GraphSkeleton />}

      {status === "ok" && data && (
        <section className="opacity-80 hover:opacity-100 transition-opacity duration-100 relative w-full">
          <Calendar data={data} />

          <div className="mt-3 flex justify-between items-center text-xs font-figtree text-neutral-600">
            <span>{(data.total?.lastYear ?? lastYearTotal(data)).toLocaleString("en-US")} contributions in the last year</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex gap-1">
                {LEVELS.map((cls, i) => (
                  <span key={i} aria-hidden="true" className={`w-3 h-3 rounded-[1px] ${cls}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function lastYearTotal(data) {
  const contributions = data?.contributions;
  if (!contributions?.length) return 0;
  const cutoff = Date.now() - 365 * DAY_MS;
  let sum = 0;
  for (const d of contributions) {
    const t = d && d.date ? new Date(d.date + "T12:00:00").getTime() : NaN;
    if (!Number.isNaN(t) && t >= cutoff) sum += d.count || 0;
  }
  return sum;
}

function GraphSkeleton() {
  return (
    <div className="animate-pulse w-full">
      <div className="mb-2 h-4 w-1/3 rounded bg-neutral-200 dark:bg-[#161616]" />
      <div className="flex w-full gap-1">
        {Array.from({ length: 12 }).map((_, c) => (
          <div key={c} className="flex flex-1 flex-col gap-1">
            {Array.from({ length: 7 }).map((__, r) => (
              <div key={r} className="aspect-square w-full rounded-[2px] bg-neutral-200 dark:bg-[#161616]" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const day = date.getDate();
  const suffix =
    day >= 11 && day <= 13
      ? "th"
      : ["th", "st", "nd", "rd"][day % 10] || "th";
  return `${MONTH_NAMES[date.getMonth()]} ${day}${suffix}, ${y}`;
}

function Calendar({ data }) {
  const { weeks, monthTicks } = useMemo(() => buildGraph(data.contributions || []), [data]);
  const [tip, setTip] = useState(null);
  const containerRef = useRef(null);
  const tipRef = useRef(null);

  const showTip = useCallback((e, cell) => {
    const container = containerRef.current;
    if (!container) return;
    const cellRect = e.currentTarget.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const x = cellRect.left + cellRect.width / 2 - containerRect.left;
    const y = cellRect.top - containerRect.top;
    setTip({ x, y, cell });
  }, []);

  const hideTip = useCallback(() => setTip(null), []);

  const tipStyle = useMemo(() => {
    if (!tip || !tipRef.current) return { opacity: 0, pointerEvents: "none" };
    const tipW = tipRef.current.offsetWidth;
    const container = containerRef.current;
    const containerW = container ? container.offsetWidth : 0;
    let left = tip.x - tipW / 2;
    if (left < 0) left = 0;
    if (left + tipW > containerW) left = containerW - tipW;
    return {
      position: "absolute",
      top: tip.y - 8,
      left,
      transform: "translateY(-100%)",
      zIndex: 50,
    };
  }, [tip]);

  const arrowLeft = useMemo(() => {
    if (!tip || !tipRef.current) return 0;
    const tipW = tipRef.current.offsetWidth;
    const container = containerRef.current;
    const containerW = container ? container.offsetWidth : 0;
    let boxLeft = tip.x - tipW / 2;
    if (boxLeft < 0) boxLeft = 0;
    if (boxLeft + tipW > containerW) boxLeft = containerW - tipW;
    return tip.x - boxLeft;
  }, [tip]);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative mb-2 h-4 w-full text-xs font-figtree text-neutral-600">
        {monthTicks.map((tick) => (
          <span
            key={tick.label + tick.col}
            className="absolute"
            style={{ left: `${(tick.col / WEEKS) * 100}%` }}
          >
            {tick.label}
          </span>
        ))}
      </div>

      <div className="w-full">
        <div className="flex w-full gap-1">
          {weeks.map((week, c) => (
            <div key={c} className="flex flex-1 flex-col gap-1">
              {week.column.map((cell, r) => {
                const cellIndex = c * 7 + r;
                const animationDelay = `${cellIndex * 0.0065}s`;

                return (
                  <div
                    key={r}
                    onMouseEnter={(e) => showTip(e, cell)}
                    onMouseLeave={hideTip}
                    className={`aspect-square w-full rounded-[2.5px] ${LEVELS[cell.level]} ${
                      cell.level > 0 ? "contribution-cell" : "contribution-empty"
                    }`}
                    style={{ animationDelay }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      <div
        ref={tipRef}
        role="tooltip"
        className={`pointer-events-none whitespace-nowrap rounded-md bg-[#1b1f23] px-3 py-1.5 text-xs leading-tight text-white shadow-lg transition-opacity duration-100 ${
          tip ? "opacity-100" : "opacity-0"
        }`}
        style={tip ? tipStyle : { position: "absolute", top: 0, left: 0, opacity: 0 }}
      >
        {tip && (
          <>
            <span className="font-semibold">
              {tip.cell.count > 0
                ? `${tip.cell.count} contribution${tip.cell.count > 1 ? "s" : ""}`
                : "No contributions"}
            </span>
            <span className="text-neutral-400"> on {formatDate(tip.cell.date)}</span>
          </>
        )}
        {/* Arrow */}
        <div
          className="absolute -bottom-1 size-2 rotate-45 bg-[#1b1f23]"
          style={{ left: `${arrowLeft}px`, transform: "translateX(-50%) rotate(45deg)" }}
        />
      </div>
    </div>
  );
}

function buildGraph(contributions) {
  const counts = new Map();
  const levels = new Map();
  let maxDate = null;

  for (const d of contributions) {
    const key = d && d.date;
    if (!key) continue;
    counts.set(key, d.count || 0);
    levels.set(key, d.level || 0);
    if (!maxDate || key > maxDate) maxDate = key;
  }

  const today = new Date();
  const last = maxDate ? new Date(maxDate + "T12:00:00") : today;
  const end = last.getTime() > today.getTime() ? today : last;

  const start = new Date(end);
  start.setDate(start.getDate() - (WEEKS - 1) * 7);
  start.setDate(start.getDate() - start.getDay());
  start.setHours(12, 0, 0, 0);

  const weeks = [];

  for (let c = 0; c < WEEKS; c++) {
    const colStart = new Date(start);
    colStart.setDate(start.getDate() + c * 7);

    const column = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(colStart);
      date.setDate(colStart.getDate() + d);
      if (date.getTime() > end.getTime()) break;
      const key = toKey(date);
      const has = counts.has(key);
      column.push({
        date: key,
        count: has ? counts.get(key) : 0,
        level: has ? levels.get(key) : 0,
      });
    }

    weeks.push({ column });
  }

  const monthTicks = [];
  for (let m = 0; m < 14; m++) {
    const firstOfMonth = new Date(start.getFullYear(), start.getMonth() + m, 1, 12);
    if (firstOfMonth.getTime() > end.getTime()) break;
    if (firstOfMonth.getTime() < start.getTime()) continue;
    const diffDays = Math.floor((firstOfMonth - start) / DAY_MS);
    const col = Math.max(0, Math.min(WEEKS - 1, Math.floor(diffDays / 7)));
    monthTicks.push({ label: MONTHS[firstOfMonth.getMonth()], col });
  }

  return { weeks, monthTicks };
}

function toKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
