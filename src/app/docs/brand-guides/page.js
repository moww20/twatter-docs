export const metadata = {
  title: "Brand Guidelines — Twatter.Army Docs",
  description: "Twatter.Army brand guidelines, logo usage, visual identity, and downloadable assets.",
  alternates: { canonical: "/docs/brand-guides" },
}

export default function BrandPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Brand</h1>
      <div className="docs-prose">
        <p><em>Twatter.Army is the world's most advanced Nostr client. Our brand represents the future of decentralized social networking—free, open, and owned by users.</em></p>

        <h2>Brand Mission</h2>
        <p>
          Twatter.Army empowers individuals to own their social experience in a censorship-resistant,
          decentralized network. Our brand embodies the principles of freedom, innovation, and user sovereignty
          that define the Nostr ecosystem.
        </p>

        <blockquote>
          Social networking should belong to the people, not the platforms. Twatter.Army brings this vision to life.
        </blockquote>

        <h2>Logo & Visual Identity</h2>

        <h3>Primary Logo</h3>
        <p>The Twatter.Army logo represents our commitment to user empowerment and decentralized technology:</p>
        <ul>
          <li><strong>Typography:</strong> Clean, modern sans-serif font conveying trust and innovation</li>
          <li><strong>Color:</strong> Gradient text effect symbolizing the dynamic nature of decentralized networks</li>
          <li><strong>Symbolism:</strong> "Twatter" evokes familiar social networking while "Army" suggests collective power</li>
        </ul>

        <h3>Logo Usage Guidelines</h3>
        <ul>
          <li><strong>Minimum size:</strong> 32px width for digital applications</li>
          <li><strong>Clearspace:</strong> Maintain space equal to logo height around the mark</li>
          <li><strong>Color variations:</strong> Use full-color version on dark backgrounds</li>
          <li><strong>Do not:</strong> Alter colors, proportions, or add effects without approval</li>
        </ul>

        <h3>Secondary Elements</h3>
        <ul>
          <li><strong>Icon:</strong> Pixel art-inspired icon representing digital ownership</li>
          <li><strong>Wordmark only:</strong> For limited space or text-heavy contexts</li>
          <li><strong>Monochrome:</strong> Single-color version for special applications</li>
        </ul>

        <h2>Color Palette</h2>

        <h3>Primary Colors</h3>
        <div className="grid md:grid-cols-3 gap-4 my-4">
          <div className="border rounded-lg p-4 text-center">
            <div className="w-full h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-2"></div>
            <h4 className="font-semibold">Accent Gradient</h4>
            <p className="text-sm text-muted-foreground">#3B82F6 → #8B5CF6</p>
            <p className="text-xs">Primary brand gradient</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="w-full h-16 bg-slate-900 rounded mb-2"></div>
            <h4 className="font-semibold">Dark Background</h4>
            <p className="text-sm text-muted-foreground">#0F0F10</p>
            <p className="text-xs">Primary UI background</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="w-full h-16 bg-slate-100 rounded mb-2"></div>
            <h4 className="font-semibold">Light Background</h4>
            <p className="text-sm text-muted-foreground">#F8FAFC</p>
            <p className="text-xs">Light mode background</p>
          </div>
        </div>

        <h3>Supporting Colors</h3>
        <div className="grid md:grid-cols-4 gap-4 my-4">
          <div className="border rounded-lg p-3 text-center">
            <div className="w-full h-12 bg-slate-600 rounded mb-1"></div>
            <p className="text-xs font-semibold">Text Primary</p>
            <p className="text-xs text-muted-foreground">#E6E6E6</p>
          </div>
          <div className="border rounded-lg p-3 text-center">
            <div className="w-full h-12 bg-slate-500 rounded mb-1"></div>
            <p className="text-xs font-semibold">Text Secondary</p>
            <p className="text-xs text-muted-foreground">#94A3B8</p>
          </div>
          <div className="border rounded-lg p-3 text-center">
            <div className="w-full h-12 bg-green-500 rounded mb-1"></div>
            <p className="text-xs font-semibold">Success</p>
            <p className="text-xs text-muted-foreground">#22C55E</p>
          </div>
          <div className="border rounded-lg p-3 text-center">
            <div className="w-full h-12 bg-red-500 rounded mb-1"></div>
            <p className="text-xs font-semibold">Error</p>
            <p className="text-xs text-muted-foreground">#EF4444</p>
          </div>
        </div>

        <h3>Accessibility</h3>
        <p>Our color palette meets WCAG 2.1 AA standards for contrast and accessibility.</p>

        <h2>Typography</h2>

        <h3>Primary Typeface</h3>
        <p>
          We use a modern, highly legible font stack optimized for digital interfaces:
        </p>
        <ul>
          <li><strong>Primary:</strong> System font stack (Inter, -apple-system, sans-serif)</li>
          <li><strong>Monospace:</strong> For code and technical content (SF Mono, Consolas)</li>
          <li><strong>Weights:</strong> Regular (400), Medium (500), Semibold (600), Bold (700)</li>
        </ul>

        <h3>Typography Hierarchy</h3>
        <div className="space-y-2 my-4">
          <div>
            <h1 className="text-3xl font-bold">Heading 1 - Page Titles</h1>
            <p className="text-sm text-muted-foreground">2rem (32px), Bold (700)</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Heading 2 - Section Titles</h2>
            <p className="text-sm text-muted-foreground">1.5rem (24px), Semibold (600)</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Heading 3 - Subsections</h3>
            <p className="text-sm text-muted-foreground">1.25rem (20px), Medium (500)</p>
          </div>
          <div>
            <p className="text-base">Body Text - Primary content</p>
            <p className="text-sm text-muted-foreground">1rem (16px), Regular (400)</p>
          </div>
        </div>

        <h2>Brand Voice & Tone</h2>

        <h3>Personality Traits</h3>
        <ul>
          <li><strong>Empowering:</strong> We give users control over their digital lives</li>
          <li><strong>Innovative:</strong> We push the boundaries of social technology</li>
          <li><strong>Authentic:</strong> We speak directly and honestly about decentralization</li>
          <li><strong>Community-focused:</strong> We build with and for our users</li>
          <li><strong>Forward-thinking:</strong> We anticipate the future of social networking</li>
        </ul>

        <h3>Writing Guidelines</h3>
        <ul>
          <li><strong>Use active voice:</strong> "You control your data" vs "Your data is controlled"</li>
          <li><strong>Be inclusive:</strong> Use gender-neutral language and accessible terminology</li>
          <li><strong>Explain concepts:</strong> Break down complex ideas about decentralization</li>
          <li><strong>Show, don't tell:</strong> Demonstrate value through examples and use cases</li>
          <li><strong>Maintain optimism:</strong> Focus on the positive potential of decentralized technology</li>
        </ul>

        <h2>Visual Guidelines</h2>

        <h3>Photography & Imagery</h3>
        <ul>
          <li><strong>Diverse representation:</strong> Show people from all backgrounds using Nostr</li>
          <li><strong>Authentic moments:</strong> Real users in genuine social networking scenarios</li>
          <li><strong>Technology integration:</strong> Subtle nods to cryptography and decentralization</li>
          <li><strong>Clean aesthetics:</strong> Modern, professional photography with good lighting</li>
        </ul>

        <h3>Iconography</h3>
        <ul>
          <li><strong>Consistent style:</strong> Outline icons with 2px stroke weight</li>
          <li><strong>Meaningful symbols:</strong> Use universally understood iconography</li>
          <li><strong>Scalable:</strong> Icons work at 16px to 48px sizes</li>
          <li><strong>Accessibility:</strong> All icons include proper labels and descriptions</li>
        </ul>

        <h3>Layout & Spacing</h3>
        <ul>
          <li><strong>Grid system:</strong> 8px base unit for consistent spacing</li>
          <li><strong>Container widths:</strong> Max 1200px on desktop, full width on mobile</li>
          <li><strong>White space:</strong> Generous spacing for breathing room</li>
          <li><strong>Mobile-first:</strong> Design for mobile, enhance for desktop</li>
        </ul>

        <h2>Brand Applications</h2>

        <h3>Digital Platforms</h3>
        <ul>
          <li><strong>Web application:</strong> Primary brand experience at twatter.army</li>
          <li><strong>Mobile web:</strong> Responsive design for all devices</li>
          <li><strong>Documentation:</strong> Clean, technical writing for developers</li>
          <li><strong>Social media:</strong> Consistent voice across Nostr and other platforms</li>
        </ul>

        <h3>Marketing Materials</h3>
        <ul>
          <li><strong>Presentations:</strong> Use brand colors and typography in slides</li>
          <li><strong>Blog posts:</strong> Consistent formatting and voice</li>
          <li><strong>Social graphics:</strong> Templates with proper logo placement</li>
          <li><strong>Video content:</strong> Brand-consistent thumbnails and overlays</li>
        </ul>

        <h3>Community Guidelines</h3>
        <ul>
          <li><strong>Open source projects:</strong> Use Twatter.Army branding in related projects</li>
          <li><strong>Community content:</strong> Encourage brand-consistent community creations</li>
          <li><strong>Third-party tools:</strong> Guidelines for integrating with Twatter.Army</li>
        </ul>

        <h2>Brand Assets & Downloads</h2>

        <h3>Logo Files</h3>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Primary Logo</h4>
            <ul className="text-sm space-y-1">
              <li><a href="/pixelmonsters.png" download className="text-accent-gradient hover:underline">Logo (PNG)</a></li>
              <li><a href="/pixelmonsters.svg" download className="text-accent-gradient hover:underline">Logo (SVG)</a></li>
              <li>High-resolution versions available</li>
              <li>Transparent background variants</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Brand Guidelines</h4>
            <ul className="text-sm space-y-1">
              <li>Complete brand book (PDF)</li>
              <li>Color palette (ASE, GPL)</li>
              <li>Typography specifications</li>
              <li>Usage examples and templates</li>
            </ul>
          </div>
        </div>

        <h3>Design Resources</h3>
        <ul>
          <li><strong>Figma templates:</strong> UI components and page layouts</li>
          <li><strong>Sketch library:</strong> Symbols and styles for design consistency</li>
          <li><strong>Icon set:</strong> Complete icon library for product development</li>
          <li><strong>Photo library:</strong> Stock photos aligned with brand aesthetic</li>
        </ul>

        <h2>Brand Protection</h2>

        <h3>Usage Permissions</h3>
        <ul>
          <li><strong>Personal use:</strong> Free to use Twatter.Army branding for personal projects</li>
          <li><strong>Commercial use:</strong> Contact us for commercial usage permissions</li>
          <li><strong>Modifications:</strong> Do not alter logos or brand elements without approval</li>
          <li><strong>Attribution:</strong> Please credit Twatter.Army when using our brand assets</li>
        </ul>

        <h3>Prohibited Uses</h3>
        <ul>
          <li>Using Twatter.Army branding to mislead or deceive users</li>
          <li>Creating competing products that imitate our brand</li>
          <li>Using brand assets in illegal or harmful contexts</li>
          <li>Modifying logos to create derivative marks</li>
        </ul>

        <h2>Contact & Support</h2>
        <p>Need help with brand usage or have questions about our guidelines?</p>
        <ul>
          <li><strong>Email:</strong> brand@twatter.army</li>
          <li><strong>Discord:</strong> <a href="https://discord.gg/twatter" className="text-accent-gradient hover:underline">Join our community</a></li>
          <li><strong>Nostr:</strong> Follow us for updates and announcements</li>
          <li><strong>GitHub:</strong> Contribute to our open-source brand resources</li>
        </ul>

        <blockquote>
          Our brand represents the collective power of decentralized social networking.
          Use it responsibly to help build a better, more open internet for everyone.
        </blockquote>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Brand updates:</strong> Our brand guidelines evolve as Twatter.Army grows.
                Check back regularly for updates and new resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


