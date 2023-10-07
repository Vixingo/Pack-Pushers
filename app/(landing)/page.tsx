import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Promo from "@/components/ui/promo";
import Services from "@/components/ui/services";

export default function LandingPage() {
    return (
        <>
            <div className="bg-[url(/heroBG.png)] bg-no-repeat bg-right bg-origin-border pb-[200px]">
                <Navbar />
                <Hero />
            </div>
            <div className="bg-[#f9f9f9] dark:bg-[#1E1E1E]">
                <Services />
            </div>
            <Promo />
            <Footer />
        </>
    );
}
