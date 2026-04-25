import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
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
      { title: "Irene Bonjeh Azong-Wara — Strategic Communications & Brand Voice" },
      {
        name: "description",
        content:
          "An independent communications practice for leaders who would rather be understood than amplified. Strategy, voice and advisory by Irene Bonjeh Azong-Wara.",
      },
      { property: "og:title", content: "Irene Bonjeh Azong-Wara — Strategic Communications" },
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
  const scope = useReveal();
  return (
    <div ref={scope} className="min-h-screen bg-background text-foreground antialiased">
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
