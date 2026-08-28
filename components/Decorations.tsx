export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`dot-grid ${className}`}>
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

export function PurpleFrame({
  className = "",
  muted = false,
}: {
  className?: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`${muted ? "frame-deco-muted" : "frame-deco"} ${className}`}
    />
  );
}
