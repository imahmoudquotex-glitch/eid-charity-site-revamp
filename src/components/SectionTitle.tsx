interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light }: SectionTitleProps) {
  return (
    <div className="text-center mb-14">
      <h2 className={`text-3xl md:text-[2.5rem] mb-5 leading-tight ${light ? "text-navy-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="w-12 h-[2px] rounded-full bg-royal/20" />
        <div className="w-3 h-3 rounded-full gradient-primary shadow-sm" />
        <div className="w-16 h-1 rounded-full gradient-red-blue" />
        <div className="w-3 h-3 rounded-full gradient-royal shadow-sm" />
        <div className="w-12 h-[2px] rounded-full bg-primary/20" />
      </div>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${light ? "text-navy-foreground/60" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
