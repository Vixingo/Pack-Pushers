import { Instagram, LucideFacebook, Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

export default function Footer() {
    return (
        <>
            <div className="dark:bg-[#1E1E1E]">
                <div className="container pt-20  pb-6">
                    <div className="flex lg:flex-1 justify-center mb-14">
                        <a
                            href="#"
                            className="-m-1.5 p-1.5 flex  flex-col justify-center items-center"
                        >
                            <Image
                                src="/logo.png"
                                alt=""
                                width={43}
                                height={43}
                            />
                            <p className="font-bold text-xl text-muted dark:text-white mt-3">
                                PACKPUSHERS
                            </p>
                        </a>
                    </div>
                    <div className="flex sm:justify-between sm:flex-wrap mb-6 flex-col sm:flex-row sm:text-left text-center sm:items-start items-center">
                        <div>
                            <h5 className="text-primary font-semibold text-2xl mb-6">
                                PRODUCT
                            </h5>
                            <div className="flex flex-col gap-4  mb-6">
                                <a href="#" className="text-lg">
                                    Features
                                </a>
                                <a href="#" className="text-lg">
                                    Integrations
                                </a>
                                <a href="#" className="text-lg">
                                    Pricing
                                </a>
                                <a href="#" className="text-lg">
                                    FAQs
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-primary font-semibold text-2xl mb-6">
                                COMPANY
                            </h5>
                            <div className="flex flex-col gap-4  mb-6">
                                <a href="#" className="text-lg">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-lg">
                                    Terms Of Service
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-primary font-semibold text-2xl mb-6">
                                DEVELOPERS
                            </h5>
                            <div className="flex flex-col gap-4  mb-6">
                                <a href="#" className="text-lg">
                                    Public API
                                </a>
                                <a href="#" className="text-lg">
                                    Documentation
                                </a>
                                <a href="#" className="text-lg">
                                    Guides
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-primary font-semibold text-2xl mb-6">
                                SOCIAL MEDIA
                            </h5>
                            <div className="flex gap-6  mb-6">
                                <a href="#" className="text-lg">
                                    <Button
                                        size={"icon"}
                                        className="rounded-full bg-foreground scale-100 dark:scale-0"
                                    >
                                        <LucideFacebook
                                            stroke="0.5"
                                            fill="#fff"
                                        />
                                    </Button>
                                </a>
                                <a href="#" className="text-lg">
                                    <Button
                                        size={"icon"}
                                        className="rounded-full bg-foreground scale-100 dark:scale-0"
                                    >
                                        <Twitter stroke="0.5" fill="#fff" />
                                    </Button>
                                </a>
                                <a href="#" className="text-lg">
                                    <Button
                                        size={"icon"}
                                        className="rounded-full bg-foreground scale-100 dark:scale-0"
                                    >
                                        <Instagram />
                                    </Button>
                                </a>
                            </div>
                            <div className="flex gap-6 mt-[-40px]">
                                <a href="#">
                                    {" "}
                                    <Button
                                        size={"icon"}
                                        className="rounded-full scale-0 dark:scale-100 dark:bg-white dark:text-accent"
                                    >
                                        <LucideFacebook
                                            stroke="0.5"
                                            fill="#1E1E1E"
                                        />
                                    </Button>
                                </a>
                                <a href="#">
                                    {" "}
                                    <Button
                                        size={"icon"}
                                        className="rounded-full scale-0 dark:scale-100 dark:bg-white dark:text-accent"
                                    >
                                        <Twitter stroke="0.5" fill="#1E1E1E" />
                                    </Button>
                                </a>
                                <a href="#">
                                    {" "}
                                    <Button
                                        size={"icon"}
                                        className="rounded-full scale-0 dark:scale-100 dark:bg-white dark:text-accent"
                                    >
                                        <Instagram />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <Image
                        src={"/footerLine.png"}
                        width={"1280"}
                        height={1}
                        alt=""
                    />
                    <p className=" text-primary text-center mt-6">
                        © 2023 PackPushers. All rights reserved.{" "}
                    </p>
                </div>
            </div>
        </>
    );
}
