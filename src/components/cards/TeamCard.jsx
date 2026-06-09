import { Icon } from '@/utils/icons.jsx';

/**
 * Team member card with image and social links revealed on hover.
 */
export default function TeamCard({ member }) {
  return (
    <article className="group text-center">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-secondary/80 py-3 transition-transform duration-300 group-hover:translate-y-0">
          {member.social.map((icon) => (
            <a
              key={icon}
              href="#"
              aria-label={icon}
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white hover:bg-accent hover:text-secondary"
            >
              <Icon name={icon} className="text-sm" />
            </a>
          ))}
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-accent">{member.role}</p>
    </article>
  );
}
