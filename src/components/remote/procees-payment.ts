import axios from 'axios';


export const apiMakePayment= () => {
     axios.get('http://nicefestival-ui.s3-website.us-east-2.amazonaws.com/buy/ticket')
} 