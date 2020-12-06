export default function ChatMessage({ username, message }) {
  return (
    <div className="flex items-start text-sm sm:text-xs xl:text-sm px-6 py-1">
      <img
        className="h-7 w-7 sm:h-6 sm:w-6 xl:h-7 xl:w-7 rounded-full mr-3"
        src={`https://avatars.dicebear.com/api/initials/${username}.svg`}
        alt={username}
      />
      <div className="self-center text-white">
        {/* Author chip */}
        <div className="inline-flex items-baseline mr-2">
          <span className="font-bold text-gray-400">
            {username}
          </span>
          {/* Chat badges could go here */}
        </div>
        {/* Message */}
        <span className="leading-4 break-words">
          {message}
        </span>
      </div>
    </div>
  )
}
