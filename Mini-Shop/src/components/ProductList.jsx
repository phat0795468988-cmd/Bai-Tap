function ProductList({id, name, price, quantity, list, setList}){
    function Up(){
        setList(
            list.map((product) => {
                if(product.id === id){
                    return{
                        ...product,
                        quantity: product.quantity + 1
                    }
                }else{
                    return product
                }
            })
        )
    }
    function Down(){
        setList(
            list.map((product) => {
                if(product.id === id){
                    if(product.quantity > 0){
                        return{
                            ...product,
                            quantity: product.quantity - 1
                        }
                    } else{
                        return product
                    }
                }else{
                    return product
                }
            })
        )
    }
    return( 
        <div className="list-product">
            <h2>{name}</h2>
            <h2>{price.toLocaleString("vi-VN")} VNĐ</h2>
            <h2>{quantity}</h2>
            <button onClick={Up}>+</button>
            <button onClick={Down}>-</button>
        </div>
    )
}
export default ProductList