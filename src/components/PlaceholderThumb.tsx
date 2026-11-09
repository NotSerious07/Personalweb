type Tone = "warm" | "cool" | "neutral" | "gold";

const tones: Record<Tone, string> = {
  warm: "from-[#2a2118] via-[#151311] to-[#0b0b0b]",
  cool: "from-[#182028] via-[#111316] to-[#0b0b0b]",
  neutral: "from-[#222222] via-[#141414] to-[#0b0b0b]",
  gold: "from-[#2b2418] via-[#161410] to-[#0b0b0b]",
};

export function PlaceholderThumb({
  label,
  tone = "neutral",
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  tone?: Tone;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${aspect} bg-gradient-to-br ${tones[tone]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197,164,109,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(197,164,109,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(197,164,109,0.18),transparent_55%)]" />
      <div className="absolute inset-0 flex items-end p-4 sm:p-5">
        <span className="font-body text-[11px] uppercase tracking-[0.18em] text-paper-50/70">
          {label}
        </span>
      </div>
    </div>
  );
}
