import { Notebook } from "../models/notebook";
import { fetchData } from "../utils/fetchApiData";

interface CreateNotebookCredentials {
    title: string,
    description: string,
}

export async function create(credentials: CreateNotebookCredentials): Promise<Notebook> {
    const response = await fetchData(
        "/api/notebook/create",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }
    );
    return response.json();
}