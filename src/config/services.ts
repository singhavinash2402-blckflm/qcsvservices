export const serviceGroupOrder = [
  "Validation and compliance",
  "Quality and audit",
  "Regulated systems",
  "Delivery and people",
  "Digital"
] as const;

export type ServiceGroup = (typeof serviceGroupOrder)[number];

export type Service = {
  slug: string;
  name: string;
  group: ServiceGroup;
  /** One line used on cards and in the navigation. */
  summary: string;
  headline: string;
  intro: string[];
  coverTitle: string;
  covers: { title: string; detail?: string }[];
  /** Titles of success stories (see home config) that relate to this service. */
  stories: string[];
  image: string;
};

/**
 * Service content is limited to what the client's existing website states.
 * Anything not confirmed there should be added only after client approval.
 */
export const services: Service[] = [
  {
    slug: "computer-system-validation",
    name: "Computer System Validation",
    group: "Validation and compliance",
    summary:
      "End-to-end validation for all software categories, as per GAMP 5.",
    headline: "Computer system validation for regulated industries",
    intro: [
      "QCSV Services provides a full range of validation services for high-volume, highly regulated industries, including pharmaceutical and medical device manufacturers.",
      "We help customers assess their existing validation process and put a new validation solution in place that meets their specific requirements, from the first concept through project delivery and ongoing support."
    ],
    coverTitle: "What we cover",
    covers: [
      { title: "Assessment of your existing validation process" },
      {
        title: "Implementation of new validation solutions",
        detail: "Built around your specific requirements."
      },
      {
        title: "End-to-end validation for all software categories",
        detail: "As per GAMP 5 classifications: Categories 1, 3, 4 and 5."
      },
      {
        title: "Support from concept to delivery and beyond",
        detail: "Initial concept, project delivery and ongoing support."
      }
    ],
    stories: ["SAP validation", "LIMS validation", "Empower 3 validation"],
    image: "/images/services/validation-quality.jpg"
  },
  {
    slug: "it-infrastructure-qualification",
    name: "IT Infrastructure Qualification",
    group: "Validation and compliance",
    summary:
      "Qualifying the underlying infrastructure before GxP applications go live.",
    headline: "IT infrastructure qualification for GxP environments",
    intro: [
      "A computer system is the hardware and software of a platform. Add application software, ancillary equipment, people and procedures and it becomes a computerised system, which runs within an organisation's operating infrastructure, or in the cloud when it is cloud-hosted.",
      "In a regulated environment the underlying IT infrastructure must be qualified before any GxP application is used. QCSV provides end-to-end infrastructure qualification that takes regulatory requirements and industry best practice into account."
    ],
    coverTitle: "What we cover",
    covers: [
      { title: "End-to-end infrastructure qualification" },
      { title: "Fulfilment of regulatory requirements" },
      { title: "Alignment with industry best practice" },
      {
        title: "Qualification before GxP use",
        detail:
          "Underlying infrastructure qualified before applications run on it."
      }
    ],
    stories: ["SAP validation", "LIMS validation"],
    image: "/images/services/enterprise-technology.jpg"
  },
  {
    slug: "cloud-services",
    name: "Cloud Services",
    group: "Validation and compliance",
    summary:
      "Cloud validation, infrastructure qualification and cloud solutions.",
    headline: "Cloud services",
    intro: [
      "QCSV Services provides a complete range of cloud services, from validating cloud-hosted systems to qualifying the infrastructure they run on."
    ],
    coverTitle: "What we cover",
    covers: [
      { title: "Cloud validation" },
      { title: "Cloud infrastructure qualification" },
      { title: "Cloud computing solutions" }
    ],
    stories: ["Empower 3 validation"],
    image: "/images/services/services-overview.jpg"
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    group: "Quality and audit",
    summary: "A systematic approach to confirming requirements are met.",
    headline:
      "Quality assurance that keeps mistakes from reaching the customer",
    intro: [
      "Quality assurance is a systematic approach that determines whether a product meets specific requirements and specifications. It also focuses on improving processes, so an organisation can deliver better-quality products to its customers.",
      "Once processes are in place, the aim is to make sure mistakes are not passed on to the customer. A QA team is responsible for finding and reporting issues or problems within the processes."
    ],
    coverTitle: "What quality assurance involves",
    covers: [
      {
        title: "Checking requirements and specifications",
        detail: "Determining whether a product meets what was specified."
      },
      {
        title: "Improving processes",
        detail: "So better-quality products reach customers."
      },
      {
        title: "Finding and reporting issues",
        detail: "Within the processes themselves."
      }
    ],
    stories: [],
    image: "/images/services/validation-quality.jpg"
  },
  {
    slug: "audits-assessments",
    name: "Audits and Assessments",
    group: "Quality and audit",
    summary: "Data integrity, GMP and QMS audits.",
    headline: "Audits and assessments",
    intro: [
      "An organisation must maintain a documented programme for conducting audits. ISO 9001 treats this as a requirement, not a recommendation, and its purpose is to make sure audits are carried out as planned.",
      "QCSV provides several kinds of audit service."
    ],
    coverTitle: "Audit services",
    covers: [
      { title: "Data integrity audits" },
      { title: "GMP audits" },
      { title: "QMS audits" }
    ],
    stories: ["SAP gap assessment"],
    image: "/images/industries/regulated-manufacturing.jpg"
  },
  {
    slug: "project-documentation",
    name: "Project Documentation",
    group: "Quality and audit",
    summary: "Lifecycle deliverables, SOPs, work instructions and manuals.",
    headline: "Project documentation across the software lifecycle",
    intro: [
      "IT documentation is the structured recording of information about an IT ecosystem. QCSV specialises in project documentation across the phases of the software development lifecycle."
    ],
    coverTitle: "What we document",
    covers: [
      { title: "Lifecycle deliverables" },
      { title: "SOPs" },
      { title: "Work instructions" },
      {
        title: "End-user manuals",
        detail: "And more, depending on the project."
      }
    ],
    stories: ["SOP preparation"],
    image: "/images/services/project-delivery.jpg"
  },
  {
    slug: "sap-services",
    name: "SAP Services",
    group: "Regulated systems",
    summary: "End-to-end solutions for SAP, from ECC to S/4 HANA.",
    headline: "SAP services from ECC to S/4 HANA",
    intro: [
      "QCSV Services provides an end-to-end solution for SAP systems, across versions from SAP ECC to SAP S/4 HANA."
    ],
    coverTitle: "What we cover",
    covers: [
      { title: "Validation of SAP systems" },
      { title: "Process control reviews and assessments" },
      {
        title: "Business process design",
        detail: "Process flows across the modules and interfaces involved."
      },
      {
        title: "Testing of business functions",
        detail: "Across the SAP modules."
      },
      {
        title: "SOPs, work instructions and end-user manuals",
        detail: "For business functions across the SAP modules."
      },
      { title: "Project coordination and project management" },
      { title: "Technical upgrades and data migration" }
    ],
    stories: [
      "SAP validation",
      "SAP technical upgrade",
      "SAP gap assessment",
      "SOP preparation"
    ],
    image: "/images/services/enterprise-technology.jpg"
  },
  {
    slug: "manufacturing-execution-systems",
    name: "Manufacturing Execution Systems",
    group: "Regulated systems",
    summary: "MES that support lower cost and stronger compliance.",
    headline: "Manufacturing execution systems",
    intro: [
      "Manufacturing execution systems (MES) help pharmaceutical manufacturers reduce production costs and meet regulatory requirements more reliably. An MES does this by optimising business processes in the production supply chain, improving product quality and supporting the safety of manufacturing processes."
    ],
    coverTitle: "What an MES brings",
    covers: [
      { title: "Lower production costs" },
      { title: "Stronger regulatory compliance" },
      { title: "Better product quality and safer manufacturing" }
    ],
    stories: [],
    image: "/images/industries/regulated-manufacturing.jpg"
  },
  {
    slug: "serialization",
    name: "Serialization",
    group: "Regulated systems",
    summary: "Validation and integration for pharmaceutical serialization.",
    headline: "Serialization for pharmaceutical products",
    intro: [
      "In pharmaceuticals, serialization traces a product from manufacturer to consumer through a unique serial number linked to its origin and batch details, such as batch number and expiry date. The aim is to put a unique identifier on every box of medicinal product.",
      "QCSV Services provides a full range of serialization solutions."
    ],
    coverTitle: "What we cover",
    covers: [
      {
        title: "Validation of the serialization system",
        detail: "TraceLink, Track & Trace."
      },
      { title: "Validation of the line master", detail: "Optel." },
      { title: "Line integration services" },
      { title: "ERP system integrations" }
    ],
    stories: [],
    image: "/images/industries/pharmaceuticals.jpg"
  },
  {
    slug: "project-management",
    name: "Project Management",
    group: "Delivery and people",
    summary: "End-to-end project management by software-literate managers.",
    headline: "Project management for regulated technology projects",
    intro: [
      "QCSV provides end-to-end project management, using best practice and established project management principles.",
      "Our project managers are experts in the discipline, well versed in the software, and have a thorough understanding of manufacturing best practice. They also help develop process engineering solutions."
    ],
    coverTitle: "What you get",
    covers: [
      { title: "End-to-end project management" },
      { title: "Managers who understand the software" },
      { title: "Grounding in manufacturing best practice" },
      { title: "Help developing process engineering solutions" }
    ],
    stories: ["SAP technical upgrade", "LIMS validation"],
    image: "/images/services/project-delivery.jpg"
  },
  {
    slug: "it-staffing",
    name: "IT Staffing",
    group: "Delivery and people",
    summary: "Skilled IT professionals who scale with your project.",
    headline: "IT staffing for mission-critical projects",
    intro: [
      "QCSV provides IT staffing services and has built a network of skilled professionals who can help organisations deliver their mission-critical projects and goals."
    ],
    coverTitle: "Why customers use it",
    covers: [
      { title: "Highly skilled staff" },
      { title: "Less expensive" },
      { title: "Accountability" },
      { title: "Easy to scale up or down" }
    ],
    stories: [],
    image: "/images/success-stories/success-stories.jpg"
  },
  {
    slug: "website-development",
    name: "Website Development",
    group: "Digital",
    summary: "Custom websites with creative design tailored to your needs.",
    headline: "Website development",
    intro: [
      "QCSV designs and builds custom websites, with creative design tailored to your requirements.",
      "The aim is to turn strong ideas into well-crafted websites."
    ],
    coverTitle: "What we do",
    covers: [
      { title: "Custom website design" },
      { title: "Creative design tailored to your requirements" }
    ],
    stories: [],
    image: "/images/services/website-development.jpg"
  }
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
