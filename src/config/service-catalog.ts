export const serviceGroups = [
  {
    title: "Validation & Quality",
    services: [
      {
        name: "Computer System Validation",
        href: "/services/computer-system-validation",
      },
      {
        name: "Quality Assurance",
        href: "/services/quality-assurance",
      },
      {
        name: "IT Infrastructure Qualification",
        href: "/services/it-infrastructure-qualification",
      },
      {
        name: "Audits / Assessments",
        href: "/services/audits-assessments",
      },
    ],
  },
  {
    title: "Enterprise Technology",
    services: [
      {
        name: "SAP Services",
        href: "/services/sap-services",
      },
      {
        name: "Manufacturing Execution Systems",
        href: "/services/manufacturing-execution-systems",
      },
      {
        name: "Serialization",
        href: "/services/serialization",
      },
      {
        name: "Cloud Services",
        href: "/services/cloud-services",
      },
    ],
  },
  {
    title: "Project Delivery",
    services: [
      {
        name: "Project Management",
        href: "/services/project-management",
      },
      {
        name: "Project Documentation",
        href: "/services/project-documentation",
      },
      {
        name: "IT Staffing",
        href: "/services/it-staffing",
      },
    ],
  },
  {
    title: "Digital",
    services: [
      {
        name: "Website Development",
        href: "/services/website-development",
      },
    ],
  },
] as const;

export const serviceHrefByName = Object.fromEntries(
  serviceGroups.flatMap((group) =>
    group.services.map((service) => [service.name, service.href]),
  ),
) as Record<string, string>;
