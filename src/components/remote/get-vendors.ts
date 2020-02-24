import axios from 'axios';


export const apiGetVendor= async () => {
    let user = ""
    try {
        const response = await axios.get('http://nicefestival-ui.s3-website.us-east-2.amazonaws.com/vendor')
        if (response.status === 200) {
            user = response.data;
            return user
        }
        else {
            return user
        }
    } catch (e) {
        console.log(e);
    }
} 