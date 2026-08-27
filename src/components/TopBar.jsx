import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TopBar({ title, action = "notifications" }) {
  const navigate = useNavigate();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-20 border-b border-border bg-background">
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-5">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          {title}
        </h2>

        {action !== "none" && (
          <button
            type="button"
            onClick={() => navigate("/notifications")}
            aria-label="Open notifications"
            className="rounded-xl p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <Bell size={21} aria-hidden="true" />
          </button>
        )}
      </div>
    </header>
  );
}
