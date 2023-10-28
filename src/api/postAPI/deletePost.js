import { backendIPAddress } from "../../utils/constants";

export default async function deletePost(pid) {
  const response = await fetch(`http://${backendIPAddress}/feed/`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: pid,
    }),
  });

  if (!response.ok) throw Error("fail to fetch delete post");

  return response;
}
