'use client'
import { FaPlane, FaBed, FaPlus, FaTimes, FaCheck } from 'react-icons/fa'

export default function FinalPriceModal({ open, onClose, imageSrc, title }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white text-[#002640] rounded-2xl shadow-2xl w-[min(100vw-2rem,900px)] max-h-[90vh] overflow-auto p-6 sm:p-7 md:p-8">
        <button aria-label="Close" onClick={onClose} className="absolute right-4 top-4 text-[#495560] hover:opacity-80">
          <FaTimes />
        </button>

        {/* Header */}
        <div className="flex items-start gap-5">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-[#002640]">{title || 'Turquoise Resort'}</h3>
              <span className="text-[10px] px-2 py-[2px] rounded bg-[#E6EEF4] text-[#003A64]">09:42</span>
            </div>
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

        <h4 className="text-center font-bold mt-6 mb-2">Final Price</h4>
        <p className="text-center text-xs text-[#495560] mb-4">Please review the final price and policies before confirming your booking.</p>

        <div className="border-t border-[#E6EEF4] my-4" />

        <div>
          <h5 className="font-semibold text-sm mb-3">Final Price</h5>
          <ul className="text-sm space-y-2">
            <li className="flex items-center justify-between py-1"><span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Flight booking with Amadeus/Per Person</span><span className="font-medium">€ 533 pp</span></li>
            <li className="flex items-center justify-between py-1"><span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Hostel booking with Amadeus</span><span className="font-medium">€ 533 pp</span></li>
            <li className="flex items-center justify-between py-1"><span className="flex items-center gap-2"><FaCheck className="text-green-500" /> Hand luggage Include</span><span>&nbsp;</span></li>
          </ul>
          <div className="flex items-center justify-between mt-2 text-sm"><span>Extra fly comfort</span><span>$ 142</span></div>
        </div>

        <div className="border-t border-[#E6EEF4] my-6" />

        <div className="text-center mb-4">
          <div className="text-sm text-[#495560] tracking-wide">TOTAL FOR 2 PERSONS</div>
          <div className="mt-2 text-3xl font-bold">€1166<span className="text-sm align-super ml-1">pp</span></div>
          <div className="text-sm text-[#495560] mt-1">2X <span className="ml-4">$ 284</span></div>
        </div>

        <div className="space-y-3">
          {['Cancellation Policy','Refund Rules','Baggage Allowance'].map((label) => (
            <div key={label} className="px-3 h-12 rounded-[12px] bg-[#F5F7FA] text-[#495560] flex items-center justify-between">
              <span className="text-sm">{label}</span>
              <span>▾</span>
            </div>
          ))}
        </div>

        <label className="flex items-start gap-2 text-sm text-[#002640] mt-4">
          <input type="checkbox" className="mt-1" />
          <span>I have read and agree to the price and policies.</span>
        </label>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <button className="h-12 rounded-xl font-semibold text-white hover:brightness-110" style={{ backgroundColor: '#003A64' }} onClick={onClose}>Confirm & Continue</button>
          <button className="h-12 rounded-xl font-semibold text-white hover:brightness-110" style={{ backgroundColor: '#495560' }} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}


