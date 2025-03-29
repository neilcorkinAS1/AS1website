import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-white/80 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="text-sm text-white/80 hover:text-white">
                  Philosophy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-sm text-white/80 hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm text-white/80 hover:text-white">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@as1partners.com" className="text-sm text-white/80 hover:text-white">
                  info@as1partners.com
                </a>
              </li>
              <li>
                <Link href="/login" className="text-sm text-white/80 hover:text-white">
                  Investor Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} AS1 Growth Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 