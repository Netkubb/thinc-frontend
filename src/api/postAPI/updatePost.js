import { backendIPAddress } from "../../../utils/constants";

export default async function updatePost(pid, SendUserCaption, SendUserLike) {
  const response = await fetch(`http://${backendIPAddress}/feed/`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
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
