
const songReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarens', duration: '2:30'},
        {title: 'All Start', duration: '3:15'},
        {title: 'I Want it That way', duration: '2:59'}
    ]
}


const selectedSongReducer = (selectedSong = null, action) => {
      if (action.type === 'SONG_SELECTED') {
          return action.payload
      }

      return selectedSong;
}