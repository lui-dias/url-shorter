import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, _ev: NextFetchEvent) {
    const { pathname } = req.nextUrl

    if (pathname.match(/^\/\w+$/)) {
        return NextResponse.redirect('/api' + pathname)
    }

    return NextResponse.next()
}
