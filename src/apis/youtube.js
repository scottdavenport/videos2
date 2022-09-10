import axios from "axios";

const KEY = "AIzaSyCBn0_zjkaA_jtb7I_5RQkS4MqnyL5HQts";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
