'use client'

import { Plane, Briefcase, Car, CheckCircle2, ShieldCheck, FileText, Ticket, Armchair } from 'lucide-react'
import StickyNavbar from '../../components/StickyNavbar'
import Footer from '../../components/Footer'

export default function TripSummaryPage() {
  const brand = '#00223A'

  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <StickyNavbar />

      {/* Page Container */}
      <div style={{ maxWidth: 1152, margin: '0 auto', paddingLeft: 16, paddingRight: 16, paddingTop: 96, paddingBottom: 48 }}>
        {/* Breadcrumb */}
        <div style={{ color: '#64748b', fontSize: 14, marginBottom: 8 }}>
          My Trips • Turquoise Resort Chogogo Dive & Beach Curacao
        </div>

        {/* Heading */}
        <h1 style={{ color: brand, fontWeight: 800, fontSize: 36, margin: 0, marginBottom: 8 }}>Trip Summary</h1>
        <p style={{ color: '#374151', marginTop: 0, marginBottom: 24 }}>
          Below you will find the summary of your vacation and additional options.
        </p>

        {/* 2/3 - 1/3 Columns */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          {/* Left 2/3: image + text side-by-side */}
          <div style={{ flex: '0 0 66.666%', maxWidth: '66.666%' }}>
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              {/* Image */}
              <div style={{ width: 360, height: 220, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src="/home/home-landing.jpg"
                  alt="Trip"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Text Block */}
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 style={{ margin: 0, color: brand, fontWeight: 800, fontSize: 18 }}>Turquoise Resort</h3>
                <div style={{ marginTop: 4, color: '#111827', fontWeight: 600, lineHeight: 1.3 }}>
                  Turquoise Resort Chogogo Dive &<br />
                  Beach Curacao
                </div>

                <div style={{ marginTop: 12, color: '#000', lineHeight: 1.6 }}>
                  Wed 10 Sep - Mon 15 Sep 2025, 06 days,<br />
                  🇵🇰 Pakistan<br />
                  2 people,<br />
                  All inclusive
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'center', color: brand, marginTop: 8 }}>
                  <Plane size={20} />
                  <Briefcase size={20} />
                  <Car size={20} />
                </div>

                <button
                  style={{ marginTop: 12, background: brand, color: 'white', border: 0, padding: '10px 14px', borderRadius: 6, cursor: 'pointer' }}
                >
                  Check Status
                </button>
              </div>
            </div>
          </div>

          {/* Right 1/3: Actions + Documents stacked */}
          <div style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}>
            <div style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Actions */}
              <section style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, background: 'white' }}>
                <h4 style={{ margin: 0, marginBottom: 8, fontSize: 14, color: '#111827', fontWeight: 700 }}>Actions</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Row label="Online Check-In" sub="Track your flight" Icon={CheckCircle2} size={18} />
                  <Row label="Add Baggage" sub="Add baggage to your flight" Icon={Briefcase} size={18} />
                  <Row label="Select Seats" sub="Select seats on your flight" Icon={Armchair} size={18} />
                  <Row label="Book Transfers" sub="Book transfers from the airport to your hotel" Icon={Car} size={18} />
                  <Row label="Car Hire" sub="Rent a car for your trip" Icon={Car} size={18} />
                  <Row label="Insurance" sub="Purchase travel insurance for your trip" Icon={ShieldCheck} size={18} />
                </div>
              </section>

              {/* Documents */}
              <section style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, background: 'white' }}>
                <h4 style={{ margin: 0, marginBottom: 8, fontSize: 14, color: '#111827', fontWeight: 700 }}>Documents</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Row label="Invoice" sub="Download your invoice" Icon={FileText} size={18} />
                  <Row label="E-Ticket" sub="Download your e-ticket" Icon={Ticket} size={18} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .stack-md { flex-direction: column !important; }
        }
      `}</style>
    </div>
  )
}

function Row({ label, sub, Icon, size = 16 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 28, height: 28, borderRadius: 6, background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {Icon ? <Icon size={size} color="#111827" /> : '✓'}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', lineHeight: 1.4 }}>{label}</div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>{sub}</div>
      </div>
    </div>
  )
}


