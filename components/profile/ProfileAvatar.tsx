import { userConfig } from "@/config/user-config";

export function ProfileAvatar() {
  const initials = `${userConfig.firstName[0]}${userConfig.lastName[0]}`;

  return (
    <div
      className="relative p-4"
      role="img"
      aria-label={`Targeting system: ${userConfig.displayName}`}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-30" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary z-30" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary z-30" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-30" />

      {/* Frame Container */}
      <div className="relative w-48 h-56 bg-muted/20 overflow-hidden border border-white/5">
        
        {userConfig.avatar ? (
          <img
            src={userConfig.avatar}
            alt={userConfig.displayName}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-background text-primary font-mono text-2xl">
            {initials}
          </div>
        )}

        {/* Scan Line Animation */}
        <div className="absolute top-0 left-0 w-full h-px bg-primary/60 shadow-[0_0_10px_var(--color-primary)] animate-scan z-20 pointer-events-none" />

        
        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent pointer-events-none z-10" />
      </div>

      {/* Centered System ID */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-40 bg-background border border-primary/30 px-3 py-0.5 flex items-center justify-center">
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] whitespace-nowrap">
          ID::{userConfig.username.toUpperCase()}
        </span>
      </div>
    </div>
  );
}