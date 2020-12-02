import AccountLayout from '../../../components/layout/Account'

export default function Settings() {
  return (
    <AccountLayout>
      <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 184px)'}}>
        <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl text-gray-900 font-bold">Settings</h1>
      </div>
    </AccountLayout>
  )
}
