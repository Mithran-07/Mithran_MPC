import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'data/db/orders.json');

// Initialize DB file
if (!fs.existsSync(path.dirname(DB_FILE))) {
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
}
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

export async function readOrders(): Promise<any /* eslint-disable-line @typescript-eslint/no-explicit-any */[]> {
  try {
    const data = await fs.promises.readFile(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading orders:", error);
    return [];
  }
}

export async function writeOrders(orders: any /* eslint-disable-line @typescript-eslint/no-explicit-any */[]): Promise<void> {
  await fs.promises.writeFile(DB_FILE, JSON.stringify(orders, null, 2));
}

export async function saveOrder(order: any /* eslint-disable-line @typescript-eslint/no-explicit-any */): Promise<void> {
  const orders = await readOrders();
  orders.push(order);
  await writeOrders(orders);
}

export async function getOrderById(orderIdOrToken: string): Promise<any /* eslint-disable-line @typescript-eslint/no-explicit-any */ | null> {
  const orders = await readOrders();
  return orders.find(o => o.token === orderIdOrToken || o.id === orderIdOrToken || o.orderId === orderIdOrToken) || null;
}

export async function updateOrderStatus(orderIdOrToken: string, status: string): Promise<void> {
  const orders = await readOrders();
  const index = orders.findIndex(o => o.token === orderIdOrToken || o.id === orderIdOrToken || o.orderId === orderIdOrToken);
  if (index !== -1) {
    orders[index].status = status;
    await writeOrders(orders);
  }
}

export async function updateOrderPaymentStatus(orderIdOrToken: string, paymentStatus: string): Promise<void> {
  const orders = await readOrders();
  const index = orders.findIndex(o => o.token === orderIdOrToken || o.id === orderIdOrToken || o.orderId === orderIdOrToken);
  if (index !== -1) {
    orders[index].paymentStatus = paymentStatus;
    await writeOrders(orders);
  }
}
