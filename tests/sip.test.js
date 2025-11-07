import { computeSip } from "../src/utils/sip";

describe("computeSip", () => {
  test("returns zeros for 0 years", () => {
    const res = computeSip({ monthly: 5000, annualRatePct: 12, years: 0 });
    expect(res.maturityAmount).toBe(0);
    expect(res.totalInvested).toBe(0);
    expect(res.estimatedGains).toBe(0);
    expect(res.yearlyData.length).toBe(0);
  });

  test("basic 12% for 1 year, 1000/month", () => {
    const res = computeSip({ monthly: 1000, annualRatePct: 12, years: 1 });
    // Invested should be ~ 12,000
    expect(res.totalInvested).toBe(12000);
    // Maturity should be greater than invested due to returns
    expect(res.maturityAmount).toBeGreaterThan(12000);
    expect(res.yearlyData.length).toBe(1);
    expect(res.yearlyData[0].year).toBe(1);
  });

  test("longer horizon increases maturity", () => {
    const a = computeSip({ monthly: 2000, annualRatePct: 12, years: 5 });
    const b = computeSip({ monthly: 2000, annualRatePct: 12, years: 10 });
    expect(b.maturityAmount).toBeGreaterThan(a.maturityAmount);
  });
});

