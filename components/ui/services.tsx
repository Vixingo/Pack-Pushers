import Image from "next/image";
import { Button } from "./button";
import Heading from "./heading";

export default function Services() {
    return (
        <>
            <div className="container py-20">
                <h3 className="text-5xl text-accent dark:text-accent-foreground font-bold text-center ">
                    Our Services
                </h3>
                <div className="flex justify-between my-14 lg:flex-row flex-col items-center lg:items-start ">
                    <div className="bg-[url(/s1L.png)] dark:bg-[url(/s1.png)] bg-contain bg-no-repeat lg:min-w-[522px] lg:h-[475px] min-w-[365px] h-[250px] bg-center mb-5"></div>
                    <div className="hidden flex-col items-center xl:flex">
                        <Image
                            src={"/s1s.png"}
                            width={100}
                            height={100}
                            alt=""
                        />
                        <Image
                            src={"/line.png"}
                            width={1}
                            height={400}
                            alt=""
                        />
                    </div>
                    <Heading
                        tittle="Unbeatable Cost Savings"
                        details="Enjoy top-notch service with Packpushers without breaking the bank. That's why we're proud to offer a cost-effective shipping solution that's hard to beat. We've done the research, and our rates are more budget-friendly than other shipping agents, including Panda buy."
                    />
                </div>
                <div className="flex justify-between my-14 lg:flex-row flex-col-reverse items-center lg:items-start  ">
                    <Heading
                        tittle=" Effortless Account Management"
                        details="Our user-friendly platform lets you keep a close 
                        eye on your shipments, review your transaction 
                        history, and execute your shipments with 
                        confidence."
                    />
                    <div className="hidden xl:flex flex-col items-center">
                        <Image
                            src={"/s2s.png"}
                            width={100}
                            height={100}
                            alt=""
                        />
                        <Image
                            src={"/line.png"}
                            width={1}
                            height={400}
                            alt=""
                        />
                    </div>
                    <div className="bg-[url(/s2L.png)] dark:bg-[url(/s2.png)] bg-contain bg-no-repeat md:min-w-[522px] md:h-[475px] min-w-[365px] h-[250px] bg-center mb-5 "></div>
                </div>
                <div className="flex justify-between my-14 lg:flex-row flex-col items-center lg:items-start">
                    <div className="bg-[url(/s3L.png)] dark:bg-[url(/s3.png)] bg-contain bg-no-repeat lg:min-w-[522px] lg:h-[475px] min-w-[365px] h-[250px] bg-center mb-5"></div>
                    <div className="hidden xl:flex flex-col items-center">
                        <Image
                            src={"/s3s.png"}
                            width={100}
                            height={100}
                            alt=""
                        />
                        <Image
                            src={"/line.png"}
                            width={1}
                            height={400}
                            alt=""
                        />
                    </div>
                    <Heading
                        tittle="Unbeatable Cost Savings"
                        details="Enjoy top-notch service with Packpushers without breaking the bank. That's why we're proud to offer a cost-effective shipping solution that's hard to beat. We've done the research, and our rates are more budget-friendly than other shipping agents, including Panda buy."
                    />
                </div>
            </div>
        </>
    );
}
