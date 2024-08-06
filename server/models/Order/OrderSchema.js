import { Schema, model } from 'mongoose';

const orderSchema = new Schema ({
  items: {
    type: Array
  },
  customerName: {
    type: String
  },
  street: {
    type: String
  },
  postalCode: {
    type: String
  },
  city: {
    type: String
  }
}, { timestamps: true});

const OrderSchema = model('orders', orderSchema);
export default OrderSchema;