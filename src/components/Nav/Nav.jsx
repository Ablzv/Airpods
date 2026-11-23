import React from 'react'

function Nav() {
  const navItems = ['iMac', 'iPad', 'iPhone']

  return (
    <>
      <nav className="h-[58px] w-full bg-[#1d1d24] text-white">
        <div className="mx-auto flex h-full max-w-[980px] items-center justify-between px-5 xl:px-0">
          <div className="flex h-full items-center">
            <a
              href="#"
              aria-label="Boulevard Market"
              className="mr-[44px] flex h-full items-center"
            >
              <svg
                width="54"
                height="38"
                viewBox="0 0 64 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M32 1.5L58 10.5V24C58 33.5 47.8 39.7 32 42.5C16.2 39.7 6 33.5 6 24V10.5L32 1.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M32 5L54.5 12.2V23.5C54.5 31 46.2 36.4 32 39.1C17.8 36.4 9.5 31 9.5 23.5V12.2L32 5Z"
                  stroke="white"
                  strokeWidth="0.7"
                />
                <text
                  x="32"
                  y="18"
                  fill="white"
                  textAnchor="middle"
                  fontFamily="Arial, sans-serif"
                  fontSize="8"
                  fontWeight="700"
                  letterSpacing="0.7"
                >
                  BOULEVARD
                </text>
                <text
                  x="32"
                  y="27"
                  fill="white"
                  textAnchor="middle"
                  fontFamily="Arial, sans-serif"
                  fontSize="6.5"
                  fontWeight="700"
                  letterSpacing="1.1"
                >
                  MARKET
                </text>
                <path d="M17 22H47" stroke="white" strokeWidth="0.7" />
                <circle cx="32" cy="22" r="1.3" fill="white" />
              </svg>
            </a>

            <ul className="hidden items-center gap-[29px] sm:flex">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[16px] font-bold leading-none text-white transition-colors hover:text-[#c7c7ce]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-[19px]">
            <button
              type="button"
              aria-label="Search"
              className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-70"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16L21 21" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Shopping bag"
              className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-70"
            >
              <svg
                width="19"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5.5 8.5H18.5L20 21H4L5.5 8.5Z" />
                <path d="M8.5 8.5V6.8C8.5 4.6 10 3 12 3C14 3 15.5 4.6 15.5 6.8V8.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section
        className="relative flex h-[215px] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center sm:h-[215px]"
        style={{ backgroundImage: 'url(/Header.png)' }}
      >
        <div className="relative z-10 mt-[4px] flex flex-col items-center">
          <h1 className="mb-[18px] text-[54px] font-semibold leading-none tracking-[-2px] text-white sm:text-[64px]">
            AirPods Pro
          </h1>

          <a
            href="https://www.apple.com/airpods-pro/"
            target="_blank"
            rel="noreferrer"
            className="flex h-[34px] items-center gap-2 rounded-[4px] bg-white px-[14px] text-[11px] font-medium uppercase text-black shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-colors hover:bg-[#eeeeee]"
          >
            <span>Official Site</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 3H21V10" />
              <path d="M10 14L21 3" />
              <path d="M21 14V21H3V3H10" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}

export default Nav