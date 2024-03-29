export const GET_SONG = "GET_SONG";

export const getSongAction = (songSelected) => {
  return {
    type: GET_SONG,
    payload: songSelected,
  };
};
