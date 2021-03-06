import Layout from '../components/Layout'

export default function Calendar() {
  return (
    <Layout>
      <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 184px)'}}>
        <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl text-gray-900 font-bold">Calendar</h1>
      </div>
    </Layout>
  )
}
