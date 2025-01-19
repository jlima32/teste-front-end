import './productsArrow.sass'

const ProductsArrow = ({ img, alt }: { img: string, alt: string}) => {
  return (
    <div className="products-arrow">
        <img src={img} alt={alt} />
    </div>
  )
}

export default ProductsArrow