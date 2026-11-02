export const motionTiming = {
  instant: 0.16,
  quick: 0.26,
  page: 0.34,
  reveal: 0.62,
  image: 0.82,
  stagger: 0.055,
} as const;

export const motionEase = {
  editorial: [0.22, 1, 0.36, 1],
  settle: [0.2, 0.75, 0.25, 1],
} as const;

export const motionTransition = {
  quick: { duration: motionTiming.quick, ease: motionEase.editorial },
  page: { duration: motionTiming.page, ease: motionEase.editorial },
  reveal: { duration: motionTiming.reveal, ease: motionEase.editorial },
  image: { duration: motionTiming.image, ease: motionEase.editorial },
} as const;
