import { backendIPAddress } from "../../utils/constants";

export default async function uploadVideo(videoFile) {
  try {
    const formData = new FormData();
    formData.append("file", videoFile);

    const response = await fetch(`http://${backendIPAddress}/feed/upload/`, {
      method: "POST",
      headers: {},
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch upload video. Status: ${response.status}`
      );
    }

    // check เพื่อ parse
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}