import { FC, useState } from 'react';
import { TitleCon } from './TitleCon';
import Api from './Api';

export const App: FC = () => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <>
      <TitleCon searchWord={searchWord} setSearchWord={setSearchWord} />
      <Api searchWord={searchWord} />
    </>
  );
};
