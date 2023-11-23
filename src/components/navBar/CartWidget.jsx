import React, {useState} from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Carrito = ({items}) =>{
    const [carrito, setCarrito] = useState([]);

    const handleAgregarAlCarrito = () => {
        const nuevoCarrito = [...carrito, items];
        setCarrito(nuevoCarrito);
    }
    
    return(
        <div>
        <ShoppingBasketIcon/>
        {Carrito.length}
        </div>
    )
}

export default Carrito