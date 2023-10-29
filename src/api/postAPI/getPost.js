import { backendIPAddress } from "../../utils/constants";

export default async function getPost(pid) {
  const response = await fetch(`http://${backendIPAddress}/feed/post`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      id: pid,
    },
  });

  if (!response.ok) throw new Error("fail to fetch one post");

  return await response.json();
}
