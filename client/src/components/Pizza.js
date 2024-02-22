import React from 'react'
import { useState } from 'react'
import {Modal} from 'react-bootstrap'
function Pizza({pizza}) {
    const [Quantity,setQuantity] =useState(1)
    const [varient,setvarient] =useState('small')
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleclick =()=>{
    console.log(pizza)
  }
  return (
    <div className='mt-5 pt-5 shadow-lg'>
        <h2>{pizza.name}</h2>
    <img src={pizza.image} style={{width: "80%",height:"170px",cursor:"pointer"}} className='rounded' alt='foodimage' onClick={handleShow} ></img>
    <div className='d-flex flex-wrap justify-content-between pl-4 pr-4'>
        <div> <p>Varients:</p>
        <select value={varient} onChange={(e)=>setvarient(e.target.value)}>   {pizza.varients.map(varients=>{
            return <option>{varients}</option>
        })}</select>
      </div>
        <div><p>Quantity:</p> 
        <select value={Quantity} onChange={(e)=>setQuantity(e.target.value)}>{[...Array(10).keys()].map((i)=>{
            return <option value={i+1}>{i+1}</option>
        })}</select></div>
    </div>
    <div className='d-flex flex-wrap justify-content-between pt-3 pl-4 pr-4'>
          <div><p>Prices: {pizza.prices[0][varient] * Quantity} Rs /-</p></div>
          <div><button className='btn btn-danger btn-sm' onClick={handleclick}>Add to Cart</button></div>
        </div>
      <div>
      <Modal show={show} onHide={handleClose}>
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