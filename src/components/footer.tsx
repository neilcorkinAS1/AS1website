import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-sm text-white/80 hover:text-white">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="text-sm text-white/80 hover:text-white">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-white/80 hover:text-white">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-sm text-white/80">
                  AS1 Growth Partners
                </p>
              </li>
              <li>
                <p className="text-sm text-white/80">
                  Suite 7.02, 264-278 George Street<br />
                  Australia Square<br />
                  Sydney, NSW 2000
                </p>
              </li>
              <li>
                <p className="text-sm text-white/80">
                  Email: <a href="mailto:info@as1growthpartners.com" className="hover:text-white">info@as1growthpartners.com</a>
                </p>
              </li>
              <li>
                <p className="text-sm text-white/80">
                  Send us a pitch deck: <a href="mailto:scout@as1growthpartners.com" className="hover:text-white">scout@as1growthpartners.com</a>
                </p>
              </li>
              <li>
                <p className="text-sm text-white/80">
                  AFSL 514682<br />
                  ABN 67 633 419 262
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Investors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio/growth-fund-1" className="text-sm text-white/80 hover:text-white">
                  AS1 Growth Fund 1
                </Link>
              </li>
              <li>
                <Link href="/portfolio/fund-of-funds" className="text-sm text-white/80 hover:text-white">
                  AS1 Fund of Funds
                </Link>
              </li>
              <li>
                <a href="https://www.registrydirect.com.au/login" className="text-sm text-white/80 hover:text-white">
                  Investor Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legals</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/important-information" className="text-sm text-white/80 hover:text-white">
                  Important Information
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="space-y-2">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} AS1 Growth Partners. All rights reserved.
            </p>
            <p className="text-sm text-white/60">
              AS1 Growth Partners Pty Ltd is a corporate authorised representative (CAR No. 001276989) of AS1 LV Pty Ltd AFSL 514682, ABN 60 623 083 689
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 