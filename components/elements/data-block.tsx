import * as React from "react";

export function DataBlock({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: React.ReactNode;
  icon?: React.ElementType;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium uppercase tracking-wider">
        {Icon && <Icon className="size-3.5 shrink-0" />}
        <span className="truncate">{label}</span>
      </div>
      <div className="text-[15px] font-semibold text-foreground/90 break-words line-clamp-2">
        {value}
      </div>
    </div>
  );
}
