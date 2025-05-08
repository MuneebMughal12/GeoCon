// src/components/HamburgerButton.jsx
import React from 'react'

/**
 * Props:
 * - isOpen: boolean
 * - toggle:   () => void
 */
export default function HamburgerButton({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-between w-6 h-5 focus:outline-none"
    >
      {/* Top bar */}
      <span
        className={`
          block h-0.5 w-full bg-[#d0a688] rounded
          transition-transform duration-300
          ${isOpen ? 'transform translate-y-2 rotate-45' : ''}
        `}
      />
      {/* Middle bar */}
      <span
        className={`
          block h-0.5 w-full bg-[#d0a688] rounded
          transition-opacity duration-300
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
      {/* Bottom bar */}
      <span
        className={`
          block h-0.5 w-full bg-[#d0a688] rounded
          transition-transform duration-300
          ${isOpen ? 'transform -translate-y-2 -rotate-45' : ''}
        `}
      />
    </button>
  )
}
