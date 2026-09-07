function Card({quantity, setQuantity, price, setPrice}){
    function Sum(){
        setPrice(price+100000)
        setQuantity(quantity + 1)
    }
    function Asubtrac(){
        if(quantity > 0){
        setPrice(price-100000)
        setQuantity(quantity - 1)
        }
    }
    return(
        <div>
            <h2>Số lượng: {quantity}</h2>
            <button onClick={(Asubtrac) }>-</button>
            <button onClick={(Sum)}>+</button>
            <h2>Giá: {price}</h2>
        </div>
    )
}   
export default Card