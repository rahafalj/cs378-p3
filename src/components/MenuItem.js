import React, {useState} from 'react';
import './MenuItem.css';
import './Cart.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = (props) => {
    const [itemCount, setItemCount] = useState(0)

    function textToDisplay() {
        if (props.cleared) {
            // avoid an infinite loop
            if (itemCount !== 0) {
                setItemCount(0)
            }
            props.setItemAndCount({})
            props.setCleared(false)
        }
        return itemCount
    }

    return (
        <div>
            <div class="row menu-items">
                <div class="col-4 food-img"><img src={require(`../images/${props.image}`)} alt="{props.title}"></img></div>
                <div class="col food-description">
                    <div class="row">
                        <div class="col title"><h2>{props.title}</h2></div>
                        <div class = "col price"><h2>{props.price}</h2></div>
                    </div>
                    <div class="row">
                        <div class="col description"><h2>{props.description}</h2></div>
                    </div>
                    <div class="row">
                        {/* <div class = "col-6 price"><h2>{props.price}</h2></div> */}
                        {/* <div class = "col add"><button>Add</button></div> */}
                        <div class="col minus"><button class="glyphicon glyphicon-minus-sign" onClick={() => {
                            if (itemCount !== 0) {
                                setItemCount(itemCount - 1)
                                props.setSubtotal((parseFloat(props.subtotal) - parseFloat(props.price)).toFixed(2))
                                props.setItemAndCount({...props.itemAndCount, [props.title]:itemCount - 1})
                            }
                        }}></button></div>
                        <div class = "col numItems"><h2>{textToDisplay()}</h2></div>
                        <div class="col addIcon"><button class="glyphicon glyphicon-plus-sign" onClick={() => {
                            setItemCount(itemCount + 1)
                            props.setSubtotal((parseFloat(props.subtotal) + parseFloat(props.price)).toFixed(2))
                            props.setItemAndCount({...props.itemAndCount, [props.title]:itemCount + 1})
                        }}></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
