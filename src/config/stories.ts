export type Story = {
  slug: string;
  title: string;
  company: string;
  industry: string;
  /** Short text for cards. */
  summary: string;
  background: string[];
  solutionIntro: string;
  steps: string[];
};

export const storiesIntro =
  "Customers across industries come to us with specific business challenges, and we build individual solutions for them. Each story below shows the challenge, what QCSV delivered and the activities involved. Customer names are withheld.";

/** Full text follows the client's Success Stories document, lightly edited. */
export const stories: Story[] = [
  {
    slug: "sap-validation",
    title: "SAP Validation",
    company: "UK Based Company",
    industry: "Pharmaceuticals",
    summary:
      "Prospective validation of a move from Dynamics Navision to SAP S/4 HANA 1709, per GAMP 5, with infrastructure qualification and data migration verification.",
    background: [
      "The customer was moving its existing ERP instance from Microsoft Dynamics Navision to SAP S/4 HANA version 1709, to support its business operations more effectively and efficiently. This was a greenfield project that also included infrastructure qualification and data migration and verification.",
      "The customer was looking for an efficient validation services provider who could help it achieve the project goals within strict timelines."
    ],
    solutionIntro:
      "QCSV Services led the engagement by deploying dedicated validation professionals skilled in the required areas, to perform prospective validation as per GAMP 5 guidelines for the logistics modules. As part of the service, we:",
    steps: [
      "Developed the project templates from concept to retirement phase.",
      "Developed the validation deliverables throughout the project lifecycle, from the project plan to the validation summary report and system release certificate.",
      "Developed the master test plan, covering the test strategy and test scenarios across the SAP modules.",
      "Developed the test scripts: infrastructure, IQ, OQ, data migration and PQ.",
      "Performed testing of the SAP modules in scope, as part of integration testing and OQ.",
      "Reviewed validation deliverables such as business blueprints, functional specifications, technical specifications and post-execution test scripts.",
      "Developed the business process flows for the applicable processes across the SAP modules in scope.",
      "Developed SOPs related to IT and QA processes.",
      "Developed end-user manuals and work instructions related to the SAP modules and processes.",
      "Delivered training on computer system validation (CSV), good documentation practice (GDP), testing practices and more."
    ]
  },
  {
    slug: "sap-technical-upgrade",
    title: "SAP Technical Upgrade",
    company: "US Based Company",
    industry: "Semi-Conductors",
    summary:
      "Project management and testing for an upgrade from S/4 HANA 1610 to 2020, including automated integration tests and a cutover plan.",
    background: [
      "The customer is a leading global semiconductor company. It had decided to perform a technical upgrade of its existing ERP instance from SAP S/4 HANA and Fiori version 1610 to version 2020, to support its business operations more effectively and efficiently.",
      "The customer was looking for an efficient project management and SAP testing service provider who could help it achieve the project goals within strict timelines, with quality outcomes."
    ],
    solutionIntro:
      "QCSV Services led the engagement by deploying dedicated project management and SAP professionals skilled in the required areas. As part of the service, we:",
    steps: [
      "Carried out end-to-end project management activities.",
      "Developed the master test plan, covering the test strategy and test scenarios across the SAP modules and associated processes.",
      "Developed unit and integration test scripts across the SAP landscapes (Mock, Development and Quality).",
      "Performed manual testing of business processes for the SAP modules in scope, as part of unit and integration testing across those landscapes.",
      "Identified test scenarios across the sites and developed integration test scripts using the robotic process automation (RPA) testing tool TestMagic.",
      "Performed automated testing of the integrated scripts with TestMagic on the Quality server.",
      "Developed the cutover plan for the technical upgrade.",
      "Developed the issue tracker, with controls implemented and monitored until issues were closed."
    ]
  },
  {
    slug: "lims-validation",
    title: "LIMS Validation",
    company: "US Based Company",
    industry: "Pharmaceuticals",
    summary:
      "Project management and prospective validation of a new laboratory information system, with infrastructure qualification and data migration verification.",
    background: [
      "The customer had decided to implement LIMS software to manage its laboratory activities and operations, such as registering a sample and its information, tracking the sample and the equipment used in its analysis together with its quality control, storing the data and reporting the analysis.",
      "This was a greenfield project that also included infrastructure qualification and data migration and verification. The customer was looking for an efficient project management and validation services provider who could help it achieve the project goals and complete on time."
    ],
    solutionIntro:
      "QCSV Services led the engagement by deploying dedicated project management and validation professionals skilled in the required areas, to perform prospective validation as per GAMP 5 guidelines. As part of the service, we:",
    steps: [
      "Developed the project templates.",
      "Developed the validation deliverables throughout the project lifecycle, from the project plan to the validation summary report and system release certificate.",
      "Developed the master test plan, covering the test strategy and test scenarios for the LIMS modules and processes.",
      "Developed the test scripts: infrastructure, IQ, OQ, data migration and PQ.",
      "Performed testing of the business processes in scope and the associated interfaces.",
      "Reviewed validation deliverables such as functional specifications, operational manuals and post-execution test scripts.",
      "Delivered training on computer system validation (CSV), good documentation practice (GDP), testing practices and more."
    ]
  },
  {
    slug: "equipment-qualification",
    title: "Equipment Qualification",
    company: "Israel Based Company",
    industry: "Medical Devices",
    summary:
      "Validation deliverables and FAT, SAT, OQ and PQ scripts to qualify equipment for a second, on-site source of supply.",
    background: [
      "The customer is a leading global medical devices manufacturer. Previously, the medical device products it used were assembled and produced at an external supplier. Because product demand was growing, production capacity also had to grow.",
      "To ensure continuity of supply, the customer decided to dual-source the supply on premise as well, with the product manufactured using the same technologies and equipment as the supplier. The customer was looking for an efficient validation services provider who could help it qualify the equipment on time and streamline the process."
    ],
    solutionIntro:
      "QCSV Services led the engagement by deploying validation professionals skilled in the required areas. As part of the service, we:",
    steps: [
      "Developed the equipment process flows.",
      "Developed the validation deliverables throughout the project lifecycle, from the validation master plan to the validation summary report.",
      "Developed the test scripts: FAT, SAT, OQ and PQ."
    ]
  },
  {
    slug: "sap-gap-assessment",
    title: "SAP GAP Assessment",
    company: "Israel Based Company",
    industry: "Pharmaceuticals",
    summary:
      "A gap assessment of an S/4 HANA system against current processes and SOPs, ending in a report with recommendations.",
    background: [
      "The customer had its existing ERP instance, SAP S/4 HANA version 1610, to support its business operations. Over time, changes made to the system were not documented or streamlined according to its current processes, defined SOPs and industry standards.",
      "The customer was looking for an efficient services provider who could perform a gap assessment of the ERP system with respect to those changes, current processes and SOPs, and recommend how to close the gaps identified."
    ],
    solutionIntro:
      "QCSV Services led the engagement by deploying dedicated professionals skilled in performing gap assessments. As part of the service, we:",
    steps: [
      "Understood the customer's ERP business processes.",
      "Reviewed the customer's existing validation and documentation package and SOPs.",
      "Performed testing of GxP business processes and functions, and control assessments.",
      "Identified the gaps in the existing validation package and SOPs (IT and QA).",
      "Identified observations and gaps in the processes and their controls.",
      "Prepared the gap assessment report, with recommendations to close the gaps identified."
    ]
  },
  {
    slug: "sop-preparation",
    title: "SOP Preparation",
    company: "Israel Based Company",
    industry: "Pharmaceuticals",
    summary:
      "SOPs, work instructions and end-user manuals for the SAP modules MM, PP, SD, QM, PM, FICO and WM.",
    background: [
      "The customer had implemented the ERP software SAP S/4 HANA version 1610 to support its business operations. It was looking for an efficient services provider and IT partner who could prepare and deliver SOPs, work instructions and end-user manuals for the SAP modules and associated business processes in scope (MM, PP, SD, QM, PM, FICO and WM), within tight timelines."
    ],
    solutionIntro:
      "QCSV Services led the engagement by deploying dedicated validation professionals skilled in preparing SOPs, work instructions and end-user manuals, with extensive knowledge of SAP processes and functions. As part of the service, we:",
    steps: [
      "Understood the customer's business processes across the modules in scope.",
      "Developed the SOPs, work instructions and end-user manuals related to the SAP modules and associated business processes."
    ]
  },
  {
    slug: "empower-3-validation",
    title: "Validation of Empower 3 system",
    company: "US Based Company",
    industry: "Pharmaceuticals",
    summary:
      "End-to-end validation as the customer moved from cloud to physical infrastructure and upgraded Empower, with a data migration protocol.",
    background: [
      "The customer is a leading global pharmaceutical company. It was moving its existing IT infrastructure from the cloud to a physical infrastructure setup, along with upgrading its existing Empower system.",
      "The customer was looking for an efficient validation service provider who could help it achieve the project goals, with quality outcomes."
    ],
    solutionIntro:
      "QCSV Services led the engagement by deploying skilled validation professionals in the area of Empower validation. As part of the service, we:",
    steps: [
      "Carried out end-to-end validation activities for the Empower 3 validation.",
      "Developed the validation deliverables from concept to the project phase.",
      "Developed the data migration and verification protocol.",
      "Supported the client team members during test execution (IQ, OQ and PQ)."
    ]
  }
];

export const storyMeta = (story: Story) =>
  `${story.company} | ${story.industry}`;
export const storyHref = (story: Story) => `/success-stories#${story.slug}`;
