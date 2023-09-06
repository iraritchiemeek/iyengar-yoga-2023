'use client'

import { useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon} from '@heroicons/react/24/solid'
import Link from 'next/link';
import {StyledLink} from './text'

export default function HeaderNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const NavLink = ({ href, children, className = ''}) => (
    <div className={`w-full block pb-1 ${className}`}>
      <StyledLink onClick={() => setMobileMenuOpen(false)} href={href}>
        {children}
      </StyledLink>
    </div>
  );

  return (
    <header>
      <Disclosure as={'div'} className="w-full grid grid-cols-6 container mx-auto py-8" defaultOpen={true}>
        <div className="text-xl font-bold px-3 col-span-2 px-3 leading-6">
          <Link href="/">Iyengar Yoga Centre<span><br/>of Wellington<br/>New Zealand</span></Link>
        </div>

        <Disclosure.Panel className="z-10 col-start-4 col-span-3 grid grid-cols-3 [&>*]:px-3">
          <div>
            <NavLink href="/#">Home</NavLink>
            <NavLink href="/#new-students">New students</NavLink>
            <NavLink href="/#class-descriptions">Class descriptions</NavLink>
            <NavLink href="/#pricing">Booking and pricing</NavLink>
            <NavLink href="/#attending">Attending class</NavLink>
          </div>
          <div>
            <NavLink href="/our-studio">Our studio</NavLink>
            <NavLink href="/our-studio#our-teachers">Our teachers</NavLink>
            <NavLink href="/our-studio#why-iyengar">Why Iyengar yoga?</NavLink>
            <NavLink href="#footer">Contact</NavLink>
          </div>
          <div>
            <NavLink href="/timetable" className='font-bold'>
              Timetable <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </header>
  )
}
