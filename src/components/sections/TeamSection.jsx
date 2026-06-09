import SectionTitle from '@/components/common/SectionTitle';
import TeamCard from '@/components/cards/TeamCard';
import { team } from '@/data/team';

/**
 * Home team preview grid.
 */
export default function TeamSection() {
  return (
    <section className="section bg-muted">
      <div className="container">
        <SectionTitle
          subtitle="Our Team"
          title="Meet Our Expert Engineers"
          description="A dedicated team of certified professionals committed to delivering excellence on every project."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
