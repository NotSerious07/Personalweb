import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={`heading-display mt-3 text-balance text-3xl sm:text-4xl ${
          center ? "" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
