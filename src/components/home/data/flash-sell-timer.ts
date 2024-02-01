export interface FlashSellTimer {
  time: PaddedNumber;
  timeType: string;
}

type PaddedNumber = {
  value: number;
  toString: () => string;
};

const createPaddedNumber = (value: number): PaddedNumber => {
  return {
    value,
    toString: () => value.toString().padStart(2, "0"),
  };
};

const FlashSellTimers: FlashSellTimer[] = [
  { time: createPaddedNumber(5), timeType: "Days" },
  { time: createPaddedNumber(23), timeType: "Hours" },
  { time: createPaddedNumber(59), timeType: "Minutes" },
  { time: createPaddedNumber(35), timeType: "Seconds" },
];

export default FlashSellTimers;
