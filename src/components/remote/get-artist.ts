import axios from 'axios';


export const apiGetArtist= async () => {
    let user = ""
    try {
        const response = await axios.get('http://localhost:8080/nice-festival/artist/submit')
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