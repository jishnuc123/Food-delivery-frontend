import React from 'react'

function Payment() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">Card Number</label>
            <input
            
              className="w-full p-3 border rounded"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="expirationDate">Expiration Date</label>
            <input
            
              className="w-full p-3 border rounded"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cvv">CVV</label>
            <input
              
              className="w-full p-3 border rounded"
              placeholder="123"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="cardholderName">Cardholder Name</label>
            <input
             
              className="w-full p-3 border rounded"
              placeholder="John Doe"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">Submit Payment</button>
        </form>
      </div>
    </div>
 </>
  );
}



export default Payment