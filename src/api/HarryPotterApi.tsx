import axios from 'axios';

export const fetchCharactersByHouse = async(house: string)=> {
  try {
    const url = `https://hp-api.onrender.com/api/characters/house/${house.toLowerCase()}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};
