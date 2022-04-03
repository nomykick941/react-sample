import React, {useState} from 'react'

const Basic = (props) => {
    const clickHandler = () =>{
        console.log('clicked')
    }

    const [count, setCount] = useState(0)

    const [product, setProducts] = useState({name: '',price:''})

    return (
        <>
            <form>
                <input tyoe='text' value ={product.name} onChange={event => setProducts({...product, name: event.target.value})}/>
                <input tyoe='text' value ={product.price} onChange={event => setProducts({...product, price: event.target.value})}/>              
            </form>

            <h1>hello react {props.name}</h1>

            <button onClick={clickHandler}>click</button>
            <button onClick={() => {setCount(prevCount=>prevCount+1); setCount(prevCount=>prevCount+1);}}>count {count}</button>

            <h2>Product name is {product.name}</h2>
            <h2>Product price is {product.price}</h2>
        </>
    )
}

export default Basic
