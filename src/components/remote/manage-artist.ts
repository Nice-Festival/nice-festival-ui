import axios from 'axios';

export const apiManageArtist = async (artist:any, stage:any, time:any, day:any, status:any) => {

    try {
        const response = await axios.post('http://localhost:8080/nice-festival/manager/art', {
            "id": artist["id"],
            "stage": stage,
            "user": {
                "id": artist["user"]["id"],
                "username": artist["user"]["username"],
                "password": artist["user"]["password"],
                "firstName": artist["user"]["firstName"],
                "lastName": artist["user"]["lastName"],
                "email": artist["user"]["email"],
                "role": artist["user"]["role"]
            },
            "details": artist["details"],
            "time": time,
            "day": day,
            "status": status
        })
        if (response.status === 200) {
            console.log('Thank God');
        }
    } catch (e) {
        console.log(e);
    }

}