/**
 * Call API with msal token and return response.
 * @param accessToken 
 * @param apiEndpoint 
 * @returns API response
 */
 export const callApiWithToken = async(accessToken:string, apiEndpoint:string) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
    headers.append("mode","no-cors");
    if(accessToken!=="")headers.append("Authorization", bearer);
    headers.append("Access-Control-Allow-Origin","*");
    const options = {
        method: "GET",
        headers: headers,
    };

    return fetch(apiEndpoint, options)
        .then(async(response) => {
            return {
            status:response.status,
            body:await response.json()
            }
        })
        .catch(error => {
            return{status:'500',
                   body:'error'
                 }
        });
}