export function Section({ id, index, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[220px_1fr] lg:gap-16 lg:px-12">
        <div className="reveal">
          <div className="lg:sticky lg:top-28">
            <span className="font-mono text-sm text-accent">{index}</span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export function Button({ href, children, variant = "primary", ...rest }) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent/90 dark:text-bg"
      : "border border-line text-ink hover:border-accent hover:text-accent";
  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {children}
    </a>
  );
}