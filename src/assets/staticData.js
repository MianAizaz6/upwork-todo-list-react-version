import img4 from '../assets/Phone-Camera-Webcam-Gear-GettyImages-1241495650.webp'
import img3 from '../assets/q5UfaGNrEwWgTWH2iUdKMU.jpeg'

const initialState = {
 products:[
  {
    id:1,
    image:img4,
    title:'Iphone 13 Pro Max',
    price:400000,
    company:'apple',
    liked:false,
    cartAdded: false
  },
  {
    id:2,
    image:img3,
    title:'Iphone 14 Pro Max',
    price:400000,
    company:'apple',
    liked:false,
    cartAdded: false
  },
  {
    id:3,
    image:img4,
    title:'Iphone 12 Pro Max',
    price:400000,
    company:'apple',
    liked:false,
    cartAdded: false
  },
  // {
  //   id:4,
  //   image:img4,
  //   title:'Iphone 12 Pro Max',
  //   price:400000,
  //   company:'apple',
  //   liked:false,
  // 
  // },
 
 
],
cartItems:[],
wishList :[
]

};

export default initialState