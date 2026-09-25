    // =========================================================================
    // 2. RENDER THE 5 SECTIONS AND 23 CARDS DYNAMICALLY
    // =========================================================================
    function renderSections() {
      const container = document.getElementById("sections-container");
      let allCards = [];

      ECOSYSTEM_SECTIONS.forEach((sec, sIdx) => {
        const secEl = document.createElement("section");
        secEl.id = sec.id;
        secEl.className = "light-templar-section max-w-5xl mx-auto px-4 py-8 sm:px-7 sm:py-12 md:px-10 md:py-16 my-8 sm:my-14 relative overflow-hidden transition-all duration-500";
        secEl.dataset.glowHue = sec.neonBorder;
        secEl.style.setProperty('--lens-border', sec.neonBorder + '44');
        secEl.style.setProperty('--lens-bloom', sec.accentGlow);
        secEl.style.setProperty('--lens-highlight', sec.neonBorder);
        secEl.style.setProperty('--lens-light', sec.accentGlow.replace('0.45', '0.12').replace('0.4', '0.12'));

        // Section Header with Light-Templar lens aura & gemstone badge
        secEl.innerHTML = `
          <!-- Dynamic Ethereal Starlight / Plasma Glow Bloom -->
          <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-80 sm:w-[480px] h-40 rounded-full pointer-events-none opacity-30 blur-3xl" style="background: ${sec.neonBorder}"></div>
          
          <div class="mb-8 sm:mb-12 border-b border-white/10 pb-5 sm:pb-7 flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
            <div>
              <div class="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-slate-300 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span class="text-sm">${sec.gemEmoji}</span>
                <span class="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style="background-color: ${sec.neonBorder}; color: ${sec.neonBorder}"></span>
                <span class="text-white font-bold">SECTION ${sec.sectionIndex}</span>
                <span class="text-slate-400">// ${sec.themeName}</span>
              </div>
              <h2 class="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight flex items-center gap-2">
                <span>${sec.title}</span>
              </h2>
              <p class="font-body text-slate-300 text-xs sm:text-sm md:text-base mt-1.5 font-light">${sec.subtitle}</p>
            </div>
            <div class="font-mono text-xs text-slate-300 shrink-0">
              <span class="px-3.5 py-1.5 rounded-full crystal-card border border-white/10 font-ui flex items-center gap-2 text-xs">
                <span class="w-1.5 h-1.5 rounded-full" style="background: ${sec.neonBorder}"></span>
                <span>${sec.cards.length} Production Nodes · Vertical Chain</span>
              </span>
            </div>
          </div>
          <!-- PRECISE VERTICAL 3D CARDS SEQUENCE WITH RESPONSIVE MOBILE ERGONOMICS -->
          <div class="flex flex-col gap-5 sm:gap-7 md:gap-9 max-w-4xl mx-auto w-full relative z-10" id="grid-${sec.id}"></div>
        `;

        container.appendChild(secEl);
        const grid = document.getElementById(`grid-${sec.id}`);

        sec.cards.forEach((card, cIdx) => {
          allCards.push({ ...card, sectionName: sec.title, sectionId: sec.id });
          const cardEl = document.createElement("article");
          cardEl.id = card.id;
          cardEl.className = "crystal-card glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border flex flex-col justify-between group cursor-pointer relative overflow-hidden transition-all duration-300 shadow-2xl";
          cardEl.style.borderColor = "rgba(255, 255, 255, 0.08)";
          cardEl.dataset.neon = sec.neonBorder;

          cardEl.innerHTML = `
            <div class="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
              <!-- Card Image with Resilient Fallback Container & HUD Lens Vignette Overlay -->
              <div class="relative w-full md:w-72 h-44 sm:h-52 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-black/40 border border-white/10 shrink-0 shadow-lg">
                <img 
                  src="${card.image}" 
                  alt="${card.title}" 
                  loading="lazy" 
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden')"
                />
                <!-- Stylized Fallback Container if image fails -->
                <div class="hidden absolute inset-0 bg-gradient-to-br from-[#0c0a18] via-[#16122c] to-[#040308] flex flex-col items-center justify-center p-4 text-center">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-2" style="background: ${sec.accentGlow}">
                    <span class="font-heading font-bold text-white text-sm">Ω</span>
                  </div>
                  <span class="font-ui text-xs font-semibold text-white tracking-wide">${card.title}</span>
                  <span class="font-mono text-[10px] text-slate-400 mt-1">Node Verified</span>
                </div>
                
                <!-- HUD Lens Vignette & Internal Neon Masking Shadow Gradient -->
                <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#040308] via-transparent to-transparent opacity-80"></div>
                <div class="absolute inset-0 pointer-events-none mix-blend-screen opacity-20 group-hover:opacity-40 transition-opacity duration-300" style="background: radial-gradient(circle at 50% 50%, ${sec.neonBorder} 0%, transparent 70%)"></div>
                
                <!-- Node ID badge with Gemstone styling -->
                <div class="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-black/85 backdrop-blur-md border border-white/10 font-mono text-[10px] sm:text-[11px] text-slate-200 flex items-center gap-1.5 shadow">
                  <span class="w-1.5 h-1.5 rounded-full" style="background: ${sec.neonBorder}"></span>
                  <span>Node 0${cIdx + 1}</span>
                </div>
              </div>

              <!-- Title & Word-Verified Brief (At least 60 words, Justified Block) -->
              <div class="flex-1 flex flex-col justify-between space-y-3 sm:space-y-4 w-full">
                <div>
                  <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span class="uppercase tracking-widest flex items-center gap-1 text-[11px]" style="color: ${sec.neonBorder}">
                      <span>${sec.gemEmoji}</span>
                      <span>SEC ${sec.sectionIndex} · PRODUCTION NODE</span>
                    </span>
                    <span class="text-[10px] text-slate-500 font-mono">ID: ${card.id}</span>
                  </div>
                  <h3 class="font-heading font-extrabold text-lg sm:text-xl md:text-2xl text-white group-hover:text-white transition-colors flex items-center justify-between">
                    <span>${card.title}</span>
                    <span class="text-sm transition-transform group-hover:translate-x-1" style="color: ${sec.neonBorder}">↗</span>
                  </h3>
                  <p class="card-brief font-body text-xs sm:text-sm text-slate-100 mt-2 sm:mt-2.5 leading-relaxed">
                    ${card.brief}
                  </p>
                </div>

                <!-- Unique Specialized Data Element -->
                <div class="pt-1">
                  <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/60 border border-white/10 space-y-2">
                    <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1.5 border-b border-white/5">
                      <span class="uppercase tracking-wider font-semibold flex items-center gap-1" style="color: ${sec.neonBorder}">
                        <span>◈</span>
                        <span>${card.specializedTitle}</span>
                      </span>
                      <span class="text-[10px] text-slate-500 font-mono">ENGINE SPEC</span>
                    </div>
                    ${card.specializedContent}
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Action Footer -->
            <div class="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center justify-between font-mono text-xs gap-2">
              <a href="${card.redirect}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-white hover:underline transition-colors font-medium font-ui">
                <span>Launch Node Link</span> <span style="color: ${sec.neonBorder}">→</span>
              </a>
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-mono">${card.redirect.replace('https://', '')}</span>
            </div>
          `;

          // Attach 3D parallax tilt & dynamic hover glow
          attach3DTilt(cardEl, sec.neonBorder);
          grid.appendChild(cardEl);
        });
      });

      // Render items inside the Showroom Terminal Grid
      renderShowroomGrid(allCards);
    }

    // =========================================================================
    // 3. 3D PERSPECTIVE TILT EFFECT ON CARDS
    // =========================================================================
    function attach3DTilt(element, neonColor) {
      element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        element.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        element.style.borderColor = neonColor;
        element.style.boxShadow = `0 10px 30px -10px ${neonColor}`;
      });

      element.addEventListener("mouseleave", () => {
        element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        element.style.borderColor = "rgba(255, 255, 255, 0.08)";
        element.style.boxShadow = "none";
      });
    }

    // =========================================================================
    // 4. THREE.JS 3D COSMIC ENGINE WITH CURSOR PARALLAX
    // =========================================================================
    let scene, camera, renderer, starField;
    let targetRotationX = 0, targetRotationY = 0;

    function initCosmicEngine() {
      const canvas = document.getElementById("bg-canvas");
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 400;

      renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Build cosmic particle field
      const particleCount = 2200;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorPalette = [
        new THREE.Color(0xff007f), // Neon Magenta
        new THREE.Color(0x7000ff), // Hyper Violet
        new THREE.Color(0x00f3ff), // Cyan
        new THREE.Color(0x00ff66), // Emerald
        new THREE.Color(0xffe600)  // Quantum Gold
      ];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1600;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1600;

        const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      // Circular particle texture generator
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 16;
      pCanvas.height = 16;
      const ctx = pCanvas.getContext("2d");
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.3, "rgba(255,255,255,0.7)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
      const pTexture = new THREE.CanvasTexture(pCanvas);

      const material = new THREE.PointsMaterial({
        size: 3.5,
        map: pTexture,
        transparent: true,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      starField = new THREE.Points(geometry, material);
      scene.add(starField);

      // Handle Resize
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Cursor movement tracking for parallax depth
      window.addEventListener("mousemove", (e) => {
        const mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        targetRotationY = mouseX * 0.4;
        targetRotationX = mouseY * 0.4;
      });

      animate();
    }

    function animate() {
      requestAnimationFrame(animate);

      if (starField) {
        starField.rotation.y += 0.0006;
        starField.rotation.x += 0.0003;

        // Smooth damping/lerp cursor parallax
        starField.rotation.y += (targetRotationY - starField.rotation.y) * 0.04;
        starField.rotation.x += (targetRotationX - starField.rotation.x) * 0.04;
      }

      renderer.render(scene, camera);
    }

    // =========================================================================
    // 5. INTERACTIVE CURSOR NEON TRAIL & HUE SHIFTING ON SCROLL
    // =========================================================================
    const cursorGlow = document.getElementById("cursor-glow");
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let currentX = mouseX, currentY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateCursorTrail() {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      cursorGlow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(updateCursorTrail);
    }
    updateCursorTrail();

    // Section color observer for cursor neon trail and Light-Templar lens activation
    function initSectionColorObserver() {
      const sections = document.querySelectorAll("section[data-glow-hue]");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hue = entry.target.dataset.glowHue;
            document.documentElement.style.setProperty("--trail-color", hue);
            document.documentElement.style.setProperty("--trail-glow", hue + "66");
            entry.target.classList.add("lens-active");
          } else {
            entry.target.classList.remove("lens-active");
          }
        });
      }, { threshold: 0.25 });

      sections.forEach(sec => observer.observe(sec));
    }

    // =========================================================================
    // 6. DUAL NAVIGATION PROTOCOLS: OPEN/CLOSE/OUTSIDE-CLICK LOGIC
    // =========================================================================
    // 6. DUAL NAVIGATION PROTOCOLS: OPEN/CLOSE/DOUBLE-TAP/OUTSIDE-CLICK LOGIC
    // =========================================================================
    // Protocol 1: Right Navbar Global Router (50% desktop, 100% mobile)
    const globalRouterToggle = document.getElementById("globalRouterToggle");
    const globalRouterOverlay = document.getElementById("globalRouterOverlay");
    const globalRouterDrawer = document.getElementById("globalRouterDrawer");
    const closeGlobalRouterBtn = document.getElementById("closeGlobalRouterBtn");

    function toggleGlobalRouter(e) {
      if (e) e.stopPropagation();
      const isHidden = globalRouterOverlay.classList.contains("hidden");
      if (isHidden) {
        closeMapMatrix();
        globalRouterOverlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      } else {
        closeGlobalRouter();
      }
    }
    function closeGlobalRouter() {
      globalRouterOverlay.classList.add("hidden");
      if (mapMatrixOverlay.classList.contains("hidden")) {
        document.body.style.overflow = "";
      }
    }

    globalRouterToggle.addEventListener("click", toggleGlobalRouter);
    closeGlobalRouterBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeGlobalRouter();
    });

    // Close when clicking outside bounding drawer on the dark overlay
    globalRouterOverlay.addEventListener("click", (e) => {
      if (e.target === globalRouterOverlay) {
        closeGlobalRouter();
      }
    });

    // Double-tap or double-click to close
    let lastTapGlobal = 0;
    globalRouterDrawer.addEventListener("touchend", (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTapGlobal;
      if (tapLength < 300 && tapLength > 0) {
        closeGlobalRouter();
        e.preventDefault();
      }
      lastTapGlobal = currentTime;
    });
    globalRouterDrawer.addEventListener("dblclick", () => {
      closeGlobalRouter();
    });

    // Protocol 2: Left-Corner Full-Screen Map Matrix Overlay
    const mapMatrixToggle = document.getElementById("mapMatrixToggle");
    const mapMatrixOverlay = document.getElementById("mapMatrixOverlay");
    const closeMapMatrixBtn = document.getElementById("closeMapMatrixBtn");

    function toggleMapMatrix(e) {
      if (e) e.stopPropagation();
      const isHidden = mapMatrixOverlay.classList.contains("hidden");
      if (isHidden) {
        closeGlobalRouter();
        mapMatrixOverlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      } else {
        closeMapMatrix();
      }
    }
    function closeMapMatrix() {
      mapMatrixOverlay.classList.add("hidden");
      if (globalRouterOverlay.classList.contains("hidden")) {
        document.body.style.overflow = "";
      }
    }

    mapMatrixToggle.addEventListener("click", toggleMapMatrix);
    closeMapMatrixBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMapMatrix();
    });

    // Close when clicking outside content area in full-screen overlay
    mapMatrixOverlay.addEventListener("click", (e) => {
      if (e.target === mapMatrixOverlay) {
        closeMapMatrix();
      }
    });

    // Double-tap or double-click to close Map Matrix
    let lastTapMatrix = 0;
    mapMatrixOverlay.addEventListener("touchend", (e) => {
      if (e.target === mapMatrixOverlay) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTapMatrix;
        if (tapLength < 300 && tapLength > 0) {
          closeMapMatrix();
          e.preventDefault();
        }
        lastTapMatrix = currentTime;
      }
    });
    mapMatrixOverlay.addEventListener("dblclick", (e) => {
      if (e.target === mapMatrixOverlay) {
        closeMapMatrix();
      }
    });

    // Keyboard ESC to close any open overlay
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeGlobalRouter();
        closeMapMatrix();
      }
    });

    // Accordion Twist: Tapping parent section expands vertical card sub-anchors directly within navbar
    function toggleAccordion(id) {
      const content = document.getElementById(id);
      if (!content) return;
      const isHidden = content.classList.contains("hidden");

      if (isHidden) {
        content.classList.remove("hidden");
        const chevron = content.previousElementSibling.querySelector(".acc-chevron");
        if (chevron) chevron.style.transform = "rotate(180deg)";
      } else {
        content.classList.add("hidden");
        const chevron = content.previousElementSibling.querySelector(".acc-chevron");
        if (chevron) chevron.style.transform = "rotate(0deg)";
      }
    }

    // Smooth navigation click handling & overlay close
    document.querySelectorAll(".matrix-link, .accordion-content a").forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            closeMapMatrix();
            closeGlobalRouter();
            setTimeout(() => {
              window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
              });
            }, 100);
          }
        }
      });
    });

    // =========================================================================
    // 7. PORTFOLIO SHOWROOM & CLI LOGIC
    // =========================================================================
    let allLoadedCards = [];

    function renderShowroomGrid(cards) {
      allLoadedCards = cards;
      filterTerminal('all');
    }

    function filterTerminal(filter) {
      const grid = document.getElementById("showroomNodesGrid");
      grid.innerHTML = "";

      let filtered = allLoadedCards;
      if (filter === "S1") filtered = allLoadedCards.filter(c => c.sectionId === "section-foundations");
      if (filter === "S2") filtered = allLoadedCards.filter(c => c.sectionId === "section-fullstack");
      if (filter === "S3") filtered = allLoadedCards.filter(c => c.sectionId === "section-vetting");
      if (filter === "S4") filtered = allLoadedCards.filter(c => c.sectionId === "section-primefactor");
      if (filter === "S5") filtered = allLoadedCards.filter(c => c.sectionId === "section-hyperscale");

      filtered.forEach(c => {
        const item = document.createElement("a");
        item.href = `#${c.id}`;
        item.className = "p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-purple-500/40 transition-all flex items-center justify-between text-xs";
        item.innerHTML = `
          <div>
            <p class="font-cyber font-semibold text-white">${c.title}</p>
            <p class="font-mono text-[10px] text-slate-400">${c.sectionName}</p>
          </div>
          <span class="text-purple-400 font-mono text-[11px]">JUMP →</span>
        `;
        grid.appendChild(item);
      });
    }

    function executeTerminalCommand() {
      const input = document.getElementById("terminalCliInput");
      const log = document.getElementById("terminalOutputLog");
      const val = input.value.trim().toLowerCase();
      if (!val) return;

      const p = document.createElement("p");

      if (val === "help") {
        p.className = "text-purple-300";
        p.innerHTML = "> Commands: 'nodes' (list 23), 'track 1..5', 'status', 'clear', or type any search query.";
      } else if (val === "clear") {
        log.innerHTML = "";
        input.value = "";
        return;
      } else if (val === "nodes") {
        p.className = "text-emerald-300";
        p.innerHTML = `> Total 23 nodes active. S1: 5 cards, S2: 4 cards, S3: 4 cards, S4: 5 cards, S5: 4 cards.`;
      } else if (val === "status") {
        p.className = "text-cyan-300";
        p.innerHTML = `> PROTOCOL: ONLINE · Three.js Particle Matrix Active · GSAP Triggers Ready · Ping: 0.12ms`;
      } else {
        const matches = allLoadedCards.filter(c => c.title.toLowerCase().includes(val) || c.brief.toLowerCase().includes(val));
        if (matches.length > 0) {
          p.className = "text-yellow-300";
          p.innerHTML = `> Found ${matches.length} matching nodes: ${matches.map(m => `<a href="#${m.id}" class="underline text-white">${m.title}</a>`).join(", ")}`;
        } else {
          p.className = "text-rose-400";
          p.innerHTML = `> Command or search '${val}' not recognized. Type 'help' for assistance.`;
        }
      }

      log.appendChild(p);
      log.scrollTop = log.scrollHeight;
      input.value = "";
    }

    document.getElementById("terminalCliInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") executeTerminalCommand();
    });

    // =========================================================================
    // 8. INITIALIZATION & GSAP ENTRANCE ANIMATION
    // =========================================================================
    window.addEventListener("DOMContentLoaded", () => {
      renderSections();
      initCosmicEngine();
      initSectionColorObserver();

      // GSAP Entrance
      if (typeof gsap !== "undefined") {
        gsap.from(".hero-badge", { opacity: 0, y: -20, duration: 0.8, ease: "power2.out" });
        gsap.from(".hero-title", { opacity: 0, scale: 0.95, duration: 1, delay: 0.2, ease: "power3.out" });
        gsap.from(".hero-sub", { opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: "power2.out" });
        gsap.from(".hero-actions", { opacity: 0, y: 20, duration: 0.8, delay: 0.6, ease: "power2.out" });
      }
    });
