export const heroSlides = [
  { src: "/images/industries/life-sciences.jpg" },
  { src: "/images/industries/regulated-manufacturing.jpg" },
  { src: "/images/industries/pharmaceuticals.jpg" }
] as const;

export const homeServices = [
  {
    title: "Validation and compliance",
    description:
      "Computer system validation, IT infrastructure qualification and cloud validation.",
    tags: ["GAMP 5", "IQ OQ PQ", "Cloud"],
    image: "/images/services/validation-quality.jpg",
    href: "/services/computer-system-validation"
  },
  {
    title: "Quality and audit",
    description: "Quality assurance, audits and project documentation.",
    tags: ["Data integrity", "GMP", "QMS"],
    image: "/images/industries/medical-devices.jpg",
    href: "/services/quality-assurance"
  },
  {
    title: "Regulated systems",
    description: "SAP, manufacturing execution systems and serialization.",
    tags: ["SAP S/4 HANA", "MES", "Serialization"],
    image: "/images/services/enterprise-technology.jpg",
    href: "/services/sap-services"
  },
  {
    title: "Delivery and people",
    description:
      "Project management and skilled IT staffing that scales with your project.",
    tags: [],
    image: "/images/services/project-delivery.jpg",
    href: "/services/project-management"
  }
] as const;

export const homeIndustries = [
  {
    name: "Pharmaceuticals",
    href: "/industries/pharmaceuticals",
    image: "/images/industries/pharmaceuticals.jpg",
    description:
      "Computerised systems, laboratories, ERP and manufacturing operations."
  },
  {
    name: "Medical devices",
    href: "/industries/medical-devices",
    image: "/images/industries/medical-devices.jpg",
    description: "Equipment and production-line qualification."
  },
  {
    name: "Life sciences",
    href: "/industries/life-sciences",
    image: "/images/industries/life-sciences.jpg",
    description:
      "Project delivery, documentation and quality assurance across life sciences."
  },
  {
    name: "Regulated manufacturing",
    href: "/industries/regulated-manufacturing",
    image: "/images/industries/regulated-manufacturing.jpg",
    description:
      "Technology, quality and delivery support for regulated plants."
  }
] as const;

export const homeStories = [
  {
    title: "SAP validation",
    meta: "UK, pharmaceuticals",
    summary:
      "Prospective validation of a move from Dynamics Navision to SAP S/4 HANA 1709, per GAMP 5, with infrastructure qualification and data migration verification."
  },
  {
    title: "SAP technical upgrade",
    meta: "US, semiconductor",
    summary:
      "Project management and testing for an upgrade from S/4 HANA 1610 to 2020, including automated integration tests and a cutover plan."
  },
  {
    title: "LIMS validation",
    meta: "US, pharmaceuticals",
    summary:
      "Project management and prospective validation of a new laboratory information system, with infrastructure qualification and data migration verification."
  },
  {
    title: "Equipment qualification",
    meta: "Israel, medical devices",
    summary:
      "Validation deliverables and FAT, SAT, OQ and PQ scripts to qualify equipment for a second, on-site source of supply."
  },
  {
    title: "SAP gap assessment",
    meta: "Israel, pharmaceuticals",
    summary:
      "A gap assessment of an S/4 HANA system against current processes and SOPs, ending in a report with recommendations."
  },
  {
    title: "SOP preparation",
    meta: "Israel, pharmaceuticals",
    summary:
      "SOPs, work instructions and end-user manuals for the SAP modules MM, PP, SD, QM, PM, FICO and WM."
  },
  {
    title: "Empower 3 validation",
    meta: "US, pharmaceuticals",
    summary:
      "End-to-end validation as the customer moved from cloud to physical infrastructure and upgraded Empower, with a data migration protocol."
  }
] as const;

export const homeFaqs = [
  {
    q: "What is computer system validation?",
    a: "Documented evidence that a computerised system does what it is meant to do, consistently, in a regulated setting. It usually covers requirements, specifications, testing and a final summary report."
  },
  {
    q: "Why does infrastructure need to be qualified?",
    a: "GxP applications run on servers, networks and platforms. In a regulated environment, that infrastructure should be qualified before the applications that depend on it are used."
  },
  {
    q: "Can you support a project that is already under way?",
    a: "Yes. Engagements range from a gap assessment of an existing system to full validation and project management of a new one."
  },
  {
    q: "Which guidance do you work to?",
    a: "Validation is delivered as per GAMP 5 guidelines, and our teams train project staff on 21 CFR Part 11 and EU Annex 11."
  }
] as const;
