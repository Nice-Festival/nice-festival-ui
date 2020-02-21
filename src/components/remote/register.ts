import axios from 'axios';


export const apiRegister = async (username: string, password: string, firstName: string, lastName: string, email: string, role: string): Promise<object> => {
    let user = {
        username,
        password,
        firstName,
        lastName,
        email,
        role
    }
    try {
        const response = await axios.post('http://localhost:8080/nice-festival/register/new-user', {
            "username": username,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "role": role
        })
        if (response.status === 200) {
            const body = await response.data
            if (body["role"] === "CUSTOMER") {
                try {
                    const response2 = await axios.post('http://localhost:8080/nice-festival/register/customer', {
                        "address": "null",
                        "city": "null",
                        "state": "null",
                        "user": {
                            "id": body["id"],
                            "username": body["username"],
                            "password": body["password"],
                            "firstName": body["firstName"],
                            "lastName": body["lastName"],
                            "email": body["email"],
                            "role": body["role"]
                        }
                    });
                    if(response2.status === 200){
                        console.log("Customer created Successfully!");
                    }
                    else if (response2.status === 500) {
                        return {
                            message: "Failed to register you!",
                            body: null
                        }
                    } else {
                        return {
                            message: "Something Went Wrong",
                            body: null
                        }
                    }
                } catch (e) {
                    console.log(e);
                    return {
                        registerMessage: "Something Went Wrong",
                    }
                }
            }
           
            return {
                body,
                message: 'You have been registered!'
            }
        } else if (response.status === 500) {
            return {
                message: "Failed to register you!",
                body: null
            }
        } else {
            return {
                message: "Something Went Wrong",
                body: null
            }
        }
    } catch (e) {
        console.log(user);
        console.log(e);
        return {
            registerMessage: "Something Went Wrong",

        }
    }
}