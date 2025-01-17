import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="mb-14">
      <h5 className="text-lg text-neutral-50 font-semibold mb-4">Skill</h5>
      <div className="flex flex-wrap items-center gap-3">
        {skillsData.map((skill, index) => (
          <span
            key={index}
            className="text-sm text-neutral-400 border border-neutral-400 rounded-lg cursor-pointer px-4 py-1 hover:text-neutral-50 hover:border-neutral-50 transition-all hover:-translate-y-1 duration-300 ease-in-out"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
