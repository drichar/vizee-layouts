import AccountLayout from '../../../components/layout/Account'
import Chart from '../../../components/Chart'
import DashboardHeader from '../../../components/DashboardHeader'

export default function Dashboard() {
  return (
    <AccountLayout>
      <article>
        <DashboardHeader />
        <div className="mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-2xl lg:text-lg xl:text-2xl leading-6 font-medium text-gray-200">
              Overview
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {/* Cards */}

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="p-6 sm:p-5 xl:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: currency-dollar */}
                      <svg
                        className="h-8 w-8 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-6 sm:ml-5 xl:ml-6 w-0 flex-1">
                      <dl>
                        <dt className="text-base sm:text-sm xl:text-base font-medium text-gray-500 truncate">
                          Revenue
                        </dt>
                        <dd>
                          <div className="text-2xl sm:text-lg xl:text-2xl font-medium text-gray-200">
                            $30,659.45
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950 px-5 py-3">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-pink-600 hover:text-pink-800"
                    >
                      View history
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="p-6 sm:p-5 xl:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: eye */}
                      <svg
                        className="h-8 w-8 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div className="ml-6 sm:ml-5 xl:ml-6 w-0 flex-1">
                      <dl>
                        <dt className="text-base sm:text-sm xl:text-base font-medium text-gray-500 truncate">
                          Views
                        </dt>
                        <dd>
                          <div className="text-2xl sm:text-lg xl:text-2xl font-medium text-gray-200">
                            267,491
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950 px-5 py-3">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-pink-600 hover:text-pink-800"
                    >
                      View analytics
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="p-6 sm:p-5 xl:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: heart */}
                      <svg
                        className="h-8 w-8 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-6 sm:ml-5 xl:ml-6 w-0 flex-1">
                      <dl>
                        <dt className="text-base sm:text-sm xl:text-base font-medium text-gray-500 truncate">
                          Favorites
                        </dt>
                        <dd>
                          <div className="text-2xl sm:text-lg xl:text-2xl font-medium text-gray-200">
                            104,551
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950 px-5 py-3">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-pink-600 hover:text-pink-800"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="p-6 sm:p-5 xl:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: user-add */}
                      <svg
                        className="h-8 w-8 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                    </div>
                    <div className="ml-6 sm:ml-5 xl:ml-6 w-0 flex-1">
                      <dl>
                        <dt className="text-base sm:text-sm xl:text-base font-medium text-gray-500 truncate">
                          Followers
                        </dt>
                        <dd>
                          <div className="text-2xl sm:text-lg xl:text-2xl font-medium text-gray-200">
                            46,209
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950 px-5 py-3">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-pink-600 hover:text-pink-800"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="p-6 sm:p-5 xl:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: lightning-bolt */}
                      <svg
                        className="h-8 w-8 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="ml-6 sm:ml-5 xl:ml-6 w-0 flex-1">
                      <dl>
                        <dt className="text-base sm:text-sm xl:text-base font-medium text-gray-500 truncate">
                          Events
                        </dt>
                        <dd>
                          <div className="text-2xl sm:text-lg xl:text-2xl font-medium text-gray-200">
                            20
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950 px-5 py-3">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-pink-600 hover:text-pink-800"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="p-6 sm:p-5 xl:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: video-camera */}
                      <svg
                        className="h-8 w-8 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-6 sm:ml-5 xl:ml-6 w-0 flex-1">
                      <dl>
                        <dt className="text-base sm:text-sm xl:text-base font-medium text-gray-500 truncate">
                          Clips
                        </dt>
                        <dd>
                          <div className="text-2xl sm:text-lg xl:text-2xl font-medium text-gray-200">
                            16
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950 px-5 py-3">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-pink-600 hover:text-pink-800"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 text-gray-200 text-base sm:text-lg md:text-base xl:text-lg">
            <h2 className="text-lg sm:text-2xl lg:text-lg xl:text-2xl leading-6 font-medium text-gray-200">
              Revenue
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <Chart />
                <p className="p-5 font-medium truncate">
                  Gross volume
                </p>
              </div>
              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <Chart />
                <p className="p-5 font-medium truncate">
                  Net volume from sales
                </p>
              </div>
            </div>
          </div>

          <h2 className="max-w-7xl mx-auto mt-12 px-4 text-lg sm:text-2xl lg:text-lg xl:text-2xl leading-6 font-medium text-gray-200 sm:px-6 lg:px-8">
            Recent Events
          </h2>

          {/* Activity list (smallest breakpoint only) */}
          <div className="shadow sm:hidden">
            <ul className="mt-2 divide-y divide-gray-800 overflow-hidden shadow sm:hidden">
              <li>
                <a
                  href="#"
                  className="block px-4 py-4 bg-gray-900 hover:bg-gray-950"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex-1 flex space-x-2 truncate">
                      {/* Heroicon name: cash */}
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="flex flex-col text-gray-500 text-sm truncate">
                        <span className="truncate">
                          Drive in - NOS Events Center (San Bernardino)
                        </span>
                        <span>
                          <span className="text-gray-200 font-medium">
                            $20,000
                          </span>{' '}
                          USD
                        </span>
                        <span>November 11, 2020</span>
                      </span>
                    </span>
                    {/* Heroicon name: chevron-right */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-4 bg-gray-900 hover:bg-gray-950"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex-1 flex space-x-2 truncate">
                      {/* Heroicon name: cash */}
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="flex flex-col text-gray-500 text-sm truncate">
                        <span className="truncate">
                          Chula Vista Drive In Concert Series (San Diego)
                        </span>
                        <span>
                          <span className="text-gray-200 font-medium">
                            $19,500
                          </span>{' '}
                          USD
                        </span>
                        <span>November 5, 2020</span>
                      </span>
                    </span>
                    {/* Heroicon name: chevron-right */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-4 bg-gray-900 hover:bg-gray-950"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex-1 flex space-x-2 truncate">
                      {/* Heroicon name: cash */}
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="flex flex-col text-gray-500 text-sm truncate">
                        <span className="truncate">
                          Drive in at Texas Motor Speedway (Fort Worth)
                        </span>
                        <span>
                          <span className="text-gray-200 font-medium">
                            $8,750
                          </span>{' '}
                          USD
                        </span>
                        <span>November 4, 2020</span>
                      </span>
                    </span>
                    {/* Heroicon name: chevron-right */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-4 bg-gray-900 hover:bg-gray-950"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex-1 flex space-x-2 truncate">
                      {/* Heroicon name: cash */}
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="flex flex-col text-gray-500 text-sm truncate">
                        <span className="truncate">
                          Belly Up (Aspen, CO)
                        </span>
                        <span>
                          <span className="text-gray-200 font-medium">
                            $300
                          </span>{' '}
                          USD
                        </span>
                        <span>November 1, 2020</span>
                      </span>
                    </span>
                    {/* Heroicon name: chevron-right */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>

            <nav
              className="bg-gray-900 px-4 py-3 flex items-center justify-between border-t border-gray-800"
              aria-label="Pagination"
            >
              <div className="flex-1 flex justify-between">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>

          {/* Activity table (small breakopoint and up) */}
          <div className="hidden sm:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col mt-2">
                <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-800">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-950 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Event Name
                        </th>
                        <th className="px-6 py-3 bg-gray-950 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Revenue
                        </th>
                        <th className="hidden px-6 py-3 bg-gray-950 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                          Status
                        </th>
                        <th className="px-6 py-3 bg-gray-950 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-800">
                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Drive in - NOS Events Center (San Bernardino)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $20,000{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-600 text-green-100 capitalize">
                            ready
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          November 11, 2020
                        </td>
                      </tr>

                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Chula Vista Drive In Concert Series (San Diego)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $19,500{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-600 text-green-100 capitalize">
                            ready
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          November 5, 2020
                        </td>
                      </tr>

                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Drive in at Texas Motor Speedway (Fort Worth)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $8,750{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-600 text-green-100 capitalize">
                            ready
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          November 4, 2020
                        </td>
                      </tr>

                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Belly Up (Aspen, CO)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $300{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-600 text-green-100 capitalize">
                            ready
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          November 1, 2020
                        </td>
                      </tr>

                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Brixton Academy (London, UK)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $20,000{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 capitalize">
                            transferred
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          October 17, 2020
                        </td>
                      </tr>

                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Live At The Marquee (Cork, Ireland)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $19,500{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 capitalize">
                            transferred
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          October 14, 2020
                        </td>
                      </tr>

                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Higher Vision Festival  (Navan, Ireland)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $8,750{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 capitalize">
                            transferred
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          October 3, 2020
                        </td>
                      </tr>

                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Drive in - NOS Events Center (San Bernardino)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $300{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 capitalize">
                            transferred
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          September 8, 2020
                        </td>
                      </tr>

                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Chula Vista Drive In Concert Series (San Diego)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $20,000{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 capitalize">
                            transferred
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          September 5, 2020
                        </td>
                      </tr>

                      <tr className="bg-gray-900">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          <div className="flex">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              {/* Heroicon name: cash */}
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-600 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-gray-500 truncate group-hover:text-gray-200">
                                Drive in at Texas Motor Speedway (Fort Worth)
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-200 font-medium">
                            $19,500{' '}
                          </span>
                          USD
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 capitalize">
                            transferred
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          September 1, 2020
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <nav
                    className="bg-gray-900 px-4 py-3 flex items-center justify-between border-t border-gray-800 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-300">
                        Showing{' '}
                        <span className="font-medium">1</span>{' '}
                        to{' '}
                        <span className="font-medium">10</span>{' '}
                        of{' '}
                        <span className="font-medium">20</span>{' '}
                        results
                      </p>
                    </div>
                    <div className="flex-1 flex justify-between sm:justify-end">
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                      >
                        Previous
                      </a>
                      <a
                        href="#"
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                      >
                        Next
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </AccountLayout>
  )
}
