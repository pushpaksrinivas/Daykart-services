// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔐 Base64-encoded Firebase config
const _enc =
  "ewogICJhcGlLZXkiOiAiQUl6YVN5RHNQODBYRlN5a1JsdGVEOExUUWF3NzZURDhBSkl0TUZ3IiwKICAiYXV0aERvbWFpbiI6ICJkYXlrYXJ0LTc3NzcxLmZpcmViYXNlYXBwLmNvbSIsCiAgInByb2plY3RJZCI6ICJkYXlrYXJ0LTc3NzcxIiwKICAic3RvcmFnZUJ1Y2tldCI6ICJkYXlrYXJ0LTc3NzcxLmZpcmViYXNlc3RvcmFnZS5hcHAiLAogICJtZXNzYWdpbmdTZW5kZXJJZCI6ICI1MzM2NjYwNjE0NjgiLAogICJhcHBJZCI6ICIxOjUzMzY2NjA2MTQ2ODp3ZWI6ZjU2MjYxYzVmMWNiY2MwZDc3NjE1OSIsCiAgIm1lYXN1cmVtZW50SWQiOiAiRy1FRE1OVFNTSkdZIgp9Cg==";

// 🔓 Decode Base64 → JSON → Object
export const firebaseConfig = JSON.parse(atob(_enc));

// Initialize Firebase (unchanged behavior)
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
