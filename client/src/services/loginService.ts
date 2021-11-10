import http from "./axiosHTTP";

class AuthService {
  register(name: String, email: String, password: String) {
    return http.post("/register", { name, email, password });
  }

  login(email: String, password: String) {
    return http.post("/login", { email, password }).then((response: any) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.assign("/");
  }

  getUser() {
    let value: any = localStorage.getItem("user");
    let parsedValue: any = JSON.parse(value);
    return parsedValue;
  }
}

export default new AuthService();
