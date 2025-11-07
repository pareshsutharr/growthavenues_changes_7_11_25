import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {
  RefreshCcw,
  IndianRupee,
  TrendingUp,
  PiggyBank,
  Share2,
  Download,
  CalendarCheck,
  BarChart3,
  LineChart as LineChartIcon,
  AreaChart as AreaChartIcon,
  PieChart as PieChartIcon,
} from "lucide-react";

const SIP_PRESET_OPTIONS = [
  { label: "Rs 2k | 10% | 5y", monthly: 2000, rate: 10, years: 5 },
  { label: "Rs 5k | 12% | 10y", monthly: 5000, rate: 12, years: 10 },
  { label: "Rs 10k | 14% | 15y", monthly: 10000, rate: 14, years: 15 }
];

const LUMPSUM_PRESETS = [
  { label: "Rs 1L | 12% | 10y", amount: 100000, rate: 12, years: 10 },
  { label: "Rs 3L | 11% | 15y", amount: 300000, rate: 11, years: 15 },
  { label: "Rs 5L | 10% | 20y", amount: 500000, rate: 10, years: 20 }
];

const STEPUP_PRESETS = [
  { label: "Rs 5k → 10% | 10y", base: 5000, step: 10, rate: 12, years: 10 },
  { label: "Rs 8k → 12% | 15y", base: 8000, step: 12, rate: 12, years: 15 },
  { label: "Rs 10k → 8% | 20y", base: 10000, step: 8, rate: 11, years: 20 }
];

const HEADER_OFFSET = 84;

export default function SipCalculator({ calculatorsOnly = false }) {
  const location = useLocation();
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [tenureYears, setTenureYears] = useState(10);
  const [activeChart, setActiveChart] = useState("area");
  const [calculatorMode, setCalculatorMode] = useState("sip");
  const [lumpsumInvestment, setLumpsumInvestment] = useState(100000);
  const [lumpsumReturn, setLumpsumReturn] = useState(12);
  const [lumpsumYears, setLumpsumYears] = useState(10);
  const [stepupBaseInvestment, setStepupBaseInvestment] = useState(5000);
  const [stepupIncrease, setStepupIncrease] = useState(10);
  const [stepupReturn, setStepupReturn] = useState(12);
  const [stepupYears, setStepupYears] = useState(10);
  const [toast, setToast] = useState({ show: false, message: "" });

  const scrollToSection = useCallback((sectionId, behavior = "smooth") => {
    if (!sectionId || typeof window === "undefined") return;
    let attempts = 0;
    const maxAttempts = 8;
    const attempt = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior });
        return;
      }
      if (attempts < maxAttempts) {
        attempts += 1;
        window.requestAnimationFrame(attempt);
      }
    };
    attempt();
  }, []);

  useEffect(() => {
    if (window.bootstrap) {
      const tooltipTriggerList = Array.from(document.querySelectorAll("[data-bs-toggle=\"tooltip\"]"));
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        // eslint-disable-next-line no-new
        new window.bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }, []);

  // Scroll to subsection and set calculator mode via query params
  useEffect(() => {
    try {
      const sp = new URLSearchParams(location.search);
      const sec = sp.get("sec");
      const calc = sp.get("calc");
      if (calc && ["sip", "stepup", "lumpsum"].includes(calc)) {
        setCalculatorMode(calc);
      }
      if (sec) scrollToSection(sec);
    } catch {}
  }, [location.search, scrollToSection]);

  const clampNum = (val, min, max) => Math.min(Math.max(val, min), max);
  const toNumber = (value) => (typeof value === "number" ? value : Number(value || 0));
  const inr = (value) => toNumber(value).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  });
  const shortNum = (value) => {
    const v = toNumber(value);
    if (v >= 1e7) return `${(v / 1e7).toFixed(1)} Cr`;
    if (v >= 1e5) return `${(v / 1e5).toFixed(1)} L`;
    if (v >= 1e3) return `${(v / 1e3).toFixed(1)}k`;
    return String(v);
  };

  const applyLumpsumPreset = (amount, rate, years) => {
    setLumpsumInvestment(amount);
    setLumpsumReturn(rate);
    setLumpsumYears(years);
    setToast({
      show: true,
      message: `Preset applied: ${inr(amount)} | ${rate}% | ${years}y`
    });
  };

  const applyStepupPreset = (base, step, rate, years) => {
    setStepupBaseInvestment(base);
    setStepupIncrease(step);
    setStepupReturn(rate);
    setStepupYears(years);
    setToast({
      show: true,
      message: `Preset applied: ${inr(base)} → +${step}% | ${rate}% | ${years}y`
    });
  };

  const sipStats = useMemo(() => {
    const monthly = toNumber(monthlyInvestment);
    const annualRate = toNumber(annualReturn) / 100;
    const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1;
    const months = toNumber(tenureYears) * 12;

    let value = 0;
    let invested = 0;
    const years = [];

    for (let month = 1; month <= months; month += 1) {
      invested += monthly;
      value = (value + monthly) * (1 + monthlyRate);
      if (month % 12 === 0 || month === months) {
        const yearIndex = Math.ceil(month / 12);
        const roundedValue = Math.round(value);
        const roundedInvested = Math.round(invested);
        years.push({
          year: yearIndex,
          invested: roundedInvested,
          value: roundedValue,
          gains: Math.max(0, roundedValue - roundedInvested)
        });
      }
    }

    const maturity = months === 0 ? 0 : Math.round(value);
    const gains = Math.max(0, maturity - invested);

    return {
      maturityAmount: maturity,
      totalInvested: Math.round(invested),
      estimatedGains: Math.round(gains),
      yearlyData: years,
      pieData: [
        { name: "Amount Invested", value: Math.round(invested) },
        { name: "Estimated Returns", value: Math.round(gains) }
      ]
    };
  }, [annualReturn, monthlyInvestment, tenureYears]);

  const lumpsumStats = useMemo(() => {
    const principal = toNumber(lumpsumInvestment);
    const annualRate = toNumber(lumpsumReturn) / 100;
    const totalYears = Math.max(0, toNumber(lumpsumYears));

    const yearly = [];
    for (let year = 1; year <= totalYears; year += 1) {
      const value = principal * Math.pow(1 + annualRate, year);
      yearly.push({
        year,
        invested: Math.round(principal),
        value: Math.round(value),
        gains: Math.max(0, Math.round(value) - Math.round(principal))
      });
    }

    const maturityValue = totalYears === 0 ? principal : principal * Math.pow(1 + annualRate, totalYears);
    const roundedMaturity = Math.round(maturityValue);
    const gains = Math.max(0, roundedMaturity - Math.round(principal));

    return {
      maturityAmount: roundedMaturity,
      totalInvested: Math.round(principal),
      estimatedGains: gains,
      yearlyData: yearly,
      pieData: [
        { name: "Amount Invested", value: Math.round(principal) },
        { name: "Estimated Returns", value: gains }
      ]
    };
  }, [lumpsumInvestment, lumpsumReturn, lumpsumYears]);

  const stepupStats = useMemo(() => {
    const base = toNumber(stepupBaseInvestment);
    const increaseRate = Math.max(0, toNumber(stepupIncrease)) / 100;
    const annualRate = toNumber(stepupReturn) / 100;
    const months = Math.max(0, toNumber(stepupYears)) * 12;

    let value = 0;
    let invested = 0;
    const yearly = [];

    for (let month = 1; month <= months; month += 1) {
      const yearIndex = Math.floor((month - 1) / 12);
      const currentMonthly = base * Math.pow(1 + increaseRate, yearIndex);
      invested += currentMonthly;
      value = (value + currentMonthly) * (1 + annualRate / 12);
      if (month % 12 === 0 || month === months) {
        const yearNumber = Math.ceil(month / 12);
        const roundedValue = Math.round(value);
        const roundedInvested = Math.round(invested);
        yearly.push({
          year: yearNumber,
          invested: roundedInvested,
          value: roundedValue,
          gains: Math.max(0, roundedValue - roundedInvested)
        });
      }
    }

    const maturityAmount = Math.round(value);
    const totalInvested = Math.round(invested);
    const gains = Math.max(0, maturityAmount - totalInvested);

    return {
      maturityAmount,
      totalInvested,
      estimatedGains: gains,
      yearlyData: yearly,
      pieData: [
        { name: "Amount Invested", value: totalInvested },
        { name: "Estimated Returns", value: gains }
      ]
    };
  }, [stepupBaseInvestment, stepupIncrease, stepupReturn, stepupYears]);

  const activeStats =
    calculatorMode === "sip"
      ? sipStats
      : calculatorMode === "stepup"
      ? stepupStats
      : lumpsumStats;
  const { maturityAmount, totalInvested, estimatedGains, yearlyData, pieData } = activeStats;

  const resetForm = () => {
    if (calculatorMode === "sip") {
      setMonthlyInvestment(5000);
      setAnnualReturn(12);
      setTenureYears(10);
      setToast({ show: true, message: "SIP defaults restored" });
    } else if (calculatorMode === "stepup") {
      setStepupBaseInvestment(5000);
      setStepupIncrease(10);
      setStepupReturn(12);
      setStepupYears(10);
      setToast({ show: true, message: "Step-up defaults restored" });
    } else {
      setLumpsumInvestment(100000);
      setLumpsumReturn(12);
      setLumpsumYears(10);
      setToast({ show: true, message: "Lumpsum defaults restored" });
    }
  };

  const applySipPreset = (monthly, rate, years) => {
    setMonthlyInvestment(monthly);
    setAnnualReturn(rate);
    setTenureYears(years);
    setToast({
      show: true,
      message: `Preset applied: ${inr(monthly)} / month | ${rate}% | ${years}y`
    });
  };

  const exportCSV = () => {
    const header = "Year,Invested (INR),Returns (INR),Total Value (INR)\n";
    const rows = yearlyData.map((d) => `${d.year},${d.invested},${d.gains},${d.value}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `sip_breakdown_${Date.now()}.csv`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  const buildShareUrl = () => {
    const params = new URLSearchParams({
      p: String(monthlyInvestment),
      r: String(annualReturn),
      y: String(tenureYears)
    });
    params.set("sec", "sip-calculator");
    if (typeof window === "undefined") return `/sip?${params}`;
    const { origin, pathname } = window.location;
    const basePath = pathname.endsWith("/sip")
      ? pathname
      : `${pathname.replace(/\/$/, "")}/sip`;
    return `${origin}${basePath}?${params}`;
  };

  const buildLumpsumUrl = () => {
    const params = new URLSearchParams({
      mode: "lumpsum",
      amount: String(lumpsumInvestment),
      rate: String(lumpsumReturn),
      years: String(lumpsumYears)
    });
    params.set("sec", "sip-calculator");
    if (typeof window === "undefined") return `/sip?${params}`;
    const { origin, pathname } = window.location;
    const basePath = pathname.endsWith("/sip")
      ? pathname
      : `${pathname.replace(/\/$/, "")}/sip`;
    return `${origin}${basePath}?${params}`;
  };

  const buildStepupUrl = () => {
    const params = new URLSearchParams({
      mode: "stepup",
      base: String(stepupBaseInvestment),
      step: String(stepupIncrease),
      rate: String(stepupReturn),
      years: String(stepupYears)
    });
    params.set("sec", "sip-calculator");
    if (typeof window === "undefined") return `/sip?${params}`;
    const { origin, pathname } = window.location;
    const basePath = pathname.endsWith("/sip")
      ? pathname
      : `${pathname.replace(/\/$/, "")}/sip`;
    return `${origin}${basePath}?${params}`;
  };

  const copyToClipboard = async (text) => {
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // fall through to legacy copy
      }
    }

    if (typeof document === "undefined") return false;
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    document.body.removeChild(el);
    return copied;
  };

  const sharePlan = async () => {
    if (calculatorMode === "sip") {
      const url = buildShareUrl();
      const summary = `Monthly investment: ${inr(monthlyInvestment)}\nExpected annual return: ${annualReturn}%\nTenure: ${tenureYears} year${tenureYears > 1 ? "s" : ""}`;

      if (navigator?.share) {
        try {
          await navigator.share({
            title: "SIP plan estimate",
            text: `${summary}\n\nView the plan here:`,
            url
          });
          setToast({ show: true, message: "Share dialog opened" });
          return;
        } catch (error) {
          if (error?.name === "AbortError") return;
        }
      }

      const copied = await copyToClipboard(url);
      if (copied) {
        setToast({ show: true, message: "Sharable link copied to clipboard" });
      } else {
        setToast({ show: true, message: `Share this link: ${url}` });
      }
      return;
    }

    if (calculatorMode === "stepup") {
      const url = buildStepupUrl();
      const summary = `Starting monthly: ${inr(stepupBaseInvestment)}\nAnnual increase: ${stepupIncrease}%\nExpected annual return: ${stepupReturn}%\nTenure: ${stepupYears} year${stepupYears > 1 ? "s" : ""}\nProjected maturity: ${inr(stepupStats.maturityAmount)}\nEstimated gains: ${inr(stepupStats.estimatedGains)}`;

      if (navigator?.share) {
        try {
          await navigator.share({
            title: "Step-up SIP plan estimate",
            text: `${summary}\n\nView the plan here:`,
            url
          });
          setToast({ show: true, message: "Share dialog opened" });
          return;
        } catch (error) {
          if (error?.name === "AbortError") return;
        }
      }

      const copied = await copyToClipboard(url);
      setToast({
        show: true,
        message: copied ? "Sharable link copied to clipboard" : `Share this link: ${url}`
      });
      return;
    }

    const url = buildLumpsumUrl();
    const summary = `Lumpsum investment: ${inr(lumpsumInvestment)}\nExpected annual return: ${lumpsumReturn}%\nTenure: ${lumpsumYears} year${lumpsumYears > 1 ? "s" : ""}\nProjected maturity: ${inr(lumpsumStats.maturityAmount)}\nEstimated gains: ${inr(lumpsumStats.estimatedGains)}`;

    if (navigator?.share) {
      try {
        await navigator.share({
          title: "Lumpsum plan estimate",
          text: `${summary}\n\nView the plan here:`,
          url
        });
        setToast({ show: true, message: "Share dialog opened" });
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }

    const copied = await copyToClipboard(url);
    setToast({
      show: true,
      message: copied ? "Sharable link copied to clipboard" : `Share this link: ${url}`
    });
  };

  const renderCalculatorForm = () => {
    if (calculatorMode === "sip") {
      return (
        <form noValidate>
          <div className="mb-4">
            <label className="form-label d-flex justify-content-between align-items-center">
              Monthly investment
              <span className="badge text-bg-primary">{inr(monthlyInvestment)}</span>
            </label>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <IndianRupee size={16} />
              </span>
              <input
                type="number"
                className="form-control"
                min={500}
                max={100000}
                step={500}
                value={monthlyInvestment}
                onChange={(event) => setMonthlyInvestment(toNumber(event.target.value))}
                onBlur={(event) => setMonthlyInvestment(clampNum(toNumber(event.target.value), 500, 100000))}
                required
              />
            </div>
            <input
              type="range"
              className="form-range"
              min={500}
              max={100000}
              step={500}
              value={monthlyInvestment}
              onChange={(event) => setMonthlyInvestment(toNumber(event.target.value))}
              onBlur={(event) => setMonthlyInvestment(clampNum(toNumber(event.target.value), 500, 100000))}
            />
            <div className="form-text d-flex justify-content-between">
              <span>{inr(500)}</span>
              <span>{inr(100000)}</span>
            </div>
            <div className="invalid-feedback">Enter between Rs 500 and Rs 1,00,000.</div>
          </div>

          <div className="mb-4">
            <label className="form-label d-flex justify-content-between align-items-center">
              Expected annual return (%)
              <span className="badge text-bg-success">{annualReturn}%</span>
            </label>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <TrendingUp size={16} />
              </span>
              <input
                type="number"
                className="form-control"
                min={1}
                max={30}
                step={0.1}
                value={annualReturn}
                onChange={(event) => setAnnualReturn(Number(event.target.value))}
                onBlur={(event) => setAnnualReturn(clampNum(Number(event.target.value), 1, 30))}
                required
              />
            </div>
            <input
              type="range"
              className="form-range"
              min={1}
              max={30}
              step={0.5}
              value={annualReturn}
              onChange={(event) => setAnnualReturn(Number(event.target.value))}
              onBlur={(event) => setAnnualReturn(clampNum(Number(event.target.value), 1, 30))}
            />
            <div className="form-text d-flex justify-content-between">
              <span>1%</span>
              <span>30%</span>
            </div>
            <div className="invalid-feedback">Return must be between 1% and 30%.</div>
          </div>

          <div className="mb-4">
            <label className="form-label d-flex justify-content-between align-items-center">
              Tenure (years)
              <span className="badge text-bg-info">{tenureYears}y</span>
            </label>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <CalendarCheck size={16} />
              </span>
              <input
                type="number"
                className="form-control"
                min={1}
                max={40}
                step={1}
                value={tenureYears}
                onChange={(event) => setTenureYears(Number(event.target.value))}
                onBlur={(event) => setTenureYears(clampNum(Number(event.target.value), 1, 40))}
                required
              />
            </div>
            <input
              type="range"
              className="form-range"
              min={1}
              max={40}
              step={1}
              value={tenureYears}
              onChange={(event) => setTenureYears(Number(event.target.value))}
              onBlur={(event) => setTenureYears(clampNum(Number(event.target.value), 1, 40))}
            />
            <div className="form-text d-flex justify-content-between">
              <span>1 year</span>
              <span>40 years</span>
            </div>
            <div className="invalid-feedback">Tenure must be between 1 and 40 years.</div>
          </div>

          <div className="mb-3">
            <span className="text-secondary d-block small mb-2">Quick presets</span>
            <div className="d-flex flex-wrap gap-2">
              {SIP_PRESET_OPTIONS.map((preset) => (
                <button
                  type="button"
                  key={preset.label}
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => applySipPreset(preset.monthly, preset.rate, preset.years)}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </form>
      );
    }

    if (calculatorMode === "stepup") {
      return (
        <form noValidate>
          <div className="mb-4">
            <label className="form-label d-flex justify-content-between align-items-center">
              Starting monthly investment
              <span className="badge text-bg-primary">{inr(stepupBaseInvestment)}</span>
            </label>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <IndianRupee size={16} />
              </span>
              <input
                type="number"
                className="form-control"
                min={500}
                max={100000}
                step={500}
                value={stepupBaseInvestment}
                onChange={(event) => setStepupBaseInvestment(toNumber(event.target.value))}
                onBlur={(event) => setStepupBaseInvestment(clampNum(toNumber(event.target.value), 500, 100000))}
                required
              />
            </div>
            <input
              type="range"
              className="form-range"
              min={500}
              max={100000}
              step={500}
              value={stepupBaseInvestment}
              onChange={(event) => setStepupBaseInvestment(toNumber(event.target.value))}
              onBlur={(event) => setStepupBaseInvestment(clampNum(toNumber(event.target.value), 500, 100000))}
            />
            <div className="form-text d-flex justify-content-between">
              <span>{inr(500)}</span>
              <span>{inr(100000)}</span>
            </div>
            <div className="invalid-feedback">Base amount must be between Rs 500 and Rs 1,00,000.</div>
          </div>

          <div className="mb-4">
            <label className="form-label d-flex justify-content-between align-items-center">
              Annual increase (%)
              <span className="badge text-bg-info">{stepupIncrease}%</span>
            </label>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <TrendingUp size={16} />
              </span>
              <input
                type="number"
                className="form-control"
                min={0}
                max={30}
                step={0.5}
                value={stepupIncrease}
                onChange={(event) => setStepupIncrease(Number(event.target.value))}
                onBlur={(event) => setStepupIncrease(clampNum(Number(event.target.value), 0, 30))}
                required
              />
            </div>
            <input
              type="range"
              className="form-range"
              min={0}
              max={30}
              step={0.5}
              value={stepupIncrease}
              onChange={(event) => setStepupIncrease(Number(event.target.value))}
              onBlur={(event) => setStepupIncrease(clampNum(Number(event.target.value), 0, 30))}
            />
            <div className="form-text d-flex justify-content-between">
              <span>0%</span>
              <span>30%</span>
            </div>
            <div className="invalid-feedback">Increase must be between 0% and 30%.</div>
          </div>

          <div className="mb-4">
            <label className="form-label d-flex justify-content-between align-items-center">
              Expected annual return (%)
              <span className="badge text-bg-success">{stepupReturn}%</span>
            </label>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <TrendingUp size={16} />
              </span>
              <input
                type="number"
                className="form-control"
                min={1}
                max={30}
                step={0.1}
                value={stepupReturn}
                onChange={(event) => setStepupReturn(Number(event.target.value))}
                onBlur={(event) => setStepupReturn(clampNum(Number(event.target.value), 1, 30))}
                required
              />
            </div>
            <input
              type="range"
              className="form-range"
              min={1}
              max={30}
              step={0.5}
              value={stepupReturn}
              onChange={(event) => setStepupReturn(Number(event.target.value))}
              onBlur={(event) => setStepupReturn(clampNum(Number(event.target.value), 1, 30))}
            />
            <div className="form-text d-flex justify-content-between">
              <span>1%</span>
              <span>30%</span>
            </div>
            <div className="invalid-feedback">Return must be between 1% and 30%.</div>
          </div>

          <div className="mb-4">
            <label className="form-label d-flex justify-content-between align-items-center">
              Tenure (years)
              <span className="badge text-bg-info">{stepupYears}y</span>
            </label>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <CalendarCheck size={16} />
              </span>
              <input
                type="number"
                className="form-control"
                min={1}
                max={40}
                step={1}
                value={stepupYears}
                onChange={(event) => setStepupYears(Number(event.target.value))}
                onBlur={(event) => setStepupYears(clampNum(Number(event.target.value), 1, 40))}
                required
              />
            </div>
            <input
              type="range"
              className="form-range"
              min={1}
              max={40}
              step={1}
              value={stepupYears}
              onChange={(event) => setStepupYears(Number(event.target.value))}
              onBlur={(event) => setStepupYears(clampNum(Number(event.target.value), 1, 40))}
            />
            <div className="form-text d-flex justify-content-between">
              <span>1 year</span>
              <span>40 years</span>
            </div>
            <div className="invalid-feedback">Tenure must be between 1 and 40 years.</div>
          </div>

          <div className="mb-3">
            <span className="text-secondary d-block small mb-2">Quick presets</span>
            <div className="d-flex flex-wrap gap-2">
              {STEPUP_PRESETS.map((preset) => (
                <button
                  type="button"
                  key={preset.label}
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => applyStepupPreset(preset.base, preset.step, preset.rate, preset.years)}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </form>
      );
    }

    return (
      <form noValidate>
        <div className="mb-4">
          <label className="form-label d-flex justify-content-between align-items-center">
            One-time investment
            <span className="badge text-bg-primary">{inr(lumpsumInvestment)}</span>
          </label>
          <div className="input-group mb-2">
            <span className="input-group-text">
              <IndianRupee size={16} />
            </span>
            <input
              type="number"
              className="form-control"
              min={10000}
              max={10000000}
              step={10000}
              value={lumpsumInvestment}
              onChange={(event) => setLumpsumInvestment(toNumber(event.target.value))}
              onBlur={(event) => setLumpsumInvestment(clampNum(toNumber(event.target.value), 10000, 10000000))}
              required
            />
          </div>
          <input
            type="range"
            className="form-range"
            min={10000}
            max={10000000}
            step={10000}
            value={lumpsumInvestment}
            onChange={(event) => setLumpsumInvestment(toNumber(event.target.value))}
            onBlur={(event) => setLumpsumInvestment(clampNum(toNumber(event.target.value), 10000, 10000000))}
          />
          <div className="form-text d-flex justify-content-between">
            <span>{inr(10000)}</span>
            <span>{inr(10000000)}</span>
          </div>
          <div className="invalid-feedback">Amount must be between Rs 10,000 and Rs 1,00,00,000.</div>
        </div>

        <div className="mb-4">
          <label className="form-label d-flex justify-content-between align-items-center">
            Expected annual return (%)
            <span className="badge text-bg-success">{lumpsumReturn}%</span>
          </label>
          <div className="input-group mb-2">
            <span className="input-group-text">
              <TrendingUp size={16} />
            </span>
            <input
              type="number"
              className="form-control"
              min={1}
              max={30}
              step={0.1}
              value={lumpsumReturn}
              onChange={(event) => setLumpsumReturn(Number(event.target.value))}
              onBlur={(event) => setLumpsumReturn(clampNum(Number(event.target.value), 1, 30))}
              required
            />
          </div>
          <input
            type="range"
            className="form-range"
            min={1}
            max={30}
            step={0.5}
            value={lumpsumReturn}
            onChange={(event) => setLumpsumReturn(Number(event.target.value))}
            onBlur={(event) => setLumpsumReturn(clampNum(Number(event.target.value), 1, 30))}
          />
          <div className="form-text d-flex justify-content-between">
            <span>1%</span>
            <span>30%</span>
          </div>
          <div className="invalid-feedback">Return must be between 1% and 30%.</div>
        </div>

        <div className="mb-4">
          <label className="form-label d-flex justify-content-between align-items-center">
            Investment horizon (years)
            <span className="badge text-bg-info">{lumpsumYears}y</span>
          </label>
          <div className="input-group mb-2">
            <span className="input-group-text">
              <CalendarCheck size={16} />
            </span>
            <input
              type="number"
              className="form-control"
              min={1}
              max={40}
              step={1}
              value={lumpsumYears}
              onChange={(event) => setLumpsumYears(Number(event.target.value))}
              onBlur={(event) => setLumpsumYears(clampNum(Number(event.target.value), 1, 40))}
              required
            />
          </div>
          <input
            type="range"
            className="form-range"
            min={1}
            max={40}
            step={1}
            value={lumpsumYears}
            onChange={(event) => setLumpsumYears(Number(event.target.value))}
            onBlur={(event) => setLumpsumYears(clampNum(Number(event.target.value), 1, 40))}
          />
          <div className="form-text d-flex justify-content-between">
            <span>1 year</span>
            <span>40 years</span>
          </div>
          <div className="invalid-feedback">Horizon must be between 1 and 40 years.</div>
        </div>

        <div className="mb-3">
          <span className="text-secondary d-block small mb-2">Quick presets</span>
          <div className="d-flex flex-wrap gap-2">
            {LUMPSUM_PRESETS.map((preset) => (
              <button
                type="button"
                key={preset.label}
                className="btn btn-outline-secondary btn-sm"
                onClick={() => applyLumpsumPreset(preset.amount, preset.rate, preset.years)}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </form>
    );
  };

  useEffect(() => {
    const sp = new URLSearchParams(location.search);
    const mode = sp.get("mode");
    const p = Number(sp.get("p"));
    const r = Number(sp.get("r"));
    const y = Number(sp.get("y"));
    const amount = Number(sp.get("amount"));
    const rate = Number(sp.get("rate"));
    const years = Number(sp.get("years"));
    const base = Number(sp.get("base"));
    const step = Number(sp.get("step"));

    if (mode === "lumpsum") {
      setCalculatorMode("lumpsum");
      if (amount) setLumpsumInvestment(clampNum(amount, 10000, 10000000));
      if (rate) setLumpsumReturn(clampNum(rate, 1, 30));
      if (years) setLumpsumYears(clampNum(years, 1, 40));
      return;
    }

    if (mode === "stepup") {
      setCalculatorMode("stepup");
      if (base) setStepupBaseInvestment(clampNum(base, 500, 100000));
      if (step || step === 0) setStepupIncrease(clampNum(step, 0, 30));
      if (rate) setStepupReturn(clampNum(rate, 1, 30));
      if (years) setStepupYears(clampNum(years, 1, 40));
      return;
    }

    if (p) setMonthlyInvestment(clampNum(p, 500, 100000));
    if (r) setAnnualReturn(clampNum(r, 1, 30));
    if (y) setTenureYears(clampNum(y, 1, 40));
    if (mode === "sip") setCalculatorMode("sip");
  }, [location.search]);

  useEffect(() => {
    if (!toast.show) return undefined;
    const timer = window.setTimeout(() => setToast({ show: false, message: "" }), 2200);
    return () => window.clearTimeout(timer);
  }, [toast.show]);

  return (
    <div id="sip" className="sip-page bg-white">
      {calculatorsOnly && (
        <section id="calculators" className="py-5">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-2"  style={{paddingTop:"80px"}}>Calculators</h2>
                <p className="text-secondary mb-0">Pick a calculator to get started or switch modes inside the panel below.</p>
              </div>
            </div>
            <div className="row g-3 g-md-4">
              {[{ id: 'sip', title: 'SIP Calculator', sub: 'Monthly investing' }, { id: 'stepup', title: 'Step-up SIP', sub: 'Annual increase' }, { id: 'lumpsum', title: 'Lumpsum', sub: 'One-time investing' }].map((c) => (
                <div className="col-12 col-md-4" key={c.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <button type="button" className="card-body btn text-start" onClick={() => {
                      try {
                        const sp = new URLSearchParams(location.search);
                        sp.set('calc', c.id);
                        const next = `${location.pathname}?${sp.toString()}`;
                        window.history.replaceState(null, '', next);
                      } catch {}
                      setCalculatorMode(c.id);
                      scrollToSection('sip-calculator');
                    }}>
                      <h3 className="h6 fw-semibold mb-1">{c.title}</h3>
                      <p className="text-secondary small m-0">{c.sub}</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {calculatorsOnly && (
      <section id="sip-calculator" className="sip-calculator-section py-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-2">
                Plan your SIP, Step-up SIP, or Lumpsum with our interactive calculators
              </h2>
              <p className="text-secondary mb-0">
                Estimate maturity values, compare scenarios, and share the plan with your family or advisor in one click.
              </p>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div className="d-flex flex-wrap align-items-center justify-content-lg-end gap-2">
                <div className="btn-group flex-shrink-0" role="group" aria-label="share and export">
                  <button type="button" className="btn btn-outline-secondary" onClick={sharePlan}>
                    <Share2 size={16} className="me-1" />
                    Share
                  </button>
                  <button type="button" className="btn btn-outline-secondary" onClick={exportCSV}>
                    <Download size={16} className="me-1" />
                    CSV
                  </button>
                </div>
                <button type="button" className="btn btn-outline-primary flex-shrink-0" onClick={resetForm}>
                  <RefreshCcw size={16} className="me-1" />
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
                      <h3 className="h5 mb-0">
                        {calculatorMode === "sip"
                          ? "SIP Investment Details"
                          : calculatorMode === "lumpsum"
                          ? "Lumpsum Investment Details"
                          : "Step-up SIP Investment Details"}
                      </h3>
                      <div className="btn-group" role="group" aria-label="Select calculator">
                        <button
                          type="button"
                          className={`btn btn-sm ${calculatorMode === "sip" ? "btn-primary" : "btn-outline-primary"}`}
                          onClick={() => setCalculatorMode("sip")}
                        >
                          SIP
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm ${calculatorMode === "stepup" ? "btn-primary" : "btn-outline-primary"}`}
                          onClick={() => setCalculatorMode("stepup")}
                        >
                          Step-up
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm ${calculatorMode === "lumpsum" ? "btn-primary" : "btn-outline-primary"}`}
                          onClick={() => setCalculatorMode("lumpsum")}
                        >
                          Lumpsum
                        </button>
                      </div>
                    </div>

                    {renderCalculatorForm()}
                    <div className="row g-3 mt-4">
                      <div className="col-12">
                        <motion.div whileHover={{ scale: 1.01 }} className="p-3 border rounded-3 bg-light">
                          <div className="d-flex align-items-center gap-2 text-secondary">
                            <PiggyBank size={18} /> Total invested
                          </div>
                          <div className="fs-4 fw-semibold">{inr(totalInvested)}</div>
                        </motion.div>
                      </div>
                      <div className="col-12">
                        <motion.div whileHover={{ scale: 1.01 }} className="p-3 border rounded-3 bg-light">
                          <div className="d-flex align-items-center gap-2 text-secondary">
                            <TrendingUp size={18} /> Maturity amount
                          </div>
                          <div className="fs-4 fw-semibold">{inr(maturityAmount)}</div>
                        </motion.div>
                      </div>
                      <div className="col-12">
                        <motion.div whileHover={{ scale: 1.01 }} className="p-3 border rounded-3 bg-light">
                          <div className="d-flex align-items-center gap-2 text-secondary">
                            <IndianRupee size={18} /> Estimated returns
                          </div>
                          <div className="fs-4 fw-semibold">{inr(estimatedGains)}</div>
                          <div className="small text-secondary">
                            {totalInvested > 0 ? ((estimatedGains / totalInvested) * 100).toFixed(1) : 0}% of invested amount
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-12 col-lg-8">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
                <div className="card shadow-sm border-0 mb-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-3">
                      <h3 className="h5 mb-0">Investment growth visualisation</h3>
                      <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className={`nav-link ${activeChart === "area" ? "active" : ""}`} onClick={() => setActiveChart("area")}>
                            <AreaChartIcon size={16} className="me-1" />
                            Area
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className={`nav-link ${activeChart === "line" ? "active" : ""}`} onClick={() => setActiveChart("line")}>
                            <LineChartIcon size={16} className="me-1" />
                            Line
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className={`nav-link ${activeChart === "pie" ? "active" : ""}`} onClick={() => setActiveChart("pie")}>
                            <PieChartIcon size={16} className="me-1" />
                            Pie
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className={`nav-link ${activeChart === "bar" ? "active" : ""}`} onClick={() => setActiveChart("bar")}>
                            <BarChart3 size={16} className="me-1" />
                            Bar
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div style={{ height: 360 }}>
                      <AnimatePresence mode="wait">
                        {activeChart === "area" && (
                          <motion.div key="area" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: "100%" }}>
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={yearlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                                <defs>
                                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0d6efd" stopOpacity={0.7} />
                                    <stop offset="95%" stopColor="#0d6efd" stopOpacity={0.1} />
                                  </linearGradient>
                                  <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6c757d" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="#6c757d" stopOpacity={0.1} />
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                                <XAxis dataKey="year" tickFormatter={(value) => `Year ${value}`} />
                                <YAxis tickFormatter={shortNum} />
                                <Tooltip content={<ChartTooltip inr={inr} />} />
                                <Legend />
                                <Area type="monotone" dataKey="value" name="Total Value" stroke="#0d6efd" fillOpacity={1} fill="url(#colorValue)" />
                                <Area type="monotone" dataKey="invested" name="Total Invested" stroke="#6c757d" fillOpacity={1} fill="url(#colorInvested)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          </motion.div>
                        )}

                        {activeChart === "line" && (
                          <motion.div key="line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: "100%" }}>
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={yearlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                                <XAxis dataKey="year" tickFormatter={(value) => `Year ${value}`} />
                                <YAxis tickFormatter={shortNum} />
                                <Tooltip content={<ChartTooltip inr={inr} />} />
                                <Legend />
                                <Line type="monotone" dataKey="value" name="Total Value" stroke="#0d6efd" strokeWidth={2} dot={false} />
                                <Line type="monotone" dataKey="invested" name="Total Invested" stroke="#6c757d" strokeWidth={2} dot={false} />
                              </LineChart>
                            </ResponsiveContainer>
                          </motion.div>
                        )}

                        {activeChart === "pie" && (
                          <motion.div key="pie" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: "100%" }}>
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={pieData}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={70}
                                  outerRadius={120}
                                  paddingAngle={2}
                                  dataKey="value"
                                  label={renderPieLabel}
                                >
                                  {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 0 ? "#0d6efd" : "#20c997"} />
                                  ))}
                                </Pie>
                                <Tooltip formatter={(value) => inr(value)} />
                                <Legend />
                              </PieChart>
                            </ResponsiveContainer>
                          </motion.div>
                        )}

                        {activeChart === "bar" && (
                          <motion.div key="bar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: "100%" }}>
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={yearlyData.slice(-Math.min(8, yearlyData.length))}
                                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                              >
                                <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                                <XAxis dataKey="year" tickFormatter={(value) => `Year ${value}`} />
                                <YAxis tickFormatter={shortNum} />
                                <Tooltip content={<ChartTooltip inr={inr} />} />
                                <Legend />
                                <Bar dataKey="invested" name="Total Invested" fill="#6c757d" />
                                <Bar dataKey="value" name="Total Value" fill="#0d6efd" />
                              </BarChart>
                            </ResponsiveContainer>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h3 className="h6 mb-0">Yearly breakdown</h3>
                      <span className="text-secondary small">{yearlyData.length} rows</span>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-sm align-middle">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">Year</th>
                            <th scope="col" className="text-end">Invested</th>
                            <th scope="col" className="text-end">Returns</th>
                            <th scope="col" className="text-end">Total Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {yearlyData.map((row) => (
                            <tr key={row.year}>
                              <td>Year {row.year}</td>
                              <td className="text-end">{inr(row.invested)}</td>
                              <td className="text-end">{inr(row.gains)}</td>
                              <td className="text-end fw-semibold">{inr(row.value)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      )}

      {calculatorsOnly && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1080 }}>
          <div className={`toast align-items-center text-bg-dark border-0 ${toast.show ? "show" : "hide"}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
              <div className="toast-body">{toast.message}</div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close" onClick={() => setToast({ show: false, message: "" })} />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .sip-calculator-section {
          background: #f8fafc;
        }
        .sip-calculator-section .btn-group .btn {
          min-width: 100px;
        }
        @media (max-width: 575.98px) {
          .sip-hero-section .btn-lg {
            width: 100%;
          }
          .sip-hero-section .stat-tile {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

function ChartTooltip({ active, payload, label, inr }) {
  if (!active || !payload || !payload.length) return null;
  const year = typeof label === "number" ? label : payload[0]?.payload?.year;
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-2">
        <div className="fw-semibold mb-1">Year {year}</div>
        {payload.map((item, index) => (
          <div key={index} className="small d-flex justify-content-between" style={{ minWidth: 180 }}>
            <span>{item.name}</span>
            <span className="ms-3">{inr(item.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderPieLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#212529"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="fw-semibold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}