(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })

    return total.toString();
  };

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`${rta}`);
  };

  const rta = printTotal([1, 2, 3, 12321, 3132, 313, 123, 4,1112421, 2]);
})();
