import { useMemo, useState } from 'react'
import { demoProducts } from './data/demoProducts.js'
import CalculationPanel from './components/CalculationPanel.jsx'
import CustomerDetails from './components/CustomerDetails.jsx'
import PaymentOptions from './components/PaymentOptions.jsx'
import ProductSearch from './components/ProductSearch.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import './App.css'

function App() {
  const [selectedIds, setSelectedIds] = useState([])

  const selectedProducts = useMemo(
    () => demoProducts.filter((product) => selectedIds.includes(product.id)),
    [selectedIds],
  )

  function addProduct(productId) {
    setSelectedIds((currentIds) =>
      currentIds.includes(productId) ? currentIds : [...currentIds, productId],
    )
  }

  function removeProduct(productId) {
    setSelectedIds((currentIds) =>
      currentIds.filter((selectedId) => selectedId !== productId),
    )
  }

  return (
    <>
      <div className="announcement">
        <span>Thoughtful beauty, made simple</span>
        <span className="announcement-divider" aria-hidden="true">
          ·
        </span>
        <span>Made for you in Ghana</span>
      </div>
      <SiteHeader />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">YOUR BEAUTY, BEAUTIFULLY CONSIDERED</p>
            <h1 id="hero-title">
              A little more
              <br />
              <em>lovely.</em> A lot
              <br />
              more you.
            </h1>
            <p className="hero-description">
              Discover the beauty essentials you love, then see your complete
              total before you decide.
            </p>
            <a className="button button-dark" href="#search">
              Explore the collection <span aria-hidden="true">↗</span>
            </a>
            <p className="hero-note">A lovely little ritual, right here in Ghana.</p>
          </div>
          <div className="hero-art" aria-label="RosyBelle Beauty, thoughtful beauty made simple">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-art-inner">
              <span className="hero-art-top">ROSYBELLE BEAUTY</span>
              <span className="hero-art-word">Feel</span>
              <span className="hero-art-word hero-art-word-italic">like you.</span>
              <span className="hero-art-bottom">YOUR BEAUTY, YOUR WAY · EST. GHANA</span>
            </div>
            <span className="hero-sparkle hero-sparkle-one" aria-hidden="true">
              ✳
            </span>
            <span className="hero-sparkle hero-sparkle-two" aria-hidden="true">
              ✧
            </span>
          </div>
          <div className="hero-bottomline">
            <span>BEAUTY, WITHOUT THE GUESSWORK</span>
            <span>01 — 03</span>
          </div>
        </section>

        <section className="intro-strip" aria-label="About RosyBelle">
          <span className="intro-mark" aria-hidden="true">
            R
          </span>
          <p>
            At <strong>RosyBelle</strong>, finding your next favourite should
            feel as good as wearing it. Browse with ease, build your own
            selection, and know exactly what it costs.
          </p>
          <span className="intro-side-note">BEAUTY, MADE PERSONAL</span>
        </section>

        <section className="collection-section section-shell" id="search">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A THOUGHTFUL EDIT</p>
              <h2>Find your feel-good.</h2>
            </div>
            <p className="section-aside">
              A few lovely things for your everyday ritual.
            </p>
          </div>
          <ProductSearch
            products={demoProducts}
            selectedIds={selectedIds}
            onAdd={addProduct}
          />
        </section>

        <section className="calculation-section" id="calculator">
          <div className="section-shell calculation-layout">
            <div className="calculation-intro">
              <p className="eyebrow">YOUR PERSONALISED TOTAL</p>
              <h2>
                Your picks,
                <br />
                <em>all together.</em>
              </h2>
              <p>
                Add the pieces you love to see their individual prices and
                your total. No extras, just the products you chose.
              </p>
              <span className="calculation-note">
                ✳ &nbsp;Only your selected products are included.
              </span>
            </div>
            <CalculationPanel
              products={selectedProducts}
              onRemove={removeProduct}
            />
          </div>
        </section>

        <section className="details-section section-shell" id="your-details">
          <div className="section-heading details-heading">
            <div>
              <p className="eyebrow">THE FINAL TOUCH</p>
              <h2>Make it personal.</h2>
            </div>
            <p className="section-aside">
              A couple of details, then choose how you’d like to pay.
            </p>
          </div>
          <div className="details-layout">
            <CustomerDetails />
            <PaymentOptions />
          </div>
          <p className="preview-notice">
            This is a design preview. No order is placed and no payment is
            collected here.
          </p>
        </section>

        <section className="closing-banner">
          <span className="closing-flower" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">A LITTLE LOVE, EVERY DAY</p>
          <h2>Here’s to feeling lovely.</h2>
          <a className="button button-light" href="#search">
            Find your favourites <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="RosyBelle, back to top">
          <span className="brand-monogram">R</span>
          <span>
            <span className="brand-name">RosyBelle</span>
            <span className="brand-caption">BEAUTY FAST SERVICE</span>
          </span>
        </a>
        <p>Thoughtful beauty. Made for you in Ghana.</p>
        <span className="footer-copyright">© ROSYBELLE BEAUTY</span>
      </footer>
    </>
  )
}

export default App
