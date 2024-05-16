import { ChurchMeeting } from "@/types";

type Props = {
    meeting?: ChurchMeeting;
};
export default function MeetingCard({ meeting }: Props) {
    return (
        <article className="flex flex-col gap-2 text-left">
            <h4 className="uppercase text-lg font-medium text-o-lightblue">
                {meeting?.title || ""}
            </h4>

            <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-o-lightblue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <p className="text-sm">
                    {meeting?.time || ""}

                </p>
            </div>

            <p>
                {meeting?.description || ""}

            </p>

        </article>
    );
}