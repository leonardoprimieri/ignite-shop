import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home-styles";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

import camiseta1 from "../assets/1.png";
import camiseta3 from "../assets/4.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 1</strong>
          <span> R$ 50,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 2</strong>
          <span> R$ 50,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 2</strong>
          <span> R$ 50,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 2</strong>
          <span> R$ 50,00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
