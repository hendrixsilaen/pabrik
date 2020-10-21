export class Pabrik {
  products: Object

  constructor(products: Object) {
    this.products = {}

    this.setProducts(products)
  }

  public create(productName: String, newValue?: Object) {
    const selectedProduct: Object = {
      ...this.getSelectedProduct(productName)
    }

    if (newValue !== undefined && newValue !== null) {
      this.setNewValueToProduct(selectedProduct, newValue, productName)
    }

    return selectedProduct
  }

  private setProducts(products: Object): void {
    const productNames: Array<String> = Object.keys(products)
    let newProducts: Object = {}

    productNames.forEach((productName) => {
      newProducts[`${productName}`] = products[`${productName}`]
    })
    
    this.products = newProducts
  }

  private getSelectedProduct (productName): Object {
    const selectedProduct: Object = this.products[`${productName}`]
    if(!selectedProduct) {
      throw new Error(`There's no ${productName} product`)
    }

    return selectedProduct
  }

  private setNewValueToProduct (selectedProduct: Object, newValue: Object, productName: String): Object {
    const selectedProductKeys: Array<String> = Object.keys(selectedProduct)

    Object.keys(newValue).forEach((key) => {
      if (!(selectedProductKeys.indexOf(key) !== -1)) { // check if newValue key NOT INCLUDED in selectedProductKeys
        throw new Error(`${productName} doesn't have ${key} property`)
      }

      selectedProduct[`${key}`] = newValue[`${key}`]
    })

    return selectedProduct
  }
}

