import React,{useState} from 'react'
import { Modal,Button,Carousel } from 'react-bootstrap';

function Room({room}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='row bs'>
        <div className='col md-3'>
            <img src={room.imageurls[0]} className='smallimg' />
    </div>
    <div className='col-md-7 '>
        <b>
        <h1>{room.name}</h1>
        <p>Max Count : {room.maxcount}</p>
        <p>phone Number: {room.labInCharge}</p>
        <p>Department: {room.department}</p>
        </b>
        <div style={{float:'right'}}>
            <Button className='btn btn-primary' onClick={handleShow}>View Details</Button>
            </div>   
            </div>
  
            

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header >
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Carousel prevLabel='' nextLabel=''>
          <Carousel.Item>
            <img className='d-block w-100 bigimg' src={room.imageurls[0]} />
          </Carousel.Item>
          </Carousel>
          <p>
          {room.descrpition} </p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

            </div>

  )
}

export default Room