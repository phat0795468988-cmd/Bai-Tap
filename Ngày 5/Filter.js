
export const filter = (products) => {
    return products.filter(product => product.active === true && product.category === "Gear");
};