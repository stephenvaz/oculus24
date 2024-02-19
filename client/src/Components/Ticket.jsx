import React from 'react';
import './Ticket.scss';

const Ticket = () => {
    return (
        <div className="ticket">
            <div className="holes-top"></div>
            <div className="title">
                <p className="cinema">ODEON CINEMA PRESENTS</p>
                <p className="movie-title">ONLY GOD FORGIVES</p>
            </div>
            <div className="poster">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg" alt="Movie: Only God Forgives" />
            </div>
            <div className="info">
                <table>
                    <tbody>
                        <tr>
                            <th>SCREEN</th>
                            <th>ROW</th>
                            <th>SEAT</th>
                        </tr>
                        <tr>
                            <td className="bigger">18</td>
                            <td className="bigger">H</td>
                            <td className="bigger">24</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>PRICE</th>
                            <th>DATE</th>
                            <th>TIME</th>
                        </tr>
                        <tr>
                            <td>$12.00</td>
                            <td>1/13/17</td>
                            <td>19:30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="holes-lower"></div>
        </div>
    );
};

export default Ticket;
