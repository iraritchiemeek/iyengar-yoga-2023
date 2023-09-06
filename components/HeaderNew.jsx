'use client'

import { useState, useRef, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon} from '@heroicons/react/24/solid'
import Link from 'next/link';
import {StyledLink} from './text'

export default function HeaderNew() {
  const headerRef = useRef(null);
  const [navVisible, setNavVisible] = useState(true);

  const toggleNavVisibility = (entries) => {
    const [entry] = entries;
    setNavVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleNavVisibility, {
      root: null,
      threshold: 0.1
    });
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const NavLink = ({ href, children, className = '' }) => (
    <div className={`w-full block pb-1 ${className}`}>
      <StyledLink href={href}>
        {children}
      </StyledLink>
    </div>
  );

  return (
    <header ref={headerRef}>
      {!navVisible && <div className="container mx-auto text-xl font-bold px-3 col-span-2 px-3 leading-6 fixed left-0 right-0 pt-2"><Link href="/">Iyengar Yoga Centre</Link></div>}
      <div className="w-full grid grid-cols-6 container mx-auto py-8">
        <div className="text-xl font-bold px-3 col-span-2 px-3 leading-6">
          <Link href="/">Iyengar Yoga Centre<span><br/>of Wellington<br/>New Zealand</span></Link>
        </div>
        <div className="z-10 col-start-4 col-span-3 grid grid-cols-3 [&>*]:px-3">
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
        </div>
      </div>
    </header>
  );
}
