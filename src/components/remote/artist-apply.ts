import axios from 'axios';


export const apiArtistApply = async (current_user: any, details: string) => {

    try {
        const response = await axios.post('http://localhost:8080/nice-festival/artist/apply', {
            "user": {
                "id": current_user["id"],
                "username": current_user["username"],
                "password": current_user["password"],
                "firstName": current_user["firstName"],
                "lastName": current_user["lastName"],
                "email": current_user["email"],
                "role": current_user["role"]
            },
            "details": details,

        })
        if (response.status === 200) {
            console.log("Good!");
        }
    } catch (e) {
        console.log(e);
    }
} 