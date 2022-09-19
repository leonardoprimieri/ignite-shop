import Image from "next/future/image"
import { ProductModel } from "../../models/product-model"
import { Product } from "./product-card-styles"

type Props = {
  product: ProductModel
}

export default function ProductCard({ product }: Props) {
  return (
    <Product className='keen-slider__slide'>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={520}
        height={480}
      />
      <footer>
        <strong>{product.name}</strong>
        <span>{product.price}</span>
      </footer>
    </Product>
  )
}
