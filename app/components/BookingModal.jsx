'use client'
import { FaPlane, FaBed, FaPlus, FaCheck, FaTimes } from 'react-icons/fa'

export default function PriceChangeModal({ open, onClose, onAccept, imageSrc, title }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white text-[#002640] rounded-2xl shadow-2xl w-[min(100vw-2rem,900px)] max-h-[90vh] overflow-auto p-6 sm:p-7 md:p-8">
        <button aria-label="Close" onClick={onClose} className="absolute right-4 top-4 text-[#495560] hover:opacity-80">
          <FaTimes />
        </button>

        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#002640]">{title || 'Turquoise Resort'}</h3>
            <p className="text-sm text-[#495560]">2 Person</p>
            <div className="mt-2 text-sm text-[#495560]">
              <p className="flex items-center gap-2"><FaPlane /> <span>incl. flight + transfer</span></p>
              <p className="mt-1">Flight: Amsterdam ✈ Rome (Airline: KLM, Ref: PNR-KJH2)</p>
              <p className="mt-1">Hotel: Hotel Roma Central (Ref: HB-487219)</p>
              <p className="mt-1">Tuesday, April 14 2026–Sunday, April 19, 2026 (6 days)</p>
            </div>
          </div>
          <div className="w-44 h-28 rounded-lg overflow-hidden">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="border-t border-[#E6EEF4] my-6" />

        {/* Price Update Notice */}
        <div className="mb-4">
          <h4 className="font-semibold text-[#002640]">Price Update Detected</h4>
          <p className="text-sm text-[#495560]">The price for your selected trip has changed after a live availability check. Please review the updated price before continuing to payment.</p>
        </div>

        {/* Old/New Price */}
        <div className="space-y-8">
          {/* Old Price */}
          <div>
            <h5 className="font-semibold text-sm mb-3">Old Price</h5>
            <ul className="text-sm space-y-2">
              <li className="flex items-center justify-between py-1">
                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Flight booking with Amadeus</span>
                <span className="font-medium">€ 533 <span className="opacity-70">pp</span></span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Hostel booking with Amadeus</span>
                <span className="font-medium">€ 533 <span className="opacity-70">pp</span></span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Hand luggage Include</span>
                <span>&nbsp;</span>
              </li>
            </ul>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span>Extra fly comfort</span>
              <span>$ 142</span>
            </div>
          </div>

          {/* New Price */}
          <div>
            <h5 className="font-semibold text-sm mb-3">New Price</h5>
            <ul className="text-sm space-y-2">
              <li className="flex items-center justify-between py-1">
                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Flight booking with Amadeus</span>
                <span className="font-medium">€ 633 <span className="opacity-70">pp</span></span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Hostel Booking Charges</span>
                <span className="font-medium">€ 633 <span className="opacity-70">pp</span></span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Hand luggage Include</span>
                <span>&nbsp;</span>
              </li>
            </ul>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span>Extra fly comfort</span>
              <span>$ 142</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E6EEF4] my-8" />

        {/* Total */}
        <div className="text-center mb-4">
          <div className="text-sm text-[#495560] tracking-wide">TOTAL FOR 2 PERSONS</div>
          <div className="mt-2 text-3xl font-bold">€1166<span className="text-sm align-super ml-1">pp</span></div>
          <div className="text-sm text-[#495560] mt-1">2X <span className="ml-4">$ 284</span></div>
          <p className="text-xs text-[#495560] mt-3">Prices are updated in real-time from airlines & hotels. Quote is valid for 10 minutes.</p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button className="h-12 rounded-xl font-semibold text-white hover:brightness-110" style={{ backgroundColor: '#003A64' }} onClick={onAccept}>Accept</button>
          <button className="h-12 rounded-xl font-semibold text-white hover:brightness-110" style={{ backgroundColor: '#495560' }} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}


