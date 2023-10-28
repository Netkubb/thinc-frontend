import { backendIPAddress } from "../../../utils/constants";

export default async function addComment(pid, SendUsername, SendContent) {
  const response = await fetch(`http://${backendIPAddress}/addComment`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
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
