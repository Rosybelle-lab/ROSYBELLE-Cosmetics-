import { formatCurrency } from '../utils/formatCurrency.js'

function CalculationPanel({ products, onRemove }) {
  const total = products.reduce(
    (sum, product) => sum + Math.round(product.price * 100),
    0,
  ) / 100

  return (
    <div className="calculation-card" aria-live="polite">
      <div className="calculation-card-heading">
        <span>YOUR SELECTION</span>
        <span>{String(products.length).padStart(2, '0')} ITEMS</span>
      </div>
      {products.length > 0 ? (
        <ul className="selected-list">
          {products.map((product) => (
            <li className="selected-row" key={product.id}>
              <div>
                <span className="selected-category">{product.category}</span>
                <span className="selected-name">{product.name}</span>
              </div>
              <span className="selected-price">{formatCurrency(product.price)}</span>
              <button
                className="remove-button"
                type="button"
                onClick={() => onRemove(product.id)}
                aria-label={`Remove ${product.name} from your selection`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-selection">
          <span className="empty-selection-mark" aria-hidden="true">
            ✧
          </span>
          <p>Your selection is waiting to bloom.</p>
          <span>Add a product above to see it here.</span>
        </div>
      )}
      <div className="total-row">
        <span>Total payable</span>
        <strong>{formatCurrency(total)}</strong>
      </div>
      <p className="total-caption">
        {products.length > 0
          ? 'A simple total for the products you selected.'
          : 'Your total will appear here once you choose a product.'}
      </p>
    </div>
  )
}

export default CalculationPanel
