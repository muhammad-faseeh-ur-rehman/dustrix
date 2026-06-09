import PageBanner from '@/components/common/PageBanner';
import TeamCard from '@/components/cards/TeamCard';
import CtaSection from '@/components/sections/CtaSection';
import { team } from '@/data/team';

/**
 * Team page listing all members.
 */
export default function Team() {
  return (
    <>
      <PageBanner title="Our Team" crumbs={[{ label: 'Team' }]} />

      <section className="section">
        <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
