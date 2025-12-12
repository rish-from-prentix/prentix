import backersLogo from "@/assets/Prentix-backers.png";

const TrustStrip = () => {
  return (
    <section className="py-20">
      <div className="container px-4 flex items-center justify-center">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 px-8 py-4 border-2 border-border rounded-xl w-full max-w-[700px] mx-auto">
          <span className="text-muted-foreground text-sm font-bold tracking-widest uppercase">Backed by</span>
          <img src={backersLogo} alt="ISB DLabs and AIC - Indian School of Business" className="block w-full h-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[220px]" />
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
