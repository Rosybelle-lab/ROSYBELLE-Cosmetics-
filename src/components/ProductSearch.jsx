import { useMemo, useState } from 'react'
import { formatCurrency } from '../utils/formatCurrency.js'

function ProductSearch({ products, selectedIds, onAdd }) {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLocaleLowerCase()

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        [product.name, product.description, product.category]
          .join(' ')
          .toLocaleLowerCase()
          .includes(normalizedQuery),
      ),
    [normalizedQuery, products],
  )

  return (
    <div className="product-search">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">
          ⌕
        </span>
        <span className="visually-hidden">Search beauty products</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “lip oil” or “skincare”"
          autoComplete="off"
        />
        <span className="search-shortcut">SEARCH</span>
      </label>

      <div className="results-heading">
        <p>
          {normalizedQuery
            ? `${filteredProducts.length} ${
                filteredProducts.length === 1 ? 'lovely find' : 'lovely finds'
              }`
            : 'THE ROSYBELLE EDIT'}
        </p>
        <span>PRICES IN GHANA CEDIS</span>
      </div>

      {filteredProducts.length > 0 ? (
        <ul className="product-list" aria-live="polite">
          {filteredProducts.map((product) => {
            const isSelected = selectedIds.includes(product.id)

            return (
              <li className="product-row" key={product.id}>
                <div className="product-number" aria-hidden="true">
                  {String(products.indexOf(product) + 1).padStart(2, '0')}
                </div>
                <div className="product-copy">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <span className="product-price">{formatCurrency(product.price)}</span>
                <button
                  type="button"
                  className={`add-button${isSelected ? ' is-added' : ''}`}
                  onClick={() => onAdd(product.id)}
                  disabled={isSelected}
                  aria-label={
                    isSelected
                      ? `${product.name} is already in your calculation`
                      : `Add ${product.name} to your calculation`
                  }
                >
                  {isSelected ? (
                    <>
                      Added <span aria-hidden="true">✓</span>
                    </>
                  ) : (
                    <>
                      Add <span aria-hidden="true">+</span>
                    </>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="no-results" role="status">
          <span aria-hidden="true">✳</span>
          <h3>No lovely finds just yet.</h3>
          <p>Try another product name, category, or search term.</p>
        </div>
      )}
      <p className="demo-caption">Illustrative product selection for demonstration.</p>
    </div>
  )
}

export default ProductSearch
