'use client'

import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, GlobeAsiaAustraliaIcon, CalendarDaysIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import {StyledLink} from './text'

export default function Header() {
  const headerRef = useRef(null);
  const [navVisible, setNavVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const pathname = usePathname()

  const NavLink = ({ href, children, className = '' }) => {
    const linkClass = (pathname === '/' && href === '/') || (href !== '/' && pathname.includes(href)) ? '' : 'no-underline';
    return(
      <div onClick={() => setMobileMenuOpen(false)} className={`w-full block pb-1 ${className}`}>
        <StyledLink className={linkClass} href={href}>
          {children}
        </StyledLink>
      </div>
    )
  };

  return (
    <header ref={headerRef}>
      {!navVisible && <div className="container mx-auto text-xl font-bold px-3 col-span-2 px-3 leading-6 fixed left-0 right-0 pt-2 hidden lg:inline-block z-10 pointer-events-none"><Link href="/">Iyengar Yoga Centre</Link></div>}
      <nav className="w-full grid grid-cols-6 container mx-auto py-8">
        <div className="text-xl font-bold px-3 col-span-4 md:col-span-2 px-3 leading-6">
          <Link href="/">Iyengar Yoga Centre<span><br/>of Wellington<br/>New Zealand</span></Link>
        </div>
        <div className="z-10 col-start-4 col-span-3 grid-cols-3 [&>*]:px-3 hidden md:grid">
          <div>
            <NavLink className='font-bold' href="/">Home</NavLink>
            <NavLink href="/#new-students">New students</NavLink>
            <NavLink href="/#class-descriptions">Class descriptions</NavLink>
            <NavLink href="/#pricing">Booking and pricing</NavLink>
            <NavLink href="/#attending">Attending class</NavLink>
          </div>
          <div>
            <NavLink className='font-bold' href="/our-studio">Our studio</NavLink>
            <NavLink href="/our-studio#our-teachers">Our teachers</NavLink>
            <NavLink href="/our-studio#why-iyengar">Why Iyengar yoga?</NavLink>
            <NavLink href="#footer">Contact</NavLink>
          </div>
          <div>
            <NavLink href="/timetable" className='font-bold'>
              <div className='flex items-end'><CalendarDaysIcon className='h-5 w-5 me-2' />Timetable</div>
            </NavLink>
            <NavLink className='font-bold' href="/retreats">
              <div className='flex items-end'><GlobeAsiaAustraliaIcon className='h-5 w-5 me-2' />Retreats</div>
            </NavLink>
          </div>
        </div>
        <div className="flex justify-end col-span-2 md:hidden px-3">
          <button
            type="button"
            className="text-gray-700 flex content-start"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
         <Transition show={mobileMenuOpen} as={Fragment}>
          <Dialog className="md:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
            <Dialog.Panel className="container mx-auto fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-8 sm:max-w-sm ring-1 ring-gray-900/5">
              <div className="flex items-start justify-between px-3">
                <div className="text-xl font-bold col-span-4 md:col-span-2 leading-6 sm:invisible">
                  <Link href="/">Iyengar Yoga Centre</Link>
                </div>
                <button
                  type="button"
                  className="text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col px-3 gap-4">
                <div>
                  <NavLink href="/">Home</NavLink>
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
                    <div className='flex items-end'><CalendarDaysIcon className='h-5 w-5 me-2' />Timetable</div>
                  </NavLink>
                  <NavLink className='font-bold' href="/retreats">
                    <div className='flex items-end'><GlobeAsiaAustraliaIcon className='h-5 w-5 me-2' />Retreats</div>
                  </NavLink>
                </div>
              </div>
            </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </nav>
    </header>
  );
}
