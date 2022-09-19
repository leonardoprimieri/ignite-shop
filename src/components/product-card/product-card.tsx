import Image from "next/future/image"
import Link from "next/link"
import { ProductModel } from "../../models/product-model"
import { Product } from "./product-card-styles"

type Props = {
  product: ProductModel
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`product/${product.id}`} key={product.id}>
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
    </Link>
  )
}
