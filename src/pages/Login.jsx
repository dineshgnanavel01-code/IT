import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md flex-col justify-center">
        <div className="mb-10">
          <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700"><ShieldCheck /></div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to your ITFlow workspace.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }} className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold text-slate-600">Work email</span>
            <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input type="email" required defaultValue="alex@company.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10" /></div>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold text-slate-600">Password</span>
            <div className="relative"><LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input type={show ? "text" : "password"} required defaultValue="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10" /><button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400">{show ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>
          </label>
          <div className="flex justify-end"><button type="button" className="text-xs font-semibold text-teal-700">Forgot password?</button></div>
          <button className="w-full rounded-2xl bg-teal-700 py-4 text-sm font-bold text-white shadow-lg shadow-teal-700/15 transition hover:bg-teal-800 active:scale-[.99]">Sign in</button>
        </form>
        <p className="mt-8 text-center text-xs text-slate-400">Protected by enterprise-grade security</p>
      </div>
    </section>
  );
}