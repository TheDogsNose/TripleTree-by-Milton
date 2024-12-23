import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Booking(props) {
    const nav = useNavigate();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [rooms, setRooms] = useState(1);
    const [guests, setGuests] = useState(2);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const calculateNights = (props) => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const difference = (end - start) / (1000 * 60 * 60 * 24); // Convert ms to days
            return difference > 0 ? difference : 0;
        }
        return 0;
    };

    const nights = calculateNights();

    return (
        <section className="booking-section">
            <h2 className="booking-title">Book your next ALL Inclusive Collection experience</h2>
            <div className="booking-widget">
                <div className="booking-details">
                    <div className="booking-item">
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="booking-item">
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div className="booking-item">
                        <label>Rooms & Guests</label>
                        <p
                            onClick={() => { setIsDropdownOpen(!isDropdownOpen); nav(''); }}
                            className="dropdown-trigger"
                        >
                            {rooms} room{rooms > 1 ? "s" : ""} - {guests} guest
                            {guests > 1 ? "s" : ""}
                        </p>
                        {isDropdownOpen && (
                            <div className="dropdown">
                                <div className="dropdown-item">
                                    <label>Rooms:</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={rooms}
                                        onChange={(e) => { setRooms(Number(e.target.value)); props.setroomn(Number(e.target.value)); }}
                                    />
                                </div>
                                <div className="dropdown-item">
                                    <label>Guests:</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={guests}
                                        onChange={(e) => { setGuests(Number(e.target.value)); props.setguestn(Number(e.target.value)); }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="booking-summary">
                    <p className="price">????</p>
                    <p className="stay-info">
                        {nights || 0} night{nights !== 1 ? "s" : ""} - {guests} guest
                        {guests !== 1 ? "s" : ""}
                    </p>
                </div>
                <Link to="/Reservations"><button className="booking-button">Book Now</button></Link>
            </div>
        </section>
    );
}

export default Booking;