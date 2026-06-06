import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <nav className="sticky top-0 bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer/90 backdrop-blur border-b z-50">
  <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
    
    <h1 className="font-bold text-xl text-blue-900">
      Joyce Chin
    </h1>

    <div className="flex gap-6 text-slate-700">
      <a href="#about">About</a>
      <a href="#highlights">Highlights</a>
      <a href="#achievements">Achievements</a>
      <a href="#contact">Contact</a>

    </div>

  </div>
</nav>
      <section
  id="about"
  className="max-w-6xl mx-auto px-8 py-24"
>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-orange-500 font-semibold mb-3">
              Science Enthusiast
            </p><p className="text-slate-500 mb-6">
  Pianist • Athlete • Olympiad Competitor • Volunteer • Tutor
</p>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900">
  Joyce Chin
  <br />
  Jing Wen
</h1>
<p className="mt-2 text-xl text-slate-500">
  陈靖雯
</p>

            <p className="mt-8 text-2xl font-medium text-slate-700">
              From classrooms to discoveries,
              <br />
              from piano keys to running tracks.
            </p>

            <p className="mt-6 text-lg text-slate-600">
              Building a future through science,
              service, leadership and lifelong learning.
              </p>
              <div className="flex gap-4 mt-8">
  <button className="bg-blue-900 text-white px-6 py-3 rounded-xl">
    View Achievements
  </button>

  <button className="border px-6 py-3 rounded-xl">
    Download Resume
  </button>
</div>
          
            <p className="mt-4 italic text-slate-500">
  "C’est la vie. That's just life."
</p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/JINGWEN IC.jpg"
              alt="Joyce Chin Jing Wen"
              width={320}
              height={400}
              className="rounded-3xl shadow-xl object-cover"
            />
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">
          About Me
        </h2>

        <p className="text-orange-500 font-semibold mb-6">
          Lifelong Learning
        </p>

        <div className="max-w-3xl space-y-6 text-lg text-slate-700">
          <p>
            Hi, I'm Joyce Chin Jing Wen (陈靖雯), a student at Kolej Matrikulasi Selangor with a strong interest in science, learning, and personal growth.
          </p>

          <p>
            Beyond academics, I enjoy piano, running, science competitions,
            and exploring opportunities that challenge me to grow as a learner.
          </p>

          <p className="italic text-slate-500">
            "C’est la vie. That's just life."
          </p>
        </div>
      </section><section
  id="highlights"
  className="max-w-6xl mx-auto px-8 py-24"
>
  <h2 className="text-4xl font-bold text-slate-900 mb-10">
    Highlights
  </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <h3 className="text-2xl font-bold mb-2">🧪 Science</h3>
      <p className="text-slate-600">
        Fascinated by biology, chemistry and how the world works.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <h3 className="text-2xl font-bold mb-2">🎹 Piano</h3>
      <p className="text-slate-600">
        Years of musical training and performance.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <h3 className="text-2xl font-bold mb-2">🏃 Running</h3>
      <p className="text-slate-600">
        Learning discipline one step at a time.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <h3 className="text-2xl font-bold mb-2">🏆 Competitions</h3>
      <p className="text-slate-600">
        Exploring opportunities beyond the classroom.
      </p>
    </div>
  </div>
</section>
{/* Statistics */}
<section className="max-w-6xl mx-auto px-8 py-24">
  <h2 className="text-4xl font-bold text-slate-900 mb-10">
    By The Numbers
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

   <div className="bg-blue-600 text-white p-8 rounded-2xl border border-blue-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
  <h3 className="text-5xl font-bold">75+</h3>
  <p className="mt-3 text-lg">
    Awards & Achievements
  </p>
</div>

<div className="bg-[#EF7C00] text-white p-8 rounded-2xl border border-[#EF7C00] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
  <h3 className="text-5xl font-bold">10+</h3>
  <p className="mt-3 text-lg">
    Years of Piano Training
  </p>
</div>

    <div className="bg-white text-[#EF7C00] p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <h3 className="text-5xl font-bold">5+</h3>
      <p className="mt-3 text-lg">
        Athletics Events
      </p>
    </div>

    <div className="bg-white text-blue-600 p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <h3 className="text-5xl font-bold text-blue-900">50+</h3>
      <p className="mt-3 text-lg text-slate-700">
        Certificates Collected
      </p>
    </div>

  </div>
</section>{/* Education */}
<section className="max-w-6xl mx-auto px-8 py-24">
  <h2 className="text-4xl font-bold text-slate-900 mb-10">
    Education
  </h2>

  <div className="space-y-6">

    <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <p className="text-orange-500 font-semibold">
        2015 - 2020
      </p>

      <h3 className="text-2xl font-bold mt-2">
        SJK(C) Batu 11 Cheras
      </h3>

      <p className="text-slate-600 mt-2">
        Primary Education
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <p className="text-orange-500 font-semibold">
        2021 - 2025
      </p>

      <h3 className="text-2xl font-bold mt-2">
        SMJK Yu Hua
      </h3>

      <p className="text-slate-600 mt-2">
        Secondary Education
      </p>

      <p className="text-slate-600">
        SPM 2025: 10A (7A+)
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <p className="text-orange-500 font-semibold">
        2026 - Present
      </p>

      <h3 className="text-2xl font-bold mt-2">
        Kolej Matrikulasi Selangor
      </h3>

      <p className="text-slate-600 mt-2">
        Life Sciences Programme
      </p>
    </div>

  </div>
</section>{/* Certificate Portfolio */}
<section className="max-w-6xl mx-auto px-8 py-24">
  <h2 className="text-4xl font-bold text-slate-900 mb-10">
    Certificate Portfolio
  </h2>

  <div className="bg-slate-50 p-8 rounded-2xl border">

    <h3 className="text-2xl font-bold mb-4">
      📜 Complete Achievement Collection
    </h3>

    <p className="text-slate-600 mb-6">
      A collection of academic, olympiad, music, athletics,
      leadership and community service certificates accumulated
      throughout my educational journey.
    </p>

    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div>🏅 Academics</div>
      <div>🧪 Olympiads & STEM</div>
      <div>🎹 Piano & Music</div>
      <div>🏃 Athletics</div>
      <div>🤝 Leadership</div>
      <div>❤️ Community Service</div>
    </div>

    <button className="bg-blue-900 text-white px-6 py-3 rounded-xl">
      View Certificate Portfolio
    </button>

  </div>
</section>{/* Journey Timeline */}
<section className="max-w-6xl mx-auto px-8 py-24">
  <h2 className="text-4xl font-bold text-slate-900 mb-10">
    Journey Timeline
  </h2>

  <div className="space-y-6">

    <div className="border-l-4 border-blue-900 pl-6">
      <h3 className="text-xl font-bold">2021</h3>
      <p className="text-slate-600">
        Entered SMJK Yu Hua and achieved Top 5 Academic Ranking.
      </p>
    </div>

    <div className="border-l-4 border-blue-900 pl-6">
      <h3 className="text-xl font-bold">2022</h3>
      <p className="text-slate-600">
        Treasurer of Prefect Board and continued piano and athletics development.
      </p>
    </div>

    <div className="border-l-4 border-blue-900 pl-6">
      <h3 className="text-xl font-bold">2023</h3>
      <p className="text-slate-600">
        Gold Medal in 200m Hurdles, MSSD Hulu Langat. Pelajar Mithali Award.
      </p>
    </div>

    <div className="border-l-4 border-blue-900 pl-6">
      <h3 className="text-xl font-bold">2024</h3>
      <p className="text-slate-600">
        Malaysia Future Leader Tier 2, leadership positions across multiple clubs.
      </p>
    </div>

    <div className="border-l-4 border-blue-900 pl-6">
      <h3 className="text-xl font-bold">2025</h3>
      <p className="text-slate-600">
        SPM 10A (7A+), ABRSM Grade 8 Distinction, President of Kelab Malaysiaku.
      </p>
    </div>

    <div className="border-l-4 border-orange-500 pl-6">
      <h3 className="text-xl font-bold">2026</h3>
      <p className="text-slate-600">
        MUET Band 4.5, SASMO Silver, GMEC Silver, invitations to SIMOC and AIMO, currently studying Life Sciences at Kolej Matrikulasi Selangor.
      </p>
    </div>

  </div>
</section>
{/* Achievements */}
<section
  id="achievements"
  className="max-w-6xl mx-auto px-8 py-24"
>
  <h2 className="text-4xl font-bold text-slate-900 mb-10">
    Achievements
  </h2>
<div className="space-y-8">

  <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
    <h3 className="text-2xl font-bold mb-4">🏅 Academics</h3>
    <p className="text-slate-600">
      SPM 2025
      <br />• 10A (7A+)
      <br /><br />

      MUET
      <br />• Band 4.5
      <br /><br />

      Academic Excellence Awards
      <br />• Form 1 – 5th Place (2021)
      <br />• Form 3 – 8th Place (2023)
      <br />• Form 4 – 6th Place (2024)
      <br />• Form 5 – 3rd Place (2025)
      <br /><br />

      Pelajar Mithali
      <br />• 2023/2024
      <br /><br />

      Outstanding Subject Achievement
      <br />• Bahasa Melayu
      <br />• English Language
      <br />• Chinese Language
    </p>
  </div>

  <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
    <h3 className="text-2xl font-bold mb-4">🧪 Olympiads & STEM</h3>
    <p className="text-slate-600">
      Singapore and Asian Schools Math Olympiad (SASMO)
      <br />• Silver Award (2026)
      <br /><br />

      Global Mathematics Elite Competition (GMEC)
      <br />• Silver Award (2026)
      <br /><br />

      GMEC Malaysia Preliminary Round
      <br />• 1st Runner-Up
      <br /><br />

      National Chemistry Quiz (K3M)
      <br />• Distinction (2025)
      <br /><br />

      Kangaroo Mathematics Competition
      <br />• Honorable Mention (2022, 2025)
      <br /><br />

      Vanda National Junior Science Olympiad
      <br />• Participation (2025)
      <br /><br />

      MathsWonder STEM @ NAISS
      <br />• National Level (2025)
      <br /><br />

      Singapore International Mathematics Olympiad Challenge (SIMOC)
      <br />• Invitation (2026)
      <br /><br />

      ASEAN International Mathematics Olympiad (AIMO)
      <br />• Invitation (2026)
    </p>
  </div>

  <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
    <h3 className="text-2xl font-bold mb-4">🎹 Piano & Music</h3>
    <p className="text-slate-600">
      ABRSM Grade 2 Piano
      <br />• Distinction (2017)
      <br /><br />

      ABRSM Grade 4 Piano
      <br />• Distinction (2019)
      <br /><br />

      ABRSM Grade 5 Music Theory
      <br />• Distinction (2021)
      <br /><br />

      ABRSM Grade 6 Performance
      <br />• Distinction (2022)
      <br /><br />

      ABRSM Grade 8 Performance
      <br />• Distinction (2025)
      <br /><br />

      Yamaha Grade 7
      <br />• Distinction
      <br /><br />

      Yamaha Grade 8
      <br />• Distinction
      <br /><br />

      Yamaha Grade 9
      <br />• Merit
      <br /><br />

      High Scorer's Concert Performer
      <br />
      Malaysia High Scorer's Festival
      <br />
      Junior Original Concert Series Performer
      <br />
      Perfect Pitch
    </p>
  </div>

  <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
    <h3 className="text-2xl font-bold mb-4">🏃 Athletics</h3>
    <p className="text-slate-600">
      MSSD Hulu Langat Athletics Championship
      <br /><br />

      Gold Medal
      <br />• 200m Hurdles (2023)
      <br />• 4×100m Relay (2025)
      <br />• 4×400m Relay (2025)
      <br /><br />

      Silver Medal
      <br />• 4×100m Relay (2023)
      <br />• High Jump (2024)
      <br />• 4×400m Relay (2024)
      <br /><br />

      MSS Selangor Athletics
      <br />• Participant (2023)
      <br />• Participant (2024)
    </p>
  </div>

  <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
    <h3 className="text-2xl font-bold mb-4">🤝 Leadership</h3>
    <p className="text-slate-600">
      Kelab Malaysiaku
      <br />• President (2025)
      <br /><br />

      Rumah Sukan Hijau
      <br />• Secretary (2022)
      <br />• Team Captain (2025)
      <br /><br />

      SMJK Yu Hua Prefect Board
      <br />• Treasurer (2022)
      <br /><br />

      Athletics Club
      <br />• Assistant Secretary (2024)
      <br />• Head of Publicity (2025)
      <br /><br />

      Music Club
      <br />• Assistant Band Leader (2024)
      <br />• Secretary (2025)
      <br /><br />

      Crime Prevention Club
      <br />• Assistant Secretary (2024)
      <br />• Head of Discipline (2025)
      <br /><br />

      Malaysia Future Leader
      <br />• Tier 2 Participant (2024)
    </p>
  </div>

  <div className="bg-slate-50 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
    <h3 className="text-2xl font-bold mb-4">❤️ Service & Community</h3>
    <p className="text-slate-600">
      Cancer Society Volunteer
      <br />• Assisted in Hepatitis B and Hepatitis C screening programmes
      <br /><br />

      Doctors on Ground Society
      <br />• Medical database and report management
      <br /><br />

      SJAM Basic First Aid
      <br />• Certified (2022)
      <br /><br />

      SPM Tutor
      <br />• Biology
      <br />• Physics
      <br />• Chemistry
      <br />• Additional Mathematics
      <br />• Mathematics
      <br />• English
      <br />• Chinese
      <br />• Sejarah
      <br /><br />

      Church Pianist
    </p>
  </div>
  

</div></section>
{/* Life Journal */}
<section className="max-w-6xl mx-auto px-8 py-24">
  <h2 className="text-4xl font-bold text-slate-900 mb-10">
    Life Journal
  </h2>

  <p className="text-slate-600 mb-10 max-w-3xl">
    Beyond academics and achievements, these moments reflect my
    experiences, travels, interests and personal growth throughout
    my journey.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="bg-slate-50 p-6 rounded-2xl border">
      <Image
        src="/images/hokkaido-snow.png"
        alt="Hokkaido Snow"
        width={500}
        height={300}
        className="w-full h-56 object-cover rounded-xl"
      />
      <h3 className="text-xl font-bold mt-4 mb-2">
        ❄️ Hokkaido, Japan
      </h3>
      <p className="text-slate-600">
        Seeing snow for the first time in Hokkaido reminded me how much there is to discover beyond textbooks and classrooms.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border">
      <h3 className="text-xl font-bold mb-2">
        🇸🇬 Singapore
      </h3>
      <p className="text-slate-600">
        Exploring a city where education, innovation and culture come together in everyday life.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border">
      <h3 className="text-xl font-bold mb-2">
        🎹 Piano Journey
      </h3>
      <p className="text-slate-600">
        More than ten years of music, discipline and continuous improvement through performance and practice.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border">
      <h3 className="text-xl font-bold mb-2">
        🧪 Science & Olympiads
      </h3>
      <p className="text-slate-600">
        Competitions and learning experiences that strengthened my curiosity about mathematics and science.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border">
      <h3 className="text-xl font-bold mb-2">
        🏃 Athletics
      </h3>
      <p className="text-slate-600">
        Training taught me resilience, consistency and the value of showing up every day.
      </p>
    </div>

    <div className="bg-slate-50 p-6 rounded-2xl border">
      <h3 className="text-xl font-bold mb-2">
        📖 Reflections
      </h3>
      <p className="text-slate-600">
        Thoughts, lessons and experiences collected throughout my academic and personal journey.
      </p>
    </div>

  </div>
</section><section
  id="contact"
  className="max-w-6xl mx-auto px-8 py-24"
>
  <h2 className="text-4xl font-bold text-slate-900 mb-10">
    Contact
  </h2>

  <div className="space-y-4 text-lg text-slate-700">

    <p>
      📧 Email:
      <br />
      hijingwennnnnnn@gmail.com
    </p>

    <p>
      📸 Instagram:
      <br />
      @jingwennnnn0806
    </p>

    <p>
      💼 LinkedIn:
      <br />
      Joyce Chin Jing Wen
    </p>

  </div>
</section>
<footer className="border-t py-8 text-center text-slate-500">
  © 2026 Joyce Chin Jing Wen
</footer>
</main>
  );
}