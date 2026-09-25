    // =========================================================================
    // 1. DATA MATRIX: 5 SECTIONS, 23 CARDS (ALL REQUIRED CONTENT & BRIEF >= 60 WORDS)
    // =========================================================================
    


const ECOSYSTEM_SECTIONS = [
      {
        id: "section-foundations",
        sectionIndex: "01",
        title: "Hero Arena & Foundations",
        subtitle: "Syntactic Mastery, Workspace Configuration & Entry Runway",
        themeName: "Raw Amethyst Purple & Cyberpunk Magenta",
        gemEmoji: "🔮",
        baseBg: "#0c0414",
        neonBorder: "#d946ef",
        accentGlow: "rgba(217, 70, 239, 0.45)",
        cards: [
          {
            id: "card-s1c1",
            title: "Command Hub (Site 01)",
            redirect: "https://rayaantasnim.github.io/Olympiad-Edge/",
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Master the structural foundations of high-velocity computer science under the direct architectural guidelines of the platform. This module strips away conventional textbook delays to build immediate syntactic fluency in Python and low-level C++. Learners dive directly into memory allocation, primitive variables, multi-tier conditional control flows, and complex debugging techniques designed for competitive applications. By training your mind to process execution logic like a compiler, you eliminate programmatic friction and establish a pristine baseline for subsequent algorithmic optimization and enterprise product deployment.",
            specializedType: "table",
            specializedTitle: "Language Capability Matrix",
            specializedContent: `
              <table class="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr class="border-b border-pink-500/30 text-pink-300">
                    <th class="py-1 px-2">Dimension</th>
                    <th class="py-1 px-2">Python Core</th>
                    <th class="py-1 px-2">C++ Engine</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/5 text-slate-300">
                  <tr><td class="py-1 px-2 text-slate-400">Target Domain</td><td class="py-1 px-2">Rapid Prototyping & AI</td><td class="py-1 px-2 text-pink-400">Contest Speed & Memory</td></tr>
                  <tr><td class="py-1 px-2 text-slate-400">Memory Mgmt</td><td class="py-1 px-2">Garbage Collected</td><td class="py-1 px-2 text-pink-400">Direct Pointer Control</td></tr>
                  <tr><td class="py-1 px-2 text-slate-400">Speed Benchmark</td><td class="py-1 px-2">Interpreted Bytecode</td><td class="py-1 px-2 text-pink-400">Sub-millisecond Native</td></tr>
                </tbody>
              </table>`
          },
          {
            id: "card-s1c2",
            title: "Workspace Rig (Site 02 & Step 02)",
            redirect: "https://rayaantasnim.github.io/Olympiad-Edge/site2.html",
            image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Amateur developers waste critical cognitive energy fighting local development configurations and environmental bugs. This module acts as your absolute hardware booster, mandating an optimized workstation workspace to completely eliminate friction. You will learn to transform a standard Visual Studio Code installation into a lightning-fast triple-threat cockpit engineering environment. Through custom formatting setups, deep linter bindings, native system shell mappings, and advanced keyboard shortcuts, you ensure that typing code transforms into fluid, muscle-memory execution without clicking menus.",
            specializedType: "list",
            specializedTitle: "Core Extensions Pipeline",
            specializedContent: `
              <ul class="space-y-1.5 font-mono text-xs text-slate-300">
                <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-pink-500"></span><strong class="text-white">C++ Machine:</strong> Clang-Format, GDB debugging tap, LLVM tooling</li>
                <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-purple-500"></span><strong class="text-white">Python Core:</strong> Ruff linter, Pyright type auditor, UV virtual env</li>
                <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-400"></span><strong class="text-white">Frontend Flow:</strong> Tailwind IntelliSense, Prettier auto-save, Emmet</li>
              </ul>`
          },
          {
            id: "card-s1c3",
            title: "For The Newbie Runway (Segment III)",
            redirect: "https://rayaantasnim.github.io/For-the-newbie/",
            image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Designed explicitly for absolute beginners looking to accelerate their technical growth into a singular, high-velocity macro trajectory. This runway strips out the overwhelming noise of the modern tech landscape to give you an unshakeable entry point. You will gain comprehensive structural exposure to competitive mathematical logic sites, personalized code editors, and responsive user interfaces. The core emphasis remains locked on building algorithmic agility and programmatic rhythm simultaneously, ensuring you view technology as an interconnected matrix from your very first line of code.",
            specializedType: "numbered",
            specializedTitle: "The 2-3 Hour Focus Blueprint",
            specializedContent: `
              <ol class="space-y-1 font-mono text-xs text-slate-300">
                <li><span class="text-pink-400 font-bold">00-30m:</span> Algorithmic Warm-up & Logic Sandboxing</li>
                <li><span class="text-pink-400 font-bold">30-90m:</span> Deep Syntactic Construction & Problem Solving</li>
                <li><span class="text-pink-400 font-bold">90-150m:</span> Full-Stack Implementation & Git Verification</li>
              </ol>`
          },
          {
            id: "card-s1c4",
            title: "Master Portal Entry",
            redirect: "https://rayaantasnim.github.io/Olympiad-Edge-Join/",
            image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Welcome to the central gateway of the world's most intense, high-velocity developer ecosystem designed to take you from basic programming concepts to elite software craftsmanship. This entry node serves as the absolute roadmap router for your technical journey. It balances deep algorithmic execution alongside real-world SaaS architectural construction. By stepping through this digital threshold, you bypass traditional education traps, optimize your technical stack, and align your mental pathways with the execution styles used by elite engineers and global technology titans.",
            specializedType: "timeline",
            specializedTitle: "Ecosystem Milestones Timeline",
            specializedContent: `
              <div class="grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                <div class="p-2 rounded bg-pink-500/10 border border-pink-500/30">
                  <span class="text-pink-400 font-bold block">ALPHA</span>
                  <span class="text-slate-300">Syntax & Logic</span>
                </div>
                <div class="p-2 rounded bg-purple-500/10 border border-purple-500/30">
                  <span class="text-purple-400 font-bold block">BETA</span>
                  <span class="text-slate-300">Full-Stack SaaS</span>
                </div>
                <div class="p-2 rounded bg-cyan-500/10 border border-cyan-500/30">
                  <span class="text-cyan-400 font-bold block">GAMMA</span>
                  <span class="text-slate-300">Global Mastery</span>
                </div>
              </div>`
          },
          {
            id: "card-s1c5",
            title: "Global Knowledge Base",
            redirect: "https://rayaantasnim.github.io/Olympiad-Edge/faq.html",
            image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "An exhaustive informational compendium answering critical structural questions regarding platform operations, paradigm alignments, and technical requirements. This interactive reference index resolves learning ambiguities by delivering direct insight into the Double-Helix framework. It highlights how algorithmic mastery and product engineering reinforce one another, explains the platform's positioning on generative automation, and sets clear expectations for developer consistency. It functions as your permanent operational support manual, keeping you grounded throughout your intense educational sprint.",
            specializedType: "metadata",
            specializedTitle: "Support & Practice Metrics",
            specializedContent: `
              <div class="space-y-1 font-mono text-xs text-slate-300">
                <div class="flex justify-between"><span class="text-slate-400">Support Channel:</span><span class="text-pink-300 font-semibold">rayaantasnim@gmail.com</span></div>
                <div class="flex justify-between"><span class="text-slate-400">License Profile:</span><span class="text-slate-200">Open-Source Ecosystem</span></div>
                <div class="flex justify-between"><span class="text-slate-400">Required Practice:</span><span class="text-emerald-400">Daily Execution Rhythm</span></div>
              </div>`
          }
        ]
      },
      {
        id: "section-fullstack",
        sectionIndex: "02",
        title: "Full-Stack Engineering Grid",
        subtitle: "Modern Semantic UI, Peer Reviews, Git Pipelines & Cloud Capstones",
        themeName: "Emerald Lattice & Jade Matrix",
        gemEmoji: "💎",
        baseBg: "#021207",
        neonBorder: "#10b981",
        accentGlow: "rgba(16, 185, 129, 0.45)",
        cards: [
          {
            id: "card-s2c1",
            title: "UI/UX Architecture (Site 03)",
            redirect: "https://rayaantasnim.github.io/Olympiad-Edge/site3.html",
            image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Dive into the frontend mechanics of the modern web stack to engineer high-performance interfaces for global audiences. This module steps completely away from basic templates to emphasize raw layout control through semantic HTML5 and utility-first Tailwind CSS design. You will master modern layout modules like CSS Flexbox and Grid, manage responsive viewport configurations across all devices, and handle client-side document manipulation via modern vanilla JavaScript. The core goal is crafting fast, performant visual structures that look flawless and execute smoothly.",
            specializedType: "hierarchy",
            specializedTitle: "3-Tiered Layout Stack Layers",
            specializedContent: `
              <div class="space-y-1.5 font-mono text-xs">
                <div class="p-1.5 rounded bg-emerald-950/40 border-l-2 border-emerald-400 text-slate-200">
                  <span class="text-emerald-400 font-bold">1. Structural Layer:</span> Semantic HTML5 & DOM tree validation
                </div>
                <div class="p-1.5 rounded bg-emerald-950/30 border-l-2 border-teal-400 text-slate-200">
                  <span class="text-teal-400 font-bold">2. Styling Layer:</span> Utility-first Tailwind CSS & fluid viewports
                </div>
                <div class="p-1.5 rounded bg-emerald-950/20 border-l-2 border-cyan-400 text-slate-200">
                  <span class="text-cyan-400 font-bold">3. Dynamic Layer:</span> Vanilla ES6+ reactivity & event delegation
                </div>
              </div>`
          },
          {
            id: "card-s2c2",
            title: "Peer Synergy Network (Site 04)",
            redirect: "https://rayaantasnim.github.io/Olympiad-Edge/site4.html",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Coding in pure isolation leads to technical blind spots and developer burnout. This segment bridges your private workstation with a high-caliber network of peer software architects. You will engage in real-time collective code reviews, collaborative team hackathons, and global open-source community tracking. By learning to articulate technical arguments, accept rigorous code feedback, and dissect alternative architectural solutions, you build the communication skills and collaboration habits required to lead cross-functional engineering teams in the enterprise tech sector.",
            specializedType: "box",
            specializedTitle: "Synergy Health Check Metrics",
            specializedContent: `
              <div class="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                <div class="p-2 bg-emerald-950/40 rounded border border-emerald-500/20">
                  <span class="text-emerald-400 font-bold block text-sm">3 Reviews</span>
                  <span class="text-[10px] text-slate-400">Per Check-In Sync</span>
                </div>
                <div class="p-2 bg-emerald-950/40 rounded border border-emerald-500/20">
                  <span class="text-emerald-400 font-bold block text-sm">&lt; 24h</span>
                  <span class="text-[10px] text-slate-400">Cycle Turnaround</span>
                </div>
              </div>`
          },
          {
            id: "card-s2c3",
            title: "Pipeline Operations (Site 05)",
            redirect: "https://rayaantasnim.github.io/Olympiad-Edge/site5.html",
            image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Version control is the absolute baseline of modern professional software production. This module shifts you away from graphical buttons into the precise speed of the Git Command Line Interface. You will master distributed version workflows, complex repository initializations, branching methodologies, merge conflict resolutions, and remote GitHub synchronization pipelines. By enforcing clean, atomic commit histories and professional documentation standards, you ensure your codebases remain secure, accessible, readable, and production-ready for automated continuous integration engines.",
            specializedType: "code",
            specializedTitle: "Core Git CLI Workflow",
            specializedContent: `
              <div class="bg-black/90 p-2.5 rounded border border-emerald-500/30 font-mono text-[11px] text-slate-300 space-y-1">
                <p><span class="text-emerald-400">$</span> git init <span class="text-slate-500"># initialize pristine repo</span></p>
                <p><span class="text-emerald-400">$</span> git checkout -b feat/engine <span class="text-slate-500"># branch</span></p>
                <p><span class="text-emerald-400">$</span> git commit -m "feat: atomic logic" <span class="text-slate-500"># lock</span></p>
                <p><span class="text-emerald-400">$</span> git push origin main <span class="text-slate-500"># upstream deploy</span></p>
              </div>`
          },
          {
            id: "card-s2c4",
            title: "Capstone Directory (Site 10)",
            redirect: "https://rayaantasnim.github.io/Olympiad-Edge/site10.html",
            image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "The ultimate showcase where theoretical competitive programming logic converges with live full-stack SaaS engineering. This milestone segment guides you through architecting and deploying a highly optimized cloud application. You will learn to structuralize clean project directories, manage complex backend data schemas, link frontend interactive layers, and host your deployment live for tech recruiters. Your final portfolio will feature beautiful user interfaces, comprehensive video walkthrough layouts, and highly polished README documentation to prove your practical full-stack capabilities.",
            specializedType: "checklist",
            specializedTitle: "The 4 Portfolio Vitals",
            specializedContent: `
              <div class="space-y-1.5 font-mono text-xs text-slate-300">
                <label class="flex items-center gap-2"><input type="checkbox" checked disabled class="accent-emerald-400 rounded" /> Scalable Cloud Architecture & Schemas</label>
                <label class="flex items-center gap-2"><input type="checkbox" checked disabled class="accent-emerald-400 rounded" /> Zero-Lag Client Viewport Responsive UI</label>
                <label class="flex items-center gap-2"><input type="checkbox" checked disabled class="accent-emerald-400 rounded" /> Production Video Walkthrough & Demos</label>
                <label class="flex items-center gap-2"><input type="checkbox" checked disabled class="accent-emerald-400 rounded" /> Audited README & Performance Specs</label>
              </div>`
          }
        ]
      },
      {
        id: "section-vetting",
        sectionIndex: "03",
        title: "Vetting & Career Systems",
        subtitle: "Diagnostic Sanity Checks, 5-Part Architectural Verification & Placement",
        themeName: "Electric Sapphire Meridian & Cyan Starlight",
        gemEmoji: "🔷",
        baseBg: "#020a18",
        neonBorder: "#00b4d8",
        accentGlow: "rgba(0, 180, 216, 0.45)",
        cards: [
          {
            id: "card-s3c1",
            title: "Novice Vetting Hub",
            redirect: "https://rayaantasnim.github.io/Novice-Assesments-/",
            image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Step into the diagnostic evaluation environment engineered to evaluate your logical baseline before entering advanced algorithmic training. This onboarding pipeline strips away assumptions to run sanity diagnostic drills, syntax evaluation exercises, and logical capability checks on incoming beginners. It serves as your primary navigation compass, illuminating the specific structural gaps in your foundational understanding and ensuring your logical focus is locked in before you scale into high-velocity computing modules.",
            specializedType: "tree",
            specializedTitle: "Evaluation Progress Nodes",
            specializedContent: `
              <div class="flex items-center justify-between font-mono text-xs text-slate-300">
                <div class="text-center p-1.5 bg-cyan-950/40 rounded border border-cyan-400/30">
                  <span class="text-cyan-400 font-bold block">Alpha Path</span>
                  <span class="text-[10px]">Diagnostics</span>
                </div>
                <span class="text-cyan-400">→</span>
                <div class="text-center p-1.5 bg-cyan-950/40 rounded border border-cyan-400/30">
                  <span class="text-cyan-400 font-bold block">Beta Path</span>
                  <span class="text-[10px]">Syntax Drill</span>
                </div>
                <span class="text-cyan-400">→</span>
                <div class="text-center p-1.5 bg-cyan-950/40 rounded border border-cyan-400/30">
                  <span class="text-cyan-400 font-bold block">Gamma Path</span>
                  <span class="text-[10px]">Cap Check</span>
                </div>
              </div>`
          },
          {
            id: "card-s3c2",
            title: "Ultimate Architectural Exam",
            redirect: "https://rayaantasnim.github.io/Novice-Assesments-/test.html",
            image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Challenge your technological understanding inside this rigorous 5-part architectural examination environment. This rigorous verification test evaluates your master comprehension across real-world application paradigms, SaaS business mechanics, landing page engineering, and client-side optimization frameworks. You will tackle dense problem scenarios requiring deep written analysis of server-side data loading speeds, content delivery networks, asynchronous web page hydration layers, and database scaling constraints, proving you possess true technical clarity over complex, enterprise-ready cloud architectures.",
            specializedType: "points",
            specializedTitle: "Point-Weight Exam Breakdown",
            specializedContent: `
              <div class="grid grid-cols-5 gap-1 text-center font-mono text-xs">
                <div class="p-1 rounded bg-cyan-950/40 border border-cyan-500/20"><span class="text-slate-400 block text-[10px]">Q1</span><strong class="text-cyan-300">2 pts</strong></div>
                <div class="p-1 rounded bg-cyan-950/40 border border-cyan-500/20"><span class="text-slate-400 block text-[10px]">Q2</span><strong class="text-cyan-300">4 pts</strong></div>
                <div class="p-1 rounded bg-cyan-950/40 border border-cyan-500/20"><span class="text-slate-400 block text-[10px]">Q3</span><strong class="text-cyan-300">6 pts</strong></div>
                <div class="p-1 rounded bg-cyan-950/40 border border-cyan-500/20"><span class="text-slate-400 block text-[10px]">Q4</span><strong class="text-cyan-300">8 pts</strong></div>
                <div class="p-1 rounded bg-cyan-950/40 border border-cyan-500/20"><span class="text-slate-400 block text-[10px]">Q5</span><strong class="text-cyan-300">12 pts</strong></div>
              </div>`
          },
          {
            id: "card-s3c3",
            title: "The T-Shaped Matrix",
            redirect: "https://rayaantasnim.github.io/Novice-Assesments-/#career-cards-section",
            image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Traditional bootcamps churn out shallow developers who struggle with technical depth, while extreme theoretical tracks produce algorithms experts who can't build user software. This framework maps your growth into a resilient T-Shaped developer. You will build broad horizontal competence across multiple tech disciplines—including user experience design, database security, product packaging, and infrastructure hosting—while cultivating a deep vertical spike of mastery in a single specialized engineering field.",
            specializedType: "tshape",
            specializedTitle: "T-Shaped Developer Topology",
            specializedContent: `
              <div class="space-y-1.5 font-mono text-xs">
                <div class="p-2 rounded bg-cyan-900/30 border border-cyan-400/40 text-center text-cyan-200">
                  <span class="font-bold">HORIZONTAL BAR:</span> UX Design · DB Security · Packaging · Cloud Hosting
                </div>
                <div class="w-1/2 mx-auto p-2 rounded bg-blue-900/40 border border-blue-400/40 text-center text-blue-200">
                  <span class="font-bold">VERTICAL STEM:</span> Hyper-Specialized Algorithmic Optimization
                </div>
              </div>`
          },
          {
            id: "card-s3c4",
            title: "Enterprise Placement",
            redirect: "https://rayaantasnim.github.io/Olympiad-Edge/site9.html",
            image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Map your technical portfolio directly to elite global employment sectors that remain highly insulated from basic AI automation. This guide bypasses low-level coding jobs to focus your engineering skills toward high-value roles at quantitative trading desks, venture-backed artificial intelligence research teams, and complex systems architecture firms. You will learn to draft high-impact resumes, master elite technical interviews, optimize your GitHub profiles, and present your practical code milestones to immediately catch the attention of top-tier technology recruiters worldwide.",
            specializedType: "gridTable",
            specializedTitle: "Target Placement Sectors",
            specializedContent: `
              <table class="w-full text-left font-mono text-[11px] border-collapse">
                <thead>
                  <tr class="border-b border-cyan-500/30 text-cyan-300">
                    <th class="py-1">Sector</th>
                    <th class="py-1">Core Requirement</th>
                    <th class="py-1">Focus Area</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/5 text-slate-300">
                  <tr><td class="py-1 text-cyan-400">Quant Finance</td><td>Low-latency execution</td><td>C++ & Math</td></tr>
                  <tr><td class="py-1 text-cyan-400">AI Labs</td><td>Model pipelines & inference</td><td>Python & CUDA</td></tr>
                  <tr><td class="py-1 text-cyan-400">SaaS Titans</td><td>Distributed cloud systems</td><td>Full-Stack Node</td></tr>
                </tbody>
              </table>`
          }
        ]
      },
      {
        id: "section-primefactor",
        sectionIndex: "04",
        title: "PrimeFactor Arena",
        subtitle: "180s Timed Tournament, 10 Competition Tiers & Number Theory",
        themeName: "Molten Ruby Crucible & Crimson Flare",
        gemEmoji: "⚔️",
        baseBg: "#160305",
        neonBorder: "#f43f5e",
        accentGlow: "rgba(244, 63, 94, 0.45)",
        cards: [
          {
            id: "card-s4c1",
            title: "Speed Laboratory",
            redirect: "https://rayaantasnim.github.io/Prime-Factorization-Web/index.html",
            image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Enter the core interactive testing environment built to measure and expand your mental math processing limits under pressure. This diagnostic math web application pushes you into an intense 180-second timed tournament challenge forcing rapid factorization of complex composite integers. Built purely with client-side vanilla JavaScript and utilizing browser local storage arrays, this system scores your speed, monitors input accuracy, tracks your mistake metrics, and outputs explicit performance verdicts to guide your mathematical training.",
            specializedType: "rules",
            specializedTitle: "Scoring Rules Contract",
            specializedContent: `
              <div class="grid grid-cols-2 gap-1.5 font-mono text-xs">
                <div class="p-1.5 rounded bg-red-950/40 border border-red-500/30 text-emerald-400">+10 First Try</div>
                <div class="p-1.5 rounded bg-red-950/40 border border-red-500/30 text-amber-400">+5 Overtime Solve</div>
                <div class="p-1.5 rounded bg-red-950/40 border border-red-500/30 text-rose-400">-2 Penalty Error</div>
                <div class="p-1.5 rounded bg-red-950/40 border border-red-500/30 text-red-500 font-bold">3-Strike Kill</div>
              </div>`
          },
          {
            id: "card-s4c2",
            title: "Range Matrix Grid",
            redirect: "https://rayaantasnim.github.io/Prime-Factorization-Web/ranges.html",
            image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Review the structured 10-tier competition matrix that defines the progression curves of the tournament application. This range blueprint spans from fundamental 3-digit mental warm-ups up to complex multi-digit composite numbers. Each tier scales up your cognitive boundaries, introducing specific prime factor restrictions and forcing you to level up your mental math approaches to maintain accuracy under tight time constraints.",
            specializedType: "milestones",
            specializedTitle: "10-Tier Range Milestones",
            specializedContent: `
              <div class="space-y-1 font-mono text-xs text-slate-300">
                <div class="flex justify-between p-1 rounded bg-amber-950/30"><span class="text-amber-400 font-bold">Tier 1:</span><span>1 – 200 (Mental Baseline)</span></div>
                <div class="flex justify-between p-1 rounded bg-amber-950/30"><span class="text-amber-400 font-bold">Tier 4:</span><span>1,001 – 2,000 (Four-Digit Split)</span></div>
                <div class="flex justify-between p-1 rounded bg-amber-950/30"><span class="text-amber-400 font-bold">Tier 10:</span><span>1 – 50,000 (Tournament Apex)</span></div>
              </div>`
          },
          {
            id: "card-s4c3",
            title: "Configurator Node (Tier 9)",
            redirect: "https://rayaantasnim.github.io/Prime-Factorization-Web/custom.html",
            image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Take control of the runtime settings within the custom training workspace of the application. This specialized segment unlocks Tier 9 (Parameterized) operations, enabling you to input custom numerical bounds, define upper ceiling parameters, and toggle individual rules or lifelines. It provides the flexibility to isolate specific number ranges, allowing you to train on targeted algorithmic weaknesses or adjust the difficulty curve to match your personal skill level.",
            specializedType: "parameters",
            specializedTitle: "Valid Parameter Envelopes",
            specializedContent: `
              <div class="space-y-1.5 font-mono text-xs text-slate-300">
                <div class="flex items-center gap-2"><span class="w-2 h-2 rounded bg-amber-500"></span> Floor Parameter: <span class="text-amber-300 font-bold">&ge; 4</span></div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 rounded bg-amber-500"></span> Ceiling Parameter: <span class="text-amber-300 font-bold">&le; 100,000</span></div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 rounded bg-red-500"></span> Volatile Lifeline Overrides: <span class="text-rose-400 font-bold">ENABLED</span></div>
              </div>`
          },
          {
            id: "card-s4c4",
            title: "Pedagogical Sandbox",
            redirect: "https://rayaantasnim.github.io/Prime-Factorization-Web/edu.html#sandbox-summary-text",
            image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Step into the educational math sandbox built to teach the core cognitive strategies needed to conquer rapid integer decomposition. This training center breaks down complex number theory principles into actionable mental patterns, bypassing manual division. You will master parity tracking, digit sum checks, modular arithmetic, and Fermat's difference of squares method, turning slow calculations into fast pattern recognition to easily decompose dense composites.",
            specializedType: "heuristics",
            specializedTitle: "3 Core Heuristic Strategies",
            specializedContent: `
              <div class="space-y-1 font-mono text-xs">
                <div class="p-1 rounded bg-red-950/40 border-l-2 border-red-500 text-slate-200"><strong>1. Parity Isolation:</strong> Immediate 2-factor elimination</div>
                <div class="p-1 rounded bg-amber-950/40 border-l-2 border-amber-500 text-slate-200"><strong>2. Modulo 9 Rooting:</strong> Rapid digit sum congruency</div>
                <div class="p-1 rounded bg-yellow-950/40 border-l-2 border-yellow-500 text-slate-200"><strong>3. Diff of Squares:</strong> a² - b² Fermat decomposition</div>
              </div>`
          },
          {
            id: "card-s4c5",
            title: "Deterministic Stack",
            redirect: "https://rayaantasnim.github.io/Prime-Factorization-Web/result.html#avg-compiler-latency",
            image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Dissect the underlying computational algorithms running client-side inside the PrimeFactor application engine. This technical card details the sub-second background mathematics used to check primality and track cycles. By studying how Miller-Rabin checking arrays and Pollard's Rho factorization operate together, you gain deep insight into high-performance number theory code, learning how to handle large integer computations efficiently without causing browser memory leaks or thread freezing.",
            specializedType: "flow",
            specializedTitle: "Deterministic Execution Pipeline",
            specializedContent: `
              <div class="space-y-1 font-mono text-[11px] text-slate-300">
                <div class="p-1 rounded bg-black/60 border border-red-500/20 flex items-center justify-between">
                  <span>Step 1: Miller-Rabin Primality Test</span><span class="text-emerald-400">O(k log³ n)</span>
                </div>
                <div class="p-1 rounded bg-black/60 border border-amber-500/20 flex items-center justify-between">
                  <span>Step 2: Pollard's Rho Factor Split</span><span class="text-amber-400">O(n^(1/4))</span>
                </div>
                <div class="p-1 rounded bg-black/60 border border-yellow-500/20 flex items-center justify-between">
                  <span>Step 3: Exponential Token Assembly</span><span class="text-yellow-400">Canonical Form</span>
                </div>
              </div>`
          }
        ]
      },
      {
        id: "section-hyperscale",
        sectionIndex: "05",
        title: "Hyper-Scale Calculations & Storage",
        subtitle: "10^40 Quantum Prime Engine, Voice Web APIs & Double-Helix Framework",
        themeName: "Quantum Topaz Matrix & Imperial Gold",
        gemEmoji: "⚡",
        baseBg: "#120e02",
        neonBorder: "#fbbf24",
        accentGlow: "rgba(251, 191, 36, 0.45)",
        cards: [
          {
            id: "card-s5c1",
            title: "Decentralized Repository",
            redirect: "https://github.com/rayaantasnim/PDF-Booklets",
            image: "https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Access the central open-source file repository hosting the master documentation for Part 1 of the Olympiad Edge platform. This repository serves as the core file management vault for the learning materials, storing editable slide collections alongside cross-compiled handbook modules. It allows students to clone batch assets, review raw source code properties, and inspect visual diagrams directly, providing an open, unedited look at the platform's core educational materials.",
            specializedType: "tree",
            specializedTitle: "Repository File Inventory",
            specializedContent: `
              <div class="bg-black/80 p-2 rounded border border-yellow-500/20 font-mono text-[11px] space-y-0.5 text-slate-300">
                <p class="text-yellow-400">├── docs/Web_Core_Handbook.pdf</p>
                <p class="text-yellow-400">├── slides/Future_Architecture.pptx</p>
                <p class="text-yellow-400">├── guides/Extensions_Mastery.pdf</p>
                <p class="text-yellow-400">└── specs/Platform_Topologies.pdf</p>
              </div>`
          },
          {
            id: "card-s5c2",
            title: "Quantum Prime Engine",
            redirect: "https://rayaantasnim.github.io/Prime-Factor/calculator.html",
            image: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Push past traditional computing limits using the heavy-duty calculator built into the Prime Dual Portal. This computational engine is engineered to process massive power numbers reaching all the way up to 10^40 entirely in the browser. It handles negative integer parsing and large composite splits effortlessly, using optimized data pipelines to break down massive numbers into their core prime foundations while providing detailed mathematical breakdowns in real time.",
            specializedType: "telemetry",
            specializedTitle: "Telemetry Real-Time Data Fields",
            specializedContent: `
              <ol class="space-y-1 font-mono text-xs text-slate-300">
                <li><span class="text-yellow-400 font-bold">1. Prime Status:</span> Certified / Composite Factor Array</li>
                <li><span class="text-yellow-400 font-bold">2. Elapsed Pipeline Time:</span> Sub-millisecond precision</li>
                <li><span class="text-yellow-400 font-bold">3. Factor Count & Canonical Notation:</span> p1^k1 * p2^k2</li>
              </ol>`
          },
          {
            id: "card-s5c3",
            title: "Voice Command Matrix",
            redirect: "https://rayaantasnim.github.io/Prime-Factor/calculator.html",
            image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "Experience the unique hands-free operational interface built into the Quantum Prime Engine calculator. This card details the integration of the browser's native Speech Recognition and Synthesis Web APIs into the platform's math engines. By clicking the microphone toggle, users can speak massive numbers out loud, issue voice processing commands, and listen as the system reads back calculated prime results, creating a seamless, accessible math utility.",
            specializedType: "voicePipeline",
            specializedTitle: "Voice Interaction Pipeline",
            specializedContent: `
              <div class="space-y-1 font-mono text-xs text-slate-300">
                <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-yellow-400"></span> Trigger: "Start Voice Input" / Mic Activation</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-purple-400"></span> Recognition: Web Speech API Phonetic Tokenizer</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-400"></span> Audio Synthesis: Deterministic Voice Readback</div>
              </div>`
          },
          {
            id: "card-s5c4",
            title: "Double-Helix Core",
            redirect: "https://github.com/rayaantasnim/PDF-Booklets/blob/main/Double%20Helix%20Future.pdf",
            image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
            brief: "The core structural philosophy driving the entire Olympiad Edge platform. This strategy removes the traditional wall separating competitive algorithm programmers from commercial full-stack web developers. By balancing algorithmic optimization with practical software execution, it trains students to solve complex logic challenges under tight time limits while packaging those solutions into beautiful, scalable, cloud-hosted SaaS products that solve real-world problems.",
            specializedType: "doubleHelix",
            specializedTitle: "Track Alpha vs Track Beta",
            specializedContent: `
              <div class="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                <div class="p-2 rounded bg-yellow-950/40 border border-yellow-400/30">
                  <span class="text-yellow-400 font-bold block">Track Alpha</span>
                  <span class="text-[10px] text-slate-300">The Logic Engine · Algorithms & Math</span>
                </div>
                <div class="p-2 rounded bg-purple-950/40 border border-purple-400/30">
                  <span class="text-purple-400 font-bold block">Track Beta</span>
                  <span class="text-[10px] text-slate-300">The Production Engine · SaaS & Cloud</span>
                </div>
              </div>`
          }
        ]
      }
    ];