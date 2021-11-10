import http from "./axiosHTTP";
import loginService from "./loginService";

const user = loginService.getUser();

class AccountService {
  getUser(userId: String) {
    return http
      .get(`/user/${userId}`, { headers: { Authorization: user?.token } })
      .then((response: any) => {
        if (response.data) {
          return response.data;
        }
      });
  }

  updateBilling(userId: String, data: any) {
    return http
      .put(
        "/user/billing",
        { userId, data },
        { headers: { Authorization: user?.token } }
      )
      .then((response: any) => {
        if (response.data) {
          return response.data;
        }
      });
  }
}

export default new AccountService();
