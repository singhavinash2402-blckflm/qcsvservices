import { Mail, MessageSquare, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const serviceOptions = [
    "Computer System Validation",
    "Quality Assurance",
    "SAP Services",
    "IT Infrastructure Qualification",
    "MES",
    "Serialization",
    "Cloud Services",
    "Project Management",
    "Project Documentation",
    "IT Staffing",
    "Website Development",
    "Audits / Assessments",
];

export function Contact() {
    return (
        <Section id="contact" className="bg-[var(--surface)]">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div className="max-w-xl">
                        <Badge variant="primary">CONTACT QCSV</Badge>

                        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                            Let&apos;s discuss your requirements.
                        </h2>

                        <p className="mt-5 text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
                            Tell us about your project, technology environment or service
                            requirements. Our team can discuss the appropriate next steps.
                        </p>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-start gap-4">
                                <span className="mt-0.5 text-[var(--primary)]">
                                    <Mail aria-hidden="true" className="h-5 w-5" />
                                </span>

                                <div>
                                    <p className="text-sm font-semibold text-[var(--foreground)]">
                                        Email
                                    </p>
                                    <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                                        Connect with the QCSV team
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="mt-0.5 text-[var(--primary)]">
                                    <Phone aria-hidden="true" className="h-5 w-5" />
                                </span>

                                <div>
                                    <p className="text-sm font-semibold text-[var(--foreground)]">
                                        Phone
                                    </p>
                                    <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                                        Discuss your requirements directly
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="mt-0.5 text-[var(--primary)]">
                                    <MessageSquare aria-hidden="true" className="h-5 w-5" />
                                </span>

                                <div>
                                    <p className="text-sm font-semibold text-[var(--foreground)]">
                                        Project enquiry
                                    </p>
                                    <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                                        Share the area where you need support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="qcsv-card p-6 sm:p-8">
                        <form className="space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                                        Name
                                    </span>
                                    <Input
                                        name="name"
                                        placeholder="Your name"
                                        autoComplete="name"
                                        required
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                                        Company
                                    </span>
                                    <Input
                                        name="company"
                                        placeholder="Company name"
                                        autoComplete="organization"
                                        required
                                    />
                                </label>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                                        Business Email
                                    </span>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        autoComplete="email"
                                        required
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                                        Phone
                                    </span>
                                    <Input
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone number"
                                        autoComplete="tel"
                                    />
                                </label>
                            </div>

                            <label className="block">
                                <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                                    Service / Area of Interest
                                </span>
                                <Select name="service" required defaultValue="">
                                    <option value="" disabled>
                                        Select a service
                                    </option>

                                    {serviceOptions.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </Select>
                            </label>

                            <label className="block">
                                <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                                    Message
                                </span>
                                <Textarea
                                    name="message"
                                    placeholder="Tell us about your requirements..."
                                    rows={6}
                                    required
                                />
                            </label>

                            <Button type="submit" className="w-full sm:w-auto">
                                Send Enquiry
                            </Button>

                            <p className="text-xs leading-5 text-[var(--foreground-subtle)]">
                                This form is currently a frontend interface. Submission and
                                enquiry routing will be connected during the backend
                                integration phase.
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
}