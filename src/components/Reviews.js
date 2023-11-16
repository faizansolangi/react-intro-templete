// Reviews.js

import React from 'react';

const BuyerReview = () => {
  return (
    <div>
      <h3>Buyer's Review</h3>
      <p>This is a review from the buyer.</p>
    </div>
  );
};

const SellerReview = () => {
  return (
    <div>
      <h3>Seller's Review</h3>
      <p>This is a review from the seller.</p>
    </div>
  );
}

const Reviews = () => {
  return (
    <div>
      <h2>Product Reviews</h2>
      <BuyerReview />
      <SellerReview />
    </div>
  );
}

export default Reviews;