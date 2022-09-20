import { HomeContainer } from "../styles/pages/home-styles"
import Stripe from "stripe"

import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"

import { stripeApi } from "../lib/stripe"
import { ProductModel } from "../models/product-model"
import { GetStaticProps } from "next"
import formatToCurrency from "../helpers/format-to-currency"
import ProductCard from "../components/product-card/product-card"
import Head from "next/head"

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
    <>
      <Head>
        <title>Ignite Shop </title>
      </Head>
      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HomeContainer>
    </>
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
