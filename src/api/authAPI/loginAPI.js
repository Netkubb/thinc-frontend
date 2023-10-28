import Cookies from "js-cookie";
import { backendIPAddress } from "../../utils/constants";

export default async function loginAPI(SendUsername, SendPassword) {
  const response = await fetch(`http://${backendIPAddress}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: SendUsername,
      password: SendPassword,
    }),
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw Error("wrong username or password");
    }
    throw Error("fail to fetch login");
  }

  const data = await response.json();
  const accessToken = data.accessToken;

  Cookies.set("jwt", accessToken, { expires: "3" });

  return { success: true, message: "Login successful" };
}
