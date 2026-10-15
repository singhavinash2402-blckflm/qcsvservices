export type LegalDocument = {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
};

/**
 * Draft legal text for the client's legal adviser to review before launch.
 * Points to confirm: data retention period, hosting and email provider
 * locations, grievance officer details, governing courts.
 */
export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  updated: "October 2026",
  intro:
    "This policy explains what personal information QCSV Services collects through this website, how we use it and the choices you have.",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "This website is operated by QCSV Services Private Limited, Madauli, Bhullanpur PAC, Varanasi, Uttar Pradesh 221108, India. In this policy, QCSV, we and us mean QCSV Services Private Limited.",
        "You can contact us about this policy at info@qcsvservices.in."
      ]
    },
    {
      heading: "Information we collect",
      bullets: [
        "Enquiry details: your name, company, business email address, phone number if you give one, the service you are interested in and your message.",
        "Technical information: your IP address, browser type and the pages you visit, recorded in standard server logs by our hosting and security systems.",
        "Preferences: your light or dark theme choice, stored in your own browser."
      ]
    },
    {
      heading: "How we use it",
      bullets: [
        "To reply to your enquiry and follow up on it.",
        "To run, secure and improve this website.",
        "To meet our legal obligations."
      ],
      paragraphs: ["We do not sell your personal information."]
    },
    {
      heading: "Who we share it with",
      paragraphs: [
        "We share information only with service providers who host this website or deliver email on our behalf, and only so they can provide those services. We may also disclose information where the law requires it."
      ]
    },
    {
      heading: "Cookies and similar technologies",
      paragraphs: [
        "This website does not use advertising or tracking cookies. Your theme choice is stored locally in your browser. If we add website analytics in future, we will update this page and ask for your consent where it is required."
      ]
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep enquiry details for as long as we need them to respond to you and to manage any business relationship that follows, and for as long as the law requires."
      ]
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Under applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may have the right to access your personal data, correct it, have it erased and withdraw your consent. To use any of these rights, email us at info@qcsvservices.in and we will respond within a reasonable time."
      ]
    },
    {
      heading: "Security and transfers",
      paragraphs: [
        "We take reasonable steps to protect the information we hold, but no method of transmission or storage is completely secure. Our hosting and email providers may process information on servers outside India."
      ]
    },
    {
      heading: "Children",
      paragraphs: [
        "This website is intended for business visitors and is not directed at children."
      ]
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The date at the top shows when it was last changed."
      ]
    }
  ]
};

export const termsOfUse: LegalDocument = {
  title: "Terms of Use",
  updated: "October 2026",
  intro:
    "By using this website you agree to these terms. If you do not agree, please do not use the site.",
  sections: [
    {
      heading: "Information on this website",
      paragraphs: [
        "The content on this website is general information about QCSV Services and our services. It is not professional, legal or regulatory advice, and you should not rely on it as such. We take care to keep it accurate, but we may change it at any time without notice."
      ]
    },
    {
      heading: "Using the website",
      paragraphs: [
        "You may use this website for lawful purposes only. You must not interfere with its operation, attempt to gain unauthorised access to it or its systems, or use it to send harmful or misleading material."
      ]
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The content, design and images on this website belong to QCSV Services or its licensors. You may view and print pages for your own business use, but you may not copy, republish or sell the content without our written permission."
      ]
    },
    {
      heading: "Third-party names and links",
      paragraphs: [
        "Product and company names mentioned on this website, such as SAP, TraceLink, Optel and Empower, belong to their respective owners and are used only to describe our work. They do not mean we are affiliated with or endorsed by those owners. We are not responsible for the content of external websites we may link to."
      ]
    },
    {
      heading: "Enquiries",
      paragraphs: [
        "Sending an enquiry through this website does not create a contract between you and QCSV Services. Any engagement starts only when both parties agree to it in writing."
      ]
    },
    {
      heading: "Disclaimer and limit of liability",
      paragraphs: [
        "This website is provided as it is, without warranties of any kind. To the extent the law allows, QCSV Services is not liable for any loss arising from your use of, or reliance on, this website."
      ]
    },
    {
      heading: "Governing law",
      paragraphs: ["These terms are governed by the laws of India."]
    },
    {
      heading: "Changes and contact",
      paragraphs: [
        "We may update these terms from time to time. The date at the top shows when they were last changed. Questions about these terms can be sent to info@qcsvservices.in."
      ]
    }
  ]
};
