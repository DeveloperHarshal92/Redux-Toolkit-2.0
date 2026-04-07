import axios from "axios";

const unsplashKey = import.meta.env.VITE_UNSPLASH_KEY;
const pexelsKey = import.meta.env.VITE_PEXELS_KEY;
// const tenorKey = import.meta.env.VITE_TENOR_KEY;

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


export async function fetchVideos(query, per_page = 15) {
  const response = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: {
      query,
      per_page,
    },
    headers: {      
        Authorization: `Client-ID ${pexelsKey}`,
    },
  });
  
  return response.data;
}

// export async function fetchGifs(query, limit = 20) {
//   const response = await axios.get(`https://tenor.googleapis.com/v2/search`, {
//     params: {
//       q: query,
//       key: tenorKey,
//       limit,
//     },
//   });
  
//   return response.data;
// }