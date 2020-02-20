import axios from 'axios';


export const apiSendMessage = async (current_user: any, message: string) => {

    try {
        const response = await axios.post('http://localhost:8080/nice-festival/send/new', {
            "message": message,
            "sender": {
                "id": current_user["id"],
                "username": current_user["username"],
                "password": current_user["password"],
                "firstName": current_user["firstName"],
                "lastName": current_user["lastName"],
                "email": current_user["email"],
                "role": current_user["role"]
            }
        })
        if (response.status === 200) {
            console.log("Good!");
        }
    } catch (e) {
        console.log(e);
    }
} 