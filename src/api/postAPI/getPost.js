import Cookies from "js-cookie";
import { backendIPAddress } from "../../utils/constants";

export default async function getPost(pid) {
  const response = await fetch(`http://${backendIPAddress}/feed/post?id=${pid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${Cookies.get('jwt')}` || "",
    },
  });

  if (!response.ok) throw new Error("fail to fetch one post");

  return await response.json();
}
