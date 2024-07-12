

export async function fetchData(input: RequestInfo, init?: RequestInit){
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        const errorStatus = errorBody.status
        // console.log(error);
        throw Error("Request failed with status: " + errorStatus + " message: " + errorMessage);
    }
}