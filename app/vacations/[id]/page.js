'use client'
import { useState } from 'react'
import { FaHeart, FaUser, FaArrowRight } from 'react-icons/fa'
import { AiOutlineCaretDown } from 'react-icons/ai'
import StickyNavbar from '../../components/StickyNavbar'
import Footer from '../../components/Footer'

export default function VacationDetailPage({ params }) {
  const [activeTab, setActiveTab] = useState(0)

  const vacationData = {
    id: params.id,
    title: 'Turquoise Resort Chogogo Dive & Beach Curacao',
    subtitle:
      'Holidays, Sun holidays, Turkiye, Mediterenean Sea, Antalya, Turquoise Resort Chogogo Dive & Beach Curacao',
    rating: 8.9,
    images: [
      '/home/home-landing.jpg',
      '/home/home-landing.jpg',
      '/home/home-landing.jpg',
      '/home/home-landing.jpg',
      '/home/home-landing.jpg'
    ],
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
      {
        rating: 7.9,
        text: 'Suitable for people of all ages. Will recommend to all looking to travel to Turkey.',
        author: 'Anonymous',
        flag: '🇫🇷'
      },
      {
        rating: 7.9,
        text: 'Suitable for people of all ages. Will recommend to all looking to travel to Turkey.',
        author: 'Anonymous',
        flag: '🇫🇷'
      },
      {
        rating: 7.9,
        text: 'Suitable for people of all ages. Will recommend to all looking to travel to Turkey.',
        author: 'Anonymous',
        flag: '🇫🇷'
      }
    ]
  }

  const tabLabels = ['Overview', 'Facilities', 'Room Types', 'Reviews', 'Environment']

  return (
    <div className="bg-white min-h-screen">
      <StickyNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-12">
        {/* Breadcrumbs */}
        <p className="text-sm text-[#666666] mb-4 mt-1">Featured &gt; {vacationData.title}</p>

        {/* Title + rating */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <h1 className="text-[32px] sm:text-[40px] leading-tight font-bold text-[#003a64] flex-1">{vacationData.title}</h1>
          <div className="flex items-center gap-2 ml-2 shrink-0">
            <span className="w-5 h-5 rounded-full border-2 border-[#003a64] grid place-items-center">
              <FaHeart className="text-[#003a64]" size={10} />
            </span>
            <span className="bg-[#003a64] text-white px-2 py-1 rounded-md font-bold text-sm">{vacationData.rating} / 10</span>
          </div>
        </div>
        <p className="text-sm text-[#666666] mb-4">{vacationData.subtitle}</p>

        {/* Top notice + actions row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 mb-6">
          <div className="w-full lg:w-auto flex items-center gap-3 bg-[#EAF4FF] rounded-md px-4 py-3">
            <span className="w-6 h-6 rounded-full bg-[#003a64] text-white grid place-items-center flex-shrink-0 font-bold text-sm">i</span>
            <span className="text-[#003a64] font-semibold text-sm sm:text-base">Hurry Up! This offer may get over soon</span>
          </div>
          <div className="w-full lg:w-auto flex items-center gap-2">
            <button className="bg-[#003a64] hover:bg-[#002a4a] text-white px-5 py-2.5 rounded-md font-semibold w-full lg:w-auto">Buy Now</button>
            <button className="border border-[#003a64] text-[#003a64] hover:bg-gray-50 px-5 py-2.5 rounded-md font-semibold flex items-center justify-center gap-2 w-full lg:w-auto">
              <FaHeart /> Add to Favourites
            </button>
          </div>
        </div>

        {/* Image gallery */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-[1200px] grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-8">
              <div className="h-[300px] rounded-lg overflow-hidden relative">
                <img src={vacationData.images[0]} alt={vacationData.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-2 h-[300px]">
              {vacationData.images.slice(1).map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <img src={img} alt={`${vacationData.title} ${i + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main grid: left content + right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column */}
          <section className="lg:col-span-8 space-y-8">

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

            {/* Tab panels */}
            <div className="min-h-[400px] space-y-8">
              {activeTab === 0 && (
                <div>
                  <h3 className="text-[18px] font-bold text-[#002640] mb-2">General</h3>
                  <ul className="list-disc pl-5 mb-2 space-y-1 text-[14px] text-black">
                    {vacationData.overview.general.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                  {vacationData.overview.description.map((p, i) => (
                    <p key={i} className="mb-4 leading-relaxed text-[14px] text-black">
                      {p}
                    </p>
                  ))}

                  <h3 className="text-[18px] font-bold text-[#002640] mt-6 mb-2">Facilities</h3>
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

                  <h3 className="text-[18px] font-bold text-[#002640] mt-8 mb-3">Room Types</h3>
                  <div className="space-y-3">
                    {vacationData.roomTypes.map((room, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left bg-[#F3F3F3] border border-[#e0e0e0] rounded-md p-5 hover:shadow-sm"
                      >
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
                  <div className="mt-3 text-center">
                    <button className="bg-[#003a64] hover:bg-[#002a4a] text-white font-bold px-6 py-3 rounded-md">
                      View All Rooms
                    </button>
                  </div>

                  <h3 className="text-[18px] font-bold text-[#002640] mt-8 mb-3">Reviews</h3>
                  <div className="space-y-3">
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
                  <div className="mt-3 text-center">
                    <button className="bg-[#003a64] hover:bg-[#002a4a] text-white font-bold px-6 py-3 rounded-md">
                      View All Reviews
                    </button>
                  </div>

                  <h3 className="text-[18px] font-bold text-[#002640] mt-8 mb-3">Environment</h3>
                  <p className="mb-2 leading-relaxed text-black">
                    The Turquoise Resort is beautifully situated along the Mediterranean coast, offering stunning sea
                    views and easy access to pristine beaches. The resort is surrounded by lush gardens and provides a
                    perfect blend of natural beauty and luxury amenities.
                  </p>
                  <p className="mb-6 leading-relaxed text-black">
                    Located in the heart of Antalya, guests can easily explore the rich cultural heritage of Turkey
                    while enjoying the modern comforts of this world-class resort. The location provides the perfect
                    base for both relaxation and adventure.
                  </p>
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
                  <div className="space-y-3">
                    {vacationData.roomTypes.map((room, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left bg-[#F3F3F3] border border-[#e0e0e0] rounded-md p-5 hover:shadow-sm"
                      >
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
                  <div className="mt-3 text-center">
                    <button className="border border-[#003a64] text-[#003a64] font-semibold px-6 py-2 rounded-md">
                      View All Rooms
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div>
                  <h3 className="text-[18px] font-bold text-[#002640] mb-3">Reviews</h3>
                  <div className="space-y-3">
                    {vacationData.reviews.map((r, i) => (
                      <div key={i} className="bg-[#F3F3F3] border border-[#e0e0e0] rounded-md p-4">
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
                  <div className="mt-3 text-center">
                    <button className="border border-[#003a64] text-[#003a64] font-semibold px-6 py-2 rounded-md">
                      View All Reviews
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 4 && (
                <div>
                  <h3 className="text-[18px] font-bold text-[#002640] mb-3">Environment</h3>
                  <p className="mb-2 leading-relaxed text-black">
                    The Turquoise Resort is beautifully situated along the Mediterranean coast, offering stunning sea
                    views and easy access to pristine beaches. The resort is surrounded by lush gardens and provides a
                    perfect blend of natural beauty and luxury amenities.
                  </p>
                  <p className="leading-relaxed text-black">
                    Located in the heart of Antalya, guests can easily explore the rich cultural heritage of Turkey
                    while enjoying the modern comforts of this world-class resort. The location provides the perfect
                    base for both relaxation and adventure.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Right sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-[120px]">
              <div className="rounded-2xl p-5 md:p-6 text-white" style={{ backgroundColor: '#00223A' }}>
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
                    className="w-full mt-2 h-[73px] rounded-[20px] font-bold text-white text-2xl"
                    style={{ backgroundColor: '#1A8FE6' }}
                  >
                    Check Price and Availability
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}


