"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* A dark "screen on the desk" that cycles through Phaibun's three stacks,
   typing each file out, switching tabs, and showing a per-language status:
   Flask (Python) -> SuiteScript (NetSuite JS) -> Flutter (Dart), looping.
   Driven by setInterval (survives hidden/headless tabs); static on reduced motion. */

type TokType = "com" | "kw" | "str" | "fn" | "num" | "txt" | "punc";
type Tok = [string, TokType];

const COLOR: Record<TokType, string> = {
  com: "#6B7280",
  kw: "var(--color-accent)",
  str: "#D8B27A",
  fn: "#ECEDF0",
  num: "#F0905A",
  txt: "#C4C8D2",
  punc: "#888E98",
};

type CodeFile = {
  tab: string;
  lang: string;
  run: string;
  done: string;
  lines: Tok[][];
};

const PY: Tok[][] = [
  [["# approval_engine.py — multi-step routing", "com"]],
  [["from ", "kw"], ["flask ", "txt"], ["import ", "kw"], ["Blueprint, g", "txt"]],
  [["from ", "kw"], [".rbac ", "txt"], ["import ", "kw"], ["require_role", "txt"]],
  [],
  [["bp ", "txt"], ["= ", "punc"], ["Blueprint", "fn"], ["(", "punc"], ['"approvals"', "str"], [", ", "punc"], ["__name__", "txt"], [")", "punc"]],
  [],
  [["@bp", "kw"], [".post", "kw"], ["(", "punc"], ['"/<int:rid>/approve"', "str"], [")", "punc"]],
  [["@require_role", "kw"], ["(", "punc"], ['"approver"', "str"], [")", "punc"]],
  [["def ", "kw"], ["approve", "fn"], ["(rid):", "txt"]],
  [["    req ", "txt"], ["= ", "punc"], ["Request", "fn"], [".get_or_404", "fn"], ["(rid)", "txt"]],
  [["    step ", "txt"], ["= ", "punc"], ["req.advance", "fn"], ["(actor", "txt"], ["=", "punc"], ["g.user)", "txt"]],
  [["    audit", "txt"], [".log", "fn"], ["(req, ", "txt"], ['"APPROVE"', "str"], [", g.user)", "txt"]],
  [["    if ", "kw"], ["step.is_final", "txt"], [":", "punc"]],
  [["        req", "txt"], [".close", "fn"], ["(", "punc"], ['"approved"', "str"], [")", "punc"]],
  [["        notify", "txt"], [".enqueue", "fn"], ["(req.owner)", "txt"]],
  [["    return ", "kw"], ["req", "txt"], [".json", "fn"], ["(), ", "txt"], ["200", "num"]],
];

const JS: Tok[][] = [
  [["/** @NScriptType UserEventScript */", "com"]],
  [["define", "fn"], ["([", "punc"], ['"N/record"', "str"], [", ", "punc"], ['"N/runtime"', "str"], ["],", "punc"]],
  [["(record, runtime) ", "txt"], ["=> {", "punc"]],
  [],
  [["  const ", "kw"], ["beforeSubmit ", "txt"], ["= ", "punc"], ["(ctx) ", "txt"], ["=> {", "punc"]],
  [["    if ", "kw"], ["(ctx.type === ", "txt"], ['"delete"', "str"], [") ", "txt"], ["return", "kw"], [";", "punc"]],
  [["    const ", "kw"], ["po ", "txt"], ["= ", "punc"], ["ctx.newRecord", "txt"], [";", "punc"]],
  [["    const ", "kw"], ["total ", "txt"], ["= ", "punc"], ["po", "txt"], [".getValue", "fn"], ['("total")', "txt"], [";", "punc"]],
  [],
  [["    if ", "kw"], ["(total > ", "txt"], ["50000", "num"], [") {", "punc"]],
  [["      po", "txt"], [".setValue", "fn"], ["(", "punc"], ['"approvalstatus"', "str"], [", ", "punc"], ["2", "num"], [")", "punc"]],
  [["      log", "txt"], [".audit", "fn"], ["(", "punc"], ['"ROUTED"', "str"], [", total)", "txt"]],
  [["    }", "punc"]],
  [["  };", "punc"]],
  [["  return ", "kw"], ["{ beforeSubmit }", "txt"], [";", "punc"]],
  [["});", "punc"]],
];

const DART: Tok[][] = [
  [["// wms_sync.dart — offline-first sync", "com"]],
  [["class ", "kw"], ["SyncService ", "fn"], ["{", "punc"]],
  [["  final ", "kw"], ["_queue ", "txt"], ["= ", "punc"], ["Queue", "fn"], ["<Txn>()", "txt"], [";", "punc"]],
  [],
  [["  Future", "fn"], ["<void> ", "txt"], ["enqueue", "fn"], ["(Txn txn) ", "txt"], ["async ", "kw"], ["{", "punc"]],
  [["    await ", "kw"], ["_db", "txt"], [".insert", "fn"], ["(", "punc"], ['"queue"', "str"], [", txn.map())", "txt"], [";", "punc"]],
  [["    _queue", "txt"], [".add", "fn"], ["(txn)", "txt"], [";", "punc"]],
  [["  }", "punc"]],
  [["  Future", "fn"], ["<void> ", "txt"], ["drain", "fn"], ["() ", "txt"], ["async ", "kw"], ["{", "punc"]],
  [["    while ", "kw"], ["(_queue.isNotEmpty) {", "txt"]],
  [["      final ", "kw"], ["txn ", "txt"], ["= ", "punc"], ["_queue", "txt"], [".removeFirst", "fn"], ["()", "txt"], [";", "punc"]],
  [["      await ", "kw"], ["_api", "txt"], [".post", "fn"], ["(txn)", "txt"]],
  [["        .catchError", "fn"], ["(_retryBackoff)", "txt"], [";", "punc"]],
  [["    }", "punc"]],
  [["  }", "punc"]],
  [["}", "punc"]],
];

const FILES: CodeFile[] = [
  { tab: "approval_engine.py", lang: "py · flask", run: "running pytest…", done: "✓ 142 passed", lines: PY },
  { tab: "suitelet.js", lang: "js · suitescript", run: "deploying…", done: "✓ deployed · NetSuite", lines: JS },
  { tab: "wms_sync.dart", lang: "dart · flutter", run: "flutter build…", done: "✓ build · 0 errors", lines: DART },
];

const lineLen = (line: Tok[]) => line.reduce((m, t) => m + t[0].length, 0);
const fileTotal = (f: CodeFile) => f.lines.reduce((n, line) => n + lineLen(line) + 1, 0);
const MAX_LINES = Math.max(...FILES.map((f) => f.lines.length));

export default function CodeStream() {
  const reduce = useReducedMotion();
  const [st, setSt] = useState({ fi: 0, n: 0, done: false });

  useEffect(() => {
    if (reduce) return;
    let fi = 0;
    let count = 0;
    let hold = 0;
    let phase: "type" | "hold" = "type";
    const SPEED = 4;
    const HOLD_TICKS = 90; // ~1.4s at 16ms before switching files
    const id = setInterval(() => {
      if (phase === "type") {
        const total = fileTotal(FILES[fi]);
        count = Math.min(total, count + SPEED);
        const done = count >= total;
        setSt({ fi, n: count, done });
        if (done) {
          phase = "hold";
          hold = 0;
        }
      } else {
        hold += 1;
        if (hold >= HOLD_TICKS) {
          fi = (fi + 1) % FILES.length;
          count = 0;
          phase = "type";
          setSt({ fi, n: 0, done: false });
        }
      }
    }, 16);
    return () => clearInterval(id);
  }, [reduce]);

  const file = FILES[st.fi];
  // Under reduced motion, derive the fully-revealed state at render (no setState in effect).
  const n = reduce ? fileTotal(file) : st.n;
  const done = reduce ? true : st.done;

  return (
    <figure
      className="w-full max-w-[520px]"
      aria-label="Live code editor cycling through a Flask approval endpoint, a NetSuite SuiteScript, and a Flutter offline-sync service."
    >
      <div className="overflow-hidden rounded-md border border-rule-2 bg-[#14161B] shadow-[0_24px_60px_-28px_oklch(0.2_0.03_255/0.55)]">
        {/* title bar */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#1A1D24] px-4 py-2.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-accent" />
          <div className="flex min-w-0 items-center gap-1">
            {FILES.map((f, i) => (
              <span
                key={f.tab}
                className={`hidden whitespace-nowrap rounded-[3px] px-2 py-0.5 font-mono text-[11px] transition-colors duration-300 sm:inline ${
                  i === st.fi ? "bg-white/10 text-[#E8E9EC]" : "text-[#6B7280]"
                }`}
              >
                {f.tab}
              </span>
            ))}
            <span className="font-mono text-[11px] text-[#E8E9EC] sm:hidden">{file.tab}</span>
          </div>
          <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6B7280]">
            {file.lang}
          </span>
        </div>

        {/* code body — fixed row count so switching files never resizes the panel */}
        <div
          className="overflow-x-auto px-3 py-4 font-mono text-[clamp(0.72rem,1.35vw,0.84rem)] leading-[1.62]"
          style={{ minHeight: `calc(${MAX_LINES} * 1.62em + 2rem)` }}
          aria-hidden="true"
        >
          <pre className="m-0">
            <code className="grid grid-cols-[2ch_1fr] gap-x-3">
              {file.lines.map((line, li) => {
                const len = lineLen(line);
                const startIdx = file.lines.slice(0, li).reduce((s, l) => s + lineLen(l) + 1, 0);
                const nextStart = startIdx + len + 1;
                const visible = Math.max(0, Math.min(len, n - startIdx));
                const reached = n > startIdx || (li === 0 && n > 0) || visible > 0;
                const caretHere = !done && n >= startIdx && n < nextStart;

                const parts = line.map(([text, type], ti) => {
                  const before = line.slice(0, ti).reduce((s, t) => s + t[0].length, 0);
                  const shown = Math.max(0, Math.min(text.length, visible - before));
                  if (shown <= 0) return null;
                  return (
                    <span key={ti} style={{ color: COLOR[type], fontStyle: type === "com" ? "italic" : undefined }}>
                      {text.slice(0, shown)}
                    </span>
                  );
                });

                return (
                  <React.Fragment key={li}>
                    <span className="select-none text-right text-[#454B54]">{reached || done ? li + 1 : ""}</span>
                    <span className="min-h-[1.62em] whitespace-pre">
                      {parts}
                      {caretHere && <span className="code-caret" />}
                      {done && li === file.lines.length - 1 && <span className="code-caret" />}
                    </span>
                  </React.Fragment>
                );
              })}
            </code>
          </pre>
        </div>

        {/* status bar */}
        <div className="flex items-center gap-2 border-t border-white/10 bg-[#1A1D24] px-4 py-2 font-mono text-[10px] tracking-[0.06em] text-[#6B7280]" aria-hidden="true">
          <span className="flex items-center gap-1.5 text-[#9AA0AA]">
            <span className="relative flex h-1.5 w-1.5">
              {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            live
          </span>
          <span className="text-[#454B54]">·</span>
          <span className={done ? "text-[#9AA0AA]" : ""}>{done ? file.done : file.run}</span>
          <span className="ml-auto text-[#454B54]">{file.tab.split(".").pop()} ⎇ main</span>
        </div>
      </div>
    </figure>
  );
}
