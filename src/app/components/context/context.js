import { client } from "../lib/client"

const getProducts = async() => {
  const query = `*[_type == 'products']`

  const products = client.fetch(query)

  return products
}

export {getProducts}