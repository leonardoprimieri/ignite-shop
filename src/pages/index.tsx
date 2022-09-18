import Image from "next/future/image"
import { HomeContainer, Product } from "../styles/pages/home-styles"
import Stripe from "stripe"

import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"

import { stripeApi } from "../lib/stripe"
import { ProductModel } from "../models/product-model"
import { GetStaticProps } from "next"
import formatToCurrency from "../helpers/format-to-currency"

type Props = {
  products: ProductModel[]
}

export default function Home({ products }: Props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {products.map((product) => (
        <Product key={product.id} className='keen-slider__slide'>
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
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await stripeApi.products.list({
    expand: ["data.default_price"]
  })

  const formattedProducts = products.data.map((product) => {
    const productPrice = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      url: product.url,
      price: formatToCurrency(productPrice.unit_amount / 100)
    }
  })

  return {
    props: {
      products: formattedProducts
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
