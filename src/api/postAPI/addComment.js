import { backendIPAddress } from "../../utils/constants";
import Cookies from "js-cookie";

export default async function addComment(pid, SendUsername, SendContent) {
  const response = await fetch(`http://${backendIPAddress}/feed/addComment`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("jwt")}` || "",
    },
    body: JSON.stringify({
      id: pid,
      username: SendUsername,
      content: SendContent,
    }),
  });

  if (!response.ok) throw Error("fail to fetch add Comment");

  return response;
}
