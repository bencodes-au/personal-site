import { ButtonIcon } from "./ButtonIcon";
export function ProjectCard({ title, image, children, links }) {
  return (
    <div className="card bg-base-300 shadow-lg flex flex-col w-full p-6 rounded-none">
      {/* Title */}
      <h2 className="card-title mb-4 text-2xl font-bold">{title}</h2>

      <div className="flex flex-col md:flex-row items-start mb-4 flex-grow gap-6">
        {/* Left Side:*/}
        <figure className="w-full md:w-1/2">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-64 object-cover"
          />
        </figure>

        {/* Right Side: */}
        <div className="w-full md:w-1/2 flex flex-col justify-start ">
          {/* Description */}
          <p className="mb-4 text-lg">{children}</p>

          {/* Buttons Directly Below Description */}
          <div className="flex flex-col space-y-3">
            {links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                className="btn btn-primary text-lg"
              >
                {link?.iconName && <ButtonIcon iconName={link.iconName} />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
