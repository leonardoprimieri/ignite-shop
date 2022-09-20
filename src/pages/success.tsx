import Image from "next/future/image"
import Link from "next/link"
import { ProductImageContainer } from "../styles/pages/product-page-styles"
import {
  SuccessPageContainer,
  SuccessProductContainer
} from "../styles/pages/success-page-styles"

export default function SuccessPage() {
  // random unsplash image url
  const randomImage = "https://source.unsplash.com/random/800x600"

  return (
    <SuccessPageContainer>
      <h1>Compra efetuada!</h1>
      <SuccessProductContainer>
        <Image src={randomImage} alt='' width={200} height={200} />
      </SuccessProductContainer>
      <p>
        Uhuul <strong>Leonardo M. Primieri</strong>, sua{" "}
        <strong>Camiseta</strong> já está a caminho da sua casa.
      </p>

      <Link href='/'>Voltar ao catálogo</Link>
    </SuccessPageContainer>
  )
}
