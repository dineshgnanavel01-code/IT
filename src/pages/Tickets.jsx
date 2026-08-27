import TicketCard from "../components/TicketCard";
import TopBar from "../components/TopBar";

const tickets = [
  {
    id: "1048",
    number: "INC-1048",
    title: "VPN access not working",
    owner: "Maya Patel",
    category: "Network",
    status: "In progress",
    priority: "High",
    time: "12 min ago",
  },
  {
    id: "1047",
    number: "INC-1047",
    title: "New laptop setup",
    owner: "Arun Kumar",
    category: "Hardware",
    status: "Open",
    priority: "Medium",
    time: "28 min ago",
  },
  {
    id: "1046",
    number: "INC-1046",
    title: "Email sync issue",
    owner: "Sofia Chen",
    category: "Software",
    status: "Resolved",
    priority: "Low",
    time: "1 hour ago",
  },
];

export default function Tickets() {
  return (
    <main className="min-h-screen bg-background px-5 pb-24 pt-24 text-foreground">
      <div className="mx-auto max-w-4xl">
        <TopBar title="Tickets" action="none" />

        <div className="mt-4 space-y-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </main>
  );
}
