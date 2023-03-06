export default function authHeader() {
    // If the token exists in localStorage, parse it to a js object
    const currentToken = localStorage.getItem("loginToken") ?
    JSON.parse(localStorage.getItem("loginToken")) :
    "";
    // If the currentToken exists and has an access token, return it with headers
    if (currentToken && currentToken.state.access_token) {
        return {
            "Access-ControlAllow-Origin": "*",
            authorization: `Bearer ${currentToken.state.access_token}`
        };
    } else {
        return {};
    }
}