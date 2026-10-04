import { siteConfig } from '@/data/siteConfig';

export function createWhatsAppOrderUrl(order: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) {
  const number = siteConfig.whatsapp.replace(/\D/g, '');
  
  // Format the message
  const lines = [
    `━━━━━━━━━━━━━━━━━━`,
    `🛍️ MITHRAN PHOTO CLICKZ`,
    `NEW ORDER`,
    `━━━━━━━━━━━━━━━━━━`,
    ``,
    `Order ID: ${order.orderId}`,
    `Customer: ${order.customerName}`,
    `Phone: ${order.customerPhone}`,
    `Email: ${order.customerEmail}`,
    ``,
    `ITEMS`,
    ``,
  ];

  order.items.forEach((item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */, index: number) => {
    lines.push(`${index + 1}️⃣ ${item.productName}`);
    if (item.variant) lines.push(`Variant: ${item.variant}`);
    lines.push(`Qty: ${item.quantity}`);
    lines.push(`Price: ₹${item.price}`);
    
    if (item.hasCustomization) {
      lines.push(`CUSTOMIZATION: 📷 Photo uploaded`);
    }
    lines.push(``);
  });

  lines.push(`TOTAL: ₹${order.total}`);
  lines.push(``);
  lines.push(`PAYMENT:`);
  lines.push(`⏳ WAITING FOR PAYMENT`);
  lines.push(``);
  lines.push(`DELIVERY:`);
  lines.push(order.address);
  lines.push(`${order.city}, ${order.state} - ${order.pincode}`);
  if (order.deliveryInstructions) {
    lines.push(`Note: ${order.deliveryInstructions}`);
  }
  lines.push(`━━━━━━━━━━━━━━━━━━`);

  const message = lines.join('\n');
  return `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
}
