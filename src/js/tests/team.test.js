import Team from '../team';

test('Добавление одного и того же персонажа', () => {
  expect(() => {
    const character = { name: 'Garrosh', class: 'warrior' };
    const team = new Team();
    team.add(character);
    team.add(character);
  }).toThrow();
});

test('Добавление разных персонажей', () => {
  const character1 = { name: 'Garrosh', class: 'warrior' };
  const character2 = { name: 'Legolas', class: 'bowman' };
  const team = new Team();
  team.add(character1);
  team.add(character2);
  const result = team.members;
  const expected = new Set([{ name: 'Garrosh', class: 'warrior' }, { name: 'Legolas', class: 'bowman' }]);
  expect(result).toEqual(expected);
});

test('Добавление всех персонажей', () => {
  const character1 = { name: 'Garrosh', class: 'warrior' };
  const character2 = { name: 'Legolas', class: 'bowman' };
  const team = new Team();
  team.addAll(character1, character2, character1);
  const result = team.members;
  const expected = new Set([{ name: 'Garrosh', class: 'warrior' }, { name: 'Legolas', class: 'bowman' }]);
  expect(result).toEqual(expected);
});

test('Добавление персонажей в массив', () => {
  const character1 = { name: 'Garrosh', class: 'warrior' };
  const character2 = { name: 'Legolas', class: 'bowman' };
  const team = new Team();
  team.add(character1);
  team.add(character2);
  const result = team.toArray();
  const expected = [{ name: 'Garrosh', class: 'warrior' }, { name: 'Legolas', class: 'bowman' }];
  expect(result).toEqual(expected);
});
