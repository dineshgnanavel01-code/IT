import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function AppLayout() {
  const location = useLocation();

  const hideNav =
    location.pathname.startsWith("/tickets/") &&
    location.pathname !== "/tickets";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className={hideNav ? "min-h-screen" : "min-h-screen pb-24"}>
        <Outlet />
      </main>

      {!hideNav && <BottomNav />}
    </div>
  );
}
