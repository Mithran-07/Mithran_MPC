import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // When shopping is disabled, redirect shopping/cart/checkout pages to homepage
  const shoppingEnabled = process.env.NEXT_PUBLIC_ENABLE_SHOPPING === 'true';
  if (!shoppingEnabled) {
    const shoppingPaths = ['/shopping', '/shopping/cart', '/shopping/checkout', '/shopping/order-success'];
    const isShoppingPath = shoppingPaths.some(p => pathname === p || pathname.startsWith(p + '/'));
    if (isShoppingPath) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Basic protection for /admin routes
  if (pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization');
    
    // In a real app, you would use NextAuth or Supabase Auth.
    // For this implementation, we use Basic Auth via ENV var
    // Format is Basic base64(admin:ADMIN_PASSWORD)
    if (!authHeader) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Portal"',
        },
      });
    }

    const authValue = authHeader.split(' ')[1];
    const decodedValue = atob(authValue);
    const [user, pwd] = decodedValue.split(':');

    // Default to 'mithranadmin' if no env is set for safety in development
    const expectedPassword = process.env.ADMIN_PASSWORD || 'mithranadmin';

    if (user === 'admin' && pwd === expectedPassword) {
      return NextResponse.next();
    }

    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Portal"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*', '/shopping/:path*'],
};
