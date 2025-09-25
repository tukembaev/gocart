import AboutAssortment from "@/components/AboutAssortment";
import AboutLocation from "@/components/AboutLocation";

import HeroAbout from "@/components/HeroAbout";
import OurSpecs from "@/components/OurSpec";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroAbout />
      <AboutAssortment />
      <AboutLocation />
      <OurSpecs />
    </div>
  );
}