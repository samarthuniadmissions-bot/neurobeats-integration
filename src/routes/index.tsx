import { createFileRoute } from "@tanstack/react-router";
import NeurobeatsApp from "../components/neurobeats/NeurobeatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neurobeats — Test your focus sound" },
      { name: "description", content: "Neurobeats combines music discovery, timed cognitive tasks, mood tracking, and AI feedback to help you understand which sound supports your best work." },
      { property: "og:title", content: "Neurobeats — Test your focus sound" },
      { property: "og:description", content: "Neurobeats combines music discovery, timed cognitive tasks, mood tracking, and AI feedback to help you understand which sound supports your best work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <NeurobeatsApp />;
}
