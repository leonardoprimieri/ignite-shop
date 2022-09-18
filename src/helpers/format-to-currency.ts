export default function formatToCurrency(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}
