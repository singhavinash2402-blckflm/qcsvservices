export type Industry = {
  slug: string;
  name: string;
  summary: string;
  headline: string;
  intro: string[];
  whereWeHelp: string;
  challenge?: string;
  /** Slugs of services most relevant to this industry. */
  services: string[];
  /** Slugs of success stories (see stories config) that relate to it. */
  stories: string[];
  image: string;
};

/**
 * Pharmaceuticals, medical devices and technology manufacturing text follows
 * the client's existing Industries page. Life sciences and regulated
 * manufacturing are in the client's industry catalogue but have no written
 * description yet, so their copy is deliberately minimal and needs approval.
 */
export const industries: Industry[] = [
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    summary:
      "Upgrading and improving production lines and processes in a highly regulated industry.",
    headline: "Support for pharmaceutical manufacturers",
    intro: [
      "The pharmaceutical industry is highly regulated and going through a period of transformational change. Technologies such as robotic process automation, predictive analytics, digital twins and modern manufacturing execution systems make it possible to do more with less.",
      "QCSV Services supports pharmaceutical manufacturers as they upgrade and improve their production lines and processes."
    ],
    whereWeHelp:
      "Validation of computerised and laboratory systems, SAP and manufacturing systems, serialization, and the documentation that goes with them. QCSV has delivered SAP validation, LIMS validation, gap assessments, SOP preparation and Empower 3 validation for pharmaceutical customers.",
    challenge:
      "Production lines and systems have to be upgraded without breaking the validated state that regulators expect.",
    services: [
      "computer-system-validation",
      "manufacturing-execution-systems",
      "serialization",
      "sap-services",
      "it-infrastructure-qualification"
    ],
    stories: [
      "sap-validation",
      "lims-validation",
      "sap-gap-assessment",
      "sop-preparation",
      "empower-3-validation"
    ],
    image: "/images/industries/pharmaceuticals.jpg"
  },
  {
    slug: "medical-devices",
    name: "Medical Devices",
    summary:
      "Helping production lines meet business objectives and customer requirements.",
    headline: "Support for medical device manufacturers",
    intro: [
      "Advanced materials, technologies, diagnostic methods and treatments make medical devices one of the most innovative industries in the world. It must also meet the strict requirements of regulators while delivering products that transform patient care.",
      "QCSV Services supports medical device manufacturers in making sure their production lines meet their business objectives and their customers' requirements."
    ],
    whereWeHelp:
      "Equipment qualification and the validation documents around it. For an Israeli medical device manufacturer, QCSV prepared equipment process flows and validation deliverables from the validation master plan through the summary report, and wrote FAT, SAT, OQ and PQ test scripts.",
    challenge:
      "Production capacity has to grow while products stay consistent, which means qualifying new equipment quickly and thoroughly.",
    services: [
      "computer-system-validation",
      "quality-assurance",
      "project-documentation",
      "audits-assessments"
    ],
    stories: ["equipment-qualification"],
    image: "/images/industries/medical-devices.jpg"
  },
  {
    slug: "life-sciences",
    name: "Life Sciences",
    summary:
      "A quality service and solution partner for life sciences organisations.",
    headline: "Support for life sciences organisations",
    intro: [
      "QCSV Services is a quality service and solution partner for life sciences organisations.",
      "Our work spans validation, quality, regulated systems and project delivery, across the pharmaceutical and medical device customers we support."
    ],
    whereWeHelp:
      "Validation, quality assurance, audits and project management across pharmaceutical and medical device customers.",
    services: [
      "computer-system-validation",
      "quality-assurance",
      "audits-assessments",
      "project-management"
    ],
    stories: ["lims-validation", "empower-3-validation", "sop-preparation"],
    image: "/images/industries/life-sciences.jpg"
  },
  {
    slug: "regulated-manufacturing",
    name: "Regulated Manufacturing",
    summary:
      "Validation, MES, serialization and delivery support for regulated plants.",
    headline: "Support for regulated manufacturing",
    intro: [
      "Manufacturing in a regulated setting depends on production systems that are qualified, documented and kept under control.",
      "QCSV Services supports manufacturers with validation, manufacturing execution systems, serialization and the project delivery around them."
    ],
    whereWeHelp:
      "Manufacturing execution systems, serialization, infrastructure qualification and project delivery for regulated plants.",
    services: [
      "manufacturing-execution-systems",
      "serialization",
      "it-infrastructure-qualification",
      "project-management"
    ],
    stories: ["equipment-qualification"],
    image: "/images/industries/regulated-manufacturing.jpg"
  },
  {
    slug: "semiconductor",
    name: "Semiconductor",
    summary:
      "Updating and improving processes and systems for technology manufacturers.",
    headline: "Support for technology and semiconductor manufacturers",
    intro: [
      "Manufacturers in the technology industry operate in a fast-paced, innovative and highly competitive environment where technological advances occur daily. To keep up and stay profitable, they must update and improve their processes and systems.",
      "QCSV Services has supported a US semiconductor customer through a SAP technical upgrade."
    ],
    whereWeHelp:
      "SAP technical upgrades, project management and testing. QCSV led a technical upgrade of a US semiconductor customer's SAP S/4 HANA landscape, covering end-to-end project management, test planning, manual and automated testing, and a cutover plan.",
    challenge:
      "Technology manufacturers have to keep updating their systems to stay competitive without disrupting production.",
    services: [
      "sap-services",
      "project-management",
      "cloud-services",
      "it-staffing"
    ],
    stories: ["sap-technical-upgrade"],
    image: "/images/industries/semiconductor.jpg"
  }
];

export const getIndustry = (slug: string) =>
  industries.find((industry) => industry.slug === slug);
