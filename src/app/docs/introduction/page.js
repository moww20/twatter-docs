export const metadata = {
  title: "Introduction — Twatter.Army Docs",
  description: "The world's most advanced Nostr client. Modern social networking powered by censorship-resistant protocols.",
  alternates: { canonical: "/docs/introduction" },
}

export default function IntroductionPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Introduction</h1>
      <div className="docs-prose">
        <p><em>The world's most advanced Nostr client. Modern social networking powered by censorship-resistant protocols.</em></p>

        <h2>Overview</h2>
        <p>
          Twatter.Army is a cutting-edge social networking platform built on the Nostr protocol—a decentralized,
          censorship-resistant communication standard. Unlike traditional social media platforms that rely on
          centralized servers and corporate control, Twatter.Army empowers users with true ownership of their
          data, identity, and social graph.
        </p>
        <p>
          Built with modern web technologies including Next.js 14, TypeScript, and Tailwind CSS, Twatter.Army
          delivers a premium user experience while maintaining the core principles of decentralization,
          privacy, and user sovereignty that make Nostr revolutionary.
        </p>

        <blockquote>
          Social networking should belong to the people, not the platforms. Twatter.Army brings the future
          of decentralized social media to life with uncompromising performance and user experience.
        </blockquote>

        <h2>Core Features</h2>
        <p>Twatter.Army redefines social networking with these breakthrough capabilities:</p>
        <ul>
          <li><strong>Passwordless Authentication</strong>: Advanced WebAuthn passkeys for seamless, secure login using platform authenticators.</li>
          <li><strong>Unified Wallet Integration</strong>: Native NIP-07 support with seamless connections to Alby, nos2x, and Nostr Wallet ID.</li>
          <li><strong>Advanced Search</strong>: Real-time search with NIP-50 full-text support, smart ranking by engagement and recency.</li>
          <li><strong>Rich Media Support</strong>: Direct uploads to Vercel Blob with secure token gating and global CDN distribution.</li>
        </ul>

        <h2>Technical Excellence</h2>
        <h3>Modern Architecture</h3>
        <p>
          Twatter.Army leverages the latest in web technology to deliver unparalleled performance:
        </p>
        <ul>
          <li>Next.js 14 with App Router for optimal performance and SEO</li>
          <li>TypeScript for type safety and developer experience</li>
          <li>Tailwind CSS for responsive, accessible design</li>
          <li>TanStack Query for intelligent caching and state management</li>
          <li>Virtualized feeds for smooth scrolling with thousands of posts</li>
        </ul>

        <h3>Privacy & Security</h3>
        <p>
          Your data security is paramount. Twatter.Army implements enterprise-grade security measures:
        </p>
        <ul>
          <li>End-to-end encryption for private messages</li>
          <li>Server-side session verification with httpOnly cookies</li>
          <li>Encrypted private key storage with AES-256</li>
          <li>NIP-05 verification for trusted identities</li>
        </ul>

        <h3>Developer Experience</h3>
        <p>
          Built by developers, for developers. Twatter.Army features a modern development workflow:
        </p>
        <ul>
          <li>Strict TypeScript configuration for reliability</li>
          <li>Comprehensive API documentation and examples</li>
          <li>Modular architecture with clear separation of concerns</li>
          <li>Extensive test coverage and continuous integration</li>
        </ul>

        <h2>The Nostr Advantage</h2>
        <p>
          Nostr (Notes and Other Stuff Transmitted by Relays) represents a fundamental rethinking of social media:
        </p>
        <ul>
          <li><strong>Censorship Resistance</strong>: No single entity can control or censor content</li>
          <li><strong>Data Ownership</strong>: Users own their content, followers, and social graph</li>
          <li><strong>Interoperability</strong>: Works seamlessly across different Nostr clients</li>
          <li><strong>Global Network</strong>: Distributed relays ensure content availability worldwide</li>
        </ul>

        <h2>User Experience Innovation</h2>
        <p>
          Twatter.Army sets new standards for social media usability:
        </p>
        <ul>
          <li><strong>Smart Search</strong>: Advanced query language with hashtag, user, and content type filtering</li>
          <li><strong>Real-time Updates</strong>: Live streams and notifications without performance impact</li>
          <li><strong>Mobile-First Design</strong>: Pull-to-refresh, swipe gestures, and touch-optimized interactions</li>
          <li><strong>Accessibility</strong>: WCAG-compliant design with keyboard navigation and screen reader support</li>
        </ul>

        <h2>Why Twatter.Army?</h2>
        <ul>
          <li><strong>Performance</strong>: Lightning-fast loading and smooth interactions regardless of feed size</li>
          <li><strong>Privacy</strong>: Your data stays yours—encrypted, decentralized, and under your control</li>
          <li><strong>Innovation</strong>: Constantly evolving with cutting-edge features and user feedback</li>
          <li><strong>Community</strong>: Built by and for the decentralized web community</li>
        </ul>

        <h2>TL; DR</h2>
        <p>
          Twatter.Army is the social network for the decentralized future. Experience the freedom of
          censorship-resistant communication with the polish and performance of modern web applications.
          Join the revolution in social media ownership and control.
        </p>
      </div>

    </div>
  )
}


