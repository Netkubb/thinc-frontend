import { backendIPAddress } from "../../utils/constants";

export default async function registerAPI(SendUsername, SendPassword) {
  const response = await fetch(`http://${backendIPAddress}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: SendUsername,
      password: SendPassword,
    }),
  });

  if (!response.ok) throw Error("fail to fetch register");

  return response;
}
