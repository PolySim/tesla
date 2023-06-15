export default function sumList(numbers: number[], index: number): number {
  return index === 0 ? 0 : numbers.slice(0, index).reduce((a, b) => a + b);
}
