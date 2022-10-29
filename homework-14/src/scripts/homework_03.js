export function getMaxDigit(number){
  const stringifiedNum = String(number);
  return Math.max(...stringifiedNum)
}