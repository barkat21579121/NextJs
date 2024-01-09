'use client'

const Product = (props) => {
    return (
        <div>
            <button onClick={() => alert(` ${props.title} price is ${props.price}`)}>Click to check price </button>
        </div>
    )
}

export default Product