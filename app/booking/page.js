'use client'
import StickyNavbar from '../components/StickyNavbar'
import Footer from '../components/Footer'

export default function BookingPage() {
  return (
    <div className="bg-white min-h-screen">
      <StickyNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-16">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#003a64] mb-8">Book your vacation</h1>

        {/* Steps header (visual only) */}
        <div className="mb-6">
          <div className="flex items-center gap-10 text-sm font-semibold text-[#98A2B3]">
            <span className="relative pb-3 text-[#003a64]">
              Travelers
              <span className="absolute left-0 -bottom-[1px] h-[3px] w-full rounded bg-[#003a64]" />
            </span>
            <span>Additional options</span>
            <span>Overview & Payment</span>
          </div>
          <div className="mt-2 h-px w-full bg-[#E6EEF4]" />
        </div>

        <h2 className="text-2xl font-bold text-[#002640] mb-6">Travelers</h2>
        <p className="text-sm text-[#495560] mb-8">Please enter the names as they appear on your passport or ID card. This is important for your flight tickets.</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form column */}
          <section className="lg:col-span-8 space-y-10">
            {/* Person 1 */}
            <div>
              <h3 className="font-semibold text-[#002640] mb-4">Person 1 (Main Booker)</h3>
              <div className="flex items-center gap-2 mb-3">
                <button className="h-8 px-3 rounded-md border border-[#CBE2F6] bg-[#F5F7FA] text-sm text-[#002640]">Mr</button>
                <button className="h-8 px-3 rounded-md border border-[#CBE2F6] bg-[#F5F7FA] text-sm text-[#002640]">Madam</button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label className="text-[13px] font-semibold text-[#002640]">
                  First Name
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="Enter first name" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Surname
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="Enter surname" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Date of Birth
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="DD/MM/YYYY" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Nationality
                  <select className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 text-[#495560]">
                    <option>Pakistan</option>
                  </select>
                </label>
              </div>
            </div>

            {/* Person 2 */}
            <div>
              <h3 className="font-semibold text-[#002640] mb-4">Person 2</h3>
              <div className="flex items-center gap-2 mb-3">
                <button className="h-8 px-3 rounded-md border border-[#CBE2F6] bg-[#F5F7FA] text-sm text-[#002640]">Mr</button>
                <button className="h-8 px-3 rounded-md border border-[#CBE2F6] bg-[#F5F7FA] text-sm text-[#002640]">Madam</button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label className="text-[13px] font-semibold text-[#002640]">
                  First Name
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="Enter first name" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Surname
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="Enter surname" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Date of Birth
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="DD/MM/YYYY" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Nationality
                  <select className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 text-[#495560]">
                    <option>Pakistan</option>
                  </select>
                </label>
              </div>
            </div>

            {/* Contact details */}
            <div>
              <h3 className="font-semibold text-[#002640] mb-4">Contact Detail of Main Booker</h3>
              <div className="flex items-center gap-2 mb-3">
                <button className="h-8 px-3 rounded-md border border-[#CBE2F6] bg-[#F5F7FA] text-sm text-[#002640]">Mr</button>
                <button className="h-8 px-3 rounded-md border border-[#CBE2F6] bg-[#F5F7FA] text-sm text-[#002640]">Madam</button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label className="text-[13px] font-semibold text-[#002640]">
                  Email Address
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="name@example.com" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Nationality
                  <select className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 text-[#495560]">
                    <option>Pakistan</option>
                  </select>
                </label>
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-[13px] font-semibold text-[#002640] col-span-1">
                    Postal Code
                    <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="12345" />
                  </label>
                  <label className="text-[13px] font-semibold text-[#002640] col-span-1">
                    House Number
                    <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="42" />
                  </label>
                  <label className="text-[13px] font-semibold text-[#002640] col-span-1">
                    Additional
                    <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="A" />
                  </label>
                </div>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Street
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="Street" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Place of Residence
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="City" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Phone Number
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="(+92) 300-0000000" />
                </label>
              </div>
            </div>

            {/* Emergency */}
            <div>
              <h3 className="font-semibold text-[#002640] mb-4">Emergency Contact</h3>
              <div className="grid grid-cols-1 gap-4">
                <label className="text-[13px] font-semibold text-[#002640]">
                  Name
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="Contact name" />
                </label>
                <label className="text-[13px] font-semibold text-[#002640]">
                  Phone Number
                  <input className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="(+92) 300-0000000" />
                </label>
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full sm:w-72 h-12 rounded-[10px] font-semibold text-white" style={{ backgroundColor: '#003A64' }}>Continue</button>
            </div>
          </section>

          {/* Summary card */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden border border-[#E6EEF4]">
              <div className="h-40 bg-gray-200">
                <img src="/home/home-landing.jpg" alt="Resort" className="w-full h-full object-cover" />
              </div>
              <div className="p-5" style={{ backgroundColor: '#00223A' }}>
                <h4 className="text-white text-lg font-bold">Turquoise Resort</h4>
                <p className="text-white/80 text-sm">Turquoise Resort Chogogo Dive & Beach Curacao</p>
                <p className="text-white/70 text-sm mt-1">8 days, 2 people, All inclusive</p>
                <button className="w-full mt-4 h-12 rounded-[12px] bg-white/10 hover:bg-white/15 text-white font-semibold">Show travel details</button>

                <div className="mt-6 text-white">
                  <h5 className="font-bold mb-2">Price Overview</h5>
                  <div className="space-y-1 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-center justify-between opacity-90">
                        <span>2 x €533 per person</span>
                        <span>€1200</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 text-lg font-bold">
                    <span>Total 2 persons</span>
                    <span>€1066</span>
                  </div>
                  <p className="text-white/70 text-xs mt-2">At this low price, no down payment is possible</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-[#002640] font-semibold mb-2">Complete booking later?</h4>
              <button className="w-full h-12 rounded-[12px] border border-[#003A64] text-[#003A64] font-semibold">Show travel details</button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}


