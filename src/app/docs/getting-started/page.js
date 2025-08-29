export const metadata = {
  title: "Quick Start — Twatter.Army Docs",
  description: "Get up and running with Twatter.Army in minutes. Complete setup guide for new users.",
  alternates: { canonical: "/docs/getting-started" },
}

export default function GettingStartedPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Quick Start Guide</h1>
      <div className="docs-prose">
        <p><em>Welcome to Twatter.Army! This guide will get you up and running in just a few minutes.</em></p>

        <h2>Prerequisites</h2>
        <p>Before you begin, make sure you have:</p>
        <ul>
          <li>A modern web browser (Chrome, Firefox, Safari, or Edge)</li>
          <li>A NIP-07 compatible wallet (optional but recommended)</li>
          <li>An internet connection</li>
        </ul>

        <h2>Step 1: Access Twatter.Army</h2>
        <p>Navigate to <a href="https://twatter.army" className="text-accent-gradient hover:underline">twatter.army</a> in your web browser.</p>
        <p>The application will load instantly with our optimized Next.js build and global CDN.</p>

        <h2>Step 2: Choose Your Authentication Method</h2>
        <p>Twatter.Army offers multiple authentication options:</p>

        <h3>Option A: Passkeys (Recommended)</h3>
        <ol>
          <li>Click "Sign Up" or "Login with Passkeys"</li>
          <li>Choose a username for your Nostr identity</li>
          <li>Use your device's biometric authentication (TouchID, FaceID, Windows Hello)</li>
          <li>Your account is created instantly with a cryptographically secure key pair</li>
        </ol>

        <h3>Option B: External Wallet</h3>
        <ol>
          <li>Install a NIP-07 compatible browser extension (Alby, nos2x, or Nostr Wallet ID)</li>
          <li>Click "Connect Wallet" on Twatter.Army</li>
          <li>Approve the connection in your wallet</li>
          <li>You can now post, follow, and interact using your existing Nostr identity</li>
        </ol>

        <h2>Step 3: Complete Your Profile</h2>
        <p>Make your profile discoverable and trustworthy:</p>
        <ul>
          <li><strong>Add a profile picture</strong>: Click your avatar → "Edit Profile"</li>
          <li><strong>Set a display name</strong>: Choose something memorable and authentic</li>
          <li><strong>Write a bio</strong>: Tell others about yourself in 160 characters</li>
          <li><strong>Link your website</strong>: Add your personal site or portfolio</li>
        </ul>

        <h2>Step 4: Find and Follow Users</h2>
        <p>Build your network on Nostr:</p>

        <h3>Search for People</h3>
        <ol>
          <li>Use the search bar at the top: Try searching for topics, hashtags, or usernames</li>
          <li>Look for users with NIP-05 verification badges (✓) for trusted identities</li>
          <li>Check user bios and posting history to find like-minded people</li>
        </ol>

        <h3>Explore Content</h3>
        <ul>
          <li>Browse the "Following" feed to see posts from people you follow</li>
          <li>Check trending hashtags in the sidebar</li>
          <li>Look for interesting articles and long-form content</li>
        </ul>

        <h2>Step 5: Create Your First Post</h2>
        <p>Share your thoughts with the world:</p>

        <h3>Simple Text Post</h3>
        <ol>
          <li>Click the composer at the top of your feed</li>
          <li>Type your message (up to 65,535 characters)</li>
          <li>Add hashtags to increase discoverability: #nostr #decentralized</li>
          <li>Click "Post" to publish instantly</li>
        </ol>

        <h3>Post with Media</h3>
        <ol>
          <li>Click the image icon in the composer</li>
          <li>Select photos, videos, or other files from your device</li>
          <li>Add a caption and hashtags</li>
          <li>Your media uploads securely to our CDN and publishes immediately</li>
        </ol>

        <h2>Step 6: Engage with the Community</h2>
        <p>Build relationships and join conversations:</p>
        <ul>
          <li><strong>Like posts</strong>: Click the heart icon to show appreciation</li>
          <li><strong>Repost content</strong>: Share interesting posts with your followers</li>
          <li><strong>Reply to posts</strong>: Join discussions and start conversations</li>
          <li><strong>Follow back</strong>: When someone follows you, consider following them too</li>
        </ul>

        <h2>Advanced Features</h2>
        <p>Once you're comfortable with the basics, explore:</p>

        <h3>Search Operators</h3>
        <p>Use our advanced search syntax:</p>
        <ul>
          <li><code>#hashtag</code> - Find posts with specific hashtags</li>
          <li><code>@username</code> - Search for users or mentions</li>
          <li><code>kind:1</code> - Filter by content type (posts, articles, etc.)</li>
          <li><code>has:media</code> - Find posts with images or videos</li>
          <li><code>is:reply</code> - Show only replies to other posts</li>
        </ul>

        <h3>World Chat</h3>
        <p>Join global conversations:</p>
        <ul>
          <li>Click the globe icon in the navigation</li>
          <li>Participate in real-time discussions</li>
          <li>Connect with users worldwide instantly</li>
        </ul>

        <h2>Troubleshooting</h2>
        <p>Common issues and solutions:</p>

        <h3>Can't connect wallet?</h3>
        <ul>
          <li>Ensure your wallet extension is installed and enabled</li>
          <li>Try refreshing the page and reconnecting</li>
          <li>Check that your wallet supports NIP-07</li>
        </ul>

        <h3>Posts not loading?</h3>
        <ul>
          <li>Check your internet connection</li>
          <li>Try refreshing the page</li>
          <li>Clear your browser cache if issues persist</li>
        </ul>

        <h3>Media uploads failing?</h3>
        <ul>
          <li>Check file size limits (up to 10MB per file)</li>
          <li>Ensure supported formats (images, videos, documents)</li>
          <li>Try a different file if upload continues to fail</li>
        </ul>

        <h2>Next Steps</h2>
        <p>Now that you're set up, explore:</p>
        <ul>
          <li><a href="/docs/nostr-basics" className="text-accent-gradient hover:underline">Learn about Nostr basics</a></li>
          <li><a href="/docs/profiles" className="text-accent-gradient hover:underline">Customize your profile</a></li>
          <li><a href="/docs/search" className="text-accent-gradient hover:underline">Master advanced search</a></li>
          <li><a href="/docs/tutorials/posting" className="text-accent-gradient hover:underline">Create engaging content</a></li>
        </ul>

        <blockquote>
          Welcome to the decentralized social network! You're now part of a global community
          building the future of social media—free from censorship, owned by users, and built for the long term.
        </blockquote>
      </div>
    </div>
  )
}
