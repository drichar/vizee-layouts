import { useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage'

export default function Chat({ className }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      const scrollHeight = scrollRef.current.scrollHeight
      const height = scrollRef.current.clientHeight
      const maxScrollTop = scrollHeight - height
      scrollRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
    }
  }, [])

  return (
    <>
      <div
        ref={scrollRef}
        className={`${className} absolute top-16 bottom-20 left-0 right-0 lg:top-0 lg:left-8 lg:bottom-16 overflow-y-auto bg-black mr-4 pr-4 lg:mr-0 lg:pr-0`}
      >
        {CHAT_MESSAGES.map((data, i) => (
          <ChatMessage
            key={i}
            username={data.username}
            message={data.message}
          />
        ))}
      </div>
      <div className={`${className} absolute inset-x-0 bottom-0 flex items-end pl-14 pr-5 pb-5 lg:pb-0`}>
        <div className="flex-grow mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="chat-input text-white bg-gray-700 focus:bg-black focus:ring-pink-600 focus:border-pink-600 block w-full pr-12 sm:text-sm border-gray-700 rounded-md"
            placeholder="Type Message"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-300">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

const CHAT_MESSAGES = [
  {
    username: 'kieterma',
    message: `those pads ouuh`
  },
  {
    username: 'thatgirlaris',
    message: `what track is this? id?`
  },
  {
    username: 'codedoesmusic',
    message: `Ayyyyyyyyy`
  },
  {
    username: 'jdelacrux_',
    message: `puttting my subs to work here 🙌`
  },
  {
    username: 'touchdowntony85',
    message: `@thatgirlaris +1 this is def unreleased`
  },
  {
    username: 'daidaig',
    message: `VIBES LFGGG`
  },
  {
    username: 'CDN_MissShorty',
    message: `just finishing up my work day so I'll be lurking`
  },
  {
    username: 'DarkXrez',
    message: `PSA: Don’t drink near your laptops`
  },
  {
    username: 'Cameokillz',
    message: `ayeeee`
  },
  {
    username: 'yulia_i',
    message: `@DarkXrez fuuuuuh that's rough`
  },
  {
    username: 'kieterma',
    message: `those pads ouuh`
  },
  {
    username: 'thatgirlaris',
    message: `what track is this? id?`
  },
  {
    username: 'codedoesmusic',
    message: `Ayyyyyyyyy`
  },
  {
    username: 'jdelacrux_',
    message: `puttting my subs to work here 🙌`
  },
  {
    username: 'touchdowntony85',
    message: `@thatgirlaris +1 this is def unreleased`
  },
  {
    username: 'daidaig',
    message: `VIBES LFGGG`
  },
  {
    username: 'CDN_MissShorty',
    message: `just finishing up my work day so I'll be lurking`
  },
  {
    username: 'DarkXrez',
    message: `PSA: Don’t drink near your laptops`
  },
  {
    username: 'Cameokillz',
    message: `ayeeee`
  },
  {
    username: 'yulia_i',
    message: `@DarkXrez fuuuuuh that's rough`
  },
  {
    username: 'kieterma',
    message: `those pads ouuh`
  },
  {
    username: 'thatgirlaris',
    message: `what track is this? id?`
  },
  {
    username: 'codedoesmusic',
    message: `Ayyyyyyyyy`
  },
  {
    username: 'jdelacrux_',
    message: `puttting my subs to work here 🙌`
  },
  {
    username: 'touchdowntony85',
    message: `@thatgirlaris +1 this is def unreleased`
  },
  {
    username: 'daidaig',
    message: `VIBES LFGGG`
  },
  {
    username: 'CDN_MissShorty',
    message: `just finishing up my work day so I'll be lurking`
  },
]
