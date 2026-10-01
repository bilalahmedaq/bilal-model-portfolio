import { contactEmail, modelName } from "@/data/config";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 mt-20">
      {/* Top rule */}
      <div className="h-px w-full bg-neutral-700" />

      <div className="
        px-6 md:px-12 lg:px-20
        py-8
        max-w-7xl mx-auto
        flex flex-col md:flex-row
        items-start md:items-center
        justify-between
        gap-4
      ">
        {/* Left — name + tagline */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase font-semibold text-[#f0ede8]">
            {modelName}
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-light mt-0.5">
            Available for bookings worldwide
          </p>
        </div>

        {/* Right — contact */}
        <a
          id="contact-mailto-link"
          href={`mailto:${contactEmail}`}
          className="
            inline-block
            text-[10px] tracking-[0.3em] uppercase
            font-medium text-[#f0ede8]
            border-b border-neutral-500 pb-0.5
            hover:text-neutral-400 hover:border-neutral-600
            transition-colors duration-200
          "
          aria-label={`Send an email to ${contactEmail}`}
        >
          Contact Me
        </a>
      </div>

      <div className="px-6 md:px-12 lg:px-20 pb-6 max-w-7xl mx-auto">
        <p className="text-[9px] tracking-[0.15em] uppercase text-neutral-600 font-light">
          © {new Date().getFullYear()} {modelName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
