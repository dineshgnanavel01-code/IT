import {Bell,ChevronLeft,Fingerprint,Moon,Shield,Smartphone,} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const preferenceRows = [
  {
    title: "Push notifications",
    description: "Get updates about tickets and tasks",
    key: "push",
    icon: Bell,
  },
  {
    title: "Biometric login",
    description: "Use Face ID or fingerprint",
    key: "biometric",
    icon: Fingerprint,
  },
  {
    title: "Dark appearance",
    description: "Change the application appearance",
    key: "dark",
    icon: Moon,
  },
];

const securityRows = [
  {
    title: "Security center",
    description: "Review account security",
    icon: Shield,
  },
  {
    title: "Trusted devices",
    description: "3 devices connected",
    icon: Smartphone,
  },
];

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative h-7 w-12 shrink-0 rounded-full p-1 transition-colors ${
        checked ? "bg-primary" : "bg-muted"
      }`}>
      <span
        className={`block h-5 w-5 rounded-full bg-primary-foreground shadow-sm transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function PreferenceRow({ row, checked, onChange }) {
  const Icon = row.icon;

  return (
    <div className="flex items-center gap-4 border-b border-border p-5 last:border-b-0">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
        <Icon size={19} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-card-foreground">{row.title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{row.description}</p>
      </div>

      <Toggle checked={checked} onChange={onChange} label={`Toggle ${row.title}`} />
    </div>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    push: true,
    biometric: true,
  });

  function toggleSetting(key) {
    setSettings((currentSettings) => ({
      ...currentSettings,
      [key]: !currentSettings[key],
    }));
  }

  return (
    <main className="min-h-screen bg-background px-5 pb-10 text-foreground">
      <header className="flex items-center gap-3 py-5">
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-accent-foreground">
          <ChevronLeft size={21} aria-hidden="true" />
        </button>
        <div>
          <p className="text-xs font-medium text-muted-foreground">Workspace</p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Preferences
        </p>

        <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {preferenceRows.map((row) => {
            const checked = row.key === "dark" ? isDark : settings[row.key];
            const onChange = row.key === "dark" ? toggleTheme : () => toggleSetting(row.key);

            return (
              <PreferenceRow
                key={row.key}
                row={row}
                checked={checked}
                onChange={onChange}/>);
          })}
        </section>

        <p className="mb-3 mt-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Security
        </p>

        <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {securityRows.map((row) => {
            const Icon = row.icon;

            return (
              <button
                key={row.title}
                type="button"
                className="flex w-full items-center gap-4 border-b border-border p-5 text-left last:border-b-0 transition hover:bg-accent">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon size={19} aria-hidden="true" />
                </div>
                <span>
                  <span className="block text-sm font-bold text-card-foreground">{row.title}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{row.description}</span>
                </span>
              </button>
            );
          })}
        </section>
      </div>
    </main>
  );
}
