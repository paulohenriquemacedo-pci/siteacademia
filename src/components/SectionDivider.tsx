const SectionDivider = () => (
  <div aria-hidden="true" className="flex justify-center py-2 bg-transparent">
    <div className="relative h-px w-full max-w-[1100px] mx-4">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent blur-[1px]" />
      <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] h-[7px] w-[7px] rotate-45 bg-accent shadow-[0_0_8px_hsl(var(--accent)/0.6)]" />
    </div>
  </div>
);

export default SectionDivider;
