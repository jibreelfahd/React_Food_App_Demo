import OrderSchema from "../../models/Order/OrderSchema.js";

export const createOrder = async (req, res) => {
  try {
    const { items, customerName, street, postalCode, city } = req.body;

    if (
      (!items && customerName === "",
      street !== 6,
      postalCode === "",
      city === "")
    ) {
      return res
        .status(400)
        .json({
          message:
            "Sorry request cannot be completed at the moment. Please Try Again Later",
        });
    }
  
    const order = await OrderSchema.create({
      items,
      customerName,
      street,
      postalCode,
      city
    });
  
    res.status(200).json({ order });  
  } catch (err) {
    console.log('Error from orderSchema', err);
  }
};
