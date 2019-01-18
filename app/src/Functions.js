import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

export const getID = (artistID) => {
  return spotifyWebApi.search(artistID, ['artist']).then((response) => {
    if (response.artists.items.length !== 0){
      return {"name": response.artists.items[0].name, "id": response.artists.items[0].id}
    }
    else{
      return false;
    }
  })
}

export const getAlbums = (artistID) => {
  const albumArray = [];
  const promiseArray = [];

  return spotifyWebApi.getArtistAlbums(artistID)
    .then((albumResponse) => {
      // console.log(albumResponse)
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
      // console.log(trackResponse)
      trackResponse.items.forEach((track) => {
        trackArray.push({
          "id": track.id,
          "name": track.name,
          "trackNumber": track.track_number,
          "previewURL": track.preview_url,
          "popularity": "",
          "acousticness": "",
          "danceability": "",
          "energy": "",
          "instrumentalness": "",
          "liveness": "",
          "loudness": "",
          "speachiness": "",
          "valence": ""
        })
      })
    })
    .then(() => {
      trackArray.forEach((track) =>
        promiseArray.push(getTrackPopularity(track.id))
      );
      return Promise.all(promiseArray).then((featuresArray) => {
        trackArray.forEach((track) => {
          track.popularity = featuresArray[trackArray.indexOf(track)][0].popularity
          track.acousticness = featuresArray[trackArray.indexOf(track)][0].acousticness
          track.danceability = featuresArray[trackArray.indexOf(track)][0].danceability
          track.energy = featuresArray[trackArray.indexOf(track)][0].energy
          track.instrumentalness = featuresArray[trackArray.indexOf(track)][0].instrumentalness
          track.liveness = featuresArray[trackArray.indexOf(track)][0].liveness
          track.loudness = featuresArray[trackArray.indexOf(track)][0].loudness
          track.speechiness = featuresArray[trackArray.indexOf(track)][0].speechiness
          track.valence = featuresArray[trackArray.indexOf(track)][0].valence
        });
        trackArray.sort((a,b) => parseFloat(b.popularity) - parseFloat(a.popularity));
        return trackArray;
      })
    })
}

function getTrackPopularity(trackID){
  const featuresArray = [];
  const promiseArray = [];
  promiseArray.push(spotifyWebApi.getTrack(trackID))
  promiseArray.push(spotifyWebApi.getAudioFeaturesForTrack(trackID))
  return Promise.all(promiseArray).then((response)=>{
    featuresArray.push({
      "popularity": response[0].popularity,
      "acousticness": response[1].acousticness,
      "danceability": response[1].danceability,
      "energy": response[1].energy,
      "instrumentalness": response[1].instrumentalness,
      "liveness": response[1].liveness,
      "loudness": response[1].loudness,
      "speechiness": response[1].speechiness,
      "valence": response[1].valence
    });
    console.log(featuresArray)
    return featuresArray
  })
}



