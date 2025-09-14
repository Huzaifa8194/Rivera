'use client'
import { useState } from 'react'
import { FaHeart, FaUser, FaArrowRight, FaPlane, FaBed, FaPlus, FaCheck, FaTimes } from 'react-icons/fa'
import { AiOutlineCaretDown, AiOutlineInfoCircle } from 'react-icons/ai'
import StickyNavbar from '../../components/StickyNavbar'
import Footer from '../../components/Footer'
import PriceChangeModal from '../../components/BookingModal'
import FinalPriceModal from '../../components/FinalPriceModal'

export default function VacationDetailPage({ params }) {
  const [activeTab, setActiveTab] = useState(0)
  const [showAvailability, setShowAvailability] = useState(false)
  const [showTripDetails, setShowTripDetails] = useState(false)
  const [showPriceChangeModal, setShowPriceChangeModal] = useState(false)
  const [showFinalPriceModal, setShowFinalPriceModal] = useState(false)

  // Data preserved; UI fully rebuilt
  const vacationData = {
    id: params.id,
    title: 'Turquoise Resort Chogogo Dive & Beach Curacao',
    subtitle:
      'Holidays, Sun holidays, Turkiye, Mediterenean Sea, Antalya, Turquoise Resort Chogogo Dive & Beach Curacao',
    rating: 8.9,
    images: ['/home/home-landing.jpg', '/home/home-landing.jpg', '/home/home-landing.jpg', '/home/home-landing.jpg', '/home/home-landing.jpg'],
    overview: {
      general: ['Water fun guaranteed!', 'Service with a smile', 'All-inclusive through and through.'],
      description: [
        "One of the most charming holiday resorts on the Red Sea is the Selections hotel, 'Three Corners Sunny Beach Resort'. This spacious family hotel on Hurghada's beach is part of the Belgian Three Corners chain, and boasts a long list of fun activities. This means double the fun for all ages and balmy days by the sea.",
        "The hotel boasts three large swimming pools, including an Olympic-sized pool for laps and a pool with water features and slides. There's also a diving center, a kitesurfing center, a wellness center, and an entertainment team that organizes all sorts of fun activities twice a day. Holidaying with young children? Then it's good to know that there's a Trixie kids' club. This way, they can enjoy crafts while you take some time for yourself. For any questions, you can always contact the Dutch-speaking guest relations team.",
        "When it comes to food, you'll be in your element at the Three Corners Sunny Beach. It's fresh, there's plenty of variety every day, and there are surprising themed buffets with themes like 'The Far East', 'French Romance', and 'Oriental Night'. Prefer à la carte? The Italian restaurant Dolce Vita serves crispy pizzas and fresh pasta."
      ]
    },
    facilities: {
      general: [
        'Official rating: 4 stars',
        'total number of rooms / apartments: 522',
        'total number of buildings: 9',
        'child-friendly complex',
        'reception',
        'no elevator available',
        'safe (in room)',
        'lobby',
        'dining options: restaurant (number 3), à la carte restaurant (for an additional fee)'
      ],
      additional: [
        'Drinking places: bar number 3, lobby bar, pool bar, beach bar',
        'doctor service',
        'shuttle bus (destination to Hurghada center and El Gouna center)',
        'parking lot',
        'Wi-Fi in public areas (free), in room (for a fee)',
        'bed linen including change 7 times a week',
        'towels including change 7 times a week'
      ],
      children: ['baby bed', 'high chair', 'playground', 'mini club, open from 10:00 to 17:00']
    },
    roomTypes: [
      { name: 'Single Room Comfort', capacity: 'Suitable for 1 person' },
      { name: 'Single Room Comfort', capacity: 'Suitable for 1 person' },
      { name: 'Single Room Comfort', capacity: 'Suitable for 1 person' },
      { name: 'Single Room Comfort', capacity: 'Suitable for 1 person' }
    ],
    reviews: [
      { rating: 7.9, text: 'Suitable for people of all ages. Will recommend to all looking to travel to Turkey.', author: 'Anonymous', flag: '🇫🇷' },
      { rating: 7.9, text: 'Suitable for people of all ages. Will recommend to all looking to travel to Turkey.', author: 'Anonymous', flag: '🇫🇷' },
      { rating: 7.9, text: 'Suitable for people of all ages. Will recommend to all looking to travel to Turkey.', author: 'Anonymous', flag: '🇫🇷' }
    ]
  }

  const tabLabels = ['Overview', 'Facilities', 'Room Types', 'Reviews', 'Environment']

  return (
    <div className="bg-white min-h-screen">
      <StickyNavbar />

      {/* Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-14">
        {/* Breadcrumbs */}
        <p className="text-sm text-[#667085] mb-4">Featured &gt; {vacationData.title}</p>

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="flex-1 text-[#003a64] font-bold leading-tight text-[32px] sm:text-[40px]">{vacationData.title}</h1>
          <div className="shrink-0 flex items-center gap-2">
            <span className="grid place-items-center w-5 h-5 rounded-full border-2 border-[#003a64]">
              <FaHeart className="text-[#003a64]" size={10} />
            </span>
            <span className="bg-[#003a64] text-white font-bold text-sm px-2 py-1 rounded-md">{vacationData.rating} / 10</span>
          </div>
        </div>
        <p className="text-sm text-[#666666] mb-5">{vacationData.subtitle}</p>

        {/* Utility Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 mb-8">
          <div className="w-full lg:w-auto flex items-center gap-3 rounded-md bg-[#EAF4FF] px-4 py-3">
            <span className="w-6 h-6 rounded-full bg-[#003a64] text-white grid place-items-center flex-shrink-0 font-bold text-sm">i</span>
            <span className="text-[#003a64] font-semibold text-sm sm:text-base">Hurry Up! This offer may get over soon</span>
          </div>
          <div className="w-full lg:w-auto flex items-center gap-2">
            <a href="/booking" className="w-full lg:w-auto bg-[#003a64] hover:bg-[#002a4a] text-white px-5 py-2.5 rounded-md font-semibold text-center">Buy Now</a>
            <button className="w-full lg:w-auto border border-[#003a64] text-[#003a64] hover:bg-gray-50 px-5 py-2.5 rounded-md font-semibold flex items-center justify-center gap-2">
              <FaHeart /> Add to Favourites
            </button>
          </div>
        </div>

        {/* Gallery */}
        <section className="mb-10">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-8">
              <div className="h-[300px] md:h-[420px] rounded-lg overflow-hidden">
                <img src={vacationData.images[0]} alt={vacationData.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-2 h-[300px] md:h-[420px]">
              {vacationData.images.slice(1).map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <img src={img} alt={`${vacationData.title} ${i + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Content */}
          <section className="lg:col-span-8">
            {/* Tabs */}
            <div className="border-b border-[#e0e0e0] overflow-x-auto">
              <div className="flex whitespace-nowrap gap-6 px-1">
                {tabLabels.map((label, idx) => (
                  <button
                    key={label}
                    onClick={() => setActiveTab(idx)}
                    className={`py-3 text-[18px] sm:text-[20px] font-medium text-[#666666] border-b-4 -mb-[1px] px-1 ${
                      activeTab === idx ? 'border-[#003a64] text-[#003a64] font-bold' : 'border-transparent'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Panels */}
            <div className="mt-6 space-y-10">
              {activeTab === 0 && (
                <div>
                  <h3 className="text-[18px] font-bold text-[#002640] mb-3">General</h3>
                  <ul className="list-disc pl-5 mb-4 space-y-1 text-[14px] text-black">
                    {vacationData.overview.general.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                  {vacationData.overview.description.map((p, i) => (
                    <p key={i} className="mb-4 leading-relaxed text-[14px] text-black">{p}</p>
                  ))}

                  <h3 className="text-[18px] font-bold text-[#002640] mt-8 mb-3">Facilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#002640] mb-2">General Facilities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                        {vacationData.facilities.general.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002640] mb-2">Additional Services</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                        {vacationData.facilities.additional.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold text-[#002640] mb-2">Children's Facilities</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                      {vacationData.facilities.children.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="text-[18px] font-bold text-[#002640] mt-10 mb-3">Room Types</h3>
                  <div className="space-y-4">
                    {vacationData.roomTypes.map((room, idx) => (
                      <button key={idx} className="w-full text-left bg-[#F3F3F3] border border-[#e0e0e0] rounded-md p-5 hover:shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-bold text-black mb-2">{room.name}</h5>
                            <div className="flex items-center gap-2 text-sm text-black">
                              <FaUser className="text-[#666]" />
                              <span>{room.capacity}</span>
                            </div>
                          </div>
                          <FaArrowRight className="text-[#003a64]" />
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <button className="bg-[#003a64] hover:bg-[#002a4a] text-white font-bold px-6 py-3 rounded-md">View All Rooms</button>
                  </div>

                  <h3 className="text-[18px] font-bold text-[#002640] mt-10 mb-3">Reviews</h3>
                  <div className="space-y-4">
                    {vacationData.reviews.map((r, i) => (
                      <div key={i} className="bg-[#F3F3F3] border border-[#e0e0e0] rounded-md p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-[#003a64] text-white text-sm px-2 py-1 rounded">{r.rating} Good!</span>
                          <div className="flex items-center gap-2 text-black text-sm">
                            <span className="text-lg leading-none">{r.flag}</span>
                            <span>{r.author}</span>
                          </div>
                        </div>
                        <p className="text-black text-sm">{r.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <button className="bg-[#003a64] hover:bg-[#002a4a] text-white font-bold px-6 py-3 rounded-md">View All Reviews</button>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div>
                  <h3 className="text-[18px] font-bold text-[#002640] mb-3">Facilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#002640] mb-2">General Facilities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                        {vacationData.facilities.general.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002640] mb-2">Additional Services</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                        {vacationData.facilities.additional.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold text-[#002640] mb-2">Children's Facilities</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                      {vacationData.facilities.children.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <h3 className="text-[18px] font-bold text-[#002640] mb-3">Room Types</h3>
                  <div className="space-y-4">
                    {vacationData.roomTypes.map((room, idx) => (
                      <button key={idx} className="w-full text-left bg-[#F3F3F3] border border-[#e0e0e0] rounded-md p-5 hover:shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-bold text-black mb-2">{room.name}</h5>
                            <div className="flex items-center gap-2 text-sm text-black">
                              <FaUser className="text-[#666]" />
                              <span>{room.capacity}</span>
                            </div>
                          </div>
                          <FaArrowRight className="text-[#003a64]" />
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <button className="border border-[#003a64] text-[#003a64] font-semibold px-6 py-2 rounded-md">View All Rooms</button>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div>
                  <h3 className="text-[18px] font-bold text-[#002640] mb-3">Reviews</h3>
                  <div className="space-y-4">
                    {vacationData.reviews.map((r, i) => (
                      <div key={i} className="bg-[#F3F3F3] border border-[#e0e0e0] rounded-md p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-[#003a64] text-white text-sm px-2 py-1 rounded">{r.rating} Good!</span>
                          <div className="flex items-center gap-2 text-black text-sm">
                            <span className="text-lg leading-none">{r.flag}</span>
                            <span>{r.author}</span>
                          </div>
                        </div>
                        <p className="text-black text-sm">{r.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <button className="border border-[#003a64] text-[#003a64] font-semibold px-6 py-2 rounded-md">View All Reviews</button>
                  </div>
                </div>
              )}

              {activeTab === 4 && (
                <div>
                  <h3 className="text-[18px] font-bold text-[#002640] mb-3">Environment</h3>
                  <p className="mb-2 leading-relaxed text-black">The Turquoise Resort is beautifully situated along the Mediterranean coast, offering stunning sea views and easy access to pristine beaches. The resort is surrounded by lush gardens and provides a perfect blend of natural beauty and luxury amenities.</p>
                  <p className="leading-relaxed text-black">Located in the heart of Antalya, guests can easily explore the rich cultural heritage of Turkey while enjoying the modern comforts of this world-class resort. The location provides the perfect base for both relaxation and adventure.</p>
                </div>
              )}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-[120px]">
              <div className="rounded-2xl p-5 md:p-6 text-white" style={{ backgroundColor: '#00223A' }}>
                {!showAvailability ? (
                  <>
                    <h2 className="text-3xl leading-tight font-bold mb-3">Check Availability</h2>
                    <p className="text-lg mb-4">Choose your dates to see available options and prices.</p>

                    <div className="flex flex-col gap-3">
                  <div>
                    <p className="mb-1 font-medium">Departure date</p>
                    <div className="px-3 h-[59px] rounded-[15px] bg-white flex items-center justify-between">
                      <span className="text-[20px] text-[#495560]">Wed 10 Sep 2025</span>
                      <AiOutlineCaretDown className="text-[#495560]" />
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 font-medium">Travel Group</p>
                    <div className="px-3 h-[59px] rounded-[15px] bg-white flex items-center justify-between">
                      <span className="text-[20px] text-[#495560]">2 people</span>
                      <AiOutlineCaretDown className="text-[#495560]" />
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 font-medium">Care</p>
                    <div className="px-3 h-[59px] rounded-[15px] bg-white flex items-center justify-between">
                      <span className="text-[20px] text-[#495560]">All Inclusive</span>
                      <AiOutlineCaretDown className="text-[#495560]" />
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 font-medium">Transport</p>
                    <div className="px-3 h-[59px] rounded-[15px] bg-white flex items-center justify-between">
                      <span className="text-[20px] text-[#495560]">All Airports</span>
                      <AiOutlineCaretDown className="text-[#495560]" />
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 font-medium">Travel Time</p>
                    <div className="px-3 h-[59px] rounded-[15px] bg-white flex items-center justify-between">
                      <span className="text-[20px] text-[#495560]">6-10 days</span>
                      <AiOutlineCaretDown className="text-[#495560]" />
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 font-medium">Price Range</p>
                    <div className="px-3 h-[59px] rounded-[15px] bg-white flex items-center justify-between">
                      <span className="text-[20px] text-[#495560]">€500 to €600</span>
                      <AiOutlineCaretDown className="text-[#495560]" />
                    </div>
                  </div>

                  <button
                        onClick={() => setShowAvailability(true)}
                    className="w-full mt-2 h-[73px] rounded-[20px] font-bold text-white text-2xl"
                    style={{ backgroundColor: '#1A8FE6' }}
                  >
                    Check Price and Availability
                  </button>
                </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl md:text-3xl leading-tight font-bold mb-5 text-center">Your Slot is Available</h2>

                    <div className="grid grid-cols-2 gap-y-3 text-sm">
                      <p className="text-[#C7D6E2]">Departure</p>
                      <p className="text-right">Wed 10 Sep 2025</p>
                      <p className="text-[#C7D6E2]">Return Trip</p>
                      <p className="text-right">Monday, Sep 15, 2025</p>
                      <p className="text-[#C7D6E2]">Travel Time</p>
                      <p className="text-right">6 Days</p>
                      <p className="text-[#C7D6E2]">Airport</p>
                      <p className="text-right">International Airport</p>
                      <p className="text-[#C7D6E2]">Care</p>
                      <p className="text-right">All inclusive</p>
                    </div>

                    <div className="flex items-start gap-2 mt-4 text-[#C7D6E2] text-sm">
                      <AiOutlineInfoCircle className="mt-[2px]" />
                      <span>Extensive description of this holiday</span>
                    </div>

                    <div className="flex items-start justify-between mt-6 mb-2">
                      <div className="leading-none">
                        <span className="text-4xl md:text-5xl font-bold">€533</span>
                        <span className="ml-1 align-super text-base">pp</span>
                        <p className="text-xs opacity-80 mt-2">Including mandatory cost and subject to availability</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-90">Lowest Price</p>
                        <div className="flex items-center justify-end gap-3 text-xl mt-3 opacity-90">
                          <FaPlane />
                          <FaPlus />
                          <FaBed />
                        </div>
                      </div>
                    </div>

                    {!showTripDetails && (
                      <button
                        onClick={() => setShowTripDetails(true)}
                        className="w-full mt-2 h-[56px] rounded-[16px] font-bold text-white text-xl"
                        style={{ backgroundColor: '#1A8FE6' }}
                      >
                        Check Trip Details
                      </button>
                    )}

                    {showTripDetails && (
                      <div className="mt-6 border-t border-white/10 pt-6">
                        {/* Flights */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <FaPlane />
                            <h3 className="text-xl font-bold">Your Flights</h3>
                          </div>
                          <p className="text-sm opacity-80 mb-3">We have selected the cheapest flight for you:</p>

                          <div className="border border-white/10 rounded-xl p-4">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-white/10 grid place-items-center text-xs">✈</span>
                                <span className="opacity-90">To</span>
                                <span className="font-semibold">Corendon Airlines</span>
                              </div>
                              <span className="text-xs opacity-80">Direct Flight<br />3:40 hours of flying</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                              <span className="text-2xl font-semibold">03:00</span>
                              <div className="flex-1 h-[2px] bg-white/20 mx-3" />
                              <span className="text-2xl font-semibold">07:40</span>
                            </div>

                            <div className="mt-4 flex items-center justify-between text-sm mb-1">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-white/10 grid place-items-center text-xs">✈</span>
                                <span className="opacity-90">Back</span>
                                <span className="font-semibold">Corendon Airlines</span>
                              </div>
                              <span className="text-xs opacity-80">Direct Flight<br />3:40 hours of flying</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                              <span className="text-2xl font-semibold">03:00</span>
                              <div className="flex-1 h-[2px] bg-white/20 mx-3" />
                              <span className="text-2xl font-semibold">07:40</span>
                            </div>
                            <div className="text-right text-xs font-semibold mt-2">INCLUSIVE</div>
                          </div>

                          <p className="mt-4 text-sm opacity-90 mb-3">Would you rather fly earlier or later</p>
                          <div className="border border-white/10 rounded-xl p-4 mb-3">
                            <div className="flex items-center justify-between py-2">
                              <span className="text-2xl font-semibold">03:00</span>
                              <div className="flex-1 h-[2px] bg-white/20 mx-3 relative">
                                <span className="absolute left-1/2 -translate-x-1/2 -top-2">✈</span>
                              </div>
                              <span className="text-2xl font-semibold">07:40</span>
                            </div>
                            <div className="text-right text-xs">+ € 47 pp</div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <button key={i} className="text-xs bg-white/10 hover:bg-white/15 px-3 py-2 rounded-md">
                                Corendon <span className="opacity-90">+ € 47</span> pp
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Stay */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <FaBed />
                            <h3 className="text-xl font-bold">Stay <span className="opacity-80 text-sm">(2 person)</span></h3>
                          </div>

                          <div className="space-y-2 mb-4">
                            {['Double Economy Room','Double Economy Room','Double Economy Room','Double Economy Room'].map((r, idx) => (
                              <div key={idx} className={`rounded-lg border ${idx===0 ? 'border-[#6CB4FF] bg-white/10' : 'border-white/10'} px-3 py-3 flex items-start justify-between` }>
                                <div className="flex items-start gap-2">
                                  <span className={`mt-1 w-4 h-4 rounded-full border ${idx===0 ? 'bg-[#6CB4FF] border-[#6CB4FF]' : 'border-white/30'}`}></span>
                                  <div>
                                    <p className="text-sm font-semibold">{r}</p>
                                    <p className="text-xs opacity-80">min 2 / max 2 persons</p>
                                  </div>
                                </div>
                                <div className="text-right text-xs">
                                  <div className={`font-bold ${idx===0 ? '' : ''}`}>{idx===0 ? 'INCLUSIVE' : '+ € 47 pp'}</div>
                                  <div className="opacity-80">Only 2 left in stock!</div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <button className="text-sm opacity-90 mb-4">Add Discount Coupon Code</button>

                          <div className="border-t border-white/10 pt-4">
                            <h4 className="text-center font-bold mb-2">Turquoise Resort</h4>
                            <div className="flex items-center justify-center gap-3 text-sm opacity-90 mb-2">
                              <FaPlane /> <FaPlus /> <FaBed /> <span>incl. flight + transfer</span>
                            </div>
                            <p className="text-center text-sm opacity-90 mb-4">Tuesday, April 14 2026–Sunday, April 19, 2026 (6 days)</p>

                            <div className="flex items-center justify-between py-3">
                              <span className="text-sm opacity-90">SUBTOTAL</span>
                              <span className="text-sm opacity-90">&nbsp;</span>
                            </div>
                            <div className="flex items-end justify-between">
                              <div className="leading-none">
                                <div className="text-xs mb-1">2X</div>
                                <div className="text-4xl font-bold">€ 533 <span className="text-sm align-super">pp</span></div>
                              </div>
                              <div className="text-lg">$ 878</div>
                            </div>

                            <div className="mt-5 space-y-2 text-sm">
                              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaCheck className="text-green-400" /> <span>SGR guarantee fund ($ 10)</span></div><span>INCLUSIVE</span></div>
                              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaCheck className="text-green-400" /> <span>Disaster Fund ($ 2.50)</span></div><span>INCLUSIVE</span></div>
                              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaCheck className="text-green-400" /> <span>No booking fees</span></div><span>$ 0</span></div>
                              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaCheck className="text-green-400" /> <span>Hand luggage Include</span></div><span>&nbsp;</span></div>
                              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaCheck className="text-green-400" /> <span>Extra fly comfort</span></div><span>$ 142</span></div>
                            </div>
                          </div>

                          <div className="mt-6 border-t border-white/10 pt-6">
                            <div className="flex items-end justify-between mb-4">
                              <div className="text-sm opacity-90">TOAL FOR 2 PERSONS</div>
                              <div className="text-3xl font-bold">€1020 <span className="text-sm align-super">PP</span></div>
                            </div>
                            <button onClick={() => setShowPriceChangeModal(true)} className="w-full h-[56px] rounded-[12px] font-bold text-white text-lg" style={{ backgroundColor: '#1A8FE6' }}>Book Now</button>
                            <p className="text-center text-xs opacity-80 mt-2">When booking you only pay a deposit of $ 318</p>
                            <p className="text-center text-sm mt-3 text-[#6CB4FF]">You have the lowest price now, this can change quickly.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Booking Modal */}
      <PriceChangeModal
        open={showPriceChangeModal}
        onClose={() => setShowPriceChangeModal(false)}
        onAccept={() => {
          setShowPriceChangeModal(false)
          setShowFinalPriceModal(true)
        }}
        imageSrc={vacationData.images[0]}
        title={vacationData.title}
      />

      <FinalPriceModal
        open={showFinalPriceModal}
        onClose={() => setShowFinalPriceModal(false)}
        imageSrc={vacationData.images[0]}
        title={vacationData.title}
      />

      <Footer />
    </div>
  )
}


