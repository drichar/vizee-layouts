import { useState } from 'react'
import cn from 'classnames'
import Layout from '../../components/Layout'
import Chat from '../../components/event/Chat'
import VideoPlayer from '../../components/event/VideoPlayer'
import AvatarHandle from '../../components/AvatarHandle'
import ChatToggle from '../../components/event/ChatToggle'

export default function Event() {
  const [showChat, setShowChat] = useState(true)

  const renderInfo = () => (
    <div className="lg:flex lg:items-center lg:justify-between px-6 sm:px-0">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
          The Last Catbender
        </h2>
        <div className="mt-1 flex flex-col lg:flex-row lg:flex-wrap lg:mt-0">
          <div className="mt-2 flex items-center lg:mr-6">
            <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-semibold bg-primary text-white uppercase">
              Live Now
            </span>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300 lg:mr-6">
            {/* Heroicon name: calendar */}
            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Started Dec 4, 2020 1:11pm
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300 lg:mr-6">
            {/* Heroicon name: location-marker */}
            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            East 51st Street, Austin, TX, USA
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="mr-3 lg:mr-0 lg:ml-3">
          <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm lg:text-base font-medium text-gray-300 bg-black hover:bg-white-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-pink-600">
            {/* Heroicon name: share */}
            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
        </span>
        <span className="mr-3 lg:mr-0 lg:ml-3">
          <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm lg:text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-pink-600">
            {/* Heroicon name: cog */}
            <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Manage
          </button>
        </span>
      </div>
    </div>
  )

  return (
    <Layout>
      <article className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8 page-min-height">
        <div className={cn('grid video-chat-grid gap-y-6 sm:py-6 lg:py-8', {
          'show-chat': showChat
        })}>
          <section>
            <VideoPlayer />
          </section>
          <aside className={cn('relative event-chat', {
            'lg:w-96': showChat,
            'h-8 lg:w-8': !showChat
          })}>
            <Chat className={cn({
              'hidden': !showChat,
              'block': showChat
            })} />
            <ChatToggle
              showChat={showChat}
              onToggle={() => setShowChat(!showChat)}
            />
          </aside>
        </div>
        <div className="my-6">
          {renderInfo()}
        </div>
        <div className="my-8 px-6 sm:px-0">
          <AvatarHandle />
          <div className="prose text-gray-500 pl-14 ml-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed arcu non odio euismod lacinia.
            </p>
            <p>
              Leo a diam sollicitudin tempor id eu nisl nunc mi. Non blandit massa enim nec dui nunc mattis. Dui sapien eget mi proin sed.
            </p>
            <p>
              Et malesuada fames ac turpis!
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}
