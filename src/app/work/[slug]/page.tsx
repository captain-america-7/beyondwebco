import { Metadata } from "next";
import CaseStudyClient, { caseStudiesData } from "@/components/pages/CaseStudyClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudiesData[slug] || caseStudiesData["volta"];

  return {
    title: `${project.title} Case Study | BeyondWebCo`,
    description: project.overview,
    alternates: {
      canonical: `https://www.beyondwebco.com/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  return <CaseStudyClient slug={slug} />;
}
