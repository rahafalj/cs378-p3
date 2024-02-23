import './App.css';
import MenuItem from './components/MenuItem';
import logo from './images/logo.jpg'
import Logo from './components/Logo';
import Cart from './components/Cart'
import Description from './components/Description';
import React, {useState} from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  // subtotal state passed up so we can alter in MenuItem and display changes in 
  // cart
  const [subtotal, setSubtotal] = useState(0)
  // want each itemCount to be local to component, but want a shared clearedAll
  // state so we can rerender all components and set their itemCount to 0
  // if clearAll is clicked inside of cart
  const [cleared, setCleared] = useState(false)
  // dictionary of item name and their count so we can alter it in Menuitem and
  // access it in cart when the user clicks "order"
  const [itemAndCount, setItemAndCount] = useState({})

  return (
    <div>
      <Logo logo={logo}></Logo>
      <Description first="Delicious, From-Scratch Recipes Close at Hand" second="The Fresh Choice of UT!"></Description>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        {menuItems.map((props) => (
          <MenuItem title={props.title} description={props.description} image={props.imageName} price={menuItems[0].price} subtotal={subtotal} setSubtotal={setSubtotal} cleared={cleared} setCleared={setCleared} itemAndCount={itemAndCount} setItemAndCount={setItemAndCount}/>
        ))}
      </div>
      <Cart subtotal={subtotal} setSubtotal={setSubtotal} cleared={cleared} setCleared={setCleared} itemAndCount={itemAndCount}></Cart>
    </div>
  );
}

export default App;
