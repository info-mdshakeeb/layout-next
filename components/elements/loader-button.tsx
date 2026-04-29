import { TextShimmer } from "../text-shimmer";
import { Button } from "../ui/button";

export function ShimmerButton({
  loading,
  text,
  ...props
}: React.ComponentProps<"button"> & {
  loading: boolean;
  text: string;
}) {
  return (
    <Button
      aria-busy={loading}
      disabled={loading}
      variant={loading ? "outline" : "default"}
      {...props}
    >
      {loading ? <TextShimmer>{text}</TextShimmer> : text}
    </Button>
  );
}
