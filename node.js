const Shopify = require('shopify-api-node'); 
const shopify = new Shopify({
  shopName: 'newrevo123',
  apiKey: 'bb3d53c45f7bb0e209a1089cd669d7ea',
  password: 'faba7305c813780813321a98ddd4c8e2'
});

//shopify.productVariant.get(49074134790).then(product => console.log(product)).catch(err => console.error(err));

shopify.productVariant.get(49074134790).then(product => console.log(product));
