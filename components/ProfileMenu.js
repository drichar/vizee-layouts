import { useState } from 'react'
import { Transition } from '@headlessui/react'

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="ml-3 relative">
      <div>
        <button
          className="max-w-xs bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-800"
          id="user-menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
        >
          <img
            className="h-8 w-8 rounded-full"
            src="images/deadmau5.jpg"
            alt="deadmau5"
          />
          <span className="hidden ml-3 text-gray-200 text-sm font-medium lg:block">
            <span className="sr-only">Open user menu for </span>deadmau5
          </span>
          {/* Heroicon name: chevron-down */}
          <svg
            className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Profile dropdown panel, show/hide based on dropdown state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95" */}
      <Transition
        show={isOpen}
        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Manage Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Logout
        </a>
      </Transition>
    </div>
  )
}
