import { forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const ApiKeyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showKey, setShowKey] = useState(false);
    const disabled = props.value === "" || props.value === undefined || props.disabled;

    return (
      <div className="relative">
        <Input
          type={showKey ? "text" : "password"}
          className={cn("hide-key-toggle pr-10", className)}
          ref={ref}
          {...props}
          autoComplete="new-password" // Prevent browser autofill
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowKey((prev) => !prev)}
          disabled={disabled}
        >
          {showKey && !disabled ? (
            <EyeIcon
              className="h-4 w-4"
              aria-hidden="true"
            />
          ) : (
            <EyeOffIcon
              className="h-4 w-4"
              aria-hidden="true"
            />
          )}
          <span className="sr-only">
            {showKey ? "Hide key" : "Show key"}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
          .hide-key-toggle::-ms-reveal,
          .hide-key-toggle::-ms-clear {
            visibility: hidden;
            pointer-events: none;
            display: none;
          }
        `}</style>
      </div>
    );
  }
);

export { ApiKeyInput };
