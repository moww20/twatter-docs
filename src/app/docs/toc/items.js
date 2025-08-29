// Hierarchical structure used for sidebar, breadcrumbs, and next/prev
export const docsItems = [
  {
    label: "Getting Started",
    children: [
      { href: "/docs/introduction", label: "Introduction", description: "Overview of Twatter.Army and the Nostr protocol." },
      { href: "/docs/getting-started", label: "Quick Start", description: "Get up and running with Twatter.Army in minutes." },
      { href: "/docs/nostr-basics", label: "Nostr Basics", description: "Understanding the decentralized social protocol." },
    ],
  },
  {
    label: "Features",
    children: [
      { href: "/docs/authentication", label: "Authentication", description: "Passkeys, WebAuthn, and wallet integration." },
      { href: "/docs/search", label: "Search & Discovery", description: "Advanced search with NIP-50 and query language." },
    ],
  },
  {
    label: "Tutorials",
    children: [
      { href: "/docs/tutorials/setup", label: "Setup Tutorial", description: "Complete setup guide with wallet integration." },
      { href: "/docs/tutorials/posting", label: "Posting Tutorial", description: "Master content creation and media uploads." },
    ],
  },
  {
    label: "Project",
    children: [
      { href: "/docs/brand-guides", label: "Brand Guidelines", description: "Twatter.Army brand identity and usage guidelines." },
    ],
  },
  {
    label: "Legal & Privacy",
    children: [
      { href: "/docs/privacy-policy", label: "Privacy Policy", description: "How we handle your data and privacy." },
      { href: "/docs/licensing", label: "Licensing", description: "Open source licenses and code usage." },
    ],
  },
]

// Flattened list for next/prev ordering
export const flatDocs = docsItems.flatMap(section => section.children)


