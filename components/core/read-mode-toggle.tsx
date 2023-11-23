import { cn } from "@/lib/utils"
import { Minus, Plus } from "lucide-react"

type Props = {
    open: boolean
    setOpen: () => void
}
export default function ReadMoreToggle({ open, setOpen }: Props) {
    return (
        <button className={cn(
            "uppercase w-max flex items-center gap-4 group hover:text-o-yellow",
            open ? "text-neutral-600" : "text-black"
        )}
            onClick={setOpen} >
            <div className={cn(
            "apsect-square w-7 h-7 group-hover:bg-o-yellow  text-white flex items-center justify-center",
            open ? "bg-o-yellow" : "bg-black"
        )} >

            {
                open ? <>
                    <Minus className="w-4 h-4" />
                </> : <>
                    <Plus className="w-4 h-4" />
                </>
            }
            </div>
            Read More
        </button>
    )
}