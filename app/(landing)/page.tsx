import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";

export default function LandingPage() {
    return (
        <>
            <div className="bg-[url(/heroBG.png)] bg-no-repeat bg-right bg-origin-border pb-[200px]">
                <Navbar />
                <Hero />
            </div>
        </>
    );
}
