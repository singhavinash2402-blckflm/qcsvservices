/**
 * Vector redraws of the framework diagrams from the client's old website.
 * Wording is taken from the original diagrams. Colours use theme tokens so
 * they stay legible in light and dark mode.
 */

const infraStages = [
  {
    name: "Plan",
    summary: "Identify scope, protocol, team and objectives",
    items: [
      "Qualification plan",
      "Risk assessment",
      "Requirements specification"
    ]
  },
  {
    name: "Design",
    summary: "Define and record architecture and specifications",
    items: ["Design specification", "Create test protocol"]
  },
  {
    name: "Build",
    summary: "Build test and baseline environment",
    items: ["IQ and OQ", "Create operational procedures"]
  },
  {
    name: "Test",
    summary: "Conduct platform baseline and functional testing",
    items: []
  },
  {
    name: "Operate",
    summary: "Follow documented procedures and use change control",
    items: [
      "Operational management",
      "Configuration management",
      "Problem management"
    ]
  }
];

export function InfraFramework() {
  return (
    <figure>
      <div className="grid gap-3 md:grid-cols-5">
        {infraStages.map((stage, index) => (
          <div key={stage.name} className="flex flex-col gap-3">
            <div
              className="bg-[var(--primary)] px-4 py-3 text-center text-sm font-bold text-white md:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%,12%_50%)] md:first:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]"
              style={{ opacity: 1 - index * 0.06 }}
            >
              {stage.name}
            </div>
            <p className="min-h-[3.5rem] text-sm text-[var(--foreground-muted)]">
              {stage.summary}
            </p>
            <ul className="space-y-2">
              {stage.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2 text-sm font-medium text-[var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-full bg-[var(--secondary)] px-5 py-2 text-center text-sm font-semibold text-white">
        Platform qualified
      </div>
      <figcaption className="mt-3 text-sm text-[var(--foreground-subtle)]">
        QCSV infrastructure qualification framework: Plan, Design, Build, Test
        and Operate.
      </figcaption>
    </figure>
  );
}

const qaSteps: { lines: string[] }[] = [
  { lines: ["Identify issues", "with process"] },
  { lines: ["Generate corrective", "actions"] },
  { lines: ["Verify corrective", "action"] },
  { lines: ["Implement corrective", "action"] },
  { lines: ["Monitor and", "control"] }
];

export function QaCycle() {
  const cx = 330;
  const cy = 215;
  const radius = 140;
  const point = (deg: number, r = radius) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
  };
  const angles = qaSteps.map((_, index) => 36 + index * 72);

  return (
    <figure>
      <svg
        viewBox="0 0 660 440"
        role="img"
        aria-label="Quality assurance cycle: identify issues with process, generate corrective actions, verify corrective action, implement corrective action, then monitor and control."
        className="mx-auto w-full max-w-2xl"
      >
        <defs>
          <marker
            id="qa-arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--primary)" />
          </marker>
        </defs>

        {angles.map((angle, index) => {
          const start = point(angle + 15);
          const end = point(angles[(index + 1) % angles.length] - 15);
          return (
            <path
              key={angle}
              d={`M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="3"
              markerEnd="url(#qa-arrow)"
            />
          );
        })}

        <circle cx={cx} cy={cy} r="72" fill="var(--primary)" />
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill="#fff"
        >
          QUALITY
        </text>
        <text
          x={cx}
          y={cy + 16}
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill="#fff"
        >
          ASSURANCE
        </text>

        {qaSteps.map((step, index) => {
          const angle = angles[index];
          const node = point(angle);
          const label = point(angle, radius + 34);
          const anchor =
            label.x > cx + 12 ? "start" : label.x < cx - 12 ? "end" : "middle";
          const below = label.y > cy + radius - 10;
          const baseY = below ? label.y + 14 : label.y - 4;
          return (
            <g key={step.lines.join(" ")}>
              <circle
                cx={node.x}
                cy={node.y}
                r="15"
                fill="var(--surface-elevated)"
                stroke="var(--primary)"
                strokeWidth="2.5"
              />
              <text
                x={node.x}
                y={node.y + 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill="var(--primary-text)"
              >
                {index + 1}
              </text>
              {step.lines.map((line, lineIndex) => (
                <text
                  key={line}
                  x={label.x}
                  y={baseY + lineIndex * 17}
                  textAnchor={anchor}
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--foreground)"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-center text-sm text-[var(--foreground-subtle)]">
        QCSV quality assurance framework: a continuous cycle.
      </figcaption>
    </figure>
  );
}

const hexSteps: { lines: string[]; fill: string; dx: number; dy: number }[] = [
  { lines: ["Analyse"], fill: "#2b7fa8", dx: -0.5, dy: -0.866 },
  { lines: ["Design"], fill: "#1f8a70", dx: 0.5, dy: -0.866 },
  { lines: ["Develop"], fill: "#3f7d1f", dx: 1, dy: 0 },
  { lines: ["Test"], fill: "#b25a0a", dx: 0.5, dy: 0.866 },
  { lines: ["Implement"], fill: "#b5382d", dx: -0.5, dy: 0.866 },
  {
    lines: ["Support,", "Maintain", "& Enhance"],
    fill: "#7b4a9e",
    dx: -1,
    dy: 0
  }
];

const hexPoints = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = ((60 * k - 30) * Math.PI) / 180;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");

export function PmMethodology() {
  const cx = 240;
  const cy = 240;
  const r = 52;
  const gap = Math.sqrt(3) * r + 4;

  return (
    <figure>
      <svg
        viewBox="0 0 480 480"
        role="img"
        aria-label="Project management methodology: analyse, design, develop, test, implement, and support, maintain and enhance, around a central project management hub, with knowledge transfer around the outside."
        className="mx-auto w-full max-w-md"
      >
        <defs>
          <path id="pm-top" d="M 35 240 A 205 205 0 0 1 445 240" />
          <path id="pm-bottom" d="M 35 240 A 205 205 0 0 0 445 240" />
        </defs>
        <circle
          cx={cx}
          cy={cy}
          r="205"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.25"
          strokeWidth="30"
        />
        <text
          fontSize="15"
          fontWeight="700"
          letterSpacing="3"
          fill="var(--primary-text)"
        >
          <textPath href="#pm-top" startOffset="50%" textAnchor="middle" dy="5">
            KNOWLEDGE TRANSFER
          </textPath>
        </text>
        <text
          fontSize="15"
          fontWeight="700"
          letterSpacing="3"
          fill="var(--primary-text)"
        >
          <textPath
            href="#pm-bottom"
            startOffset="50%"
            textAnchor="middle"
            dy="5"
          >
            KNOWLEDGE TRANSFER
          </textPath>
        </text>

        {hexSteps.map((step) => {
          const x = cx + step.dx * gap;
          const y = cy + step.dy * gap;
          return (
            <g key={step.lines.join(" ")}>
              <polygon
                points={hexPoints(x, y, r)}
                fill={step.fill}
                stroke="var(--background)"
                strokeWidth="3"
              />
              {step.lines.map((line, index) => (
                <text
                  key={line}
                  x={x}
                  y={y + 5 + (index - (step.lines.length - 1) / 2) * 16}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#fff"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        <polygon
          points={hexPoints(cx, cy, r)}
          fill="#e0a92e"
          stroke="var(--background)"
          strokeWidth="3"
        />
        <text
          x={cx}
          y={cy - 2}
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill="#0b0f14"
        >
          Project
        </text>
        <text
          x={cx}
          y={cy + 15}
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill="#0b0f14"
        >
          Management
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-[var(--foreground-subtle)]">
        QCSV project management methodology.
      </figcaption>
    </figure>
  );
}

const sdlcPhases = [
  {
    name: "Formation",
    items: [
      "Project initiation",
      "Rough order of magnitude project development estimate"
    ]
  },
  {
    name: "Requirements and Planning",
    items: [
      "Requirements definition",
      "Project management plan (charter)",
      "Functional requirements",
      "Technical requirements",
      "Requirements review and approval",
      "Statement of work"
    ]
  },
  {
    name: "Design",
    items: [
      "Internal or external design",
      "Design review",
      "Detailed project development"
    ]
  },
  { name: "Construct", items: ["Prototype", "Code review"] },
  { name: "Test", items: ["System test", "Test summary"] },
  {
    name: "Product Release",
    items: ["Operational acceptance", "Acceptance document"]
  },
  {
    name: "Post Implementation",
    items: ["Enhancement and maintenance", "Project implementation notice"]
  }
];

export function SdlcPhases() {
  return (
    <figure>
      <div className="overflow-x-auto pb-2">
        <ol className="grid min-w-[980px] grid-cols-7 gap-3">
          {sdlcPhases.map((phase, index) => (
            <li key={phase.name} className="flex flex-col gap-3">
              <div className="bg-[var(--primary)] px-3 py-3 text-white [clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)]">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                  Phase {index + 1}
                </p>
                <p className="text-sm font-bold leading-tight">{phase.name}</p>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2 text-xs font-medium text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {["Training", "Documentation", "Change control process"].map(
          (label) => (
            <div
              key={label}
              className="rounded-full bg-[var(--secondary)] px-5 py-2 text-center text-sm font-semibold text-white"
            >
              {label}
            </div>
          )
        )}
      </div>
      <p className="mt-3 text-sm text-[var(--foreground-muted)]">
        Training, documentation and a change control process (with a change of
        scope document and a change control log) run alongside all seven phases.
      </p>
      <figcaption className="mt-2 text-sm text-[var(--foreground-subtle)]">
        QCSV project documentation framework across the software development
        lifecycle.
      </figcaption>
    </figure>
  );
}

export const frameworks = {
  infra: { title: "Our qualification framework", Component: InfraFramework },
  qa: { title: "Our quality assurance framework", Component: QaCycle },
  pm: { title: "Our project management methodology", Component: PmMethodology },
  sdlc: { title: "Our documentation framework", Component: SdlcPhases }
} as const;
