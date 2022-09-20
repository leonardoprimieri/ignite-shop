import { styled } from "../theme"
import { ProductImageContainer } from "./product-page-styles"

export const SuccessPageContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "calc(100vh - 140px)",
  marginTop: 20,
  gap: 100,
  a: {
    textDecoration: "none",
    color: "$green300",
    fontWeight: "bold"
  }
})

export const SuccessProductContainer = styled(ProductImageContainer, {
  width: 130,
  height: 145,
  img: {
    width: 100,
    height: 115
  }
})
