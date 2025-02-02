import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookingScreen() {
  const { roomid } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setError(false);
        setLoading(true);
        
        const response = await axios.get(`/api/rooms/getroombyid/${roomid}`);

        setRoom(response.data); 
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchRoom();
  }, [roomid]); 

  return (
    <div className="container mt-4">
      <h2 className="text-center">Booking Screen</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching room details.</p>}

      {room && (
        <div className="row">
          {/* Left Side - Room Image */}
          <div className="col-md-6">
            <h4>{room.name}</h4>
            <img src={room.imageurls[0]} className="img-fluid rounded shadow" alt="Room" />
          </div>

          {/* Right Side - Booking Details */}
          <div className="col-md-6">
            <div className="p-4 shadow-lg rounded bg-light">
              <h3>Booking Details</h3>
              <p><strong>Name:</strong> </p>
              <p><strong>From Date:</strong> 17-06-2021</p>
              <p><strong>To Date:</strong> 18-06-2021</p>
              <p><strong>Max Count:</strong> {room.maxcount}</p>

              <hr />

              <h4>Amount</h4>
              <p><strong>Total Days:</strong> 2</p>
              <p><strong>Rent Per Day:</strong> 1500</p>
              <p><strong>Total Amount:</strong> 3000 /-</p>

              <button className="btn btn-dark btn-lg w-100 mt-3">Pay Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingScreen;
