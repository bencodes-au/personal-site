export function ProjectCard({ title, image, children, links }) {
  return (
    <div className="card bg-base-300 shadow-lg flex flex-col w-full h-full p-6">
      {/* Title */}
      <h2 className="card-title mb-4 text-2xl font-bold">{title}</h2>

      <div className="flex flex-row items-start mb-4 flex-grow">
        {/* Left Side:*/}
        <div className="w-1/2">
          <figure className="w-full">
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full h-64 object-cover"
            />
          </figure>
        </div>

        {/* Right Side: */}
        <div className="w-1/2 flex flex-col justify-start pl-6">
          {/* Description */}
          <p className="mb-4 text-lg">{children}</p>

          {/* Buttons Directly Below Description */}
          <div className="flex flex-col space-y-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                className="btn btn-primary text-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
