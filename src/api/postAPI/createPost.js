import { backendIPAddress } from "../../utils/constants";

export default async function createPost(SendVideoURL, SendCaption) {
  const response = await fetch(`http://${backendIPAddress}/feed/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videoURL: SendVideoURL,
      like: 0,
      caption: SendCaption,
      comment: "",
    }),
  });

  if (!response.ok) throw new Error("fail to fetch createPost");

  return response;
}
