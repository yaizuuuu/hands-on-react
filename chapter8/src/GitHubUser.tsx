import Fetch from './Fetch';

// type GithubUserProps = Partial<{
//   login: string
// }>
//
// type GithubUser = {
//   name: string,
//   login: string,
//   avatar_url: string,
//   location: string
// }
//
// const loadJSON = (key: string): GithubUser | null => {
//   console.log(`key: ${key}`);
//
//   if (!key) return null;
//
//   const loaded = localStorage.getItem(key);
//
//   console.log(`loaded: ${loaded}`);
//
//   if (loaded != null && loaded != '') return JSON.parse(loaded) as GithubUser;
//
//   return null;
// };
//
// const saveJSON = (key: string, data: GithubUser) => {
//   console.log('saved');
//   localStorage.setItem(key, JSON.stringify(data));
// };
//
// function GitHubUser({ login }: GithubUserProps) {
//   const [data, setData] = useState(loadJSON(`user:${login}`));
//
//   useEffect(() => {
//     if (data == null) return;
//     if (data.login != login) return;
//
//     console.log('loaded.');
//
//     const { name, avatar_url, location } = data;
//
//     saveJSON(`user:${login}`, {
//       name,
//       login,
//       avatar_url,
//       location,
//     } as GithubUser);
//   }, [data]);
//
//   useEffect(() => {
//     if (!login) return;
//     if (data != null && data.login === login) return;
//
//     console.log('fetched.');
//
//     fetch(`https://api.github.com/users/${login}`)
//       .then(response => response.json())
//       .then(setData)
//       .catch(console.error);
//   }, [login]);
//
//   if (data != null) return <pre>{JSON.stringify(data, null, 2)}</pre>;
//
//   return <p>no data</p>;
// }

// function GitHubUser({ login }: GithubUserProps) {
//   const [data, setData] = useState({} as GithubUser);
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(false);
//
//   useEffect(() => {
//     if (!login) return;
//     setLoading(true);
//     fetch(`https://api.github.com/users/${login}`)
//       .then(data => data.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(e => {
//         console.error(e);
//         setError(e);
//       });
//   }, [login]);
//
//   if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//
//   if (loading) return <h1>loading...</h1>;
//
//   if (!data) return null;
//
//   return (
//     <div className="githubUser">
//       <img
//         src={data.avatar_url}
//         alt={data.login}
//         style={{ width: 200 }} />
//
//       <div>
//         <h1>{data.login}</h1>
//         {data.name && <p>{data.name}</p>}
//         {data.location && <p>{data.login}</p>}
//       </div>
//     </div>
//   );
//
// }

type GithubUser = {
  name: string,
  login: string,
  avatar_url: string,
  location: string
}

type GitHubUserProps = {
  login?: string
}

function GitHubUser({ login }: GitHubUserProps) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}

type UserDetailsProp = {
  data: GithubUser
}

function UserDetails({ data }: UserDetailsProp) {
  return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export default GitHubUser;