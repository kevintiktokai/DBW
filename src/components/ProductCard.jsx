import { useQuote } from './QuoteContext'

export default function ProductCard({ product }) {
  const { toggle, has } = useQuote()
  const inQuote = has(product.name)

  return (
    <article className="product-card">
      {product.badge && <span className="product-card__badge">{product.badge}</span>}
      <div className="product-card__img">
        <img src={product.img} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card__body">
        <span className="product-card__cat">{product.cat}</span>
        <span className="product-card__name">{product.name}</span>
        <div className="product-card__row">
          <span className="product-card__price">
            {product.price || <small>Price on request</small>}
          </span>
          <button
            className={`product-card__add ${inQuote ? 'product-card__add--in' : ''}`}
            onClick={() => toggle(product)}
          >
            {inQuote ? '✓ Added' : '+ Quote'}
          </button>
        </div>
      </div>
    </article>
  )
}
