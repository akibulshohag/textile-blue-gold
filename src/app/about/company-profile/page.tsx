"use client";

import { CheckCircle2 } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionWrapper, { SectionTitle } from "@/components/SectionWrapper";
import aboutImgObj from "@/assets/about-us/Textile office.jpeg";
const aboutImg = aboutImgObj.src;
import yonthinCertObj from "@/assets/company-data/yonthin-dealership-certificate.jpeg";
const yonthinCert = yonthinCertObj.src;
import lidaCertObj from "@/assets/company-data/Cer.png";
const lidaCert = lidaCertObj.src;

const certifications = [
  {
    src: yonthinCert,
    title: "Yonthin Dealership Certificate",
    desc: "Certified exclusive agent for circular knitting, embroidery, and flat collar machines in Bangladesh — issued by Fujian Yonthin Digital Control Technology Co., Ltd.",
  },
  {
    src: lidaCert,
    title: "Lida Authorized Certificate",
    desc: "Authorized certificate from Lida (China) Machine Equipment Co., Ltd. for Luawei air compressors.",
  },
];

const brandPartnerships = [
  {
    title: "Textile & Printing Machinery",
    brands: [
      {
        name: "Yonthin (Fujian Yonthin Digital Control Technology Co., Ltd.)",
        items: [
          "Computerized Embroidery Machines (Flat, Chenille, Cap, and Multi-head)",
          "Circular Knitting Machines (Single Jersey, Double Jersey, Rib, Fleece, Jacquard)",
          "Flat Knitting Machines",
        ],
      },
      {
        name: "Jingwei Brand",
        items: [
          "Digital Printing & Cutting Machines",
          "High-Precision Digital Flatbed Cutters & Plotters for Garments, Textiles, and Packaging",
        ],
      },
    ],
  },
  {
    title: "Compressed Air Solutions",
    brands: [
      {
        name: "Lida Compressors (Lida Machine Equipment)",
        items: [
          "Industrial Screw Air Compressors",
          "Piston Air Compressors & Scroll Compressors",
          "Air Dryers, Storage Tanks, and Accessories",
        ],
      },
    ],
  },
  {
    title: "Power & Energy Solutions",
    brands: [
      {
        name: "Perkins Engines & Generators",
        items: ["Heavy-duty, high-performance diesel generator sets for industrial power back-up"],
      },
      {
        name: "TBG Brand Diesel Generators",
        items: ["Reliable, fuel-efficient industrial diesel power generation systems"],
      },
    ],
  },
];

const whyChooseUs = [
  {
    title: "Authorized Sales & Service Support",
    desc: "Complete installation, maintenance, troubleshooting, and genuine spare parts supply.",
  },
  {
    title: "Textile & Industrial Expertise",
    desc: "Technical setup tailored specifically for Bangladesh's garment, textile, and industrial sectors.",
  },
  {
    title: "Proven Track Record",
    desc: "Over 15 years of industry trust and customer satisfaction since 2008.",
  },
];

const CompanyProfile = () => (
  <>
    <PageBanner title="Company Profile" breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }, { label: "Company Profile" }]} />
    <SectionWrapper>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">About Us</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
          <p className="mt-6 text-muted-foreground">
            Under the leadership of Engineer Akkas Ahmed, we have been operating with dedication and integrity since 2008. With over a decade of industry expertise, we specialize in delivering top-tier technical services, solutions, and high-quality industrial machinery to textile factories and manufacturing plants across Bangladesh.
          </p>
        </div>
        <img src={aboutImg} alt="Company Corporate Office" loading="lazy" className="rounded-lg shadow-lg" width={1200} height={600} />
      </div>
    </SectionWrapper>

    <SectionWrapper alt>
      <SectionTitle title="Products & Brand Partnerships" subtitle="We proudly supply, install, and offer full sales and technical support for world-renowned brands and machinery" />
      <div className="grid gap-6 lg:grid-cols-3">
        {brandPartnerships.map((group, idx) => (
          <div key={group.title} className="rounded-lg border border-border bg-card p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">
              {idx + 1}. {group.title}
            </p>
            <div className="space-y-5">
              {group.brands.map((brand) => (
                <div key={brand.name}>
                  <h4 className="font-semibold">{brand.name}</h4>
                  <ul className="mt-2 space-y-1.5">
                    {brand.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <SectionTitle title="Why Choose Us" />
      <div className="grid gap-6 md:grid-cols-3">
        {whyChooseUs.map((reason) => (
          <div key={reason.title} className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 font-semibold">{reason.title}</h3>
            <p className="text-sm text-muted-foreground">{reason.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper alt>
      <SectionTitle title="Certifications" subtitle="Authorized dealership and manufacturer certificates" />
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.title} className="overflow-hidden rounded-lg border border-border bg-card">
            <img src={cert.src} alt={cert.title} loading="lazy" className="w-full object-contain" />
            <div className="p-5">
              <h3 className="font-semibold">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </>
);

export default CompanyProfile;
