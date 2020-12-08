import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen bg-gray-950">

      {/* HERO */}

      <div className="relative bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                      <a>
                        <span className="sr-only">Vizee</span>
                        <img className="h-8 w-auto" src="/images/vizee-logo-text.svg" />
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-5xl tracking-tight font-extrabold text-gray-100 sm:text-6xl md:text-7xl">
                  <span className="block">Premium</span>{' '}
                  <span className="block text-pink-600">video network</span>
                </h1>
                <p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                  Sell videos. <span className="text-gray-200 font-semibold">Earn up to 90% of every dollar.</span>
                </p>
                <div className="mt-5 xs:mt-12 xs:flex xs:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:text-lg md:px-10 lg:text-xl">
                        Get started
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 xs:mt-0 xs:ml-3">
                    <Link href="/events">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-white-10 hover:bg-white-20 md:text-lg md:px-10 lg:text-xl">
                        Browse Events
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <video
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://dam-media.s3.amazonaws.com/concert.mp4"
            autoPlay
            muted
            loop
          />
        </div>
      </div>

      {/* FEATURES */}

      <div className="bg-gray-950 overflow-hidden">
        <div className="relative max-w-7xl mx-auto pt-12 pb-20 px-4 sm:px-6 lg:px-8">
          <svg className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
            <defs>
              <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-800" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                Introducing a better way to monetize video.
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                  {/* Heroicon name: database */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div className="mt-5">
                  <dt className="text-lg leading-6 font-medium text-gray-100">
                    Own your data
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Email addresses and signals that help you identify the people who make you the most money
                  </dd>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                  {/* Heroicon name: video-camera */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <dt className="text-lg leading-6 font-medium text-gray-100">
                    Live &amp; pre-recorded video
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Set the price and exclulsive premiere dates for your videos and livestreams
                  </dd>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                  {/* Heroicon name: credit-card */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <dt className="text-lg leading-6 font-medium text-gray-100">
                    Get paid on time
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    With direct connection to Stripe&trade;, transfers are made in two days or less
                  </dd>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                  {/* Heroicon name: chart-square-bar */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <dt className="text-lg leading-6 font-medium text-gray-100">
                    Advanced analytics
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Take the guesswork out of making informed decisions
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* PRICING TABLE */}

      <div className="bg-black">
        <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
          <div className="text-center">
            <h2 className="text-lg leading-6 font-semibold text-primary uppercase tracking-wider">
              Pricing
            </h2>
            <p className="mt- text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              A plan for all creators to increase earnings
            </p>
            {/* <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
              Get paid on a level playing field and optimize your earnings over time based on the quality of your viewers
            </p> */}
          </div>
        </div>

        <div className="mt-16 bg-gray-950 pb-12 lg:mt-20 lg:pb-20">
          <div className="relative z-0">
            <div className="absolute inset-0 h-5/6 bg-black lg:h-2/3"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative lg:grid lg:grid-cols-7">

                {/* STARTER */}

                <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-8">
                        <div>
                          <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                            Starter
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="font-extrabold">
                                Free
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Earn up to 80% of every dollar
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              1 hour of live streaming
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Basic analytics
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              250GB per year bandwidth &amp; storage included
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                            <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900" aria-describedby="tier-hobby">
                              Get started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROFESSIONAL */}

                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                  <div className="relative z-10 rounded-lg shadow-xl">
                    <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-pink-600" aria-hidden="true"></div>
                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                      <div className="flex justify-center transform -translate-y-1/2">
                        <span className="inline-flex rounded-full bg-pink-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                          Most popular
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-t-lg px-6 pt-10 pb-8">
                      <div>
                        <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                          Professional
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">
                              99
                            </span>
                          </span>
                          <span className="text-2xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Earn up to 90% of every dollar
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            4 hours of live streaming
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Advanced analytics
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            1TB per year bandwidth &amp; storage included
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Live chat
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Download email addresses
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Promotional codes
                          </p>
                        </li>
                      </ul>
                      <div className="mt-10">
                        <div className="rounded-lg shadow-md">
                          <a href="#" className="block w-full text-center rounded-lg border border-transparent bg-pink-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-pink-700" aria-describedby="tier-growth">
                            Get started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WHITE LABEL */}

                <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-8">
                        <div>
                          <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                            White Label
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="font-extrabold">
                                Custom
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Unlimited live streaming
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Unlimited bandwidth &amp; storage
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Creative Services
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Custom reporting
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Volume discounts
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Marketing &amp; promotion
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                            <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900" aria-describedby="tier-scale">
                              Contact Partner Services
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CALLOUT / CTA */}

      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-pink-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Creators earn up to 90% of every dollar</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-pink-200">Vizee's easy-to-understand dashboard provides you with key metrics to maximize earnings.</p>
                <a href="#" className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-lg font-medium text-pink-600 hover:bg-pink-50">Sign up now for free</a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="/images/vizee-screen-2.png" alt="App screenshot" />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}

      <footer className="bg-gray-950">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            &copy; 2020 Vizee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
