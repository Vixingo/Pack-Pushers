import { Button } from "./button";

export default function Promo() {
    return (
        <div className="bg-[#1F2937]">
            <div className="container py-10 flex justify-between items-center">
                <div>
                    {" "}
                    <h1 className="text-primary text-[40px] font-semibold leading-10 mb-5">
                        Ready To Experience
                    </h1>
                    <p className="text-white font-normal leading-8 max-w-md mb-12">
                        the convenience and cost savings of shipping your
                        coveted hauls with Packpushers? Your journey awaits –
                        let&#39;s get started!
                    </p>
                    <Button
                        variant={"secondary"}
                        className="bg-[#0C0A09] text-base px-5 py-6 "
                    >
                        Start Tracking
                    </Button>
                </div>
                <div className="bg-[url(/ready.png)] w-[380px] h-[350px]"></div>
            </div>
        </div>
    );
}
