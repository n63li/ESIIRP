import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();
const RADIOHEAD_ID = '4Z8W4fKeB5YxbusRsdQVPb';

export const getAlbums = () => {
  const albumArray = [];
  const promiseArray = [];

  return spotifyWebApi.getArtistAlbums(RADIOHEAD_ID)
    .then((albumResponse) => {
      albumResponse.items.forEach((album) => {
        albumArray.push({
          "id": album.id,
          "name": album.name,
          "image": album.images[0].url,
          "releaseYear": 'Released in ' + (album.release_date).substr(0,4),
          "totalTracks": album.total_tracks,
          "tracks": ""
        })
      })
    })
    .then(() => {
      albumArray.forEach((album) =>
        promiseArray.push(getTracks(album.id))
      );
      return Promise.all(promiseArray).then((trackArray) => {
        albumArray.forEach((album) =>
          album.tracks = trackArray[albumArray.indexOf(album)]
        );
        return albumArray
      });
    })
}

function getTracks(albumID){
  const trackArray = [];
  const promiseArray = [];

  return spotifyWebApi.getAlbumTracks(albumID)
    .then((trackResponse) => {
      trackResponse.items.forEach((track) => {
        trackArray.push({
          "id": track.id,
          "name": track.name,
          "trackNumber": track.track_number,
          "popularity": ""
        })
      })
    })
    .then(() => {
      trackArray.forEach((track) =>
        promiseArray.push(getTrackPopularity(track.id))
      );
      return Promise.all(promiseArray).then((popularityArray) => {
        trackArray.forEach((track) =>
          track.popularity = popularityArray[trackArray.indexOf(track)]
        );
        trackArray.sort((a,b) => parseFloat(b.popularity) - parseFloat(a.popularity));
        return trackArray;
      })
    })
}

function getTrackPopularity(trackID){
  return spotifyWebApi.getTrack(trackID).then((response) => {
    return response.popularity
  });
}



