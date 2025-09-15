// task_5/js/main.ts

// Interfaces
export interface MajorCredits {
  credits: number;
  // unique "brand" so TypeScript knows this is MajorCredits
  readonly _majorBrand: "MajorCredits";
}

export interface MinorCredits {
  credits: number;
  // unique "brand" so TypeScript knows this is MinorCredits
  readonly _minorBrand: "MinorCredits";
}

// Functions
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: "MajorCredits",
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "MinorCredits",
  };
}
