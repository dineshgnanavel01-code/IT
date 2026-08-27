import {BarChart3,ClipboardList,HardDrive,Home, UserRound} from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  ["/dashboard", Home, "Home"],
  ["/tickets", ClipboardList, "Tickets"],
  ["/tasks", BarChart3, "Tasks"],
  ["/assets", HardDrive, "Assets"],
  ["/profile", UserRound, "Profile"],
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background px-2 pb-2 pt-2 text-muted-foreground shadow-sm">
      <div className="mx-auto grid max-w-4xl grid-cols-5">
        {items.map(([to, Icon, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 rounded-xl py-2 text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-accent text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`
            }>
            <Icon size={19} strokeWidth={2.2} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
