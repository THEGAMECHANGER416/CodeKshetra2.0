import { ProblemStatement } from "@/types/problems";

interface CardContentProps extends ProblemStatement {
  className?: string;
}

export const CardContent = ({
  title,
  category,
  description,
  className,
}: CardContentProps) => (
  <div
    className={`${className} overflow-clip bg-primary rounded-lg shadow-lg p-6 grid gap-2 md:gap-4`}
  >
    <h4 className="font-bold text-lg md:text-xl xl:text-2xl italic tracking-wider text-accent relative overflow-hidden group">
      <span className="group-hover:opacity-0 opacity-100 transition-all duration-300">
        Problem
      </span>
      <span className="absolute left-0 top-0 w-0 h-full bg-accent/5 group-hover:w-full transition-all duration-500 overflow-hidden rounded-xl">
        Statement
      </span>
    </h4>

    <h5 className="capitalize font-medium text-slate-400 text-base md:text-lg py-2">
      {title}
    </h5>

    <p className="text-left py-4 text-secondary tracking-wide">
      <span className="font-bold">Category - </span>
      <span className="text-slate-400 capitalize">{category}</span>
    </p>

    <p className="text-slate-400 text-left text-pretty my-4">{description}</p>
  </div>
);
