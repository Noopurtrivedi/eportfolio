import { useEffect } from 'react'

/**
 * Private admin page: embeds the Personal OS dashboard (Google Apps Script web app, access "Only myself").
 * This site holds NO personal data. Everything shown inside the frame comes live from Google, which lets
 * only the owner's signed-in Google account see it; anyone else gets Google's sign-in / no-access screen.
 * The URL below never changes: dashboard updates are deployed to the same deployment ID.
 */
const DASHBOARD_URL =
  'https://script.google.com/macros/s/AKfycbwYNRlWB5jfAICq7dScFgxJIpisy2MxUTf-ewB-hZYRnUFsY1x1Ezuzf2L2naGBjPryUw/exec'

export default function Admin() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Admin'
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex, nofollow'
    document.head.appendChild(robots)
    return () => {
      document.title = prevTitle
      robots.remove()
    }
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col bg-[#0b100e] text-stone-200">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-2 text-sm">
        <span className="font-semibold tracking-wide">Admin · Personal OS</span>
        <span className="flex items-center gap-4 text-stone-400">
          <span className="hidden sm:inline">Not loading? Your browser may block Google sign-in inside other sites.</span>
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-100 underline underline-offset-4 hover:text-white"
          >
            Open full screen
          </a>
        </span>
      </header>
      <iframe
        title="Personal OS dashboard"
        src={DASHBOARD_URL}
        className="w-full flex-1 border-0 bg-[#0f1514]"
        referrerPolicy="strict-origin"
        allow="clipboard-write"
      />
    </div>
  )
}
