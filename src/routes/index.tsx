import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Strategy } from "@/components/Strategy";
import { Services } from "@/components/Services";
import { Voice } from "@/components/Voice";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clarity Catalyst Strategic Communications & Brand Voice" },
      {
        name: "description",
        content:
          "An independent communications practice for leaders who would rather be understood than amplified. Strategy, voice and advisory by Clarity Catalyst.",
      },
      { property: "og:title", content: "Clarity Catalyst Strategic Communications" },
      {
        property: "og:description",
        content:
          "Communication that earns trust. Strategy, voice and advisory for leaders who would rather be understood than amplified.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Strategy />
        <Services />
        <Voice />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
