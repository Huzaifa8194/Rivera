'use client'

import { useEffect, useState } from 'react'
import StickyNavbar from '../components/StickyNavbar'
import Footer from '../components/Footer'
import { auth, db, storage } from '../lib/firebaseClient'
import { onAuthStateChanged, updateProfile } from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default function MyAccountPage() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState({ displayName: '', email: '', affiliateLink: '', bookingId: '', photoURL: '' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u)
      if (u) {
        const snap = await getDoc(doc(db, 'users', u.uid))
        const data = snap.exists() ? snap.data() : {}
        setProfile({
          displayName: u.displayName || data.displayName || '',
          email: u.email || data.email || '',
          affiliateLink: data.affiliateLink || '',
          bookingId: data.bookingId || '',
          photoURL: u.photoURL || data.photoURL || ''
        })
      }
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const handleChange = (field) => (e) => setProfile({ ...profile, [field]: e.target.value })

  const handleUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file || !user) return
    const storageRef = ref(storage, `users/${user.uid}/profile.jpg`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    await updateProfile(user, { photoURL: url })
    await setDoc(doc(db, 'users', user.uid), { photoURL: url, updatedAt: serverTimestamp() }, { merge: true })
    setProfile((p) => ({ ...p, photoURL: url }))
  }

  const handleSave = async (e) => {
    e.preventDefault()
    if (!user) return
    setSaving(true)
    try {
      if (profile.displayName && profile.displayName !== user.displayName) {
        await updateProfile(user, { displayName: profile.displayName })
      }
      await setDoc(doc(db, 'users', user.uid), {
        email: profile.email,
        displayName: profile.displayName || '',
        affiliateLink: profile.affiliateLink || '',
        bookingId: profile.bookingId || '',
        photoURL: profile.photoURL || '',
        updatedAt: serverTimestamp(),
      }, { merge: true })
      alert('Profile saved')
    } catch (err) {
      console.error(err)
      alert(err.message || 'Save failed')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="min-h-screen bg-white"><StickyNavbar /><main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-16"><p>Loading...</p></main><Footer /></div>
  if (!user) return <div className="min-h-screen bg-white"><StickyNavbar /><main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-16"><h1 className="text-xl font-semibold text-[#002640]">Please login to view your account.</h1></main><Footer /></div>

  return (
    <div className="bg-white min-h-screen">
      <StickyNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-16">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#003a64] mb-8">My Account</h1>

        {/* Steps header style to match booking */}
        <div className="mb-6">
          <div className="flex items-center gap-10 text-sm font-semibold text-[#98A2B3]">
            <span className="relative pb-3 text-[#003a64]">
              Profile
              <span className="absolute left-0 -bottom-[1px] h-[3px] w-full rounded bg-[#003a64]" />
            </span>
            <span>Security</span>
            <span>Preferences</span>
          </div>
          <div className="mt-2 h-px w-full bg-[#E6EEF4]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form column */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-[13px] font-semibold text-[#002640] md:col-span-2">
                Display Name
                <input value={profile.displayName} onChange={handleChange('displayName')} className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="Enter display name" />
              </label>
              <label className="text-[13px] font-semibold text-[#002640] md:col-span-2">
                Email
                <input value={profile.email} onChange={handleChange('email')} type="email" className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="Enter email" />
              </label>
              <label className="text-[13px] font-semibold text-[#002640]">
                Affiliate Link
                <input value={profile.affiliateLink} onChange={handleChange('affiliateLink')} className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="https://..." />
              </label>
              <label className="text-[13px] font-semibold text-[#002640]">
                Booking ID
                <input value={profile.bookingId} onChange={handleChange('bookingId')} className="mt-1 h-12 w-full rounded-[10px] border border-[#CBE2F6] px-3 placeholder-[#6B7280]" placeholder="RV-123456" />
              </label>

              <div className="md:col-span-2 flex gap-4 mt-2">
                <button disabled={saving} className="h-12 px-6 rounded-[10px] border border-[#CBE2F6] bg-[#003a64] text-white text-sm font-semibold disabled:opacity-60">
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar profile card */}
          <aside className="lg:col-span-4">
            <div className="rounded-[16px] border border-[#E6EEF4] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={profile.photoURL || '/avatar-placeholder.png'} alt="Avatar" className="h-16 w-16 rounded-full object-cover border border-[#E6EEF4]" />
                <div>
                  <div className="font-semibold text-[#002640]">{profile.displayName || 'Your name'}</div>
                  <div className="text-sm text-[#6B7280]">{profile.email}</div>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-[13px] font-semibold text-[#002640]">Profile Picture</label>
                <input onChange={handleUpload} type="file" accept="image/*" className="mt-2 block w-full text-sm text-[#495560]" />
                <p className="text-xs text-[#6B7280] mt-1">JPG/PNG up to 5MB</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}


