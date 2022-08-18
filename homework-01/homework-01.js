let firstItem = 15.678;
console.log(firstItem)

let secondItem = 123.965;
console.log(secondItem)

let thirdItem = 90.2345;
console.log(thirdItem)


let maxPrice = (Math.max(firstItem, secondItem, thirdItem));
console.log(maxPrice)

let minPrice = (Math.min(firstItem, secondItem, thirdItem));
console.log(minPrice)

let sum = firstItem + secondItem + thirdItem;
console.log(sum)

let roundFloor = (Math.floor(firstItem) + Math.floor(secondItem) + Math.floor(thirdItem));
console.log(roundFloor)

let roundSum = (Math.round(sum / 100) * 100);
console.log(roundSum)

let isEven = !!(roundFloor % 2 == 0);
console.log(isEven)

let change = 500 - sum;
console.log(change)

let averagePrice = Number((sum / 3).toFixed(2));
console.log(averagePrice)

let randomDiscount = Math.floor(Math.random() * 100) + 1;
console.log(randomDiscount)

let discountSum = Number((sum - (sum / 100 * randomDiscount)).toFixed(2));
console.log(discountSum) 

let profit = (sum / 2) - (sum - discountSum);
console.log(profit)

let result =`
Ціна першого товару:              ${firstItem}
Ціна другого товару:              ${secondItem}
Ціна третього товару:             ${thirdItem}
Максимальна ціна:                 ${maxPrice}
Мінімальна ціна:                  ${minPrice}
Сума товарів:                     ${sum}
Сума, скруглена в меншу сторону:  ${roundFloor}
Сума, скруглена до сотень:        ${roundSum}
Чи сума є парним числом:          ${isEven}
Решта з 500 грн:                  ${change}
Середня ціна:                     ${averagePrice}
Випадкова знижка:                 ${randomDiscount}
Сума, враховуючи знижку:          ${discountSum}
Чистий прибуток:                  ${profit}
`;
console.log(result)