export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Sandhya Gurung. All rights reserved.</p>
        <p>A remarkable painter and luminous soul, from Nepal to the UK.</p>
      </div>
    </footer>
  );
}
