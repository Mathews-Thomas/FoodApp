import React from 'react'
import { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { useCart } from './CartContext';
function Pizza({pizza}) {
    const [Quantity,setQuantity] =useState(1)
    const [varient,setvarient] =useState('small')
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    console.log(pizza.image)
    addToCart({
      id: pizza.id,
      image:pizza.image,
      name: pizza.name,
      quantity: Quantity,
      variant: varient,
      price: pizza.prices[0][varient],
    });
  };
  return (
    <div className='mt-5 pt-5 shadow-lg bg-white rounded'>
        <h3>{pizza.name}</h3>
    <img src={pizza.image} style={{width: "80%",height:"170px",cursor:"pointer"}} className='rounded' alt='foodimage' onClick={handleShow} />
    <div className='d-flex flex-wrap justify-content-between pl-4 pr-4'>
        <div className='mt-2'> <p>Varients:</p>
        <select value={varient} onChange={(e)=>setvarient(e.target.value)} className='form-control'>   {pizza.varients.map(varients=>{
            return <option>{varients}</option>
        })}</select>
      </div>
        <div className='mt-2'><p>Quantity:</p> 
        <select value={Quantity} onChange={(e)=>setQuantity(e.target.value)} className='form-control'>{[...Array(10).keys()].map((i)=>{
            return <option value={i+1}>{i+1}</option>
        })}</select></div>
    </div>
    <div className='d-flex flex-wrap justify-content-between pt-3 pl-4 pr-4'>
          <div><p>Prices: {pizza.prices[0][varient] * Quantity} Rs /-</p></div>
          <div><button className='btn btn-danger btn-sm mb-2' onClick={handleAddToCart}>Add to Cart</button></div>
        </div>
      <div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header >
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <p><img src={pizza.image} style={{width: "100%",height:"200px"}} className='rounded' alt='foodimage' variant="primary" ></img></p>
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default Pizza