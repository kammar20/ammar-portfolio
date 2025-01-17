import { useEffect } from 'react';
import { projectData } from '../data/portfolioData';

export default function Projects() {
  // Hover Effect on Project Card
  useEffect(() => {
    document.getElementById('cards').onmousemove = (e) => {
      for (const card of document.getElementsByClassName('card')) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };
  }, []);

  return (
    <section>
      <h5 className="text-lg text-neutral-50 font-semibold mb-6">Projects</h5>
      {/* card container */}
      <main id="cards" className="w-full flex flex-wrap gap-6">
        {projectData.map((data) => (
          // single Card
          <a
            href={data.liveLink}
            target="_blank"
            className="card w-[320px] h-[260px]  bg-neutral-800 cursor-pointer  relative  rounded-xl"
            key={data.id}
          >
            {/* card content */}
            <div className="card-content bg-neutral-950  absolute z-[2] rounded-[inherit] inset-px px-5 pt-8">
              <img src={data.logo} alt="" className="w-[28px] h-[28px] mb-5" />
              <h2 className="text-white font-medium md:text-lg tracking-wide mb-4">
                {data.name}
              </h2>
              <p className="text-neutral-400 tracking-wide ">{data.desc}</p>
              {/* <div className="flex items-center">
                <button className="px-5 py-0.5 border border-neutral-500 rounded-xl text-neutral-400 z-30 hover:border-neutral-50 hover:text-neutral-50 mr-5">
                  {data.liveLink}
                </button>
                <button className="px-5 py-0.5 border border-neutral-500 rounded-xl text-neutral-400 z-30 hover:border-neutral-50 hover:text-neutral-50">
                  {data.githubLink}
                </button>
              </div> */}
            </div>
          </a>
        ))}
      </main>
    </section>
  );
}
