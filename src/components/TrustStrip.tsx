const TrustStrip = () => {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <span className="text-muted-foreground text-lg">Backed by</span>
          
          {/* ISB Logo placeholder - using text with accent styling */}
          <div className="flex items-center gap-2">
            <div className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50">
              <span className="text-xl font-bold text-foreground tracking-wide">
                ISB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
