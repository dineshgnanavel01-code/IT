import { ChevronRight, Mail, MapPin, ShieldCheck, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

function ProfileAction({ title, description, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 border-b border-border p-5 text-left transition last:border-b-0 hover:bg-accent">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
        <ShieldCheck size={19} aria-hidden="true" />
      </div>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-card-foreground">
          {title}
        </span>
        <span className="mt-1 block text-xs text-muted-foreground">
          {description}
        </span>
      </span>

      <ChevronRight
        size={19}
        className="shrink-0 text-muted-foreground"
        aria-hidden="true"
      />
    </button>
  );
}

export default function Profile() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background px-5 pb-24 pt-24 text-foreground">
      <div className="mx-auto max-w-3xl">
        <TopBar title="Profile" action="none" />

        <section className="rounded-3xl border border-border bg-card p-7 text-center shadow-sm">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-primary text-3xl font-black text-primary-foreground">
            DS
          </div>

          <h1 className="mt-5 text-2xl font-bold text-card-foreground">
            Dinesh
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            IT Operations Manager
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <Mail size={17} className="text-primary" aria-hidden="true" />
              dina@company.com
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="text-primary" aria-hidden="true" />
              Chennai
            </span>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <ProfileAction
            title="Security"
            description="Manage password and access"
            onClick={() => navigate("/settings")}/>
          <ProfileAction
            title="Settings"
            description="Manage app preferences"
            onClick={() => navigate("/settings")}/>
        </section>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-6 w-full rounded-2xl border border-destructive/30 bg-destructive/10 py-4 text-sm font-bold text-destructive transition hover:bg-destructive/20">
          Sign out
        </button>
      </div>
    </main>
  );
}
