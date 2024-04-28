"use client"
import { useState } from "react"

import ReadMoreToggle from "@/components/core/read-mode-toggle"
import SanityBlock from "@/components/core/sanity-block";

export default function CareerMore({data}: {data: any}) {
    const [showMore, setShowMore] = useState(false)

    function showMoreText() {
        return setShowMore((prev) => !prev)
    }

    return (
        <>
            <ReadMoreToggle open={showMore} setOpen={showMoreText} />

            {
                showMore && (
                   <SanityBlock value={data} />
                )
            }
        </>
    )
}