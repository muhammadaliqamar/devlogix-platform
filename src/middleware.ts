import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { geolocation } from '@vercel/functions'
import { REGION_MAP, DEFAULT_REGION } from '@/lib/regions'

// Phase 2 routes — not yet launched, block all access
const PHASE_2_ROUTES = ['/case-studies', '/careers', '/newsroom']

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // 1. PHASE 2 GATE — Redirect blocked routes to homepage
    const isBlocked = PHASE_2_ROUTES.some(route =>
        pathname === route || pathname.startsWith(`${route}/`)
    )
    if (isBlocked) {
        const url = req.nextUrl.clone()
        url.pathname = '/'
        return NextResponse.redirect(url)
    }

    // 2. CHECK FOR MANUAL OVERRIDE (User selected a region in the menu)
    // If the user manually switched regions, we respect that cookie.
    const manualRegion = req.cookies.get('devlogix-region')
    if (manualRegion) {
        return NextResponse.next()
    }

    // 3. ONLY REDIRECT THE HOMEPAGE
    // We only auto-redirect the root domain to avoid annoyance on deep links.
    if (pathname === '/') {
        
        // --- SEO FIX: BYPASS REDIRECTS FOR BOTS ---
        // If Googlebot or another search engine visits, we MUST let them see the global homepage (`/`)
        // Otherwise, they get redirected to a regional page (like `/north-america`) and index that instead.
        const userAgentString = req.headers.get('user-agent')?.toLowerCase() || ''
        const isBot = /bot|crawler|spider|googlebot|bingbot|yandex|duckduckgo|slurp|baiduspider/i.test(userAgentString)
        
        if (isBot) {
             console.log(`[GEO-REDIRECT] Bot detected (${userAgentString}). Bypassing redirect for SEO.`)
             return NextResponse.next()
        }

        // 4. DETECT COUNTRY via Vercel's official geolocation helper
        // This uses the edge-injected headers under the hood and is the
        // recommended approach for Vercel deployments.
        const geo = geolocation(req)
        const country = geo.country?.toUpperCase()

        // Also try the raw header as a fallback
        const fallbackCountry = req.headers.get('x-vercel-ip-country')?.toUpperCase()

        const detectedCountry = country || fallbackCountry

        // Debug: Log geo detection (visible in Vercel Function Logs)
        console.log(`[GEO-REDIRECT] geo.country=${country}, header=${fallbackCountry}, detected=${detectedCountry}, path=${pathname}`)

        // 5. MATCH REGION
        // If country is undefined or not in map, targetRegion becomes DEFAULT_REGION ('global')
        const targetRegion = (detectedCountry && REGION_MAP[detectedCountry]) || DEFAULT_REGION

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

// Middleware matcher config — ensures this middleware runs on the correct paths
// and is properly optimized for Vercel's Edge Network
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - api routes (handled separately)
         * - static assets with file extensions
         */
        '/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|api|studio|.*\\..*).*)',
    ],
}