import { FC } from 'react';

type Props = {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
};

export const TitleCon: FC<Props> = (props) => {
  return (
    <div className="App">
      <p>
        タイトル
        <input
          title="myInput"
          value={props.searchWord}
          onChange={(e) => {
            props.setSearchWord(e.target.value);
          }}
        />
      </p>
    </div>
  );
};