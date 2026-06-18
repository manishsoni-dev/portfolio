import { ShaderAnimation } from "@/components/ui/shader-animation";

export function ProfileShaderCard() {
  return (
    <div className="mx-auto flex w-full justify-center px-0">
      <div className="premium-card-shadow relative h-[280px] w-full max-w-[680px] overflow-hidden rounded-xl border border-portfolio-line bg-black sm:h-[340px] lg:h-[390px]">
        <ShaderAnimation />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.58)_100%)]" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-white/60 sm:tracking-[0.35em]">
              AI Systems
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Manish Soni
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/70 sm:text-base">
              Python AI Developer · LLM Applications · Backend APIs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
