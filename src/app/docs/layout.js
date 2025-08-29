import DocsShell from "./DocsShell"

export const metadata = {
  title: "Twatter.Army Docs",
  description: "Documentation for Twatter.Army - The world's most advanced Nostr client.",
  openGraph: {
    title: "Twatter.Army Docs",
    description: "Documentation for Twatter.Army - The world's most advanced Nostr client.",
    url: "/docs",
    siteName: "Twatter.Army Docs",
    images: [
      { url: "/pixelmonsters.png", width: 1200, height: 630, alt: "Twatter.Army" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twatter.Army Docs",
    description: "Documentation for Twatter.Army - The world's most advanced Nostr client.",
    images: ["/pixelmonsters.png"],
  },
}

export default function DocsLayout({ children }) {
  return (
    <main className="min-h-[80vh] max-w-7xl mx-auto px-6 py-10" role="main">
      <DocsShell>{children}</DocsShell>
    </main>
  )
}


