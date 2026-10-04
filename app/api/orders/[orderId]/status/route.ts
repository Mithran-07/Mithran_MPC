import { NextResponse } from 'next/server';
import { updateOrderStatus, updateOrderPaymentStatus } from '@/lib/orders/store';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;
    const body = await request.json();
    
    if (body.status) {
      await updateOrderStatus(orderId, body.status);
    }
    
    if (body.paymentStatus) {
      await updateOrderPaymentStatus(orderId, body.paymentStatus);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update order status' }, { status: 500 });
  }
}
