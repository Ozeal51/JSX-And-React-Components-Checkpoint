import product from "../product";

export default function Price() {
  const formatted = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(product.price);
  return <div className="product-price">{formatted}</div>;
}
