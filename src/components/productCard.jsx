
const ProductCard = ({name,image,price}) => {
  return (
    <div>
        <h1>{name}</h1>
        <img src={image} />
        <p>Price LKR:{price}</p>
    </div>
  )
}

export default ProductCard