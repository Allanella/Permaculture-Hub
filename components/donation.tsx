'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function Donation() {
  const [copied, setCopied] = useState<string | null>(null)

  const bankDetails = {
    account: '11162304',
    name: 'Permaculture Hub Northern Uganda',
    bank: 'Kitgum Co-operative Savings and Credit Society LTD',
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="donate" className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Support Our Mission
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Your donation helps us empower communities through sustainable agriculture and green entrepreneurship in Northern Uganda.
          </p>
        </div>

        {/* Donation Card */}
        <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border border-border">
          <h3 className="font-serif font-bold text-2xl text-foreground mb-8 text-center">
            Bank Transfer Details
          </h3>

          <div className="space-y-6">
            {/* Account Number */}
            <div className="bg-muted/50 rounded-lg p-6">
              <label className="block text-sm font-semibold text-foreground/70 mb-2">
                Account Number
              </label>
              <div className="flex items-center justify-between gap-4">
                <code className="text-xl font-mono font-bold text-primary">
                  {bankDetails.account}
                </code>
                <button
                  onClick={() => copyToClipboard(bankDetails.account, 'account')}
                  className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent text-primary-foreground rounded-lg transition-colors text-sm font-semibold"
                  title="Copy account number"
                >
                  {copied === 'account' ? (
                    <>
                      <Check size={18} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Account Name */}
            <div className="bg-muted/50 rounded-lg p-6">
              <label className="block text-sm font-semibold text-foreground/70 mb-2">
                Account Name
              </label>
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-semibold text-foreground">
                  {bankDetails.name}
                </p>
                <button
                  onClick={() => copyToClipboard(bankDetails.name, 'name')}
                  className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent text-primary-foreground rounded-lg transition-colors text-sm font-semibold"
                  title="Copy account name"
                >
                  {copied === 'name' ? (
                    <>
                      <Check size={18} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bank Name */}
            <div className="bg-muted/50 rounded-lg p-6">
              <label className="block text-sm font-semibold text-foreground/70 mb-2">
                Bank Name
              </label>
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-semibold text-foreground">
                  {bankDetails.bank}
                </p>
                <button
                  onClick={() => copyToClipboard(bankDetails.bank, 'bank')}
                  className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent text-primary-foreground rounded-lg transition-colors text-sm font-semibold"
                  title="Copy bank name"
                >
                  {copied === 'bank' ? (
                    <>
                      <Check size={18} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-foreground text-center text-sm">
              <strong>Thank you</strong> for supporting sustainable agriculture and community empowerment in Northern Uganda. Every donation makes a direct impact on our programs and the lives of the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
