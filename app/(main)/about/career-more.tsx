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
                        He is a multiple award-winning artiste with 8 inspiring albums including, &apos;&apos;Moko be&apos;&apos;, &apos;&apos;Worshipful&apos;&apos;,
                        &apos;&apos;Hymnz Unlimited&apos;&apos;, &apos;&apos;Holy Writings&apos;&apos;, &apos;&apos;Saving Hearts&apos;&apos;, &apos;&apos;Yesu hi&apos;&apos;, &apos;&apos;Revive Us (live in Canada)&apos;&apos; and &apos;&apos;Revealing Jesus&apos;&apos;, as well as, a maiden book and an online devotional.
                        <br /> <br />
                        Nii Okai has been singing since childhood; a gift which was developed and got full blown during his days at Mfantsipim School and KNUST respectively, and has remained a part of his education, career and
                        ministry progression.
                        <br /> <br />

                        Nii Okai rose through the ranks of corporate life until mid 2010 when he left Standard Chartered to obey the call to Mission. He currently holds an MA in Mission and Theology from the Akrofi-Christaller
                        Institute, Akropong-Akuapem.
                        Ataa Nii is married to Yaa Afaribea Okai and they are blessed with 3 children (Dede-Ode, Naa Korkoi and Nii Okaikoi).

                       
                    </p>
                )
            }
        </>
    )
}