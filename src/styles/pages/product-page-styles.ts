import { styled } from "../theme"
import { HomeContainer } from "./home-styles"

export const ProductPageContainer = styled(HomeContainer, {
  display: "flex",
  gap: 50
})

export const ProductInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 30,
  h1: {
    color: "$gray300"
  },
  span: {
    color: "$green300",
    fontSize: "$2xl"
  },
  p: {
    maxWidth: 520,
    width: "100%",
    lineHeight: 1.5
  }
})

export const ProductImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  width: "100%",
  maxWidth: 570,
  borderRadius: 8,
  img: {
    width: 420,
    height: 530,
    objectFit: "cover"
  }
})

export const PayButton = styled("button", {
  padding: "18px 16px",
  background: "$green500",
  border: 0,
  color: "$white",
  fontSize: "$sm",
  fontWeight: "bold",
  justifySelf: "flex-end",
  marginTop: "auto",
  borderRadius: 8,
  cursor: "pointer"
})
