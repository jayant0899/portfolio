import { Badge } from "@/components/ui/badge";

interface ReleaseHeaderProps {
  role: string;
  instance: string;
  stack: string[];
}

export function ReleaseHeader({ role, instance, stack }: ReleaseHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-border pb-4">
      <div className="font-mono">
        <h4 className="text-foreground text-lg font-bold uppercase tracking-tighter group-hover:text-primary transition-colors">
          {role}
        </h4>
        <span className="font-bold text-sm">
          @{instance.replace(/\s+/g, "_").toUpperCase()}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <Badge key={s} variant="outline">
            {s}
          </Badge>
        ))}
      </div>
    </div>
  );
}
