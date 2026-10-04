'use client';
import React, { useState, useEffect } from 'react';
import { Download, Package, Image as ImageIcon } from 'lucide-react';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[] /* eslint-disable-line @typescript-eslint/no-explicit-any */>([]);
  const [selectedOrder, setSelectedOrder] = useState<any | null /* eslint-disable-line @typescript-eslint/no-explicit-any */>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data.orders || []);
        if (data.orders && data.orders.length > 0) {
          setSelectedOrder(data.orders[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleStatusChange = async (newStatus: string) => {
    if (!selectedOrder) return;
    try {
      await fetch(`/api/orders/${selectedOrder.orderId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      setSelectedOrder({ ...selectedOrder, status: newStatus });
      setOrders(orders.map(o => o.orderId === selectedOrder.orderId ? { ...o, status: newStatus } : o));
    } catch (e) {
      alert('Failed to update status');
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'PENDING_PAYMENT':
      case 'WHATSAPP_PENDING':
      case 'WAITING_FOR_PAYMENT': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'PROCESSING': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'READY_FOR_PRODUCTION': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'DISPATCHED': return 'text-green-500 bg-green-500/10 border-green-500/20';
      default: return 'text-muted bg-dark-gray border-dark-gray';
    }
  };

  if (loading) return <div className="text-center py-20">Loading orders...</div>;
  if (!orders.length) return <div className="text-center py-20 text-muted">No orders found.</div>;
  if (!selectedOrder) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-8rem)]">
      {/* Sidebar: Order List */}
      <div className="lg:col-span-4 flex flex-col bg-bg-secondary rounded-xl border border-dark-gray/50 overflow-hidden h-full">
        <div className="p-4 border-b border-dark-gray/50 bg-dark-gray/20">
          <h2 className="font-semibold text-warm-white">Recent Orders</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {orders.map(order => (
            <button
              key={order.orderId}
              onClick={() => setSelectedOrder(order)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedOrder.orderId === order.orderId 
                  ? 'bg-dark-gray border-gold/50' 
                  : 'bg-bg-primary border-dark-gray/50 hover:border-dark-gray'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-mono font-bold text-warm-white">{order.orderId}</span>
                <span className="text-sm font-semibold">₹{order.total}</span>
              </div>
              <div className="text-sm text-muted mb-3">{order.customer.name}</div>
              <div className={`inline-flex px-2 py-1 rounded text-[10px] font-bold tracking-wider border ${getStatusColor(order.status)}`}>
                {order.status}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Production Details View */}
      <div className="lg:col-span-8 flex flex-col bg-bg-secondary rounded-xl border border-dark-gray/50 overflow-hidden h-full">
        {/* Header */}
        <div className="p-6 border-b border-dark-gray/50 flex justify-between items-start bg-dark-gray/20">
          <div>
            <h1 className="text-2xl font-playfair font-bold text-warm-white mb-2">Order {selectedOrder.orderId}</h1>
            <p className="text-sm text-muted">{new Date(selectedOrder.createdAt).toLocaleString()}</p>
          </div>
          <div className="flex gap-3">
            <div className={`px-3 py-1.5 rounded text-xs font-bold tracking-wider border ${selectedOrder.paymentStatus === 'PAID' ? 'text-green-500 bg-green-500/10 border-green-500/20' : 'text-red-400 bg-red-400/10 border-red-400/20'}`}>
              {selectedOrder.paymentStatus}
            </div>
            <select 
              value={selectedOrder.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="bg-bg-primary border border-dark-gray rounded text-sm text-warm-white px-3 py-1.5 outline-none focus:border-gold"
            >
              <option value="WHATSAPP_PENDING">WHATSAPP PENDING</option>
              <option value="WAITING_FOR_PAYMENT">WAITING FOR PAYMENT</option>
              <option value="PROCESSING">PROCESSING</option>
              <option value="READY_FOR_PRODUCTION">READY FOR PRODUCTION</option>
              <option value="DISPATCHED">DISPATCHED</option>
              <option value="DELIVERED">DELIVERED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </div>
        </div>

        {/* Scrollable Details */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* Customer Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-bg-primary p-6 rounded-lg border border-dark-gray/30">
            <div>
              <p className="text-xs text-muted mb-1 uppercase tracking-wider">Customer</p>
              <p className="font-medium">{selectedOrder.customer.name}</p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1 uppercase tracking-wider">Contact</p>
              <p className="font-medium text-sm">{selectedOrder.customer.mobile}</p>
              <p className="text-sm text-muted">{selectedOrder.customer.email}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-muted mb-1 uppercase tracking-wider">Delivery Address</p>
              <p className="font-medium text-sm">{selectedOrder.customer.address}, {selectedOrder.customer.city}</p>
              <p className="text-sm text-muted">{selectedOrder.customer.state} - {selectedOrder.customer.pincode}</p>
            </div>
          </div>

          {/* Production Items */}
          <div>
            <h3 className="font-semibold text-lg border-b border-dark-gray/50 pb-2 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-gold" />
              Production Items
            </h3>
            
            <div className="space-y-6">
              {selectedOrder.items.map((item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
                <div key={item.id} className="bg-bg-primary rounded-lg border border-dark-gray p-6">
                  <div className="flex justify-between items-start mb-6 border-b border-dark-gray/30 pb-4">
                    <div>
                      <h4 className="font-bold text-lg text-gold">{item.product.name}</h4>
                      <p className="text-sm text-muted mt-1">Quantity: <span className="text-warm-white font-bold">{item.quantity}</span></p>
                    </div>
                    <div className="text-right">
                      <span className="bg-dark-gray/50 px-3 py-1 rounded text-xs">SKU: {item.product.id}</span>
                    </div>
                  </div>

                  {/* Photo Assets for Production */}
                  {item.uploadedPhotos && item.uploadedPhotos.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Original Upload */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold uppercase tracking-wider text-muted flex items-center gap-2">
                            <ImageIcon className="w-4 h-4" /> Original Upload(s)
                          </span>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                          {item.uploadedPhotos.map((photo: string, i: number) => (
                            <div key={i} className="aspect-square w-32 bg-black rounded-lg border border-dark-gray overflow-hidden shrink-0 relative group">
                              <img src={photo} alt="Original" className="w-full h-full object-cover" />
                              <a href={photo} download target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gold">
                                <Download className="w-3 h-3 mr-1" /> Download
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Notes */}
                  {item.customizationNotes && (
                    <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                      <p className="text-xs uppercase tracking-wider text-yellow-500 mb-1 font-bold">Customer Notes</p>
                      <p className="text-sm text-warm-white">{item.customizationNotes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
