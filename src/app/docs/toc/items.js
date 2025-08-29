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
      { href: "/docs/media", label: "Media & Uploads", description: "Rich media support and Vercel Blob integration." },
      { href: "/docs/notifications", label: "Notifications", description: "Real-time notifications and engagement tracking." },
      { href: "/docs/privacy", label: "Privacy & Security", description: "End-to-end encryption and data protection." },
    ],
  },
  {
    label: "User Guide",
    children: [
      { href: "/docs/profiles", label: "Profiles & Identity", description: "Managing your Nostr identity and NIP-05 verification." },
      { href: "/docs/posting", label: "Posting & Content", description: "Creating and managing posts, articles, and media." },
      { href: "/docs/following", label: "Following & Feeds", description: "Building your network and managing feeds." },
      { href: "/docs/messaging", label: "Direct Messages", description: "Private messaging and encrypted communication." },
    ],
  },
  {
    label: "Developer",
    children: [
      { href: "/docs/api", label: "API Reference", description: "REST API endpoints and integration guides." },
      { href: "/docs/nips", label: "NIP Support", description: "Supported Nostr Improvement Proposals." },
      { href: "/docs/self-hosting", label: "Self-Hosting", description: "Deploying your own Twatter.Army instance." },
      { href: "/docs/contributing", label: "Contributing", description: "How to contribute to Twatter.Army development." },
    ],
  },
  {
    label: "Tutorials",
    children: [
      { href: "/docs/tutorials/setup", label: "Setup Tutorial", description: "Complete setup guide with wallet integration." },
      { href: "/docs/tutorials/posting", label: "Posting Tutorial", description: "Master content creation and media uploads." },
      { href: "/docs/tutorials/search", label: "Search Tutorial", description: "Advanced search techniques and filtering." },
      { href: "/docs/tutorials/community", label: "Building Community", description: "Growing and managing your social network." },
    ],
  },
  {
    label: "Legal & Privacy",
    children: [
      { href: "/docs/privacy-policy", label: "Privacy Policy", description: "How we handle your data and privacy." },
      { href: "/docs/terms", label: "Terms of Service", description: "User agreement and platform rules." },
      { href: "/docs/licensing", label: "Licensing", description: "Open source licenses and code usage." },
    ],
  },
]

// Flattened list for next/prev ordering
export const flatDocs = docsItems.flatMap(section => section.children)


