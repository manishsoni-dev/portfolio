import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function DemoOne() {
  return (
    <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black">
      <ShaderAnimation />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(5,6,8,0.7)_100%)]" />
      <span className="pointer-events-none absolute z-10 text-center text-5xl font-semibold leading-none tracking-normal text-white sm:text-7xl">
        Shader Animation
      </span>
    </div>
  )
}
