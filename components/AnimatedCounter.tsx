"use client";
import React from "react";
import CountUp from "react-CountUp";

interface AnimatedCounterProps {
  amount: number;
}

const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} decimal="," prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;
