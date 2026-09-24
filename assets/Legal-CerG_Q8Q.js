import{dr as l,dq as u,c7 as t}from"./index-CuYYnpxu.js";import{u as d}from"./usePageMeta-D2eDs6cl.js";const a="support@habitwar.com",p=`
Habit War ("we", "us", "the app") respects your privacy. This policy explains what we collect, why, and your rights.

1. Data we collect
   • Account: email, username, display name, optional avatar image.
   • Habit data: habit names, schedules, daily check-ins, notes, streak history.
   • Social data: friend connections, friend requests, war room memberships, chat messages, reactions.
   • Device data: push notification tokens (only if you enable notifications), platform (iOS/web), app version.
   • Optional proof: photos and notes you attach to check-ins. Visibility follows the associated habit and room sharing.
   • Optional Apple Health: raw readings are processed on your device. Your selected habit rules and resulting check-ins sync to your account and follow your sharing settings. You can disconnect Health in iOS settings. We do not send raw readings to product analytics.
   • Diagnostics and analytics: Sentry receives limited error information; first-party events help measure app use. We remove user content and credentials from error reports.
   • Session data: authentication tokens managed by our backend provider.

2. How we use it
   • Operate your account and dashboard.
   • Show your progress to friends you explicitly connect with.
   • Power War Rooms (group habit competitions you opt into).
   • Send in-app and push notifications you have enabled.
   • Detect abuse and keep the service safe.
   We do not sell your data. We do not run third-party advertising trackers.

3. Where it lives
   Data is stored on Supabase (database, auth, storage) and access-controlled using authentication and database policies. Content you mark public may be visible to other people. Push delivery uses Firebase Cloud Messaging. The app is hosted on Lovable / Vercel infrastructure. iOS builds are distributed via Apple.

4. User-generated content
   Habit names, notes, war room chat messages, reactions and avatars are content you create. Friends and room members can see content you share with them. We may remove content that violates our Terms.

5. Notifications
   Push tokens are only stored if you grant notification permission. You can disable notifications at any time in the app or in your OS settings; sign-out clears the local session and requests device-token removal. Offline removal may require reconnection; you can also disable notifications in iOS settings.

6. Retention & deletion
   Data is kept while your account is active. Deleting your account from Settings → Danger Zone starts removal of your active account data and uploaded files. If cleanup cannot finish, the app reports a failure and you can retry or contact support. Shared rooms may remain for other members with a new owner. Limited deletion receipts and any legally required records may remain; contact us for the applicable retention details. Backup removal follows the hosting provider’s retention process. Copies exported to your devices are under your control.

7. Your rights
   You can export or delete your data at any time from in-app Settings or by emailing ${a}. Depending on your region you may also have rights under GDPR / CCPA (access, correction, portability, objection). Email us to exercise them.

8. Children
   Habit War is not directed at children under 13 and we do not knowingly collect data from them.

9. Security
   We use TLS for network requests and database access controls. Cached habits and pending changes are also stored on your device so they survive connection loss; protect access to your device and exported files. No system is perfect — report suspected issues to ${a}.

10. Changes
   We will notify you in-app of material changes.

Contact: ${a}
`.trim(),m=`
By creating an account or using Habit War you agree to these terms.

1. Eligibility
   You must be at least 13 years old. You are responsible for activity on your account.

2. Acceptable use
   You will not:
   • harass, threaten, dox, or bully other users in chat, war rooms, friend requests, or any other channel;
   • post hate speech, sexual content involving minors, illegal content, or spam;
   • attempt to break authentication, bypass Row-Level Security, scrape, or access data that isn't yours;
   • impersonate another person or misrepresent your identity;
   • use the service to send unsolicited advertising.

3. User-generated content
   You retain ownership of habit names, notes, messages and other content you create. By posting in a War Room or sharing a habit with a friend you grant other members of that room or your friend a non-exclusive licence to view that content inside the app. You grant us a limited licence to store and transmit your content solely to operate the service.

4. Moderation & removal
   We may remove content and suspend or terminate accounts that violate these terms — with or without notice. Repeat or severe abuse will result in permanent bans.

5. Notifications
   Notifications are opt-in. We may send transactional messages (e.g. password reset) that are required to operate your account.

6. No medical, fitness or psychological advice
   Habit War is a productivity and accountability tool. It does not provide medical, psychological, nutrition or fitness advice. Consult a qualified professional for those.

7. Service availability
   The service is provided "as is" and "as available". We aim for high uptime but do not guarantee uninterrupted, error-free, or bug-free operation.

8. Account termination
   You may delete your account at any time from Settings → Danger Zone. Deletion is permanent and purges your data per our Privacy Policy.

9. Limitation of liability
   To the maximum extent permitted by law, Habit War and its operators are not liable for indirect, incidental, consequential, special or punitive damages, or for lost profits or data, arising from your use of the service. Our total liability for any claim is limited to the amount you paid us in the 12 months before the claim (which may be zero).

10. Changes
   We may update these terms; continued use after notice constitutes acceptance.

11. Governing law
   These terms are governed by the laws of your country of residence to the extent required by local consumer law, otherwise by general international principles of contract.

Contact: ${a}
`.trim(),h=`
Need help with Habit War? We're a small team and we read every message.

What to email us about
   • Bugs or crashes
   • Account or login issues
   • Data export or deletion requests
   • Reporting abuse, harassment or inappropriate content
   • Privacy questions
   • Feature requests and feedback

How to reach us
   Email: ${a}

What to include
   • Your username or account email
   • Device and OS (e.g. iPhone 15, iOS 17.4)
   • App version (Settings → bottom of page)
   • A short description of what happened and what you expected
   • Screenshots if relevant

Response time
   We aim to reply within 2 business days. Abuse and safety reports are prioritised.

Account deletion
   You can delete your account yourself from Settings → Danger Zone → Delete Account. This permanently removes your profile, habits, logs, friendships, war room memberships, messages, reactions and device tokens.
`.trim(),f=()=>{const{kind:o}=l(),r=u(),e=o==="privacy"?"privacy":o==="support"?"support":"terms",i=e==="privacy"?"Privacy Policy":e==="support"?"Support":"Terms of Service",s=e==="privacy"?p:e==="support"?h:m,n="September 5, 2026",c=e==="privacy"?"How Habit War collects, uses, and protects your data. Read our full privacy policy.":e==="support"?"Need help with Habit War? Contact support and find answers to common questions.":"The terms of service governing your use of Habit War. Read before creating an account.";return d({title:`${i} — Habit War`,description:c,path:`/legal/${e}`}),t.jsx("div",{className:"h-dvh overflow-y-auto bg-background text-foreground",style:{WebkitOverflowScrolling:"touch"},children:t.jsxs("div",{className:"max-w-2xl mx-auto px-6 py-10",children:[t.jsx("button",{onClick:()=>window.history.length>1?r(-1):r("/"),className:"text-[9px] font-black tracking-[0.3em] uppercase text-muted-foreground mb-6",children:"← Back"}),t.jsx("h1",{className:"text-xl font-black tracking-wider uppercase mb-1",children:i}),t.jsxs("p",{className:"text-[9px] tracking-[0.3em] uppercase text-muted-foreground mb-8",children:["Last updated ",n]}),t.jsx("article",{className:"text-sm leading-relaxed whitespace-pre-wrap text-foreground/90",children:s}),e==="support"&&t.jsx("a",{href:`mailto:${a}`,className:"inline-block mt-8 px-4 py-2 text-[10px] font-black tracking-[0.3em] uppercase bg-emerald-600 text-white rounded-sm",children:"Email Support"})]})})};export{f as default};
