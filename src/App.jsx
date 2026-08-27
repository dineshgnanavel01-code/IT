import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  Bell,
  BellRing,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Eye,
  EyeOff,
  Globe2,
  HelpCircle,
  Home,
  KeyRound,
  Laptop,
  Menu,
  Mail,
  LockKeyhole,
  LogOut,
  MessageSquareText,
  Monitor,
  Moon,
  MoreVertical,
  Network,
  Plus,
  Router,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Ticket,
  UserCheck,
  UserRound,
  Wifi,
  X,
} from "lucide-react";
import { Toaster, toast } from "sonner";

const navItems = [
  { id: "dashboard", label: "Home", icon: Home },
  { id: "tickets", label: "Tickets", icon: Ticket },
  { id: "tasks", label: "Tasks", icon: ClipboardCheck },
  { id: "assets", label: "Assets", icon: Laptop },
  { id: "profile", label: "Profile", icon: UserRound },
];

const tickets = [
  { id: "INC-2048", title: "Network access issue", meta: "Reported by Alex Johnson", time: "Just now", status: "Open", priority: "High", icon: Wifi },
  { id: "REQ-2047", title: "New laptop request", meta: "Requested by Sarah Lee", time: "2h ago", status: "In progress", priority: "Medium", icon: Laptop },
  { id: "INC-2046", title: "Email not syncing", meta: "Reported by Michael Brown", time: "1d ago", status: "Resolved", priority: "Low", icon: Mail },
  { id: "REQ-2045", title: "VPN permission update", meta: "Requested by Olivia Chen", time: "2d ago", status: "Resolved", priority: "Low", icon: ShieldCheck },
];

const tasks = [
  { title: "Review security alerts", due: "Due today, 11:00 AM", priority: "High", status: "In progress", done: false },
  { title: "Replace office router", due: "Due today, 2:00 PM", priority: "Medium", status: "Completed", done: true },
  { title: "Onboard new employee", due: "Due today, 4:00 PM", priority: "Low", status: "To do", done: false },
  { title: "Monthly backup verification", due: "May 21, 10:00 AM", priority: "Medium", status: "To do", done: false },
  { title: "Quarterly access review", due: "May 23, 9:00 AM", priority: "High", status: "To do", done: false },
];

const assets = [
  { name: "MacBook Pro 14”", id: "MBP14-001", owner: "Alex Johnson", type: "Laptop", icon: Laptop, tint: "blue", state: "Active" },
  { name: "Dell Monitor", id: "LM24-002", owner: "Marketing Team", type: "Monitor", icon: Monitor, tint: "cyan", state: "Active" },
  { name: "Cisco Router", id: "CCSR-001", owner: "Network Closet", type: "Router", icon: Router, tint: "violet", state: "Active" },
];

const activities = [
  { title: "Laptop assigned", meta: "Alex Johnson · 1h ago", icon: Laptop, tone: "teal" },
  { title: "VPN access approved", meta: "Maya Chen · 3h ago", icon: ShieldCheck, tone: "blue" },
  { title: "Server patch completed", meta: "System · 5h ago", icon: Server, tone: "violet" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BrandMark({ small = false }) {
  return <div className={cn("brand-mark", small && "brand-mark--small")} aria-hidden="true"><ShieldCheck size={small ? 20 : 25} strokeWidth={2.25} /></div>;
}

function StatusPill({ children, tone = "neutral" }) {
  return <span className={cn("status-pill", `status-pill--${tone}`)}>{children}</span>;
}

function PriorityPill({ priority }) {
  return <span className={cn("priority-pill", `priority-pill--${priority.toLowerCase()}`)}>{priority}</span>;
}

function IconBadge({ icon: Icon, tone = "blue" }) {
  return <span className={cn("icon-badge", `icon-badge--${tone}`)}><Icon size={17} strokeWidth={2.2} /></span>;
}

function UserAvatar({ initials = "AJ", large = false }) {
  return <span className={cn("user-avatar", large && "user-avatar--large")}>{initials}</span>;
}

function BottomNav({ active, onChange }) {
  return <nav className="bottom-nav" aria-label="Primary navigation">{navItems.map(({ id, label, icon: Icon }) => <button key={id} className={cn("bottom-nav__item", active === id && "bottom-nav__item--active")} onClick={() => onChange(id)}><Icon size={20} strokeWidth={active === id ? 2.5 : 1.8} /><span>{label}</span></button>)}</nav>;
}

function DesktopRail({ active, onChange, onLogout }) {
  return <aside className="desktop-rail">
    <div className="desktop-rail__brand"><BrandMark small /><div><strong>IT Control</strong><span>Operations console</span></div></div>
    <div className="desktop-rail__workspace"><span className="eyebrow">Workspace</span><button onClick={() => toast("Northstar workspace selected")}><span className="workspace-dot" /><span>Northstar HQ</span><ChevronRight size={15} /></button></div>
    <nav className="desktop-rail__nav" aria-label="Sidebar navigation"><span className="eyebrow">Manage</span>{navItems.map(({ id, label, icon: Icon }) => <button key={id} className={cn(active === id && "desktop-rail__item--active")} onClick={() => onChange(id)}><Icon size={18} /><span>{label}</span>{id === "tickets" && <b>24</b>}</button>)}<span className="eyebrow desktop-rail__eyebrow-spaced">System</span><button onClick={() => onChange("notifications")} className={cn(active === "notifications" && "desktop-rail__item--active")}><Bell size={18} /><span>Notifications</span><b className="desktop-rail__badge">3</b></button><button onClick={() => onChange("settings")} className={cn(active === "settings" && "desktop-rail__item--active")}><Settings size={18} /><span>Settings</span></button></nav>
    <div className="desktop-rail__footer"><div className="desktop-rail__user"><UserAvatar /><div><strong>Alex Johnson</strong><span>IT Administrator</span></div><button aria-label="Sign out" onClick={onLogout}><LogOut size={16} /></button></div><div className="desktop-rail__help"><HelpCircle size={15} /><span>Need help?</span><ChevronRight size={14} /></div></div>
  </aside>;
}

function MobileHeader({ title, onMenu, onNotifications, showBack, onBack, action }) {
  return <header className="mobile-header"><div className="mobile-header__left">{showBack ? <button className="icon-button" onClick={onBack} aria-label="Go back"><ArrowLeft size={20} /></button> : <button className="icon-button mobile-menu-button" onClick={onMenu} aria-label="Open menu"><Menu size={21} /></button>}<div className="mobile-header__title">{title}</div></div><div className="mobile-header__actions">{action}<button className="icon-button notification-button" onClick={onNotifications} aria-label="Open notifications"><Bell size={20} /><span>3</span></button></div></header>;
}

function Dashboard({ onNavigate }) {
  return <div className="screen screen--dashboard"><section className="dashboard-welcome animate-in-rise"><div><p className="eyebrow eyebrow--blue">IT OPERATIONS / TUESDAY, MAY 20</p><h1>Good morning, Alex</h1><p className="muted-copy">Here’s what’s happening in your IT environment.</p></div><div className="dashboard-welcome__profile"><UserAvatar /><div><span>Workspace admin</span><strong>Alex Johnson</strong></div></div></section><section className="stat-grid animate-in-rise" aria-label="IT overview statistics"><StatCard icon={Ticket} tone="blue" label="Open Tickets" value="24" delta="4 from yesterday" /><StatCard icon={ClipboardCheck} tone="teal" label="Active Tasks" value="12" delta="2 from yesterday" /><StatCard icon={Laptop} tone="violet" label="Assets" value="148" delta="No change" neutral /></section><section className="content-grid"><div className="content-column"><WeeklyActivity /><RecentActivities onViewAll={() => onNavigate("tickets")} /></div><div className="content-column"><SystemHealth /><QuickActions onNavigate={onNavigate} /></div></section></div>;
}

function StatCard({ icon, tone, label, value, delta, neutral }) {
  const Icon = icon;
  return <article className="stat-card card-surface"><div className="stat-card__top"><IconBadge icon={Icon} tone={tone} /><ArrowUpRight size={15} className="stat-card__arrow" /></div><div className="stat-card__label">{label}</div><div className="stat-card__value">{value}</div><div className={cn("stat-card__delta", neutral && "stat-card__delta--neutral")}><span>{neutral ? "—" : "↑"}</span> {delta}</div></article>;
}

function WeeklyActivity() {
  const points = "8,90 51,63 94,70 137,36 180,73 223,49 266,15";
  return <article className="card-surface chart-card"><div className="section-heading"><div><span className="section-kicker">OVERVIEW</span><h2>Weekly activity</h2></div><button className="select-button" onClick={() => toast("Showing this week")}>This week <ChevronRight size={14} /></button></div><div className="chart-wrap"><div className="chart-y-labels"><span>60</span><span>40</span><span>20</span><span>0</span></div><svg className="activity-chart" viewBox="0 0 274 120" role="img" aria-label="Weekly activity trend"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2768ee" stopOpacity=".22" /><stop offset="1" stopColor="#2768ee" stopOpacity="0" /></linearGradient></defs><path d="M8 90 L51 63 L94 70 L137 36 L180 73 L223 49 L266 15 L266 110 L8 110 Z" fill="url(#chartFill)" />{[25, 55, 85, 110].map((y) => <line key={y} x1="8" x2="266" y1={y} y2={y} stroke="#dce3ef" strokeDasharray="2 4" />)}<polyline points={points} fill="none" stroke="#1d62dc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />{["8,90", "51,63", "94,70", "137,36", "180,73", "223,49", "266,15"].map((point) => { const [cx, cy] = point.split(","); return <circle key={point} cx={cx} cy={cy} r="4" fill="#fff" stroke="#1d62dc" strokeWidth="2" />; })}</svg><div className="chart-x-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div></article>;
}

function RecentActivities({ onViewAll }) {
  return <article className="card-surface activity-card"><div className="section-heading"><div><span className="section-kicker">TIMELINE</span><h2>Recent activities</h2></div><button className="text-button" onClick={onViewAll}>View all <ArrowUpRight size={15} /></button></div><div className="activity-list">{activities.map(({ title, meta, icon, tone }) => <button className="activity-row" key={title} onClick={() => toast(`${title} details opened`)}><IconBadge icon={icon} tone={tone} /><span><strong>{title}</strong><small>{meta}</small></span><ChevronRight size={16} /></button>)}</div></article>;
}

function SystemHealth() {
  return <article className="card-surface health-card"><div className="section-heading"><div><span className="section-kicker">LIVE STATUS</span><h2>System health</h2></div><span className="live-dot"><i /> All systems normal</span></div><div className="health-score"><div className="health-score__ring"><strong>98%</strong><span>healthy</span></div><div className="health-score__details"><div><Wifi size={16} /><span>Network uptime</span><strong>99.9%</strong></div><div><Server size={16} /><span>Services online</span><strong>18 / 18</strong></div><div><Shield size={16} /><span>Security posture</span><strong>Strong</strong></div></div></div></article>;
}

function QuickActions({ onNavigate }) {
  const actions = [{ label: "Create ticket", icon: Ticket, id: "tickets" }, { label: "Add task", icon: ClipboardCheck, id: "tasks" }, { label: "Register asset", icon: Laptop, id: "assets" }];
  return <article className="card-surface quick-card"><div className="section-heading"><div><span className="section-kicker">SHORTCUTS</span><h2>Quick actions</h2></div><Activity size={17} className="section-accent" /></div><div className="quick-grid">{actions.map(({ label, icon: Icon, id }) => <button key={label} onClick={() => onNavigate(id)}><Icon size={18} /><span>{label}</span><ChevronRight size={15} /></button>)}</div></article>;
}

function Tickets({ onNavigate }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(tickets[0]);
  const filters = ["All", "Open", "In progress", "Resolved"];
  const filtered = filter === "All" ? tickets : tickets.filter((ticket) => ticket.status === filter);
  return <div className="screen screen--inner"><div className="inner-title-row"><div><span className="section-kicker">SERVICE DESK</span><h1>Tickets</h1><p className="muted-copy">Track requests and incidents across the workspace.</p></div><button className="primary-icon-button" onClick={() => toast("New ticket form opened")} aria-label="Create ticket"><Plus size={20} /></button></div><div className="filter-row">{filters.map((item) => <button key={item} className={cn(filter === item && "filter-row__active")} onClick={() => setFilter(item)}>{item}{item === "All" && <span>24</span>}</button>)}</div><div className="ticket-layout"><div className="ticket-list">{filtered.map((ticket) => <button key={ticket.id} className={cn("ticket-row card-surface", selected.id === ticket.id && "ticket-row--selected")} onClick={() => setSelected(ticket)}><div className="ticket-row__top"><span className="ticket-id">{ticket.id}</span><StatusPill tone={ticket.status === "Open" ? "open" : ticket.status === "In progress" ? "progress" : "resolved"}>{ticket.status}</StatusPill></div><strong>{ticket.title}</strong><div className="ticket-row__meta"><span>{ticket.meta}</span><span>{ticket.time}</span></div><div className="ticket-row__footer"><PriorityPill priority={ticket.priority} /><ChevronRight size={15} /></div></button>)}</div><TicketDetails ticket={selected} onClose={() => setSelected(null)} /></div><div className="mobile-only ticket-details-mobile">{selected && <TicketDetails ticket={selected} onClose={() => setSelected(null)} />}</div><button className="inline-link" onClick={() => onNavigate("tasks")}>See related tasks <ArrowUpRight size={15} /></button></div>;
}

function TicketDetails({ ticket, onClose }) {
  if (!ticket) return null;
  const TicketIcon = ticket.icon;
  return <aside className="ticket-details card-surface"><div className="ticket-details__handle" /><div className="ticket-details__header"><div><span className="ticket-id">{ticket.id}</span><h2>{ticket.title}</h2></div><button className="icon-button" onClick={onClose} aria-label="Close ticket details"><X size={18} /></button></div><p className="ticket-description">Users are unable to access internal resources from the corporate network.</p><div className="ticket-detail-grid"><div><span>Priority</span><PriorityPill priority={ticket.priority} /></div><div><span>Assignee</span><strong><UserAvatar initials="MC" /> Maya Chen</strong></div><div><span>Status</span><StatusPill tone="open">{ticket.status}</StatusPill></div><div><span>Category</span><strong><TicketIcon size={15} /> Network access</strong></div></div><div className="ticket-detail-actions"><button onClick={() => toast("Ticket marked in progress")}><Clock3 size={16} /> Update status</button><button onClick={() => toast("Reply composer opened")}><MessageSquareText size={16} /> Reply</button></div></aside>;
}

function Tasks({ onNavigate }) {
  const [tab, setTab] = useState("Today");
  const [taskState, setTaskState] = useState(tasks);
  const toggleTask = (index) => setTaskState((items) => items.map((task, itemIndex) => itemIndex === index ? { ...task, done: !task.done, status: !task.done ? "Completed" : "To do" } : task));
  return <div className="screen screen--inner"><div className="inner-title-row"><div><span className="section-kicker">WORK QUEUE</span><h1>Tasks</h1><p className="muted-copy">Stay ahead of maintenance and access work.</p></div><button className="primary-icon-button" onClick={() => toast("New task form opened")} aria-label="Create task"><Plus size={20} /></button></div><div className="segmented-tabs"><button className={cn(tab === "Today" && "segmented-tabs__active")} onClick={() => setTab("Today")}>Today <span>3</span></button><button className={cn(tab === "Upcoming" && "segmented-tabs__active")} onClick={() => setTab("Upcoming")}>Upcoming <span>2</span></button></div><div className="task-group"><div className="task-group__heading"><h2>{tab}</h2><span>{tab === "Today" ? "May 20" : "Next 7 days"}</span></div><div className="task-list">{taskState.slice(tab === "Today" ? 0 : 3).map((task, index) => <button className="task-row card-surface" key={task.title} onClick={() => toggleTask(tab === "Today" ? index : index + 3)}><span className={cn("task-check", task.done && "task-check--done")}>{task.done && <Check size={14} />}</span><span className="task-row__body"><strong>{task.title}</strong><small><CalendarDays size={14} /> {task.due}</small></span><span className="task-row__aside"><PriorityPill priority={task.priority} /><StatusPill tone={task.status === "Completed" ? "resolved" : task.status === "In progress" ? "progress" : "neutral"}>{task.status}</StatusPill></span></button>)}</div></div><button className="inline-link" onClick={() => onNavigate("tickets")}>View related tickets <ArrowUpRight size={15} /></button></div>;
}

function Assets({ onNavigate }) {
  return <div className="screen screen--inner"><div className="inner-title-row"><div><span className="section-kicker">INVENTORY</span><h1>Assets</h1><p className="muted-copy">Know what is connected, assigned, and protected.</p></div><button className="primary-icon-button" onClick={() => toast("Register asset form opened")} aria-label="Register asset"><Plus size={20} /></button></div><div className="asset-summary"><div><span>Total assets</span><strong>148</strong></div><div><span>Assigned</span><strong>124</strong></div><div><span>Needs review</span><strong className="warning-text">6</strong></div></div><div className="asset-list">{assets.map(({ name, id, owner, type, icon: Icon, tint, state }) => <button className="asset-row card-surface" key={name} onClick={() => toast(`${name} details opened`)}><IconBadge icon={Icon} tone={tint} /><span className="asset-row__body"><strong>{name}</strong><small>{id} · {type}</small><small><UserCheck size={13} /> {owner}</small></span><span className="asset-row__aside"><StatusPill tone="resolved">{state}</StatusPill><MoreVertical size={17} /></span></button>)}</div><div className="asset-links card-surface"><button onClick={() => onNavigate("notifications")}><Bell size={18} /><span>Notifications</span><b>3</b><ChevronRight size={16} /></button><button onClick={() => onNavigate("profile")}><UserRound size={18} /><span>Profile</span><small>Alex Johnson</small><ChevronRight size={16} /></button><button onClick={() => onNavigate("settings")}><Settings size={18} /><span>Settings</span><small>System preferences</small><ChevronRight size={16} /></button></div></div>;
}

function Notifications() {
  const notifications = [{ title: "New ticket assigned", body: "INC-2048 was assigned to you", time: "12 min ago", icon: Ticket, tone: "blue", unread: true }, { title: "Security alert resolved", body: "The suspicious login was blocked", time: "1 hr ago", icon: ShieldCheck, tone: "teal", unread: true }, { title: "Asset warranty expiring", body: "MacBook Pro 14” · expires in 30 days", time: "3 hr ago", icon: Laptop, tone: "violet", unread: true }, { title: "Weekly report ready", body: "Your IT operations summary is available", time: "Yesterday", icon: Activity, tone: "neutral", unread: false }];
  return <div className="screen screen--inner"><div className="inner-title-row"><div><span className="section-kicker">UPDATES</span><h1>Notifications</h1><p className="muted-copy">The latest changes across your environment.</p></div><button className="text-button" onClick={() => toast("All notifications marked as read")}>Mark all read</button></div><div className="notification-list">{notifications.map(({ title, body, time, icon, tone, unread }) => <button className={cn("notification-row card-surface", unread && "notification-row--unread")} key={title} onClick={() => toast(`${title} opened`)}><IconBadge icon={icon} tone={tone} /><span><strong>{title}</strong><small>{body}</small><em>{time}</em></span>{unread && <span className="unread-dot" />}<ChevronRight size={16} /></button>)}</div></div>;
}

function Profile({ onNavigate, onLogout }) {
  return <div className="screen screen--inner"><div className="profile-hero card-surface"><div className="profile-hero__top"><UserAvatar initials="AJ" large /><span className="profile-verified"><Check size={13} /> Verified</span></div><h1>Alex Johnson</h1><p>IT Administrator · Northstar HQ</p><button className="outline-button" onClick={() => toast("Edit profile form opened")}>Edit profile</button></div><div className="profile-section"><span className="section-kicker">ACCOUNT</span><div className="settings-list card-surface"><button onClick={() => toast("Personal details opened")}><UserRound size={18} /><span><strong>Personal details</strong><small>Contact and role information</small></span><ChevronRight size={16} /></button><button onClick={() => toast("Security settings opened")}><KeyRound size={18} /><span><strong>Security</strong><small>Password and sign-in protection</small></span><ChevronRight size={16} /></button><button onClick={() => onNavigate("settings")}><Settings size={18} /><span><strong>Preferences</strong><small>Notifications and appearance</small></span><ChevronRight size={16} /></button></div></div><button className="logout-button" onClick={onLogout}><LogOut size={17} /> Sign out of IT Control</button></div>;
}

function SettingsScreen({ onLogout }) {
  const [dark, setDark] = useState(false);
  const [alerts, setAlerts] = useState(true);
  return <div className="screen screen--inner"><div className="inner-title-row"><div><span className="section-kicker">CONTROL CENTER</span><h1>Settings</h1><p className="muted-copy">Tune the workspace to match your workflow.</p></div></div><div className="settings-section"><span className="section-kicker">GENERAL</span><div className="settings-list card-surface"><SettingRow icon={BellRing} title="Push notifications" description="Get updates about tickets and tasks" control={<Toggle checked={alerts} onChange={() => setAlerts(!alerts)} />} /><SettingRow icon={Moon} title="Dark appearance" description="Use a darker interface theme" control={<Toggle checked={dark} onChange={() => setDark(!dark)} />} /><SettingRow icon={Globe2} title="Language" description="English (United States)" control={<ChevronRight size={17} />} /><SettingRow icon={SlidersHorizontal} title="Data & privacy" description="Permissions and connected services" control={<ChevronRight size={17} />} /></div></div><div className="settings-section"><span className="section-kicker">SUPPORT</span><div className="settings-list card-surface"><SettingRow icon={HelpCircle} title="Help center" description="Guides and answers for your team" control={<ChevronRight size={17} />} /><SettingRow icon={BriefcaseBusiness} title="About IT Control" description="Version 2.4.0" control={<ChevronRight size={17} />} /></div></div><button className="logout-button" onClick={onLogout}><LogOut size={17} /> Sign out</button></div>;
}

function SettingRow({ icon: Icon, title, description, control }) {
  return <button className="setting-row" onClick={() => toast(`${title} opened`)}><Icon size={18} /><span><strong>{title}</strong><small>{description}</small></span>{control}</button>;
}

function Toggle({ checked, onChange }) {
  return <span className={cn("toggle", checked && "toggle--on")} onClick={(event) => { event.stopPropagation(); onChange(); }}><span /></span>;
}

function Welcome({ onStart }) {
  return <div className="auth-screen auth-screen--welcome"><div className="auth-grid" /><div className="auth-content"><BrandMark /><div className="auth-emblem"><ShieldCheck size={88} strokeWidth={1.4} /><span className="emblem-node emblem-node--one" /><span className="emblem-node emblem-node--two" /><span className="emblem-node emblem-node--three" /></div><p className="auth-kicker">NORTHSTAR IT OPERATIONS</p><h1>IT Control</h1><p className="auth-subtitle">Manage your technology<br />with confidence.</p><button className="auth-primary-button" onClick={onStart}>Get started <ArrowUpRight size={18} /></button><span className="auth-footer">Secure workspace management</span></div></div>;
}

function Login({ onSignIn, onBack }) {
  const [showPassword, setShowPassword] = useState(false);
  return <div className="auth-screen auth-screen--login"><button className="auth-back-button" onClick={onBack}><ArrowLeft size={18} /> Back</button><div className="login-card"><BrandMark /><p className="auth-kicker">IT CONTROL</p><h1>Welcome back</h1><p className="muted-copy">Sign in to continue to Northstar HQ.</p><form onSubmit={(event) => { event.preventDefault(); onSignIn(); }}><label>Email address<div className="input-wrap"><Mail size={17} /><input type="email" defaultValue="alex@northstar.io" aria-label="Email address" /></div></label><label>Password<div className="input-wrap"><LockKeyhole size={17} /><input type={showPassword ? "text" : "password"} defaultValue="password123" aria-label="Password" /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label><div className="form-meta"><label className="remember"><input type="checkbox" defaultChecked /> <span>Remember me</span></label><button type="button" onClick={() => toast("Password reset link requested")}>Forgot password?</button></div><button className="auth-primary-button" type="submit">Sign in <ArrowUpRight size={18} /></button></form><div className="auth-divider"><span>or</span></div><button className="sso-button" onClick={() => toast("SSO sign in selected")}><Network size={17} /> Continue with SSO</button><p className="login-secure"><ShieldCheck size={14} /> Your connection is encrypted and secure</p></div></div>;
}

export default function App() {
  const initialScreen = typeof window !== "undefined" && window.location.pathname === "/login" ? "login" : typeof window !== "undefined" && (window.location.pathname === "/welcome" || window.location.pathname === "/") ? "welcome" : "dashboard";
  const [screen, setScreen] = useState(initialScreen);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (destination) => { setScreen(destination); setMenuOpen(false); window.history.replaceState({}, "", destination === "dashboard" ? "/dashboard" : `/${destination}`); };
  const signOut = () => { setScreen("login"); window.history.replaceState({}, "", "/login"); toast("You have been signed out"); };
  if (screen === "welcome") return <><Welcome onStart={() => navigate("login")} /><Toaster position="bottom-center" /></>;
  if (screen === "login") return <><Login onSignIn={() => navigate("dashboard")} onBack={() => navigate("welcome")} /><Toaster position="bottom-center" /></>;
  const titles = { dashboard: "Dashboard", tickets: "Tickets", tasks: "Tasks", assets: "Assets", profile: "Profile", notifications: "Notifications", settings: "Settings" };
  const content = screen === "dashboard" ? <Dashboard onNavigate={navigate} /> : screen === "tickets" ? <Tickets onNavigate={navigate} /> : screen === "tasks" ? <Tasks onNavigate={navigate} /> : screen === "assets" ? <Assets onNavigate={navigate} /> : screen === "notifications" ? <Notifications /> : screen === "settings" ? <SettingsScreen onLogout={signOut} /> : <Profile onNavigate={navigate} onLogout={signOut} />;
  const showBack = screen === "notifications" || screen === "settings";
  return <div className="app-shell"><DesktopRail active={screen} onChange={navigate} onLogout={signOut} /><div className="app-main"><MobileHeader title={titles[screen]} onMenu={() => setMenuOpen(true)} onNotifications={() => navigate("notifications")} showBack={showBack} onBack={() => navigate("dashboard")} action={screen === "dashboard" ? <div className="mobile-header__brand"><BrandMark small /></div> : null} /><main>{content}</main><BottomNav active={screen} onChange={navigate} /></div>{menuOpen && <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)}><aside className="mobile-drawer" onClick={(event) => event.stopPropagation()}><div className="mobile-drawer__top"><div className="desktop-rail__brand"><BrandMark small /><div><strong>IT Control</strong><span>Operations console</span></div></div><button className="icon-button" onClick={() => setMenuOpen(false)}><X size={20} /></button></div><DesktopRail active={screen} onChange={navigate} onLogout={signOut} /></aside></div>}<Toaster position="bottom-center" /></div>;
}
