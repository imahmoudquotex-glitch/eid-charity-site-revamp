import { useState, useRef, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";

interface CustomDatePickerProps {
  name?: string;
  value?: string;
  onChange?: (val: string) => void;
  min?: string;
}

const DAYS_AR = ["أح", "إث", "ثل", "أر", "خم", "جم", "سب"];
const DAYS_EN = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS_AR = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
const MONTHS_EN = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function CustomDatePicker({ name, value, onChange, min }: CustomDatePickerProps) {
  const { lang } = useLang();
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(value ? new Date(value) : null);
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const ref = useRef<HTMLDivElement>(null);
  const months = lang === "ar" ? MONTHS_AR : MONTHS_EN;
  const days = lang === "ar" ? DAYS_AR : DAYS_EN;

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const minDate = min ? new Date(min) : today;

  /* Build calendar grid */
  const firstDay = new Date(view.y, view.m, 1).getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  const select = (day: number) => {
    const d = new Date(view.y, view.m, day);
    if (d < minDate && d.toDateString() !== today.toDateString()) return;
    setSelected(d);
    const iso = `${view.y}-${String(view.m + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    onChange?.(iso);
    setOpen(false);
  };

  const isDisabled = (day: number) => {
    const d = new Date(view.y, view.m, day);
    return d < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
  };
  const isSelected = (day: number) =>
    selected?.getFullYear() === view.y && selected?.getMonth() === view.m && selected?.getDate() === day;
  const isToday = (day: number) =>
    today.getFullYear() === view.y && today.getMonth() === view.m && today.getDate() === day;

  const displayVal = selected
    ? `${String(selected.getDate()).padStart(2, "0")} ${months[selected.getMonth()]} ${selected.getFullYear()}`
    : "";

  return (
    <div ref={ref} className="relative w-full" dir="ltr">
      {/* Hidden native input for form submission */}
      {name && <input type="hidden" name={name} value={selected ? `${view.y}-${String(view.m+1).padStart(2,"0")}-${String(selected.getDate()).padStart(2,"0")}` : ""} />}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm text-left"
      >
        <svg className="w-4 h-4 text-royal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span className={displayVal ? "text-foreground" : "text-muted-foreground"}>
          {displayVal || (lang === "ar" ? "اختر تاريخاً..." : "Select a date...")}
        </span>
      </button>

      {/* Dropdown Calendar */}
      {open && (
        <div className="absolute z-50 mt-2 w-full min-w-[280px] bg-card rounded-2xl border border-border shadow-2xl overflow-hidden animate-fade-in p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button type="button" onClick={() => setView(v => v.m === 0 ? { y: v.y - 1, m: 11 } : { y: v.y, m: v.m - 1 })}
              className="w-8 h-8 rounded-full hover:bg-accent flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-black text-sm text-foreground">{months[view.m]} {view.y}</span>
            <button type="button" onClick={() => setView(v => v.m === 11 ? { y: v.y + 1, m: 0 } : { y: v.y, m: v.m + 1 })}
              className="w-8 h-8 rounded-full hover:bg-accent flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Day names */}
          <div className="grid grid-cols-7 mb-2">
            {days.map(d => (
              <div key={d} className="text-center text-[10px] font-black text-muted-foreground py-1">{d}</div>
            ))}
          </div>
          {/* Cells */}
          <div className="grid grid-cols-7 gap-0.5">
            {cells.map((day, i) => (
              <div key={i} className="aspect-square">
                {day !== null && (
                  <button
                    type="button"
                    disabled={isDisabled(day)}
                    onClick={() => select(day)}
                    className={`w-full h-full rounded-lg text-xs font-bold transition-all
                      ${isSelected(day) ? "bg-royal text-white shadow-md shadow-royal/30 scale-105" :
                        isToday(day) ? "border border-royal/50 text-royal" :
                        isDisabled(day) ? "text-muted-foreground/30 cursor-not-allowed" :
                        "hover:bg-royal/10 hover:text-royal text-foreground"}`}
                  >
                    {day}
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Today shortcut */}
          <button type="button" onClick={() => { setView({ y: today.getFullYear(), m: today.getMonth() }); select(today.getDate()); }}
            className="mt-3 w-full text-xs font-bold text-royal hover:underline py-1 border-t border-border">
            {lang === "ar" ? "اليوم" : "Today"}
          </button>
        </div>
      )}
    </div>
  );
}
