import axios from 'axios';

export const apiManageVendor = async (vendor:any, tent:any, status:any) => {

    try {
        const response = await axios.post('http://localhost:8080/nice-festival/manager/ven', {
            "id": vendor["id"],
            "user": {
                "id": vendor["user"]["id"],
                "username": vendor["user"]["username"],
                "password": vendor["user"]["password"],
                "firstName": vendor["user"]["firstName"],
                "lastName": vendor["user"]["lastName"],
                "email": vendor["user"]["email"],
                "role": vendor["user"]["role"]
            },
            "tent": tent,
            "type": vendor["type"],
            "details": vendor["details"],
            "companyName": vendor["companyName"],
            "status": status
        })
        if (response.status === 200) {
            console.log('Thank God');
        }
    } catch (e) {
        console.log(e);
    }

}