import { useRouter } from "next/router";

export default function ProductPage() {
  // get the product id from the url
  const { query } = useRouter();

  return (
    <div>
      <h1>Product: {query.id}</h1>
    </div>
  );
}
