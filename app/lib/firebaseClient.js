"use client"

// Firebase client initialization (web)
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics, isSupported } from "firebase/analytics"

// Provided config from user
const firebaseConfig = {
  apiKey: "AIzaSyDORHrv8iNtxWagJKNsG9Zw3fRrd4exxlo",
  authDomain: "reviera-travel.firebaseapp.com",
  projectId: "reviera-travel",
  storageBucket: "reviera-travel.firebasestorage.app",
  messagingSenderId: "920234647316",
  appId: "1:920234647316:web:03fb65c13180945cd96c01",
  measurementId: "G-GCXVP2KSRL",
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Core services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Analytics only in browser and when supported
let analytics = null
if (typeof window !== "undefined") {
  isSupported().then((ok) => {
    if (ok) {
      analytics = getAnalytics(app)
    }
  })
}

export { app, analytics }


