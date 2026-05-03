import AuroraGlyph from "@/components/elements/icons"

export default function Page() {
  return (
    <div>
      <div className="relative z-0 flex min-h-[calc(100vh-64px)] w-full flex-col justify-center overflow-hidden">
        <AuroraGlyph />
        <div className="relative z-10 mx-auto max-w-360 gap-2 pt-17 pr-[max(env(safe-area-inset-right),1.5rem)] pb-25 pl-[max(env(safe-area-inset-left),1.5rem)]">
          <h1 className="text-4xl leading-[1.1] font-bold sm:text-5xl">
            Welcome to Our
          </h1>
        </div>
      </div>
    </div>
  )
}
