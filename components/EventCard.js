import { useEffect } from 'react'
import moment from 'moment'

export default function EventCard({ event }) {
  useEffect(() => {
    const card = document.getElementById(`card-${event.id}`)
    console.log(card.getBoundingClientRect())
    const eventLink = document.getElementById(`event-link-${event.id}`)

    const handleClick = () => {
      const isTextSelected = window.getSelection().toString()
      if (!isTextSelected) {
        eventLink.click()
      }
    }

    card.addEventListener('click', handleClick)

    const clickableElements = Array.from(card.querySelectorAll('.event-clickable'));
    clickableElements.forEach((el) =>
      el.addEventListener('click', (e) => e.stopPropagation())
    );

    return () => card.removeEventListener('click', handleClick)
  }, [])

  return (
    <article id={`card-${event.id}`} className="relative group cursor-pointer bg-gray-950 overflow-hidden shadow rounded-3xl transform transition-transform hover:-translate-y-2">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="object-cover text-white"
          src={event.photo || event.account.photo}
          alt={event?.thumb || event?.account?.name || event?.name}
        />
      </div>
      <div className="event-card-info px-6 mt-6 md:mt-4">
        <h2>
          <a
            href={`https://vizee.live/${event.account.username}/${event.id}`}
            className="event-clickable line-clamp-2 text-gray-100 group-hover:text-primary transition-colors font-bold text-xl xs:text-2xl sm:text-xl"
            id={`event-link-${event.id}`}
            title={event.name}
          >
            {event.name}
          </a>
        </h2>
        <p className="mb-4">
          <a
            href={`https://vizee.live/${event.account.username}`}
            className="event-clickable text-gray-400 hover:text-gray-300 transition-colors font-semibold text-base xs:text-lg sm:text-base"
            title={event.account?.name || ''}
          >
            {event.account?.name}
          </a>
        </p>
      </div>
      <div className="px-6 mb-1">
        <time className="block text-gray-500 text-base xs:text-lg sm:text-base lg:text-lg xl:text-base" dateTime={moment(event.start).format()}>
          <svg className="inline-block align-text-top w-5 h-5 mr-2 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {moment(event.start).format('MMMM Do, h:mm a')}
        </time>
      </div>
      {/*
        <div className="bg-gray-850 px-4 py-2 sm:px-6 mt-6">
          <span className="relative z-0 flex rounded-md">
            <a href="https://www.facebook.com" className="relative w-1/2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-transparent text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-pink-600 focus:border-pink-600 transition-colors">
              <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
              </svg>
              Edit
            </a>
            <a href="https://www.facebook.com" className="relative w-1/2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-transparent text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-pink-600 focus:border-pink-600 transition-colors">
              <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Manage
            </a>
          </span>
        </div>
      */}
      <div className="flex items-center justify-between pl-6 pr-2 py-2 mt-4">
        <div className="relative z-0 rounded-md">
          <button href="https://www.facebook.com" className="event-clickable relative inline-flex items-center justify-center px-4 py-1 rounded bg-gray-800 text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-pink-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-pink-600 focus:border-pink-600 transition-colors">
            Buy Ticket
          </button>
        </div>
        <div className="relative z-0 inline-flex rounded-md">
          <button type="button" className="event-clickable  relative inline-flex items-center px-2 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-pink-600 focus:border-pink-600">
            <span className="sr-only">Share</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          <button type="button" className="event-clickable relative inline-flex items-center px-2 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-pink-600 focus:border-pink-600">
            <span className="sr-only">Favorite</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      <p className="absolute top-0 left-0 px-4 py-4 transform origin-top-left xs:scale-110 sm:scale-100">
        <span className="py-1 px-3 bg-primary rounded-sm shadow text-white font-extrabold uppercase">
          Available Now
        </span>
      </p>
    </article>
  )
}
