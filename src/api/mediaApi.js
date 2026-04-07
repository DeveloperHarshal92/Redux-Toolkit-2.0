import axios from "axios";

const unsplashKey = import.meta.env.VITE_UNSPLASH_KEY;
const pexelsKey = import.meta.env.VITE_PEXELS_KEY;
const giphyKey = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page,
    },
    headers: {
      Authorization: `Client-ID ${unsplashKey}`,
    },
  });
  
  return response.data;
}


export async function fetchVideos(query, page = 1, per_page = 15) {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: {
      query,
      page,
      per_page,
    },
    headers: {      
        Authorization: pexelsKey,
    },
  });
  
  return response.data;
}

export async function fetchGifs(query, page = 1, limit = 20) {
  const offset = (page - 1) * limit;
  const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: giphyKey,
      q: query,
      limit,
      offset,
    },
  });
  return response.data;
}