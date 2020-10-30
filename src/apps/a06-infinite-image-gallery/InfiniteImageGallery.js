import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import './InfiniteImageGallery.scss';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const InfiniteImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const getPhotos = useCallback(() => {
    let apiUrl = `https://api.unsplash.com/photos?`;
    if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;
    apiUrl += `&page=${page}&client_id=${accessKey}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const imagesFromApi = data.results ?? data;

        if (page === 1) {
          setImages(imagesFromApi);
          return;
        }

        return setImages((images) => [...images, ...imagesFromApi]);
      });
  }, [page, query]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  const searchPhotos = (e) => {
    e.preventDefault();
    setPage(1);
    getPhotos();
  };

  if (!accessKey) {
    return (
      <div className='infinite-image-gallery-app'>
        <a href='https://unsplash.com/developers' className='error'>
          Required: Get Your Unsplash API Key First
        </a>
      </div>
    );
  }

  return (
    <div className='infinite-image-gallery-app'>
      <h1>Unsplash Image Gallery!</h1>

      <form onSubmit={searchPhotos}>
        <input
          type='text'
          placeholder='Search Unsplash...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>

      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage((page) => page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className='image-grid'>
          {images.map((image, index) => (
            <a
              className='image'
              key={image.id}
              href={image.links.html}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
