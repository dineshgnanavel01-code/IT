export default function StatCard({ item }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {item.label}
          </p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-card-foreground">
            {item.value}
          </p>
        </div>

        {item.change && (
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
            {item.change}
          </span>
        )}
      </div>
    </article>
  );
}
