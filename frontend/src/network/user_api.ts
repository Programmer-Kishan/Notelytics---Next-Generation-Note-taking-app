import { User } from "../models/user";
import { fetchData } from "../utils/fetchApiData";

export interface SignUpCredentials {
    username: string,
    email: string,
    password: string
}

export async function SignUp(credentials: SignUpCredentials): Promise<User> {
    const response = await fetchData(
        "/api/user/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }
    )
    return response.json()
}