"use client"

import { PlaylistItem } from "@/components/playlist-item-main"
import React, { useState, useEffect, useMemo } from 'react'

export type MainSectionProps = {
  title: string
}

export function MainSection({ title }: MainSectionProps) {
  const breakpoints = useMemo(() => [
    768, 1024, 1352, 1552, 1736
  ], [])

  const getTotalItems = useMemo(() => () => {
    for (let i = 0; i < breakpoints.length; i++) {
      if (window.innerWidth < breakpoints[i]) {
        return i + 2
      }
    }
    return 7
  }, [breakpoints])

  const [totalItems, setTotalItems] = useState(() => getTotalItems())


  useEffect(() => {
    const uptadeTotalItems = () => {
      setTotalItems(getTotalItems())
    }

    window.addEventListener('resize', uptadeTotalItems)

    return () => {
      window.removeEventListener('resize', uptadeTotalItems)
    }
  }, [getTotalItems])

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between place-items-end">
        <h1 className="text-2xl font-bold">{title}</h1>
        <a href="#" className="text-sm font-semibold text-muted-foreground hover:underline">Mostrar tudo</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg1:grid-cols-5 lg2:grid-cols-6 lg3:grid-cols-7">
        {Array.from({ length: totalItems }).map(() => (
          <PlaylistItem
            key={Math.random().toString(16)}
            img="/rhcp.jpg"
            title="Red Hot Chilli Peppers"
            orientation="vertical"
            artist="RHCP" />
        ))}
      </div>
    </section>
  )
}