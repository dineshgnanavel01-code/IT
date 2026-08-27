import { ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-slate-950 px-6 py-10 text-white">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-500 shadow-lg shadow-teal-500/20">
            <ShieldCheck size={25} />
          </div>
          <span className="text-lg font-bold tracking-tight">ITFlow</span>
        </div>
      </div>
      <div className="relative animate-float-in">
        <p className="mb-3 text-sm font-semibold text-teal-300">SMART IT OPERATIONS</p>
        <h1 className="max-w-sm text-4xl font-bold leading-[1.08] tracking-tight">Manage your IT, beautifully simple.</h1>
        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">Tickets, tasks, assets and team activity in one focused workspace.</p>
        <button onClick={() => navigate("/login")} className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/30 transition hover:bg-teal-400 active:scale-[.98]">
          Get started <ArrowRight size={18} />
        </button>
      </div>
      <p className="relative text-center text-xs text-slate-500">Secure workspace · v1.0</p>
    </section>
  );
}