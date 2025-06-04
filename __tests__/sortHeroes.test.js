import sortHeroes from '../src/sortHeroes';

describe('sortHeroes function', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroes(heroes);

    expect(result).toEqual(expected);
    expect(heroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
  });

  test('should handle empty array', () => {
    expect(sortHeroes([])).toEqual([]);
  });

  test('should handle single hero', () => {
    const singleHero = [{ name: 'маг', health: 100 }];
    expect(sortHeroes(singleHero)).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('should handle heroes with equal health', () => {
    const heroes = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 30 },
    ];

    const result = sortHeroes(heroes);
    
    expect(result).toEqual([
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 30 },
    ]);
  });
});