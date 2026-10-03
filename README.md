# Arfiya & Asif Ali — Multi-page Wedding Invitation

This version follows the supplied invitation video flow rather than using one long scrolling page.

## Pages
1. index.html — sealed envelope / opening
2. couple.html — couple reveal
3. message.html — family invitation message
4. details.html — date, Nikah and venue details
5. reveal.html — interactive heart reveal
6. countdown.html — live countdown
7. events.html — Nikah + lunch timeline
8. venue.html — venue + Google Maps
9. rsvp.html — RSVP interaction
10. thanks.html — final closing

## Run
Open `index.html` directly. Every arrow button links to a real HTML page, so there is no server or framework required.

## Wedding details
Arfiya & Asif Ali
25th October 2026
Nikah: 11:00 AM, In Sha Allah
VKR Convention Hall, Kallur, Khammam, T.S

## Deploy
Upload the whole folder to Netlify, Vercel, GitHub Pages, or any normal static hosting service. Keep the folder structure unchanged.


## Supabase RSVP setup
The RSVP page is connected to the Supabase project URL. Before deploying, open `assets/js/app.js` and replace `PASTE_YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY_HERE` with the project's browser-safe Publishable/anon key. Never put the service-role/secret key in this website.

The RSVP form stores only `name` and `attendance` in the `public.rsvps` table.
