function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <a className="header-brand" href="#top" aria-label="RosyBelle home">
        <span className="brand-monogram">R</span>
        <span className="brand-wordmark">
          <span className="brand-name">RosyBelle</span>
          <span className="brand-caption">BEAUTY FAST SERVICE</span>
        </span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#search">The collection</a>
        <a href="#calculator">Your total</a>
        <a href="#your-details">Your details</a>
      </nav>
      <a className="header-cta" href="#search">
        Start exploring <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default SiteHeader
