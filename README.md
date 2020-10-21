# PABRIK 🏭 🏭 🏭

Pabrik is a helper that will help you creating dummy object. My first tought when creating this package, is to use this on creating dummy object when writing test.

## Add package to your project
```
npm install pabrik --save-dev
```

## How to use
```javascript
const { Pabrik } = require('pabrik')

const products = {
  asset: {
    id: "asset-id-01",
    name: "Honda HRV",
    condition: "good",
    price: 300000000
  },
  employee: {
    id: "employee-id-01",
    firstName: "John",
    lastName: "Doe",
    age: 25
  }
}

const pabrik = new Pabrik(products)

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

const newEmployee = pabrik.create('employee', { id: "new-employee-id", lastName: 'Lee', age: 30 })
console.log(newEmployee)
/*
  RESULT
  {
    id: "new-employee-id",
    firstName: 'John',
    lastName: 'Lee',
    age: 30
  }
*/

```