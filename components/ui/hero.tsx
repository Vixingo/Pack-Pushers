import { Button } from "./button";

export default function Hero() {
    return (
        <>
            <div className="mx-auto p-6 max-w-7xl pt-20">
                <div className="max-w-[626px]">
                    <h1 className="text-5xl md:text-6xl font-bold md:leading-[88px] leading-[68px] text-accent dark:text-accent-foreground">
                        Streamlined <br /> Global Shipping for Your Hauls
                    </h1>
                    <p className="text-lg leading-10 font-normal mb-14">
                        We specialize in shipping your prized hauls to and from
                        any corner of the world. With our network of shipping
                        agents vetted by the community, you’re bound to get the
                        best shipping rates.
                    </p>
                    <Button
                        variant={"default"}
                        className="px-14 py-5 font-semibold"
                    >
                        Track A Package
                    </Button>
                </div>
            </div>
        </>
    );
}
