export default function AvatarHandle({ username, }) {
  return (
    <a href="#" className="flex-shrink-0 group block mb-3">
      <div className="flex items-center">
        <div>
          <img className="inline-block h-12 w-12 rounded-full" src="/images/deadmau5.jpg" alt="deadmau5" />
        </div>
        <div className="ml-3">
          <p className="text-base font-semibold text-gray-200 group-hover:text-white leading-5">
            deadmau5
            <span className="inline-flex align-text-bottom ml-1">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="var(--vz-primary)">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </a>
  )
}
