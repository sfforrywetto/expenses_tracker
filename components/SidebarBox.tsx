"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({user}: SiderbarProps) => {

  const pathName = usePathname()

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer items-center gap-2'>
                <Image src='/icons/bonsai.svg' width={45} height={45} alt='hl' className='size-[100px] max-xl:size-45'/>
                <h1 className='sidebar-logo'>ExTr_Prof</h1>
            </Link>

            {sidebarLinks.map((i) => {

              const isActive = pathName === i.route || pathName.startsWith(`${i.route}/`)

              return(
                <Link href={i.route} key={i.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                  <div className='relative size-6'>
                    <Image src={i.imgURL} alt={i.label} fill className={cn({
                      'brightness-[3] invert-0' : isActive
                    })}/>
                  </div>
                  <p className={cn('sidebar-label', {'!text-white' : isActive})}>
                    {i.label}
                  </p>
                </Link>
              )
            })}

            USER
        </nav>

        USER
    </section>
  )
}

export default Sidebar