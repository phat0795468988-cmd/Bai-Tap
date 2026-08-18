export const NewProduct = (products) => {
    return products.map(product => {
        return {
            name: product.name,
            price: product.price * 0.9
        };
    });
};