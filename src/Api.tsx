import { useState, useEffect, FC } from 'react';
const YOUTUBE_SEARCH_API_URI = 'https://www.googleapis.com/youtube/v3/search?';
const API_KEY = 'AIzaSyDTCQ6lNbEM0JPm83EAA86slppwCVltVQY';

type Props = {
  searchWord: string;

};

export const Api: FC<Props> = (props) => {
  const [videoId, setVideoId] = useState('');
  useEffect(() => {
    // クエリ文字列を定義する
    const params = {
      key: API_KEY,
      q: "ヒカキン",//props.searchWord // 検索キーワード
      type: 'video', // video,channel,playlistから選択できる
      maxResults: '1',
      order: 'viewCount',
    };

    const queryParams = new URLSearchParams(params);
    //const url = `${YOUTUBE_SEARCH_API_URI}?${queryParams}`;

    // APIをコールする
    fetch(YOUTUBE_SEARCH_API_URI + queryParams)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('API success:', result);

          if (result.items && result.items.length !== 0) {
            const firstItem = result.items[0];
            setVideoId(firstItem.id.videoId);
          }
        },
        (error) => {
          console.error(error);
        }
      );

  }, [props.searchWord]);

  return (
    <>
      <div>検索文字列：{props.searchWord}</div>
        src={'https://www.youtube.com/embed/' + videoId}

    </>
  );
};

export default Api;