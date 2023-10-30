import { backendIPAddress } from "../../utils/constants";
import Cookies from "js-cookie";

export default async function deletePost(pid) {
  const response = await fetch(`http://${backendIPAddress}/feed/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("jwt")}` || "",
    },
    body: JSON.stringify({
      id: pid,
    }),
  });

  if (!response.ok) throw Error("fail to fetch delete post");

  return response;
}
