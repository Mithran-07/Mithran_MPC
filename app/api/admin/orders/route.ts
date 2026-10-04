import { NextResponse } from 'next/server';
import { readOrders } from '@/lib/orders/store';

export async function GET() {
  try {
    const orders = await readOrders();
    // Sort by newest first
    orders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json({ orders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}
