import { GetServerSideProps } from "next"
import Image from "next/future/image"
import Head from "next/head"
import Link from "next/link"
import Stripe from "stripe"
import { stripeApi } from "../lib/stripe"
import {
  SuccessPageContainer,
  SuccessProductContainer
} from "../styles/pages/success-page-styles"

type Props = {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function SuccessPage({ customerName, product }: Props) {
  return (
    <>
      <Head>
        <title>Success | Next.js Ecommerce</title>
      </Head>
      <SuccessPageContainer>
        <h1>Compra efetuada!</h1>
        <SuccessProductContainer>
          <Image src={product.imageUrl} alt='' width={200} height={200} />
        </SuccessProductContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua{" "}
          <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessPageContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)
  const session = await stripeApi.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"]
  })

  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName: session.customer_details.name,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
}
