# EXAMPLE

```javascript
const { Pabrik } = require('./dist/index')

const products = {
  employee: {
    firstName: "John",
    lastName: "Doe",
    age: 25
  },
  asset: {
    id: "asset-id-01",
    name: "Honda HRV",
    condition: "good",
    price: 300000000
  }
}

const pabrik = new Pabrik(products)

const newEmployee = pabrik.create('employee', { age: 30 })
console.log(newEmployee)
/*
  RESULT
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  }
*/

const newAsset = pabrik.create('asset')
console.log(newAsset)
/*
  RESULT
  {
    id: 'asset-id-01',
    name: 'Honda HRV',
    condition: 'good',
    price: 300000000
  }
*/
```