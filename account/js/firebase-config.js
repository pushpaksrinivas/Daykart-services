// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase config with environment variables
const _enc = 
 
    "ewogICJhcGlLZXkiOiAiQUl6YVN5RHNQODBYRlN5a1JsdGVEOExUUWF3NzZURDhBSkl0TUZ3IiwK
ICAiYXV0aERvbWFpbiI6ICJkYXlrYXJ0LTc3NzcxLmZpcmViYXNlYXBwLmNvbSIsCiAgInByb2pl
Y3RJZCI6ICJkYXlrYXJ0LTc3NzcxIiwKICAic3RvcmFnZUJ1Y2tldCI6ICJkYXlrYXJ0LTc3Nzcx
LmZpcmViYXNlc3RvcmFnZS5hcHAiLAogICJtZXNzYWdpbmdTZW5kZXJJZCI6ICI1MzM2NjYwNjE0
NjgiLAogICJhcHBJZCI6ICIxOjUzMzY2NjA2MTQ2ODp3ZWI6ZjU2MjYxYzVmMWNiY2MwZDc3NjE1
OSIsCiAgIm1lYXN1cmVtZW50SWQiOiAiRy1FRE1OVFNTSkdZIgp9Cg=="; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
