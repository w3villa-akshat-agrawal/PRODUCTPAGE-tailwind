import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCount, removeItem } from '../features/Cart/CartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()

  const handleQtnChange = (id, e) => {
    const newCount = parseInt(e, 10) || 1
    dispatch(updateCount({ id, newCount }))
  }

  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.productCount,
    0
  )

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.mainImg}
                  alt="Product"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="font-semibold text-lg">Size: {item.size}</p>
                  <input
                    type="number"
                    value={item.productCount}
                    min="1"
                    className="border px-2 py-1 w-16 rounded mt-1"
                    onChange={(e) => handleQtnChange(item.id, e.target.value)}
                  />
                  <button
                    className="text-red-500 text-sm mt-2 block hover:underline"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">
                  Subtotal: ${(item.price * item.productCount).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 border-t pt-4">
            <p className="text-xl font-bold">
              Total: ${totalAmount.toFixed(2)}
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
