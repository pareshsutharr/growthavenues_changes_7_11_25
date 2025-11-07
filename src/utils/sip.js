export function computeSip({ monthly, annualRatePct, years }) {
  const m = Number(monthly || 0);
  const r = Number(annualRatePct || 0) / 100;
  const nYears = Number(years || 0);
  const months = Math.max(0, Math.round(nYears * 12));
  const monthlyRate = Math.pow(1 + r, 1 / 12) - 1;

  let value = 0;
  let invested = 0;
  const yearly = [];

  for (let month = 1; month <= months; month += 1) {
    invested += m;
    value = (value + m) * (1 + monthlyRate);
    if (month % 12 === 0 || month === months) {
      const yearIndex = Math.ceil(month / 12);
      const roundedValue = Math.round(value);
      const roundedInvested = Math.round(invested);
      yearly.push({
        year: yearIndex,
        invested: roundedInvested,
        value: roundedValue,
        gains: Math.max(0, roundedValue - roundedInvested),
      });
    }
  }

  const maturity = months === 0 ? 0 : Math.round(value);
  const gains = Math.max(0, maturity - invested);
  return {
    maturityAmount: maturity,
    totalInvested: Math.round(invested),
    estimatedGains: Math.round(gains),
    yearlyData: yearly,
  };
}

