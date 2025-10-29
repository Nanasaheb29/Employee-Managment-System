import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-300 py-6 mt-6 shadow-inner flex justify-center items-center">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
