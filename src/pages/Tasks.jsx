import { CalendarDays, CheckCircle2, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

const taskStats = [
  { value: "12", label: "Active" },
  { value: "4", label: "Due today" },
  { value: "8", label: "Completed" },
];

const tasks = [
  {
    id: "task-1",
    title: "Configure endpoint security",
    owner: "Priya S.",
    priority: "High",
    status: "In progress",
    date: "Today, 4:00 PM",
  },
  {
    id: "task-2",
    title: "Audit inactive devices",
    owner: "Daniel R.",
    priority: "Medium",
    status: "Pending",
    date: "Tomorrow",
  },
  {
    id: "task-3",
    title: "Update Wi-Fi access points",
    owner: "Karun S.",
    priority: "Low",
    status: "Completed",
    date: "Friday, 10:00 AM",
  },
];

function TaskCard({ task }) {
  return (
    <article className="rounded-3xl border border-border bg-card p-5 text-card-foreground shadow-sm transition hover:bg-accent">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
          <CheckCircle2 size={21} aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-base font-bold text-card-foreground">
            {task.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{task.owner}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              {task.priority}
            </span>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {task.status}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
        <CalendarDays size={16} aria-hidden="true" />
        <span>{task.date}</span>
      </div>
    </article>
  );
}

export default function Tasks() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background px-5 pb-24 pt-24 text-foreground">
      <div className="mx-auto max-w-4xl">
        <TopBar title="Tasks" action="none" />

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {taskStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
              <p className="text-2xl font-bold text-card-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">My tasks</h1>
          <button
            type="button"
            onClick={() => navigate("/tasks")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent-foreground">
            <SlidersHorizontal size={17} aria-hidden="true" />
            Filter
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </main>
  );
}
