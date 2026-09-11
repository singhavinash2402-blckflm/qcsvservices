export type VisualAsset = {
  id: "A01" | "A02" | "A07" | "A08" | "A10";
  filename: string;
  alt: string;
  purpose: string;
  source: "unassigned";
  license: "unverified";
  sourceUrl: "";
};

export const visualAssets: Record<VisualAsset["id"], VisualAsset> = {
  A01: {
    id: "A01",
    filename: "",
    alt: "",
    purpose: "Homepage hero visual communicating technology, regulated environment and systems or quality context.",
    source: "unassigned",
    license: "unverified",
    sourceUrl: "",
  },
  A02: {
    id: "A02",
    filename: "",
    alt: "",
    purpose: "Services overview visual supporting enterprise technology, validation, quality and delivery services.",
    source: "unassigned",
    license: "unverified",
    sourceUrl: "",
  },
  A07: {
    id: "A07",
    filename: "",
    alt: "",
    purpose: "Pharmaceuticals industry visual representing a laboratory, quality or regulated technology context.",
    source: "unassigned",
    license: "unverified",
    sourceUrl: "",
  },
  A08: {
    id: "A08",
    filename: "",
    alt: "",
    purpose: "Medical Devices industry visual representing medical-device manufacturing, engineering or quality context.",
    source: "unassigned",
    license: "unverified",
    sourceUrl: "",
  },
  A10: {
    id: "A10",
    filename: "",
    alt: "",
    purpose: "Semiconductor industry visual representing technology-driven manufacturing, engineering or infrastructure context.",
    source: "unassigned",
    license: "unverified",
    sourceUrl: "",
  },
};
