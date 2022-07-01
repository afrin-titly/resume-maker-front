import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div>
          {children}
        </div>
      </main>
      <footer className="text-center text-gray-500 text-xs">
        &copy;2022 Resume maker. All rights reserved.
      </footer>
    </>
  )
}

export default Layout