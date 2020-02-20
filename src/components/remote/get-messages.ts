import axios from 'axios';


export const apiGetMessages = async () => {
    let messages = ""
    try {
        const response = await axios.get('http://localhost:8080/nice-festival/send/all')
        if (response.status === 200) {
            messages = response.data;
            return messages
        }
        else {
            return messages
        }
    } catch (e) {
        console.log(e);
    }
} 