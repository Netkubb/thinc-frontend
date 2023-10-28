import { backendIPAddress } from "../../../utils/constants";

export default async function getPosts() {
  const response = await fetch(`http://${backendIPAddress}/feed/`, {
    method: "GET",
  });

  if (!response.ok) throw new Error("failed to fetch get posts");

  return await response.json();
}
