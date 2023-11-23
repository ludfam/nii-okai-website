"use client"
import { useState } from "react"

import ReadMoreToggle from "@/components/core/read-mode-toggle"

export default function CareerMore() {
    const [showMore, setShowMore] = useState(false)

    function showMoreText() {
        return setShowMore((prev) => !prev)
    }

    return (
        <>
            <ReadMoreToggle open={showMore} setOpen={showMoreText} />

            {
                showMore && (
                    <p>
                        Nii Okai is the co-founder of &apos;Harbour City Mass Choir&apos; an inter-denominational music ministry based in Tema, Ghana with a clear purpose of impacting the youth through contemporary gospel music, school outreach programs, music ministry workshops, and peer counseling.
                        <br /> <br />
                        Nii Okai has 5 albums to his credit. &apos;Moko Be&apos;, &apos;Hymnz Unlimited&apos;, &apos;Worshipful&apos;, &apos;Saving Hearts&apos; and &apos;Holy writings&apos; which he received an award with the &apos;Saving Hearts&apos; album at the 16th edition of Vodafone Ghana Music Awards for Music for Development Award.
                    </p>
                )
            }
        </>
    )
}