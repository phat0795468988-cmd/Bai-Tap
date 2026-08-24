   class Cart{
        #products
         
        constructor(products){
            this.#products = products
        }
        get products(){
            return this.#products;
        }

        set products(newProducts){
            this.#products = newProducts
        }
        
        addProduct(product){
            this.#products.push(product)
            return product;
        }

            removeProduct(id) {
            const removedProduct = this.#products.find(product => product.id === id);

            this.#products = this.#products.filter(product => {
                return product.id !== id;
            });

            return removedProduct;
        }   
            
          showInfo(){
          return this.#products
            .map(product => product.showInfo())
            .join("\n\n");
    }
           
            getTotal() {
            return this.#products.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    }
    }

    export default Cart;