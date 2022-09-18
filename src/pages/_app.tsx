import { globalStyles } from "../styles/global";

globalStyles();

import logoImg from "../assets/logo.svg";
import Image from "next/future/image";
import { Container, Header } from "../styles/pages/app-styles";

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="ignite-shop-logo" />
      </Header>
      <Component {...pageProps} />;
    </Container>
  );
}
