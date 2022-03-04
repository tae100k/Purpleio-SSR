import fetch from "isomorphic-unfetch";

const API_URL = "http://localhost:9000";

export async function getPosts() {
  const request = await fetch(`${API_URL}/posts`);
  const response = await request.json();
  const { posts } = response;

  return {
    posts,
  };
}

export async function getPost() {
  const request = await fetch(`${API_URL}/posts/${postId}`);
  const response = await request.json();
  const { post } = response;

  return {
    post,
  };
}
