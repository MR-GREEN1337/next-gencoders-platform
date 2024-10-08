import Footer from "@/components/global/footer";
import { HeroParallaxComp } from "@/components/ui/parallax-landing-page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <div className="mt-3 flex-grow">
        <HeroParallaxComp />
      </div>
      <Footer />
    </div>
  );
}
