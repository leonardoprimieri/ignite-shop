import { styled } from "../theme"

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  justifyContent: "center"
})

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto"
})
