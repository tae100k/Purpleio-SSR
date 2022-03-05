import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("http://localhost:9000/stores");
  console.log("get posts displayed!");
  return response.data;
};
