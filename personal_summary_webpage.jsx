export default function PersonalSummaryWebpage() {
  const skills = [
    "Biomedical Engineering",
    "Embedded Systems",
    "ESP32 & Arduino Projects",
    "Raspberry Pi Applications",
    "Python Development",
    "Pygame Game Development",
    "Sensors & Actuators",
    "AI-Assisted Prototyping",
  ];

  const projects = [
    {
      title: "Smart Embedded Control Systems",
      desc: "Built control solutions using ESP32, Arduino, displays, sensors, relays, motors, and custom user interfaces for practical automation tasks.",
    },
    {
      title: "Robotics and Motion Projects",
      desc: "Worked on robotic movement, stepper motor control, servo coordination, sensor-guided navigation, and real-time control logic.",
    },
    {
      title: "Raspberry Pi and Computer Vision",
      desc: "Explored Raspberry Pi-based apps involving face recognition, object detection, camera workflows, and interactive desktop interfaces.",
    },
    {
      title: "Educational and Technical Content",
      desc: "Created and refined technical explanations, short-form educational ideas, and practical code-focused solutions for real-world engineering problems.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-lg backdrop-blur">
              Personal Summary Page
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Moamel
            </h1>

            <p className="mt-3 text-lg text-cyan-300 md:text-2xl">
              Biomedical Engineer · Developer · Hardware Maker
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              I am a biomedical engineer with a strong interest in building practical technology.
              My work combines electronics, embedded programming, robotics, sensors, control systems,
              and software development to turn ideas into working prototypes and useful applications.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              I enjoy creating systems that connect hardware and software together, especially with
              ESP32, Arduino, Raspberry Pi, Python, and interactive interfaces. I also explore AI,
              computer vision, and automation to make projects smarter and more effective.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-xl transition hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#skills"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Skills
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 p-6">
              <h2 className="text-xl font-semibold text-white">About This Page</h2>
              <p className="mt-4 leading-7 text-slate-300">
                This webpage is a polished public-style summary that presents your technical identity,
                interests, and project direction in a simple and professional way.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-2xl font-bold text-cyan-300">Embedded</div>
                  <div className="mt-1 text-slate-300">Systems & control</div>
                </div>
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-2xl font-bold text-cyan-300">AI</div>
                  <div className="mt-1 text-slate-300">Vision & automation</div>
                </div>
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-2xl font-bold text-cyan-300">Python</div>
                  <div className="mt-1 text-slate-300">Apps & interfaces</div>
                </div>
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-2xl font-bold text-cyan-300">Hardware</div>
                  <div className="mt-1 text-slate-300">Sensors & devices</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="skills" className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Core Strengths</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Skills and Focus Areas</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200 shadow-lg transition hover:-translate-y-1 hover:bg-white/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Highlights</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">What I Work On</h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Personal Statement</p>
            <h2 className="mt-3 text-3xl font-bold">Why I Build</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-200 md:text-lg">
              I am passionate about combining engineering knowledge with software and electronics to
              create useful systems. My goal is not only to understand technology, but to build tools,
              interfaces, and devices that solve real problems and demonstrate practical innovation.
            </p>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-slate-400">
          Designed as a modern personal summary webpage for publishing and presentation.
        </footer>
      </section>
    </main>
  );
}
