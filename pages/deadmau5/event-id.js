import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Layout from '../../components/Layout'

export default function Event() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Layout>
      <article className="max-w-screen-2xl mx-auto sm:p-6 lg:p-8 lg:flex page-min-height">
        <section className="flex-grow">
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe src="https://www.youtube.com/embed/x3d3LFhy-Kw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          {/* <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
                The Last Catbender
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-700 shadow-sm text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-white-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600">
                <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share
              </button>
            </div>
          </div> */}
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                The Last Catbender The Last Catbender
              </h2>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-300">
                  {/* Heroicon name: calendar */}
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  December 4, 2020 1:11pm
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-300">
                  {/* Heroicon name: location-marker */}
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  East 51st Street, Austin, TX, USA
                </div>
              </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <span className="hidden sm:block">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm lg:text-base font-medium text-gray-300 bg-transparent hover:bg-white-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-600">
                  {/* Heroicon name: pencil */}
                  <svg className="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit
                </button>
              </span>
              <span className="hidden sm:block ml-3">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm lg:text-base font-medium text-gray-300 bg-transparent hover:bg-white-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-600">
                  {/* Heroicon name: link */}
                  <svg className="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  View
                </button>
              </span>
              <span className="sm:ml-3">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm lg:text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-600">
                  {/* Heroicon name: check */}
                  <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Manage
                </button>
              </span>

              {/* Dropdown */}
              <span className="ml-3 relative sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-transparent hover:bg-white-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-600"
                  id="mobile-menu"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-haspopup="true"
                >
                  More
                  {/* Heroicon name: chevron-down */}
                  <svg className="-mr-1 ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <Transition
                  show={isOpen}
                  className="origin-top-left absolute left-0 mt-2 -ml-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Edit</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View</a>
                </Transition>
              </span>
            </div>
          </div>
        </section>
        <aside className="flex-none lg:w-80">

        </aside>
      </article>
    </Layout>
  )
}
