import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import './App.css';
import GitHubUser from './GitHubUser';
import UserRepositories from './UserRepositories';
import RepositoryReadme from './RepositoryReadme';
// import { faker } from '@faker-js/faker';
// import { FixedSizeList } from 'react-window';

// type ListProps<T> = {
//   data: T[],
//   renderItem: (item: T) => JSX.Element | string,
//   renderEmpty: JSX.Element
// }
//
// function List<U>({ data = [], renderItem, renderEmpty }: ListProps<U>): JSX.Element {
//   return !data.length
//     ? renderEmpty
//     : (
//       <ul>
//         {data.map((item, i) => <li key={i}>{renderItem(item)}</li>)}
//       </ul>
//     );
// }
//
// type bigListProps = Partial<{
//   name: string,
//   email: string,
//   avatar: string,
// }>
//
// const bigList = [...Array(5000)].map(() => ({
//   name: faker.name.fullName(),
//   email: faker.internet.email(),
//   avatar: faker.internet.avatar(),
// } as bigListProps));
//
// type renderRowProps = {
//   index: number,
//   style: object
// }

// function App() {
//   const renderRow = ({ index, style }: renderRowProps) => (
//     <div style={{ ...style, display: 'flex' }}>
//       <img
//         src={bigList[index].avatar}
//         alt={bigList[index].name}
//         width={50}
//       />
//       <p>{bigList[index].name} - {bigList[index].email}</p>
//     </div>
//   );
//
//   const renderItem = (item: bigListProps) => (
//     <div style={{ display: 'flex' }}>
//       <img src={item.avatar} alt={item.name} width={50} />
//       <p>{item.name} - {item.email}</p>
//     </div>
//   );
//
//   return (
//     <>
//       <GitHubUser login="yaizuuuu" />
//       <List data={bigList} renderItem={renderItem} renderEmpty={<p>No Contents</p>} />
//     </>
//   );
//
//   return (
//     <>
//       <GitHubUser login="yaizuuuu" />
//       <FixedSizeList
//         itemSize={50}
//         height={window.innerHeight}
//         itemCount={bigList.length}
//         width={window.innerWidth - 20}>
//         {renderRow}
//       </FixedSizeList>
//     </>
//   );
// }

function App() {
  const [login, setLogin] = useState('');
  const [repo, setRepo] = useState('');
  const [search, setSearch] = useState(login);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }, []);

  const onClick = () => {
    if (login) return setSearch(login);
    setSearch('');
    setRepo('')
  };

  return (
    <>
      <p>
        <input type="text" onChange={onChange} value={login} />
        <button onClick={onClick}>search
        </button>
      </p>

      {search && <GitHubUser login={search} />}
      {search && <UserRepositories selected={repo} onSelect={setRepo} login={search} />}
      {search && repo && <RepositoryReadme repo={repo} login={search} />}
    </>
  );
}

export default App;
