import { Button } from "./button";

export default function Heading(props: { tittle: string; details: string }) {
    return (
        <div className="max-w-[520px]">
            <h4 className="heading">{props.tittle}</h4>
            <p className="details">{props.details}</p>
            <Button variant={"secondary"} className="text-base px-5 py-6 ">
                Start Tracking
            </Button>
        </div>
    );
}
