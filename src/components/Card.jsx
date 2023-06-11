import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  margin-top: 0px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-style: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
`;

const Info = styled.div`
  font-style: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6ss5pgYETcDiLOO4M8bvfmviy8h-cUgV6YQ5nja7ng&usqp=CAU&ec=48665701g" />
        <Details>
          <ChannelImage src="https://hips.hearstapps.com/hmg-prod/images/florence-pugh-black-widow-poster-1581518804.jpg?crop=0.806xw:0.544xh;0.0995xw,0.106xh&resize=100:*" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Jonny Dev</ChannelName>
            <Info>700,000 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
