import { backendIPAddress } from "../../utils/constants";

export default async function uploadVideo(videoFile) {
  try {
    // VDO file
    const formData = new FormData();
    formData.append("video", videoFile);

    // fetch
    const response = fetch(`http://${backendIPAddress}/feed/upload`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("fail to fetch upload video");
    }
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
