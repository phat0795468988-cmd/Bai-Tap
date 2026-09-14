import { memo } from "react"

function Product({ onBuy }) {
    return(
        <>
        <button onClick={onBuy}>Tăng giá tất cả</button>
        </>
    )
}
export default memo(Product)