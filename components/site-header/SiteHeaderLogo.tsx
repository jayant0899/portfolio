import { userConfig } from "@/config/user-config";

export const SiteHeaderLogo = () => {
  return (
    <div 
      className="flex items-center gap-2" 
      aria-label="System Status Indicator"
    >
      {/* Indicator Icon */}
      <div className="relative flex items-center justify-center size-4">
        {/* Subtle breathing glow */}
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
        
        {/* Outer Ring */}
        <div className="size-3.5 rounded-full border border-primary/60 flex items-center justify-center">
          {/* Solid Inner Dot */}
          <div className="size-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(var(--primary-rgb),0.4)]" />
        </div>
      </div>

      {/* Label */}
      <span className="text-base font-mono font-medium tracking-wider text-primary uppercase">
        {userConfig.firstName}
      </span>
    </div>
  );
};