import axios from 'axios';


export const apiVendorApply = async (current_user: any, companyName: string, details: string, foodType: string) => {

    try {
        const response = await axios.post('http://nicefestival-ui.s3-website.us-east-2.amazonaws.com/vendor/apply', {
            "user": {
                "id": current_user["id"],
                "username": current_user["username"],
                "password": current_user["password"],
                "firstName": current_user["firstName"],
                "lastName": current_user["lastName"],
                "email": current_user["email"],
                "role": current_user["role"]
            },
            "type": foodType,
            "details": details,
            "companyName": companyName
        })
        if (response.status === 200) {
            console.log("Good!");
        }
    } catch (e) {
        console.log(e);
    }
} 