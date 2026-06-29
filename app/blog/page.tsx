import Link from "next/link";

export const blogPosts = [
  {
    slug: "the-local-lead-machine-how-to-build-a-profitable-lead-gen-business-for-electricians-and-trades",
    title: "The Local Lead Machine: How to Build a Profitable Lead Gen Business for Electricians & Trades",
    excerpt: "Local tradespeople are excellent at their craft, but terrible at digital marketing. Here is how you can build local web engines, run high-converting ads, and sell high-intent leads for recurring revenue.",
    content: `
      <h2>The Inbound Lead Generation Blueprint for Electricians & Trades</h2>
      <p>Local service providers (plumbers, electricians, landscapers, roofers) are phenomenal at what they do, but most struggle with digital customer acquisition. They rely almost exclusively on word-of-mouth or pay hefty fees to platforms like HomeAdvisor or Yelp that sell the exact same lead to five other competitors.</p>
      
      <p>This creates a massive business opportunity: building custom 'local lead machines' — high-converting web engines focused on a single city and trade, driving targeted search traffic, and funneling exclusive leads directly to a trusted local partner for a recurring monthly fee.</p>

      <h3>Step 1: The Fast-Loading Brutalist landing page</h3>
      <p>The core of a local lead machine is speed and clarity. A customer looking for an emergency plumber or electrician on their phone wants a phone number, a list of services, reviews, and a simple contact form. They do not want large slides or complex widgets. We build Next.js landing pages that load in under 500ms, immediately rendering the contact details and a direct click-to-call button. This outperforms average competitors by over 40% in conversion rate.</p>

      <h3>Step 2: SEO Schema & Structured Local Markup</h3>
      <p>Google prioritizes local context. By embedding rich LocalBusiness schema data, geo-coordinates, port terminal tags, and structured service lists directly into the header metadata, we help search engines map our local lead page to high-intent queries (e.g. 'commercial electrician in Seattle'). Combined with Google Maps API integrations, the page gains local search ranking dominance within weeks.</p>

      <h3>Step 3: Driving Traffic and Selling the Leads</h3>
      <p>Once the page is ranking and converting, you partner with a high-quality local tradesperson. Instead of charging them per lead, you white-label the site, route all calls and emails directly to their phone, and charge a flat monthly licensing fee. They get exclusive leads (no competing with other businesses), and you get stable recurring revenue. It is a win-win partnership powered by clean web engineering.</p>
    `,
    author: "BeyondWebCo Team",
    date: "May 27, 2026",
    color: "hsl(var(--orange))",
    icon: "🔌",
  },
  {
    slug: "why-fast-scaling-agencies-are-ditching-hubspot-for-custom-built-crms",
    title: "Why Fast-Scaling Agencies are Ditching HubSpot for Custom-Built CRMs",
    excerpt: "Off-the-shelf CRMs like HubSpot and Salesforce are great for beginners, but terrible for specialized operations. Here is why elite agencies are building custom internal software.",
    content: `
      <h2>The Shift to Custom-Built CRM Software</h2>
      <p>When starting out, standard off-the-shelf Customer Relationship Management (CRM) tools like HubSpot, Salesforce, or Zoho are ideal. They provide contact forms, simple pipelines, and basic tracking out-of-the-box. However, as an agency scales, custom operational workflows emerge. HubSpot's rigid data objects, seat-based pricing licensing fees, and complex configurations become bottlenecks.</p>
      
      <p>Here is why fast-growing agencies are building custom internal portals and CRM tools using Next.js, Node.js, and PostgreSQL.</p>

      <h3>1. Ridiculous Seat-Based Pricing</h3>
      <p>As you add project managers, account coordinators, and sales consultants, your CRM billing increases exponentially. By building a custom Next.js database dashboard, you own the platform. You can add unlimited users, client viewing portals, and contractor seats without paying a single dollar in licensing fees. The software becomes an enterprise asset on your balance sheet rather than a recurring operational cost.</p>

      <h3>2. Specialized Workflows and Automation</h3>
      <p>Every agency has a unique pipeline. A logistics or marketing agency has custom onboarding parameters, fee payouts, and driver logs. Integrating this into a standard CRM requires complex plugins or custom APIs. A bespoke CRM fits your workflow exactly: automated contractor payouts, client portal document signing, and direct Slack/Discord alert integrations are built directly into the codebase.</p>

      <h3>3. Owning Your Customer Data</h3>
      <p>With privacy regulations tightening, storing customer logs on third-party clouds carries risk. A custom solution deployed on your cloud (AWS or GCP) gives you absolute control over data residency, backups, and security compliance. Using lightweight components like shadcn/ui and PostgreSQL, you build an interface that feels exactly like a custom tool, loaded in milliseconds.</p>
    `,
    author: "BeyondWebCo Team",
    date: "May 26, 2026",
    color: "hsl(var(--teal))",
    icon: "📈",
  },
  {
    slug: "why-your-business-needs-more-than-just-a-social-media-page-in-2026",
    title: "Why Your Business Needs More Than Just a Social Media Page in 2026",
    excerpt: "In today's hyper-connected digital landscape, it's tempting for new founders and brick-and-mortar owners to rely entirely on social media platforms.",
    content: `
      <h2>The Risks of Renting Your Digital Real Estate</h2>
      <p>It is tempting for new startup founders, retail brands, and local services to skip the web design phase and launch entirely on Facebook, Instagram, or TikTok. It is free, instant, and comes with a built-in audience. However, relying solely on third-party networks to capture clients is a high-risk gamble. Here is why renting your digital real estate is a critical mistake in 2026.</p>

      <h3>1. Algorithm Volatility and Organic Reach Collapse</h3>
      <p>Social networks are ad networks. They monetize by choking organic reach and forcing businesses to pay for ads to reach their own followers. If a platform decides to change its feed algorithm, your business traffic can plummet by 80% overnight. A dedicated website with clean SEO optimization guarantees direct access to search engines, providing stable organic traffic that you own.</p>

      <h3>2. Branding Restrictions and Low Conversion Rates</h3>
      <p>On social platforms, you look like everyone else. Your color palette is constrained, your fonts are defaults, and your layout is standardized. There is zero room for custom calculators, checkout configurations, or brutalist visual elements. A custom-built web application lets you control the user experience from start to finish, driving conversion rates to peak efficiency.</p>

      <h3>3. Building an Asset vs. Renting Space</h3>
      <p>Your website is a digital asset. It has search ranking authority, backlinks, and custom database integrations that add value to your business evaluation. A social media profile cannot be easily sold or transferred as a standalone asset. Invest in clean HTML/CSS, robust Next.js layouts, and conversion-focused designs that you control completely.</p>
    `,
    author: "BeyondWebCo Team",
    date: "May 23, 2026",
    color: "hsl(var(--coral))",
    icon: "🌐",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-pad" style={{ background: "hsl(var(--cream))", paddingTop: "5rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "hsl(var(--orange))" }}>
            LATEST INSIGHTS & ARTICLES
          </span>
          <h1
            style={{
              marginTop: "0.5rem",
              marginBottom: "1rem",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              color: "hsl(var(--navy))",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
            }}
          >
            The BeyondWebCo <span style={{ color: "hsl(var(--orange))" }}>Journal</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
              color: "hsl(var(--navy))",
              fontWeight: 500,
              lineHeight: 1.6,
              maxWidth: "600px",
            }}
          >
            Daily thoughts, engineering strategies, and product design lessons from senior builders.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-pad" style={{ background: "hsl(var(--paper))", borderTop: "2px solid hsl(var(--navy))" }}>
        <div className="container">
          <div className="blog-premium-grid">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "flex" }}
              >
                <article className="blog-premium-card">
                  {/* Card Media representation (Brutalist Initials / Icon Header) */}
                  <div
                    className="blog-card-media"
                    style={{
                      background: "hsl(var(--cream))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="blog-badge-featured">Featured</span>
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        border: "3.5px solid hsl(var(--navy))",
                        background: post.color,
                        display: "grid",
                        placeItems: "center",
                        fontSize: "2.5rem",
                        boxShadow: "3px 3px 0 0 hsl(var(--navy))",
                      }}
                    >
                      {post.icon}
                    </div>
                  </div>

                  <div className="blog-card-body">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-author">{post.author}</span>
                      <span className="blog-card-date">{post.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
