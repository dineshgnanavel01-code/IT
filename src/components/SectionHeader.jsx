export default function SectionHeader({ title, link, onClick }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-lg font-bold text-foreground">{title}</h2>

      {link && (
        <button
          type="button"
          onClick={onClick}
          className="text-sm font-semibold text-primary transition hover:text-accent-foreground">
          {link}
        </button>
      )}
    </div>
  );
}
