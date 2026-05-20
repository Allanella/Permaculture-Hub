'use client'

import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="Permaculture Hub"
              className="h-12 w-auto"
            />
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering communities through sustainable agriculture and green entrepreneurship in Northern Uganda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-background transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-background transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Donations */}
          <div>
            <h4 className="font-semibold text-background mb-4">Support Us</h4>
            <p className="text-background/80 text-sm mb-4">
              Help us empower communities through sustainable agriculture.
            </p>
            <div className="space-y-2 text-sm text-background/90 bg-background/10 p-3 rounded-lg">
              <p>
                <strong>Account:</strong><br />
                {'"'}11162304{'"'}
              </p>
              <p>
                <strong>Name:</strong><br />
                Permaculture Hub Northern Uganda
              </p>
              <p>
                <strong>Bank:</strong><br />
                Kitgum Co-operative Savings and Credit Society LTD
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-background/80">
              <p>&copy; 2024 Permaculture Hub Northern Uganda. All rights reserved.</p>
            </div>
            <div className="flex gap-6 justify-end text-sm text-background/80">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
