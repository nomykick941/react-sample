import React, {useState} from 'react'

function Basic2() {

    const [products, setProducts] = useState([])

    const newProducts = () => { 
        setProducts([...products, {
            id: products.length, 
            name: "Hello React"
        }])
    }
    
    return (
        <div>
            <button onClick={newProducts}>Add New Product</button>
                <ul>
                    {products.map(product => (
                        <li key={product.name}>{product.name},{product.id}</li>
                    ))}
                </ul>
            
        </div>
    )
}

export default Basic2
