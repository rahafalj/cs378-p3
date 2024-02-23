import React from 'react';
import './MenuItem.css';
import '../App.css';


const Cart = (props) => {
    return (
        <div>
            <div class="row text-center">
                <div class = "col title"><h2>Subtotal</h2></div>
                <div class="col subtotal">{props.subtotal}</div>
                <div class="col order"><button onClick={() => {
                    if (Object.keys(props.itemAndCount).length === 0) {
                        alert("No items in cart")
                    } else {
                        // read first element then in loop add the &
                        let order = ""
                        for (const entry of Object.entries(props.itemAndCount)) {
                            order = order.concat(entry[1] + " " + entry[0] + "\n" )
                        }
                        alert("Order placed! \n" + order)
                }
                }}>Order</button></div>
                <div class="col clearAll"><button onClick={() => {
                    props.setSubtotal(0)
                    props.setCleared(true)
                }}>Clear All</button></div>
            </div>
        </div>
    );
};

export default Cart;
