'use client'

import { useState, useEffect } from "react"
import { createAvatar } from "@dicebear/core"
import { thumbs } from "@dicebear/collection"

export default function DiceBear({ seed, className = "w-16 h-16" }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    if (!seed) return;
    
    const generatedSvg = createAvatar(thumbs, {
      seed: seed,
      backgroundColor: ["b6e3f4"], 
    }).toString()

    setSvg(generatedSvg)
  }, [seed])

  if (!svg) return <div className={`${className} bg-base-300 rounded-full`} />;

  return (
    <div
      className={`${className} rounded-full ring ring-primary/30 overflow-hidden`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}