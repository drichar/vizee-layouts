import Menu from './Menu'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black pt-16">
      <header className="fixed top-0 inset-x-0 z-40">
        <Menu />
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="flex-none">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            &copy; 2020 Vizee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
