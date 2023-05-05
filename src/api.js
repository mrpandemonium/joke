import axios from "axios";

const searchJoke = async (joke) => {
  const response = await axios.get("https://v2.jokeapi.dev/joke/Any", {
    params: {
      query: joke,
    },
  });
  return response.data;
};

export default searchJoke;
