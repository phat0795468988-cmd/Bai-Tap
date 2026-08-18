export const total = (products) => {
    return products.reduce((sum, product) =>
        {
             if(product.active === true){
                    return sum + product.price;
            }
            return sum;
    },0 )
}