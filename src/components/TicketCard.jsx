import { useNavigate } from "react-router-dom";

export default function TicketCard({ ticket }) {
  const navigate = useNavigate();

  return (
<button
  type="button"
  onClick={() => navigate(`/tickets/${ticket.id}`)}
  className="w-full rounded-3xl border border-border bg-card p-5 text-left text-card-foreground shadow-sm transition hover:bg-accent">
  <div className="flex items-start justify-between gap-4">
    <div>
      <p className="text-xs font-bold text-primary">{ticket.number}</p>
      <h2 className="mt-2 text-base font-bold text-card-foreground">
        {ticket.title}
      </h2>
    </div>

    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
      {ticket.status}
    </span>
  </div>

  <div className="mt-5 flex items-center justify-between gap-3">
    <p className="text-sm text-muted-foreground">
      {ticket.owner} · {ticket.category}
    </p>
    <span className="text-xs text-muted-foreground">{ticket.time}</span>
  </div>

  <span className="mt-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
    {ticket.priority}
  </span>
</button>

  );
}
