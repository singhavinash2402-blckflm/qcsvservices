export const serviceGroupOrder = [
  "Validation and compliance",
  "Quality and audit",
  "Regulated systems",
  "Delivery and people",
  "Digital"
] as const;

export const serviceGroupId = (group: string) =>
  group.toLowerCase().replace(/\s+/g, "-");

export type ServiceGroup = (typeof serviceGroupOrder)[number];

export type Service = {
  slug: string;
  name: string;
  group: ServiceGroup;
  /** One line used on cards and in the navigation. */
  summary: string;
  headline: string;
  intro: string[];
  /** General industry background explaining why the service matters. */
  why?: string;
  coverTitle: string;
  covers: { title: string; detail?: string }[];
  framework?: "infra" | "qa" | "pm" | "sdlc";
  process?: { title: string; items: string[]; numbered?: boolean };
  deliverables?: string;
  faqs?: { q: string; a: string }[];
  /** Slugs of success stories (see stories config) that relate to this service. */
  stories: string[];
  image: string;
};

/**
 * Service content follows the client's existing website and Word documents,
 * plus approved draft copy. Statements about how QCSV works (process, scope)
 * still need the client's sign-off before launch.
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
      "Pharmaceutical and medical device manufacturers have to show that every computerised system used in a regulated process does what it is meant to do, reliably and repeatedly. Computer system validation, or CSV, is how that is shown and documented.",
      "QCSV provides a full range of validation services for highly regulated industries. We help you assess your existing validation process and put a new solution in place that meets your requirements, from the first concept through delivery and ongoing support."
    ],
    why: "Regulators such as the US FDA and the EU authorities expect documented evidence that systems are fit for their intended use. GAMP 5 guidance helps organisations scale that effort to the risk and complexity of each system, from basic infrastructure software (Category 1) to custom-built software (Category 5).",
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
    process: {
      title: "How an engagement usually runs",
      numbered: true,
      items: [
        "Assess the system and how it will be used.",
        "Plan the validation: the plan, the risk assessment and the test strategy.",
        "Specify and test: requirements and specifications, then IQ, OQ and PQ scripts, executed with evidence.",
        "Report and release: a validation summary report and a system release certificate."
      ]
    },
    deliverables:
      "Project plan, master test plan, test scripts for infrastructure, IQ, OQ, data migration and PQ, review of specifications and executed test scripts, validation summary report, system release certificate, SOPs, work instructions and end-user manuals.",
    faqs: [
      {
        q: "What do IQ, OQ and PQ mean?",
        a: "Installation qualification checks that a system is installed as specified. Operational qualification checks that it works as intended across its expected operating range. Performance qualification checks that it performs consistently in real use."
      },
      {
        q: "Does validation end at go-live?",
        a: "No. A validated system has to stay under change control, and significant changes or upgrades can call for re-validation. QCSV supports customers from the initial concept through delivery and ongoing support."
      }
    ],
    stories: ["sap-validation", "lims-validation", "empower-3-validation"],
    image: "/images/services/computer-system-validation.jpg"
  },
  {
    slug: "it-infrastructure-qualification",
    name: "IT Infrastructure Qualification",
    group: "Validation and compliance",
    summary:
      "Qualifying the underlying infrastructure before GxP applications go live.",
    headline: "IT infrastructure qualification for GxP environments",
    intro: [
      "A computer system is technically the hardware and software of a platform. Add application software, ancillary equipment, people and procedures and it becomes a computerised system, which runs within an organisation's operating infrastructure, or in the cloud when it is cloud-hosted.",
      "In a regulated environment the underlying IT infrastructure must be qualified before any GxP application is used. QCSV specialises in end-to-end infrastructure qualification that takes regulatory requirements and industry best practice into account."
    ],
    why: "If servers, networks and platforms are not qualified, every application that runs on them inherits the doubt. Qualifying the infrastructure gives each GxP application a controlled base to be validated on.",
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
    framework: "infra",
    faqs: [
      {
        q: "Is infrastructure qualification the same as validating an application?",
        a: "No. The infrastructure is qualified first. The application is then validated on top of it."
      },
      {
        q: "Does it apply to cloud environments?",
        a: "Yes. A cloud-hosted environment is part of the infrastructure. See Cloud Services."
      }
    ],
    stories: ["sap-validation", "lims-validation"],
    image: "/images/services/it-infrastructure-qualification.jpg"
  },
  {
    slug: "cloud-services",
    name: "Cloud Services",
    group: "Validation and compliance",
    summary:
      "Cloud validation, infrastructure qualification and cloud solutions.",
    headline: "Cloud services",
    intro: [
      "Cloud-hosted systems still have to be validated, and the cloud environment they run on still has to be qualified. QCSV provides a complete range of cloud services, including cloud validation, cloud infrastructure qualification and cloud computing solutions."
    ],
    why: "In the cloud, responsibility for the platform is shared between you and the provider. It needs to be clear who qualifies and documents what.",
    coverTitle: "What we cover",
    covers: [
      { title: "Cloud validation" },
      { title: "Cloud infrastructure qualification" },
      { title: "Cloud computing solutions" }
    ],
    faqs: [
      {
        q: "What changes when a system moves to or from the cloud?",
        a: "The qualification and validation evidence has to reflect the new environment, including how data is migrated and verified."
      }
    ],
    stories: ["empower-3-validation"],
    image: "/images/services/cloud-services.jpg"
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    group: "Quality and audit",
    summary: "A systematic approach to confirming requirements are met.",
    headline:
      "Quality assurance that keeps mistakes from reaching the customer",
    intro: [
      "Quality assurance (QA) is a systematic approach that determines whether a product meets specific requirements and specifications. It also focuses on improving processes, so an organisation can deliver better-quality products to its customers.",
      "Once the processes are in place, the aim of QA is to make sure mistakes are not passed on to the customer. A QA team is responsible for finding and reporting issues or problems within the processes."
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
    framework: "qa",
    faqs: [
      {
        q: "How is quality assurance different from quality control?",
        a: "Quality control checks the product itself. Quality assurance looks at the processes that produce it, so problems are prevented as well as found."
      }
    ],
    stories: [],
    image: "/images/services/quality-assurance.jpg"
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
      {
        title: "Data integrity audits",
        detail:
          "Checking that data is attributable, legible, contemporaneous, original and accurate: the ALCOA principles that regulators use."
      },
      {
        title: "GMP audits",
        detail:
          "Reviewing how well operations follow good manufacturing practice."
      },
      {
        title: "QMS audits",
        detail: "Reviewing how well the quality management system is working."
      }
    ],
    process: {
      title: "How an audit usually runs",
      numbered: true,
      items: [
        "Agree the scope and plan the audit.",
        "Carry out the audit.",
        "Report the findings.",
        "Follow up on corrective actions."
      ]
    },
    faqs: [
      {
        q: "What is the difference between a GMP audit and a QMS audit?",
        a: "A GMP audit focuses on manufacturing and quality practices on the shop floor and in the systems that support it. A QMS audit looks at the management system as a whole: its procedures, responsibilities and records."
      }
    ],
    stories: ["sap-gap-assessment"],
    image: "/images/services/audits-assessments.jpg"
  },
  {
    slug: "project-documentation",
    name: "Project Documentation",
    group: "Delivery and people",
    summary: "Lifecycle deliverables, SOPs, work instructions and manuals.",
    headline: "Project documentation across the software lifecycle",
    intro: [
      "IT documentation is the structured recording of information about an IT ecosystem. QCSV specialises in project documentation across the phases of the software development lifecycle, including lifecycle deliverables, SOPs, work instructions, end-user manuals and more."
    ],
    why: "In a regulated environment, if something is not documented it cannot be shown to have happened. Good documentation practice keeps records accurate, consistent and ready for review.",
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
    framework: "sdlc",
    faqs: [
      {
        q: "What is good documentation practice?",
        a: "A set of habits that keeps records accurate, complete, legible and traceable, so they stand up to review. QCSV trains project teams on it."
      }
    ],
    stories: ["sop-preparation"],
    image: "/images/services/project-documentation.jpg"
  },
  {
    slug: "sap-services",
    name: "SAP Services",
    group: "Regulated systems",
    summary: "End-to-end solutions for SAP, from ECC to S/4 HANA.",
    headline: "SAP services from ECC to S/4 HANA",
    intro: [
      "QCSV provides an end-to-end solution for SAP systems, across versions from SAP ECC to SAP S/4 HANA."
    ],
    why: "An ERP system touches batch release, inventory, quality and finance. In a regulated company, changes to it have to be validated and documented, not just configured.",
    coverTitle: "What we cover",
    covers: [
      {
        title: "End-to-end validation",
        detail:
          "Prospective, retrospective and re-validation across SAP platforms, from SAP ECC 6.0 to S/4 HANA versions 1511, 1610, 1709, 1809, 1909 and 2020."
      },
      {
        title: "Project and validation deliverables",
        detail:
          "Authoring, review and approval, following industry best practice."
      },
      { title: "Process control reviews and assessments" },
      {
        title: "Business process design",
        detail: "Process flows across the modules and interfaces involved."
      },
      {
        title: "Testing of business functions and processes",
        detail:
          "Across the SAP modules in development and quality, as part of system integration testing (SIT), operational qualification (OQ) and performance qualification (PQ) or user acceptance testing (UAT)."
      },
      { title: "IT infrastructure qualification" },
      {
        title: "Data migration qualification",
        detail: "Including verification of migrated data."
      },
      {
        title: "SOPs, work instructions and end-user manuals",
        detail: "For business functions across the SAP modules."
      },
      { title: "Project coordination and project management" },
      {
        title: "Technical upgrade support",
        detail:
          "Including defining the strategy and producing the deliverables."
      },
      {
        title: "Training for project teams",
        detail:
          "Internal and external teams, on SAP business processes, CSV and its lifecycle approach, GAMP 5, project templates, and the US FDA 21 CFR Part 11 and EU Annex 11 regulations."
      }
    ],
    faqs: [
      {
        q: "What is the difference between prospective, retrospective and re-validation?",
        a: "Prospective validation happens before a system goes live. Retrospective validation covers a system already in use, based on its history. Re-validation follows significant changes or upgrades."
      },
      {
        q: "Can you help with a system that has changed over time without documentation?",
        a: "Yes. A gap assessment compares the system with its current processes, SOPs and industry standards and recommends how to close the gaps. QCSV has done this for a pharmaceutical customer."
      }
    ],
    stories: [
      "sap-validation",
      "sap-technical-upgrade",
      "sap-gap-assessment",
      "sop-preparation"
    ],
    image: "/images/services/sap-services.jpg"
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
    why: "An MES sits between planning systems such as ERP and the equipment on the shop floor, so it directly affects production records, product quality and compliance.",
    coverTitle: "What an MES brings",
    covers: [
      { title: "Lower production costs" },
      { title: "Stronger regulatory compliance" },
      { title: "Better product quality and safer manufacturing" }
    ],
    process: {
      title: "How QCSV can support an MES project",
      items: [
        "Validation of the MES as a GxP computerised system.",
        "Qualification of the infrastructure it runs on.",
        "Testing of its interfaces to ERP and shop-floor equipment.",
        "SOPs, work instructions and training for the people who use it."
      ]
    },
    faqs: [
      {
        q: "Does an MES need to be validated?",
        a: "If it is used in a GxP process it does, in the same way as any other computerised system."
      }
    ],
    stories: [],
    image: "/images/services/manufacturing-execution-systems.jpg"
  },
  {
    slug: "serialization",
    name: "Serialization",
    group: "Regulated systems",
    summary: "Validation and integration for pharmaceutical serialization.",
    headline: "Serialization for pharmaceutical products",
    intro: [
      "In pharmaceuticals, serialization traces a product from manufacturer to consumer through a unique serial number linked to its origin and batch details, such as batch number and expiry date. The aim is to put a unique identifier on every box of medicinal product.",
      "QCSV provides a full range of serialization solutions."
    ],
    why: "Many markets require serialised, traceable medicines to protect patients from counterfeit products. The serialization system, the packaging line and the ERP all have to work together and be validated.",
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
    faqs: [
      {
        q: "Why does the line master need validating?",
        a: "It controls serial numbers and coding on the packaging line, so its behaviour has to be proven before it is used on product."
      }
    ],
    stories: [],
    image: "/images/services/serialization.jpg"
  },
  {
    slug: "project-management",
    name: "Project Management",
    group: "Delivery and people",
    summary: "End-to-end project management by software-literate managers.",
    headline: "Project management for regulated technology projects",
    intro: [
      "QCSV provides end-to-end project management, using best practice and established project management principles.",
      "Our project managers are experts in the discipline. They are also well versed in the software, have a thorough understanding of manufacturing best practice, and help develop process engineering solutions."
    ],
    coverTitle: "What you get",
    covers: [
      { title: "End-to-end project management" },
      { title: "Managers who understand the software" },
      { title: "Grounding in manufacturing best practice" },
      { title: "Help developing process engineering solutions" }
    ],
    framework: "pm",
    faqs: [
      {
        q: "Can you manage a project that includes validation?",
        a: "Yes. Several of QCSV's engagements combine project management with validation or SAP testing."
      }
    ],
    stories: ["sap-technical-upgrade", "lims-validation"],
    image: "/images/services/project-management.jpg"
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
    process: {
      title: "How it works",
      numbered: true,
      items: [
        "Tell us the skills and the duration you need.",
        "We propose professionals from our network.",
        "Add or release people as the project changes."
      ]
    },
    stories: [],
    image: "/images/services/it-staffing.jpg"
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
