import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Twatter.Army Docs",
  description: "The world's most advanced Nostr client. Modern social networking powered by censorship-resistant protocols.",
  metadataBase: new URL("https://twatter.army"),
  icons: {
    icon: "/pixelmonsters.png",
    shortcut: "/pixelmonsters.png",
    apple: "/pixelmonsters.png",
  },
  openGraph: {
    title: "Twatter.Army Documentation",
    description: "The world's most advanced Nostr client. Modern social networking powered by censorship-resistant protocols.",
    url: "https://twatter.army",
    images: [{ url: "/pixelmonsters.png" }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans`}>
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
