import { measurements, modelName } from "@/data/config";

const statItems = [
  { label: "Height", value: measurements.height },
  { label: "Chest",  value: measurements.chest  },
  { label: "Waist",  value: measurements.waist  },
  { label: "Hips",   value: measurements.hips   },
  { label: "Shoe",   value: measurements.shoe   },
  { label: "Hair",   value: measurements.hair   },
  { label: "Eyes",   value: measurements.eyes   },
];

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-800">
      {/* Top agency-style rule */}
      <div className="h-px w-full bg-neutral-700" />

      {/* Name block */}
      <div className="px-6 md:px-12 lg:px-20 pt-10 pb-6 max-w-7xl mx-auto">
        <h1 className="
          font-display
          text-5xl md:text-7xl lg:text-8xl
          font-black
          tracking-[0.06em]
          text-[#f0ede8]
          leading-none
          uppercase
          select-none
        ">
          {modelName}
        </h1>
        <p className="mt-1 text-[10px] tracking-[0.35em] uppercase text-neutral-500 font-light">
          Digital Portfolio — Polaroids
        </p>
      </div>

      {/* Measurements data strip */}
      <div className="
        border-t border-b border-neutral-800
        bg-neutral-900
        px-6 md:px-12 lg:px-20
        py-3
        overflow-x-auto
      ">
        <ul
          className="flex items-center gap-0 min-w-max max-w-7xl mx-auto"
          aria-label="Model measurements"
        >
          {statItems.map((item, idx) => (
            <li
              key={item.label}
              className={`
                flex flex-col items-start
                pr-7 mr-7
                ${idx < statItems.length - 1 ? "border-r border-neutral-700" : ""}
              `}
            >
              <span className="text-[8px] tracking-[0.25em] uppercase text-neutral-500 font-medium leading-none mb-1">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-[#f0ede8] tracking-tight leading-none">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
