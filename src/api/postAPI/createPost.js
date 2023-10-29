import Cookies from "js-cookie";
import { backendIPAddress } from "../../utils/constants";

export default async function createPost(SendVideoURL, SendCaption) {
  const jwtToken = Cookies.get("jwt");

  // Parse the JWT token to get the username
  const decodedToken = atob(jwtToken.split(".")[1]);
  const userData = JSON.parse(decodedToken);
  const username = userData.username;

  const response = await fetch(`http://${backendIPAddress}/feed/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("jwt")}`,
    },
    body: JSON.stringify({
      videoURL: SendVideoURL,
      like: 0,
      caption: SendCaption,
      comment: "[]",
      username: username,
    }),
  });

  if (!response.ok) throw new Error("fail to fetch createPost");

  return response;
}
