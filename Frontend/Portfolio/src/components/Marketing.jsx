import MarketingCard from "./MarketingCard";

const campaigns = [
  {
    title: "SEO Growth for SaaS",
    description:
      "Increased organic traffic by 300% in 6 months for a SaaS startup.",
    type: "SEO",
    stats: "+300% Traffic",
  },
  {
    title: "E-commerce Ads",
    description:
      "Managed $50k/month ad spend with 5x ROAS for an online retailer.",
    type: "Ads",
    stats: "5x ROAS",
  },
  {
    title: "Social Media Launch",
    description:
      "Grew Instagram from 0 to 10k followers in 4 months for a new brand.",
    type: "Social Media",
    stats: "+10k Followers",
  },
  {
    title: "Analytics Revamp",
    description:
      "Implemented GA4 and custom dashboards for actionable insights.",
    type: "Analytics",
    stats: "GA4 Setup",
  },
  {
    title: "Content Marketing",
    description: "Developed a content strategy that doubled blog engagement.",
    type: "Content",
    stats: "2x Engagement",
  },
  {
    title: "Lead Gen Campaign",
    description: "Generated 2,000+ qualified leads in 3 months for B2B client.",
    type: "Lead Gen",
    stats: "+2,000 Leads",
  },
];

export default function Marketing() {
  return (
    <section id="marketing" className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">
        Marketing Campaigns
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((c, i) => (
          <MarketingCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
