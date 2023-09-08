const products = {
  name: 'products',
  type: 'document',
	title: 'Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'sku',
      type: 'string',
      title: 'Sku'
    },
    {
      name: 'thumbs',
      type: 'array',
      title: 'Thumbs',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'catogory',
      type: 'string',
      title: 'Catogory'
    },
    {
      name: 'prev_price',
      type: 'number',
      title: 'Previous Price'
    },
    { 
      name: 'decs',
      type: 'string',
      title: 'Decscriptions',
    },
    { 
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: 'stock',
      type: 'number',
      title: 'Stock'
    },
    {
      name: 'sold',
      type: 'number',
      title: 'Sold'
    },
  ]
}

export default products