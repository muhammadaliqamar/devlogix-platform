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