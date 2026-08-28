import { useEffect, useMemo, useRef } from 'react';

type OrbConfig = {
  id: number;
  top: string;
  left: string;
  size: number;
  blur: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  opacity: number;
  startDelay: number;
};

/** Distância fixa de cada passo (px) */
const MOVE_DISTANCE = 160;
/** Duração fixa de cada passo (ms) — define o ritmo */
const MOVE_DURATION_MS = 7000;
const ORB_COUNT = 7;

const blurClass = {
  sm: 'blur-sm',
  md: 'blur-md',
  lg: 'blur-lg',
  xl: 'blur-xl',
  '2xl': 'blur-2xl',
} as const;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createOrbs(count: number): OrbConfig[] {
  const blurs: OrbConfig['blur'][] = ['md', 'lg', 'xl', '2xl'];

  return Array.from({ length: count }, (_, id) => ({
    id,
    top: `${randomBetween(8, 82).toFixed(1)}%`,
    left: `${randomBetween(5, 88).toFixed(1)}%`,
    size: Math.round(randomBetween(72, 200)),
    blur: blurs[Math.floor(Math.random() * blurs.length)],
    opacity: Number(randomBetween(0.08, 0.2).toFixed(2)),
    startDelay: Math.round(randomBetween(0, MOVE_DURATION_MS)),
  }));
}

const AmbientOrb = ({ orb, reducedMotion }: { orb: OrbConfig; reducedMotion: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    let x = 0;
    let y = 0;
    let startTimer: number | undefined;

    el.style.transition = `transform ${MOVE_DURATION_MS}ms cubic-bezier(0.45, 0.05, 0.55, 0.95)`;

    const move = () => {
      const angle = Math.random() * Math.PI * 2;
      x += Math.cos(angle) * MOVE_DISTANCE;
      y += Math.sin(angle) * MOVE_DISTANCE;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== el || event.propertyName !== 'transform') return;
      move();
    };

    el.addEventListener('transitionend', onTransitionEnd);

    startTimer = window.setTimeout(move, orb.startDelay);

    return () => {
      window.clearTimeout(startTimer);
      el.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [orb.startDelay, reducedMotion]);

  return (
    <div
      ref={ref}
      className={`absolute rounded-full bg-white will-change-transform ${blurClass[orb.blur]}`}
      style={{
        top: orb.top,
        left: orb.left,
        width: orb.size,
        height: orb.size,
        opacity: orb.opacity,
      }}
    />
  );
};

const AmbientLights = () => {
  const orbs = useMemo(() => createOrbs(ORB_COUNT), []);
  const reducedMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {orbs.map((orb) => (
        <AmbientOrb key={orb.id} orb={orb} reducedMotion={reducedMotion} />
      ))}
    </div>
  );
};

export default AmbientLights;
