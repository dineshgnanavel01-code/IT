export default function Badge({ children }) {
  return (
    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
      {children}
    </span>
  );
}
