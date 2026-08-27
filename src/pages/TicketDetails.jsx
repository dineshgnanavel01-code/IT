import { useNavigate, useParams } from "react-router-dom";

const ticket = {
  id: "1048",
  number: "INC-1048",
  title: "VPN access not working",
  status: "In progress",
  priority: "High",
  description:
    "User is unable to establish a secure VPN connection from the office network. Initial diagnostics indicate an authentication timeout.",
  requester: "Maya Patel",
  created: "Today, 9:18 AM",
};

const activity = [
  { author: "You", time: "9:32 AM", text: "Ticket assigned to Dina." },
  { author: "System", time: "9:27 AM", text: "Priority changed to High." },
  {
    author: "Maya Patel",
    time: "9:18 AM",
    text: "VPN stopped connecting this morning.",
  },
];

export default function TicketDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <main className="min-h-screen bg-background px-5 pb-24 pt-5 text-foreground">
      <div className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-4 text-sm font-semibold text-primary">
          Back to tickets
        </button>

        <h1 className="text-2xl font-bold text-foreground">
          {ticket.number || `INC-${id}`}
        </h1>

        <section className="mt-5 rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              {ticket.status}
            </span>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {ticket.priority}
            </span>
          </div>

          <h2 className="mt-6 text-2xl font-bold text-card-foreground">
            {ticket.title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {ticket.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-secondary p-4">
              <p className="text-xs text-muted-foreground">Requester</p>
              <p className="mt-1 font-semibold text-card-foreground">
                {ticket.requester}
              </p>
            </div>

            <div className="rounded-2xl bg-secondary p-4">
              <p className="text-xs text-muted-foreground">Created</p>
              <p className="mt-1 font-semibold text-card-foreground">
                {ticket.created}
              </p>
            </div>
          </div>
        </section>

        <h2 className="mt-8 text-lg font-bold text-foreground">Activity</h2>

        <section className="mt-3 space-y-3">
          {activity.map((item) => (
            <article
              key={`${item.author}-${item.time}`}
              className="rounded-2xl border border-border bg-card p-5 text-card-foreground">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold">{item.author}</p>
                <time className="text-xs text-muted-foreground">
                  {item.time}
                </time>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </section>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            className="flex flex-1 items-center justify-center rounded-2xl border border-border bg-card px-4 py-4 text-sm font-semibold text-card-foreground transition hover:bg-accent">
            Add note
          </button>

          <button
            type="button"
            aria-label="Send note"
            className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
