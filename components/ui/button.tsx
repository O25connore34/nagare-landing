import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center rounded-edge px-6 whitespace-nowrap transition-colors duration-150 ease-out";

export const primaryClass = `${base} h-12 md:h-11 bg-accent text-accent-ink font-display font-semibold text-[14px] uppercase tracking-[0.04em] hover:bg-accent-hover active:bg-accent-active disabled:bg-line disabled:text-muted disabled:cursor-not-allowed`;

export const ghostClass = `${base} h-12 md:h-11 border border-line-strong text-ink font-body font-medium text-[14px] hover:border-muted hover:bg-elevated active:bg-line`;

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonPrimaryLink({ className = "", ...props }: AnchorProps) {
  return <a className={`${primaryClass} ${className}`} {...props} />;
}

export function ButtonGhostLink({ className = "", ...props }: AnchorProps) {
  return <a className={`${ghostClass} ${className}`} {...props} />;
}

export function ButtonPrimary({ className = "", ...props }: NativeButtonProps) {
  return <button className={`${primaryClass} ${className}`} {...props} />;
}
