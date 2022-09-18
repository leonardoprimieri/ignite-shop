import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home-styles";
import Stripe from "stripe";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

import camiseta1 from "../assets/1.png";
import camiseta3 from "../assets/4.png";
import { stripeApi } from "../lib/stripe";

type Props = {
  products: [
    {
      id: string;
      name: string;
      image: string;
      description: string;
      imageUrl: string;
      price: number;
    }
  ];
};

export default function Home({ products }: Props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {
  const products = await stripeApi.products.list({
    expand: ["data.default_price"],
  });

  const formattedProducts = products.data.map((product) => {
    const productPrice = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      url: product.url,
      price: productPrice.unit_amount / 100,
    };
  });

  return {
    props: {
      products: formattedProducts,
    },
  };
};
