import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import Image from "next/future/image"
import Stripe from "stripe"
import formatToCurrency from "../../helpers/format-to-currency"
import { stripeApi } from "../../lib/stripe"
import { ProductModel } from "../../models/product-model"
import {
  PayButton,
  ProductImageContainer,
  ProductInfoContainer,
  ProductPageContainer
} from "../../styles/pages/product-page-styles"

type Props = {
  product: ProductModel
}

export default function ProductPage({ product }: Props) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <ProductPageContainer>
      <ProductImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
        />
      </ProductImageContainer>

      <ProductInfoContainer>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <PayButton>Compre aqui</PayButton>
      </ProductInfoContainer>
    </ProductPageContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params
}) => {
  const productId = params.id

  const product = await stripeApi.products.retrieve(productId, {
    expand: ["default_price"]
  })

  const productPrice = product.default_price as Stripe.Price

  const formattedProduct = {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    description: product.description,
    url: product.url,
    price: formatToCurrency(productPrice.unit_amount / 100)
  }

  return {
    props: {
      product: formattedProduct
    },
    revalidate: 60 * 60 * 1 // 1 hours,
  }
}
