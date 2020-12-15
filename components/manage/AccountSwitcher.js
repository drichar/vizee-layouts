import { useState, useEffect, useRef } from 'react'
import { Transition } from '@headlessui/react'
import cn from 'classnames'

export default function AccountSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const timerRef = useRef(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
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
    }
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const renderMenu = () => (
    <div className="fixed inset-0 flex flex-col md:static bg-white px-5 py-6 sm:p-8">
      <div className="md:hidden absolute top-2 right-2">
        <button
          className={cn('ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none', {
            'focus:ring-2 focus:ring-inset focus:ring-primary': isOpen,
            'focus:ring-0 hidden': !isOpen
          })}
          onClick={() => setIsOpen(false)}
        >
          <span className="sr-only">Close accounts menu</span>
          {/* Heroicon name: x */}
          <svg
            className="h-6 w-6 text-gray-900"
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
      <div className="flex-none md:hidden mb-6">
        <h3 className="text-2xl font-medium text-gray-700">
          Select Account
        </h3>
      </div>
      <ul className="flex-grow divide-y divide-gray-200 pr-4 md:max-h-64 overflow-y-auto">
        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Calvin Hawkins</p>
            <p className="text-sm text-gray-500">calvin.hawkins@example.com</p>
          </div>
        </li>

        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Kristen Ramos</p>
            <p className="text-sm text-gray-500">kristen.ramos@example.com</p>
          </div>
        </li>

        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Ted Fox</p>
            <p className="text-sm text-gray-500">ted.fox@example.com</p>
          </div>
        </li>

        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Calvin Hawkins</p>
            <p className="text-sm text-gray-500">calvin.hawkins@example.com</p>
          </div>
        </li>

        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Kristen Ramos</p>
            <p className="text-sm text-gray-500">kristen.ramos@example.com</p>
          </div>
        </li>

        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Ted Fox</p>
            <p className="text-sm text-gray-500">ted.fox@example.com</p>
          </div>
        </li>

        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Calvin Hawkins</p>
            <p className="text-sm text-gray-500">calvin.hawkins@example.com</p>
          </div>
        </li>

        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Kristen Ramos</p>
            <p className="text-sm text-gray-500">kristen.ramos@example.com</p>
          </div>
        </li>

        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Ted Fox</p>
            <p className="text-sm text-gray-500">ted.fox@example.com</p>
          </div>
        </li>
      </ul>
    </div>
  )

  return (
    <div className="relative">
      <Trigger
        isOpen={isOpen}
        className="flex md:hidden"
        onClick={handleClick}
      />
      <Transition
        show={isOpen}
        className="md:hidden fixed z-10 inset-0 transform"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-x-1"
      >
        <div className="shadow-lg overflow-hidden">
          {renderMenu()}
        </div>
      </Transition>

      <Trigger
        isOpen={isOpen}
        className="hidden md:flex"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Transition
        show={isOpen}
        onMouseEnter={handleMenuHover}
        onMouseLeave={handleMouseLeave}
        className="hidden md:block absolute z-10 left-full top-0 pl-6 transform w-screen max-w-md"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-x-3"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-3"
      >
        <div className="rounded-lg shadow-lg overflow-hidden">
          {renderMenu()}
        </div>
      </Transition>
    </div>
  )
}

const Trigger = ({ className, isOpen, ...props }) => (
  <span
    className={cn(`${className} items-center px-3 py-3 rounded-md text-base font-medium cursor-pointer hover:text-white hover:bg-white-5`, {
      'text-gray-400': !isOpen,
      'text-white bg-white-5': isOpen
    })}
    {...props}
  >
    <svg className="flex-none mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="var(--vz-gray-500)" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
    <span className="flex-grow">
      Accounts
    </span>
    <svg className="flex-none h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
    </svg>
  </span>
)
