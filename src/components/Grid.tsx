import { useEffect, useState } from "react";
import loader from "../assets/loader.gif";

type Photo = {
  id: number;
  url: string;
};
function Grid() {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const response = await fetch(
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${Math.floor(
        Math.random() * 100
      )}&limit=9`
    );
    const data = await response.json();
    setPhotos(
      data.photos.map((photo: Photo) => {
        return {
          id: photo.id,
          url: photo.url,
        };
      })
    );
  };
  useEffect(() => {
    fetchPhotos(); // fetch photos instantly  as the first setInterval method will execute after 10 seconds
    const intervalId = setInterval(fetchPhotos, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='grid grid-cols-3 gap-4'>
      {photos.length > 0
        ? photos.map((photo: Photo) => {
            return (
              <img
                key={photo.id}
                src={photo.url}
                alt={photo.id.toString()}
                width='250'
                height='250'
                className='rounded-xl transition-all'
              />
            );
          })
        : new Array(9).fill(0).map(() => (
            <div className='m-5'>
              <img src={loader} alt='loader' />
            </div>
          ))}
    </div>
  );
}

export default Grid;
