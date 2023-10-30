import { backendIPAddress } from "../../utils/constants";
import Cookies from "js-cookie";

export default async function updatePost(pid, SendUserCaption, SendUserLike) {
  const response = await fetch(`http://${backendIPAddress}/feed/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("jwt")}` || "",
    },
    body: JSON.stringify({
      id: pid,
      caption: SendUserCaption,
      like: SendUserLike,
    }),
  });

  if (!response.ok) throw Error("fail to fetch update post");

  return response;
}
