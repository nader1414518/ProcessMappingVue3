import Cookies from "js-cookie";

class TokenUtility {

    setToken(token) {
        Cookies.set("l_t", token, {
            expires: 7,
            secure: true,
        });
    }

    getToken() {
        return Cookies.get("l_t");
    }

}

export default new TokenUtility;