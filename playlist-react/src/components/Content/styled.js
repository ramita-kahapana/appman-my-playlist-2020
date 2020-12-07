import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  height: 100vh;
  background-color: #fca311;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  h1 {
    margin-top: 1.6rem;
    margin-right: 9rem;
  }
`;

export const Pic = styled.div`
  width: 15vw;
  height: 25vh;
  background-color: blue;
  margin-top: 2rem;
  margin-left: 2rem;
  span {
    font-size: 10rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.div`
  margin-left: 2rem;
  span {
    margin-left: 0;
  }
`;
export const Space = styled.div`
  margin-bottom: 2rem;
`;
export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PlaylistContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;
export const SongTitleContainer = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
`;
export const Lane = styled.div`
  display: flex;
`;
export const SongContent = styled.ul`
  list-style: none;
  width: 100%;
`;
export const TitlePlaylist = styled.ul`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  text-transform: uppercase;
`;
