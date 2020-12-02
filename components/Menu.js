import { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import ProfileMenu from '../components/ProfileMenu'
import ActiveLink from '../components/ActiveLink'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const className = {
    default: {
      inactive: 'px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white-5',
      active: 'px-3 py-2 rounded-md text-base font-medium text-white bg-black-50'
    },
    mobile: {
      inactive: 'group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-white-5',
      active: 'group flex items-center px-3 py-3 text-base font-medium text-white rounded-md bg-black-50'
    }
  }

  return (
    <nav className="bg-gray-850">
      <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-750 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={cn('h-6 w-6', {
                  'hidden': isOpen,
                  'block': !isOpen
                })}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              <svg
                className={cn('h-6 w-6', {
                  'hidden': !isOpen,
                  'block': isOpen
                })}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a>
                  <img className="hidden sm:block lg:hidden h-7 w-auto" src="/images/vizee-logo.svg" alt="Vizee" />
                  <img className="black sm:hidden lg:block h-7 w-auto" src="/images/vizee-logo-text.svg" alt="Vizee" />
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <ActiveLink href="/events" activeClassName={className.default.active}>
                  <a className={className.default.inactive}>
                    Events
                  </a>
                </ActiveLink>

                <ActiveLink href="/tickets" activeClassName={className.default.active}>
                  <a className={className.default.inactive}>
                    My Tickets
                  </a>
                </ActiveLink>

                <ActiveLink href="/calendar" activeClassName={className.default.active}>
                  <a className={className.default.inactive}>
                    Calendar
                  </a>
                </ActiveLink>

                <ActiveLink href="/help" activeClassName={className.default.active}>
                  <a className={className.default.inactive}>
                    Help
                  </a>
                </ActiveLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-gray-850 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-850 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* Heroicon name: bell */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <ProfileMenu />
          </div>
        </div>
      </div>

      {/*
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      */}
      <div className={cn('sm:hidden', {
        'hidden': !isOpen,
        'block': isOpen
      })}>
        <div className="flex-1 flex flex-col divide-y divide-gray-900 overflow-y-auto pb-4">
          <div className="px-2 space-y-1">
            <ActiveLink href="/events" activeClassName={className.mobile.active}>
              <a className={className.mobile.inactive}>
                {/* Heroicon name: lightning-bolt */}
                <svg className="mr-3 h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Events
              </a>
            </ActiveLink>

            <ActiveLink href="/tickets" activeClassName={className.mobile.active}>
              <a className={className.mobile.inactive}>
                {/* Heroicon name: ticket */}
                <svg className="mr-3 h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                My Tickets
              </a>
            </ActiveLink>

            <ActiveLink href="/calendar" activeClassName={className.mobile.active}>
              <a className={className.mobile.inactive}>
                {/* Heroicon name: calendar */}
                <svg className="mr-3 h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar
              </a>
            </ActiveLink>
          </div>

          <div className="mt-6 pt-6">
            <div className="px-2 space-y-1">
              <ActiveLink href="/deadmau5/manage/settings" activeClassName={className.mobile.active}>
                <a className={className.mobile.inactive}>
                  {/* Heroicon name: cog */}
                  <svg className="mr-3 h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </a>
              </ActiveLink>

              <ActiveLink href="/help" activeClassName={className.mobile.active}>
                <a className={className.mobile.inactive}>
                  {/* Heroicon name: question-mark-circle */}
                  <svg className="mr-3 h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Help
                </a>
              </ActiveLink>

              <ActiveLink href="/privacy" activeClassName={className.mobile.active}>
                <a className={className.mobile.inactive}>
                  {/* Heroicon name: shield-check */}
                  <svg className="mr-3 h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Privacy
                </a>
              </ActiveLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
