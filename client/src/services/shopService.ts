import http from "./axiosHTTP";
import loginService from "./loginService";

const user = loginService.getUser();

class ShopService {
  getAllProducts() {
    return http
      .get("/products", { headers: { Authorization: user?.token } })
      .then((response: any) => {
        if (response.data) {
          return response.data;
        }
      });
  }

  addProductToCart(quantity: Number, userId: String, productId: String) {
    return http
      .post(
        "/cart",
        { quantity, userId, productId },
        { headers: { Authorization: user?.token } }
      )
      .then((response: any) => {
        if (response.data) {
          return response.data;
        }
      });
  }

  updateProductInCart(quantity: Number, cartId: String, productId: String) {
    return http
      .put(
        "/cart",
        { quantity, cartId, productId },
        { headers: { Authorization: user?.token } }
      )
      .then((response: any) => {
        if (response.data) {
          return response.data;
        }
      });
  }

  getCart(userId: String) {
    return http
      .get(`/cart/${userId}`, { headers: { Authorization: user?.token } })
      .then((response: any) => {
        if (response.data) {
          return response.data;
        }
      });
  }

  purchaseCart(userId: String) {
    return http
      .post(
        "/cart/purchase",
        { userId },
        { headers: { Authorization: user?.token } }
      )
      .then((response: any) => {
        if (response.data) {
          return response.data;
        }
      });
  }
}

export default new ShopService();
