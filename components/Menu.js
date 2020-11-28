export default function Menu() {
  return (
    <>
      <div className="flex items-center flex-shrink-0 px-4">
        <img className="h-8 w-auto" src="images/vizee-logo-text.svg" alt="Vizee" />
      </div>
      <nav className="mt-5 flex-1 flex flex-col divide-y divide-gray-900 overflow-y-auto">
        <div className="px-2 space-y-1">
          <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-white rounded-md bg-gray-900" aria-current="page">
            {/* Heroicon name: home */}
            <svg className="mr-3 h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </a>

          <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
            {/* Heroicon name: chart-bar */}
            <svg className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
            Profile
          </a>

          <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
            {/* Heroicon name: folder */}
            <svg className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Links
          </a>

          <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
            {/* Heroicon name: calendar */}
            <svg className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Traffic
          </a>

          <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
            {/* Heroicon name: inbox */}
            <svg className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Subscriptions
          </a>

          <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
            {/* Heroicon name: chart-bar */}
            <svg className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Events
          </a>

          <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
            {/* Heroicon name: users */}
            <svg className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Users
          </a>
        </div>

        <div className="mt-6 pt-6">
          <div className="px-2 space-y-1">
            <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
              {/* Heroicon name: cog */}
              <svg className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>

            <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
              {/* Heroicon name: question-mark-circle */}
              <svg className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Help
            </a>

            <a href="#" className="group flex items-center px-3 py-3 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
              {/* Heroicon name: shield-check */}
              <svg className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
