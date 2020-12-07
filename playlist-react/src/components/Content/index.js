import React from "react";
import {
  Container,
  Wrapper,
  Pic,
  Text,
  Space,
  PlaylistContainer,
  SongTitleContainer,
  SongContent,
  TitlePlaylist,
  PlaylistContent
} from "./styled";
import songJson from "../../songs.json";


function Content() {
  return (
    <Container>
      <Wrapper>
        <Pic>
          <span>M</span>
        </Pic>
        <Text>
          <h1>MY PLAYLIST</h1>
          <span>CREART BY asdjalsdjldsjf: 2 song ,7 min 44 sec</span>
          <Space />
          <PlaylistContainer>
            <PlaylistContent>
            <TitlePlaylist>Title</TitlePlaylist>
            <SongContent>
              {songJson.map((item) => (
                <SongTitleContainer>{item.title}</SongTitleContainer>
              ))}
            </SongContent>
            <TitlePlaylist>Artist</TitlePlaylist>
            <SongContent>
              {songJson.map((item) => (
                <SongTitleContainer>{item.artist}</SongTitleContainer>
              ))}
            </SongContent>
            <TitlePlaylist>Duration</TitlePlaylist>
            <SongContent>
              {songJson.map((item) => (
                <SongTitleContainer>{item.duration}</SongTitleContainer>
              ))}
            </SongContent>
            </PlaylistContent>
          </PlaylistContainer>
        </Text>
      </Wrapper>
    </Container>
  );
}
export default Content;
