import React, { useEffect } from "react";
import * as S from "./index.style";

import makerImg from "../../assets/customMaker.svg";

declare global {
    interface Window {
        kakao: any;
    }
}

const Home = () => {
    const markAdd = (N: number, E: number, isStartRoute: boolean, map: any) => {
        const imageSrcStart = makerImg,
            imageSizeStart = new window.kakao.maps.Size(33, 33),
            imageOptionStart = { offset: new window.kakao.maps.Point(27, 69) };
        const imageSrc = makerImg,
            imageSize = new window.kakao.maps.Size(29, 29),
            imageOption = { offset: new window.kakao.maps.Point(27, 69) };
        const markerImageStart = new window.kakao.maps.MarkerImage(imageSrcStart, imageSizeStart, imageOptionStart);
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        let markerPosition = new window.kakao.maps.LatLng(N, E);
        if (isStartRoute) {
            let marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImageStart,
            });
            marker.setMap(map);
        } else {
            let marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImage,
            });
            marker.setMap(map);
        }
    };

    useEffect(() => {
        let container = document.getElementById(`map`); // 지도를 담을 영역의 DOM 레퍼런스
        let options = {
            center: new window.kakao.maps.LatLng(36.3527164442425, 128.607077816076), // 지도 중심 좌표
            level: 10, // 지도의 레벨(확대, 축소 정도)
        };

        let map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        markAdd(36.42, 128.62, true, map);
        markAdd(36.52, 128.59, true, map);
        markAdd(36.49, 128.52, true, map);
        markAdd(36.50, 128.45, true, map);
        markAdd(36.45, 128.39, true, map);
    }, []);

    return (
        <S.Container>
            <S.ReservationBox />
            <S.Title>내 예약 보기</S.Title>
            <S.MapContainer id="map" />
            <S.InfoContainer>
                <S.InfoRow>
                    <S.InfoBlock>
                        <S.InfoTitle>여행까지 {3}일</S.InfoTitle>
                        <S.InfoSubtitle>{`${2024}. 0${9}. ${12}.`}</S.InfoSubtitle>
                    </S.InfoBlock>
                    <S.ProgressBarContainer>
                        <S.ProgressBar />
                    </S.ProgressBarContainer>
                </S.InfoRow>
                <S.GuideInfoRow>
                    <S.GuideInfoBlock>
                        <S.GuideInfoText>가이드 정보</S.GuideInfoText>
                    </S.GuideInfoBlock>
                    <S.GuideInfoRight>
                        <S.GuideName>이해준</S.GuideName>
                        <S.Arrow>〉</S.Arrow>
                    </S.GuideInfoRight>
                </S.GuideInfoRow>
                <S.GuideInfoRow>
                    <S.GuideInfoBlock>
                        <S.GuideInfoText>집결 장소</S.GuideInfoText>
                    </S.GuideInfoBlock>
                    <S.GuideInfoRight>
                        <S.GuideName>구지면 대구소프트웨어고</S.GuideName>
                        <S.Arrow>〉</S.Arrow>
                    </S.GuideInfoRight>
                </S.GuideInfoRow>
            </S.InfoContainer>
        </S.Container>
    );
};

export default Home;
