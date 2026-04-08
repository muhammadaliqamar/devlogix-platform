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

        // 4. DETECT COUNTRY (Vercel Edge Header)
        // Vercel injects the 'x-vercel-ip-country' header at the edge.
        // We leave the fallback as undefined so it hits the DEFAULT_REGION logic correctly.
        const country = req.headers.get('x-vercel-ip-country')?.toUpperCase()

        // 5. MATCH REGION
        // If country is undefined or not in map, targetRegion becomes DEFAULT_REGION ('global')
        const targetRegion = (country && REGION_MAP[country]) || DEFAULT_REGION

        // 6. EXECUTE REDIRECT
        if (targetRegion === DEFAULT_REGION) {
            return NextResponse.next()
        }

        const url = req.nextUrl.clone()
        url.pathname = `/${targetRegion}`
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}