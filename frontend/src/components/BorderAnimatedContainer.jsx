function BorderAnimatedContainer({ children, className = "" }) {
  return (
    <div
      style={{ "--border-angle": "0deg" }}
      className={`w-full h-full flex overflow-hidden rounded-xl border border-transparent p-4 animate-border ${className}
      [background:linear-gradient(#0f172a,#0f172a)_padding-box,
      conic-gradient(from_var(--border-angle),
      #22d3ee,
      #3b82f6,
      #8b5cf6,
      #ec4899,
      #22d3ee)_border-box]`}
    >
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;