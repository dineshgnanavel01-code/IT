import {ArrowUpRight,CheckCircle2,Clock3,Laptop,Ticket,} from "lucide-react";
import { useNavigate } from "react-router-dom";

import SectionHeader from "../components/SectionHeader";
import TopBar from "../components/TopBar";
import { activities, stats } from "../data/mockData";

const quickActions = [
  {
    label: "Tickets",
    description: "Review requests",
    icon: Ticket,
    path: "/tickets",
  },
  {
    label: "Tasks",
    description: "Track your work",
    icon: CheckCircle2,
    path: "/tasks",
  },
  {
    label: "Assets",
    description: "Manage devices",
    icon: Laptop,
    path: "/assets",
  },
];

const activityIcons = {
  ticket: Ticket,
  laptop: Laptop,
  check: CheckCircle2,
};

function getActivityIcon(type) {
  return activityIcons[type] ?? Clock3;
}

function getStatValue(item) {
  return item.value ?? item.number ?? item.count ?? "0";
}

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background pb-24 text-foreground">
      <TopBar title="Good morning, Dina" />

      <div className="mx-auto max-w-4xl px-5 pt-24">
        <div className="animate-float-in">

          <section className="rounded-3xl border border-teal-700 bg-teal-800 p-6 text-white shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-200">
              Thursday, August 27
            </p>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-bold tracking-tight text-white">
                  IT operations are healthy
                </h1>

                <p className="mt-2 text-sm text-teal-100">
                  Four items need your attention today.
                </p>
              </div>

              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10">
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-teal-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Workspace operating normally
            </div>
          </section>

          <section className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <SectionHeader title="Overview" />

            <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {stats.map((item) => (
                <article key={item.label} className="p-5">
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="text-3xl font-black text-card-foreground">
                      {getStatValue(item)}
                    </p>

                    {item.change && (
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                        {item.change}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <SectionHeader
              title="Recent activity"
              link="See all"
              onClick={() => navigate("/notifications")}/>

            <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              {activities.map((activity) => {
                const Icon = getActivityIcon(activity.icon);

                return (
                  <div
                    key={activity.title}
                    className="flex items-center gap-3 border-b border-border p-4 last:border-b-0 hover:bg-accent">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <Icon size={18} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-card-foreground">
                        {activity.title}
                      </p>

                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        {activity.detail}
                      </p>
                    </div>

                    <span className="whitespace-nowrap text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mt-8">
            <SectionHeader title="Quick actions" />

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => navigate(action.path)}
                    className="rounded-2xl border border-border bg-card p-5 text-left shadow-sm transition-colors hover:border-primary hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                      <Icon size={20} aria-hidden="true" />
                    </div>

                    <p className="mt-4 text-sm font-bold text-card-foreground">
                      {action.label}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {action.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}