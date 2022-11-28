import { useIterator } from './hook';
import { useEffect } from 'react';

export type Repository = {
  name: string
}

type repoMenuProps = {
  repositories: Repository[]
  selected: string
  onSelect: (f: string) => void
}

export default function RepoMenu({ repositories, selected, onSelect = f => f }: repoMenuProps) {
  const { item, prev, next } = useIterator(
    repositories,
    selected ? repositories.findIndex(repo => repo.name == selected) : undefined,
  );

  useEffect(() => {
    if (!item.name) return;
    onSelect(item.name);
  }, [item.name]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={prev}>&lt;</button>
        <p>{item.name}</p>
        <button onClick={next}>&gt;</button>
      </div>
    </>
  );
}
