export const metadata = {
  title: "Privacy Policy — Twatter.Army Docs",
  description: "How Twatter.Army handles your data and privacy in the decentralized social network.",
  alternates: { canonical: "/docs/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Privacy Policy</h1>
      <div className="docs-prose">
        <h2>Overview</h2>
        <p>
          Twatter.Army is committed to protecting your privacy in the decentralized social network.
          As a Nostr client, we prioritize user sovereignty and data ownership. This policy explains
          how we handle information when you use Twatter.Army and our commitment to your privacy.
        </p>

        <h3>Our Privacy Philosophy</h3>
        <p>
          Unlike traditional social media platforms, Twatter.Army operates on the principle that
          <strong>your data belongs to you</strong>. We don't own your content, followers, or social graph.
          Our role is to provide the best possible interface to the decentralized Nostr network.
        </p>

        <h2>What We Collect</h2>

        <h3>Technical Data (Minimal)</h3>
        <ul>
          <li><strong>IP addresses:</strong> Temporarily logged for security and abuse prevention</li>
          <li><strong>Device information:</strong> Browser type and version for compatibility</li>
          <li><strong>Usage patterns:</strong> Anonymous, aggregated metrics to improve performance</li>
          <li><strong>Error logs:</strong> Technical errors to maintain service reliability</li>
        </ul>

        <h3>User-Generated Content</h3>
        <p>
          <strong>We do not store your posts, profile data, or media on our servers.</strong>
          All content is:
        </p>
        <ul>
          <li>Stored on Nostr relays of your choice</li>
          <li>Encrypted when you choose private messaging</li>
          <li>Signed with your cryptographic keys</li>
          <li>Under your complete control and ownership</li>
        </ul>

        <h3>Authentication Data</h3>
        <ul>
          <li><strong>Passkeys:</strong> Stored securely in your device's trusted platform module</li>
          <li><strong>Wallet connections:</strong> Temporary session data only</li>
          <li><strong>Session tokens:</strong> HttpOnly, secure cookies with short expiration</li>
        </ul>

        <h2>How We Use Information</h2>

        <h3>Service Operation</h3>
        <ul>
          <li>Maintain and improve the Twatter.Army web application</li>
          <li>Provide technical support and troubleshooting</li>
          <li>Ensure platform security and prevent abuse</li>
          <li>Optimize performance based on anonymous usage patterns</li>
        </ul>

        <h3>Improvement & Development</h3>
        <ul>
          <li>Understand which features are most used (in aggregate)</li>
          <li>Identify and fix technical issues</li>
          <li>Guide development priorities based on user needs</li>
          <li>Improve user experience and accessibility</li>
        </ul>

        <h2>Data Storage & Security</h2>

        <h3>Local Storage</h3>
        <ul>
          <li><strong>UI preferences:</strong> Theme, language, layout settings</li>
          <li><strong>Draft posts:</strong> Unsent content (auto-saved locally)</li>
          <li><strong>Search history:</strong> Your recent searches (optional)</li>
          <li><strong>Cache data:</strong> Temporary content for performance</li>
        </ul>

        <h3>Server-Side Storage</h3>
        <p>We minimize server-side data storage to protect your privacy:</p>
        <ul>
          <li><strong>Authentication sessions:</strong> Temporary, encrypted tokens</li>
          <li><strong>Security logs:</strong> Minimal logging for abuse prevention</li>
          <li><strong>Performance metrics:</strong> Anonymous, aggregated data only</li>
          <li><strong>Media uploads:</strong> Temporary storage before relay distribution</li>
        </ul>

        <h3>Third-Party Services</h3>
        <ul>
          <li><strong>Vercel Blob:</strong> For secure media uploads and CDN distribution</li>
          <li><strong>Upstash Redis:</strong> For session management and caching</li>
          <li><strong>Nostr relays:</strong> Distributed storage chosen by users</li>
          <li><strong>Analytics:</strong> Privacy-focused, aggregated metrics only</li>
        </ul>

        <h2>Your Privacy Rights</h2>

        <h3>Data Control</h3>
        <ul>
          <li><strong>Data ownership:</strong> Your content and social graph belong to you</li>
          <li><strong>Data portability:</strong> Export your data anytime via any Nostr client</li>
          <li><strong>Right to delete:</strong> Delete your posts and profile data from relays</li>
          <li><strong>Multi-client access:</strong> Use any Nostr client with your identity</li>
        </ul>

        <h3>Privacy Choices</h3>
        <ul>
          <li><strong>Anonymous browsing:</strong> Use incognito mode for enhanced privacy</li>
          <li><strong>Content visibility:</strong> Control who can see your posts</li>
          <li><strong>Profile privacy:</strong> Choose what information to share</li>
          <li><strong>Search privacy:</strong> Disable search history if preferred</li>
        </ul>

        <h3>Communication Privacy</h3>
        <ul>
          <li><strong>End-to-end encryption:</strong> For private direct messages</li>
          <li><strong>Public posts:</strong> Visible to anyone on the Nostr network</li>
          <li><strong>Relay choice:</strong> Select trusted relays for your content</li>
          <li><strong>Content warnings:</strong> Mark sensitive content appropriately</li>
        </ul>

        <h2>Cookies & Tracking</h2>

        <h3>Essential Cookies</h3>
        <ul>
          <li><strong>Session management:</strong> Secure, HttpOnly cookies for authentication</li>
          <li><strong>Security tokens:</strong> Prevent cross-site request forgery</li>
          <li><strong>CSRF protection:</strong> SameSite cookies for enhanced security</li>
        </ul>

        <h3>No Tracking</h3>
        <p>We do not use:</p>
        <ul>
          <li>Advertising cookies or trackers</li>
          <li>Third-party analytics for user identification</li>
          <li>Behavioral tracking or profiling</li>
          <li>Data sharing with advertisers</li>
        </ul>

        <h2>Data Retention</h2>
        <ul>
          <li><strong>Authentication data:</strong> Deleted when you log out or session expires</li>
          <li><strong>Technical logs:</strong> Retained for 30 days for security analysis</li>
          <li><strong>Performance data:</strong> Aggregated and anonymized after 24 hours</li>
          <li><strong>User content:</strong> Stored on Nostr relays according to their policies</li>
        </ul>

        <h2>International Data Transfers</h2>
        <p>
          Twatter.Army uses globally distributed infrastructure. When you use our service,
          your data may be processed in different countries. We ensure all transfers comply
          with applicable privacy laws and maintain the same level of protection.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Twatter.Army is not intended for children under 13. We do not knowingly collect
          personal information from children. If we become aware of such collection, we will
          delete the information promptly.
        </p>

        <h2>Policy Updates</h2>
        <p>
          We may update this privacy policy as Twatter.Army evolves and privacy regulations change.
          Material changes will be communicated through:
        </p>
        <ul>
          <li>In-app notifications for active users</li>
          <li>Updates posted on this documentation page</li>
          <li>Announcements in our Nostr feed</li>
          <li>Email notifications (if you've provided an email)</li>
        </ul>

        <h2>Contact Us</h2>
        <p>Questions about your privacy or this policy?</p>
        <ul>
          <li><strong>Nostr:</strong> Direct message us on Nostr for fastest response</li>
          <li><strong>Discord:</strong> <a href="https://discord.gg/twatter" className="text-accent-gradient hover:underline">Join our community</a></li>
          <li><strong>Email:</strong> privacy@twatter.army</li>
          <li><strong>GitHub:</strong> Report privacy issues in our repository</li>
        </ul>

        <blockquote>
          Your privacy is not just a policy—it's the foundation of everything we build.
          Twatter.Army exists to give you control over your digital social experience.
        </blockquote>

        <p><em>Last updated: December 2024</em></p>
      </div>
    </div>
  )
}