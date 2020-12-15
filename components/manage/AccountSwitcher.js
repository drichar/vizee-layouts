import { useState, useEffect, useRef } from 'react'
import { Transition } from '@headlessui/react'
import cn from 'classnames'

export default function AccountSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const timerRef = useRef(null)

  const handleClick = () => {
    const isLg = window.matchMedia('(min-width: 1024px)').matches
    if (!isLg) {
      setIsOpen(!isOpen)
    }
  }

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsOpen(false)
      timerRef.current = null
    }, 100)
  }

  const handleMenuHover = () => {
    if (isOpen) {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      setIsOpen(true)
    }
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div className="relative">
      <span
        className={cn('flex items-center px-3 py-3 rounded-md text-base font-medium cursor-pointer', {
          'text-gray-400': !isOpen,
          'text-white bg-white-5': isOpen
        })}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Heroicon name: user */}
        <svg className="mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke="#71717a" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Accounts
      </span>
      <Transition
        show={isOpen}
        onMouseEnter={handleMenuHover}
        onMouseLeave={handleMouseLeave}
        className="absolute z-10 left-full top-0 pl-6 transform w-screen max-w-xs"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-x-3"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-3"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <a href="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
              <p className="text-base font-medium text-gray-900">
                Blog
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Learn about tips, product updates and company culture.
              </p>
            </a>

            <a href="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
              <p className="text-base font-medium text-gray-900">
                Help Center
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Get all of your questions answered in our forums of contact support.
              </p>
            </a>

            <a href="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
              <p className="text-base font-medium text-gray-900">
                Guides
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Learn how to maximize our platform to get the most out of it.
              </p>
            </a>

            <a href="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
              <p className="text-base font-medium text-gray-900">
                Events
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Check out webinars with experts and learn about our annual conference.
              </p>
            </a>

            <a href="#" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
              <p className="text-base font-medium text-gray-900">
                Security
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Understand how we take your privacy seriously.
              </p>
            </a>
          </div>
        </div>
      </Transition>
    </div>
  )
}
