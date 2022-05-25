import { useEffect, useState } from "react"


const usePurchage = productsId => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = (`https://calm-everglades-95109.herokuapp.com/products/${productsId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productsId])
    return [product, setProduct]
}
export default usePurchage;