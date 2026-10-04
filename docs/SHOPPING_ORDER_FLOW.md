# MITHRAN PHOTO CLICKZ: Shopping & Order Flow

## 1. Customer Flow
- Customer navigates to `/shopping`
- Browses customized gifts (Mugs, Crystals, Caricatures, etc.)
- Selects product variants and uploads photos via `/api/upload`
- Real-time preview is generated (masks/clips specific to product)
- Clicks "Add to Cart" -> Added to local Zustand store (`cartStore.ts`)

## 2. Checkout Flow
- Customer navigates to `/shopping/cart`, then to `/shopping/checkout`
- Enters Delivery and Contact Details.
- Subtotal + Courier charges are evaluated.
- Clicks "Place Order" (Payment gateway is skipped for Phase 1).

## 3. Order Creation
- Frontend submits to `POST /api/orders`
- Server validates payload.
- Server generates `MPC-YYYYMMDD-XXXX` Order ID.
- Server saves Order locally in `data/db/orders.json` (Database abstraction in `lib/orders/store.ts`).
- Server triggers `sendOrderConfirmationEmail` (Email abstraction in `lib/email/index.ts`).
- Server returns successful response.
- Client clears cart and redirects to `/shopping/order-success/[orderId]`.

## 4. WhatsApp Flow
- On the success page, customer sees order status as `WHATSAPP_PENDING`.
- Customer clicks **"PLACE ORDER ON WHATSAPP"**.
- URL is dynamically generated via `lib/whatsapp.ts`.
- Opens `wa.me` with prefilled structured text.
- Customer sends message to studio.

## 5. Admin Flow
- Admin visits `/admin/orders` (Protected by Basic Auth in `middleware.ts`).
- Admin views orders (fetches via `GET /api/admin/orders`).
- Admin can download high-res original customer uploads from `public/uploads/original/`.
- Admin manually updates status from `WAITING_FOR_PAYMENT` to `PROCESSING` via `PATCH /api/orders/[orderId]/status`.

## 6. Future Razorpay Integration
- The system is architected to inject Razorpay into the `POST /api/orders` flow.
- A webhook endpoint `POST /api/webhooks/razorpay` would be added to update the `paymentStatus` to `PAID`.
