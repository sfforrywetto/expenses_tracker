import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const LoggedIn = { firstName: 'admin', lastName: 'Admin', email: 'admin@gmail.com' }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type="greeting" title="Welcome" user={LoggedIn?.firstName || "Guest"} subtext="Access and manage your account and transactions efficiently"/>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.55} />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSideBar user={LoggedIn} transactions={[]} banks={[{ currentBalance: 125.66 }, { currentBalance: 150.16 }]} />
    </section>
  )
}

export default Home