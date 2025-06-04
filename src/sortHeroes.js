/**
 * Сортирует героев по уровню здоровья в порядке убывания
 * @param {Array} heroes - массив героев
 * @returns {Array} отсортированная копия массива героев
 */
export default function sortHeroes(heroes) {
  return [...heroes].sort((a, b) => b.health - a.health);
}