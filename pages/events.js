import Layout from '../components/Layout'
import Hero from '../components/Hero'
import EventCard from '../components/EventCard'
import { events } from '../data/events.json'

export default function Events({ events }) {
  return (
    <Layout>
      <div className="relative" style={{ minHeight: 'calc(100vh - 184px)'}}>
        <Hero />
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="sm:hidden mb-2">
            <label htmlFor="tabs" className="sr-only">Select a category</label>
            <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base text-gray-100 bg-gray-800 border-gray-700 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm rounded-md">
              <option defaultValue>Music</option>
              <option>Film &amp; Animation</option>
              <option>Health &amp; Wellness</option>
              <option>Dance</option>
            </select>
          </div>
          <div className="hidden sm:block mb-2">
            <div className="border-b border-gray-800">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {/* Current: "border-pink-500 text-pink-600", Default: "border-transparent text-gray-300 hover:text-gray-100 hover:border-gray-300" */}
                <a href="#" className="border-pink-500 text-pink-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base" aria-current="page">
                  Music
                </a>
                <a href="#" className="border-transparent text-gray-300 hover:text-gray-100 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base">
                  Film &amp; Animation
                </a>
                <a href="#" className="border-transparent text-gray-300 hover:text-gray-100 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base">
                  Health &amp; Wellness
                </a>
                <a href="#" className="border-transparent text-gray-300 hover:text-gray-100 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base">
                  Dance
                </a>
              </nav>
            </div>
          </div>

          <div className="lg:flex lg:items-center lg:justify-between py-6 bg-black sticky shadow top-16 z-10">
            <div className="relative flex-grow">
              <input type="text" name="search" id="search" placeholder="Search Events" className="lg:max-w-2xl block w-full shadow-sm text-gray-100 bg-black focus:ring-pink-600 focus:border-pink-600 border-gray-700 rounded-md pl-14 py-3" autoComplete="off" />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="hidden lg:block text-gray-300 text-lg font-bold">Showing {events.length} Event{events.length === 1 ? '' : 's'}</p>
          </div>

          <div className="event-grid mt-2">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { events }
  }
}
