import { useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="ml-3 relative">
      <div>
        <button
          className="max-w-xs bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500"
          id="user-menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
        >
          <img
            className="h-8 w-8 rounded-full"
            src="/images/deadmau5.jpg"
            alt="deadmau5"
          />
        </button>
      </div>

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
        <Link href="/deadmau5/manage">
          <a
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Manage Profile
          </a>
        </Link>
        <Link href="/deadmau5/manage/settings">
          <a
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Settings
          </a>
        </Link>
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
