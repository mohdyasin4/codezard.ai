import React from 'react'
import Image from 'next/image'

export default function Loading() {
  return (
    <main className="h-screen w-screen flex item-center justify-center">
        <Image src="/darklogo.svg" alt="logo" width={140} height={100} />
    </main>
  )
}
