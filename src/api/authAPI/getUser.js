import Cookies from "js-cookie";
import { backendIPAddress } from "../../utils/constants";

export default async function getUser() {
  const Token = Cookies.get("jwt");

  const response = await fetch(`http://${backendIPAddress}/auth/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });

  if (!response.ok) throw new Error("failed to fetch get user");

  return await response.json();
}
