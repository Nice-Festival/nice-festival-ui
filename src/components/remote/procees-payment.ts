import axios from 'axios';


export const apiMakePayment= () => {
     axios.get('http://localhost:8080/nice-festival/buy/ticket')
} 