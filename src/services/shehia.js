import axios from "axios";
export const getShehia = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const postShehia = (url,body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(url,body);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  };
