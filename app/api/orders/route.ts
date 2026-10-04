import { NextResponse } from 'next/server';
import { saveOrder } from '@/lib/orders/store';
import { sendOrderConfirmationEmail } from '@/lib/email';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Server-side validation (basic)
    if (!data.customer || !data.items || data.items.length === 0) {
      return NextResponse.json({ error: 'Invalid order data' }, { status: 400 });
    }

    // Generate Order ID: MPC-YYYYMMDD-XXXX
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(1000 + Math.random() * 9000);
    const orderId = `MPC-${yyyy}${mm}${dd}-${random}`;

    const orderToken = uuidv4();
    const order = {
      id: orderToken,
      token: orderToken,
      orderId,
      customer: data.customer,
      items: data.items,
      subtotal: data.subtotal,
      shipping: data.shipping,
      total: data.total,
      status: 'WHATSAPP_PENDING',
      paymentStatus: 'PENDING',
      createdAt: new Date().toISOString()
    };

    // Save order
    await saveOrder(order);

    // Send confirmation email
    await sendOrderConfirmationEmail({
      orderId: order.orderId,
      customerName: order.customer.name,
      customerEmail: order.customer.email,
      items: order.items.map((i: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => `${i.product.name} (x${i.quantity})`).join(', '),
      total: order.total
    });

    return NextResponse.json({ success: true, orderId: order.orderId, token: order.token });
  } catch (error) {
    console.error('[Create Order Error]', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
