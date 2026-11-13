import { useState } from 'react'

function isValidGhanaPhone(value) {
  let digits = value.replace(/\D/g, '')

  if (digits.startsWith('233')) {
    digits = digits.slice(3)
  }

  if (digits.startsWith('0')) {
    digits = digits.slice(1)
  }

  return /^(2[0-9]|5[0-9])\d{7}$/.test(digits)
}

function CustomerDetails() {
  const [nameError, setNameError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [confirmation, setConfirmation] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setConfirmation('')

    const formData = new FormData(event.currentTarget)
    const fullName = formData.get('fullName').trim()
    const phone = formData.get('phone').trim()
    const nextNameError = fullName.split(/\s+/).length < 2
      ? 'Please enter your first and last name.'
      : ''
    const nextPhoneError = isValidGhanaPhone(phone)
      ? ''
      : 'Enter a valid Ghanaian mobile number, such as 024 123 4567.'

    setNameError(nextNameError)
    setPhoneError(nextPhoneError)

    if (nextNameError || nextPhoneError) {
      return
    }

    setConfirmation(
      'Your details look good. Payment setup will be available in a later phase.',
    )
  }

  return (
    <form className="customer-card" onSubmit={handleSubmit} noValidate>
      <div className="card-overline">
        <span>01</span>
        <span>YOUR DETAILS</span>
      </div>
      <h3>A note about you.</h3>
      <p className="customer-helper">
        Just your name and number. No account needed.
      </p>
      <label className="form-field">
        <span>Full name</span>
        <input
          type="text"
          name="fullName"
          autoComplete="name"
          placeholder="e.g. Ama Mensah"
          minLength={2}
          required
          aria-invalid={Boolean(nameError)}
          aria-describedby={nameError ? 'name-error' : undefined}
          onChange={() => {
            setNameError('')
            setConfirmation('')
          }}
        />
        {nameError && (
          <span className="field-error" id="name-error" role="alert">
            {nameError}
          </span>
        )}
      </label>
      <label className="form-field">
        <span>Ghanaian phone number</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          placeholder="024 123 4567"
          required
          aria-invalid={Boolean(phoneError)}
          aria-describedby={phoneError ? 'phone-error' : 'phone-hint'}
          onChange={() => {
            setPhoneError('')
            setConfirmation('')
          }}
        />
        {phoneError ? (
          <span className="field-error" id="phone-error" role="alert">
            {phoneError}
          </span>
        ) : (
          <span className="field-hint" id="phone-hint">
            Enter a Ghanaian mobile number with or without +233.
          </span>
        )}
      </label>
      <button className="button button-dark form-submit" type="submit">
        Check my details <span aria-hidden="true">↗</span>
      </button>
      {confirmation && (
        <p className="form-confirmation" role="status">
          {confirmation}
        </p>
      )}
    </form>
  )
}

export default CustomerDetails
