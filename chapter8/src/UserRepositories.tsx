import Fetch from './Fetch';
import RepoMenu, { Repository } from './RepoMenu';

type userRepositoriesProps = {
  login: string
  selected: string,
  onSelect: (f: string) => void
}

type renderData = {
  data: Repository[]
}

export default function UserRepositories({ login, selected, onSelect = f => f }: userRepositoriesProps) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }: renderData) => (
        <RepoMenu
          repositories={data}
          selected={selected}
          onSelect={onSelect}
        />
      )}
    />
  );
}
