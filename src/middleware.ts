import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { REGION_MAP, DEFAULT_REGION } from '@/lib/regions'

// 1. Define paths we should NOT touch (Static assets, API, images)
const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // Skip internal Next.js paths, static files, and API routes
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next()
    }

    // 2. CHECK FOR MANUAL OVERRIDE (User selected a region in the menu)
    // If the user manually switched regions, we respect that cookie.
    const manualRegion = req.cookies.get('devlogix-region')
    if (manualRegion) {
        return NextResponse.next()
    }

    // 3. ONLY REDIRECT THE HOMEPAGE
    // We usually only auto-redirect the root domain to avoid annoyance on deep links.
    if (pathname === '/') {

        // 4. DETECT COUNTRY (Cloudflare Header)
        // On Cpanel+Cloudflare, this header is reliable.
        // Fallback to 'US' for local dev if header is missing.
        const country = req.headers.get('cf-ipcountry') || 'US'

        // 5. MATCH REGION
        const targetRegion = REGION_MAP[country.toUpperCase()] || DEFAULT_REGION

        // If we are essentially already at the "Global" default, do nothing.
        if (targetRegion === DEFAULT_REGION) {
            return NextResponse.next()
        }

        // 6. EXECUTE REDIRECT
        // Redirect to the region-specific landing page
        const url = req.nextUrl.clone()
        url.pathname = `/${targetRegion}`
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}