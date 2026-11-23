import React from 'react'

function Footer() {
  return (
    <footer className="h-[95px] w-full bg-[#151515] text-white">
      <div className="mx-auto flex h-full max-w-[980px] items-center justify-between px-[20px] lg:px-0">
        <a href="#" aria-label="Boulevard Market" className="flex h-[54px] w-[54px] items-center justify-center">
          <svg width="54" height="38" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 1.5L58 10.5V24C58 33.5 47.8 39.7 32 42.5C16.2 39.7 6 33.5 6 24V10.5L32 1.5Z" stroke="white" strokeWidth="1.5" />
            <path d="M32 5L54.5 12.2V23.5C54.5 31 46.2 36.4 32 39.1C17.8 36.4 9.5 31 9.5 23.5V12.2L32 5Z" stroke="white" strokeWidth="0.7" />
            <text x="32" y="18" fill="white" textAnchor="middle" fontFamily="Arial" fontSize="8" fontWeight="700" letterSpacing="0.7">BOULEVARD</text>
            <text x="32" y="27" fill="white" textAnchor="middle" fontFamily="Arial" fontSize="6.5" fontWeight="700" letterSpacing="1.1">MARKET</text>
            <path d="M17 22H47" stroke="white" strokeWidth="0.7" />
            <circle cx="32" cy="22" r="1.3" fill="white" />
          </svg>
        </a>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-[24px]">
            {['iMac', 'iPad', 'iPhone'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[15px] font-bold text-white hover:text-[#c7c7ce]">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-[10px]">
          <div className="flex h-[34px] w-[38px] items-center justify-center rounded-[3px] bg-white text-[12px] font-black italic text-[#1434cb]">
            VISA
          </div>
          <div className="flex h-[34px] w-[38px] items-center justify-center rounded-[3px] bg-white">
            <div className="h-[20px] w-[20px] rounded-full border-[5px] border-[#eb001b] shadow-[8px_0_0_-5px_#f79e1b]" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
