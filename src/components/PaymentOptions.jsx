function PaymentOptions() {
  return (
    <fieldset className="payment-card">
      <legend className="visually-hidden">Choose a payment method</legend>
      <div className="card-overline">
        <span>02</span>
        <span>PAYMENT METHOD</span>
      </div>
      <h3>How would you like to pay?</h3>
      <p className="customer-helper">
        Choose your preferred mobile money option.
      </p>
      <div className="payment-options">
        <label className="payment-option">
          <input type="radio" name="paymentMethod" value="mtn-mobile-money" />
          <span className="payment-option-mark payment-mtn" aria-hidden="true">
            M
          </span>
          <span className="payment-option-copy">
            <strong>MTN Mobile Money</strong>
            <span>Mobile money</span>
          </span>
          <span className="payment-check" aria-hidden="true" />
        </label>
        <label className="payment-option">
          <input type="radio" name="paymentMethod" value="telecel-cash" />
          <span className="payment-option-mark payment-telecel" aria-hidden="true">
            T
          </span>
          <span className="payment-option-copy">
            <strong>Telecel Cash</strong>
            <span>Mobile money</span>
          </span>
          <span className="payment-check" aria-hidden="true" />
        </label>
      </div>
      <p className="payment-preview-note">
        Payment options shown for preview only. Payments are not connected.
      </p>
    </fieldset>
  )
}

export default PaymentOptions
