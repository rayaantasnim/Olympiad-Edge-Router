
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.wing-card');

            cards.forEach((card) => {
                // Calculate 3D transformation on mouse move
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const cardWidth = rect.width;
                    const cardHeight = rect.height;

                    // Cursor location relative to card center (-0.5 to 0.5)
                    const xRel = (e.clientX - rect.left) / cardWidth - 0.5;
                    const yRel = (e.clientY - rect.top) / cardHeight - 0.5;

                    // Max tilt angles in degrees
                    const maxTiltX = 14; 
                    const maxTiltY = 14;

                    // Invert yRel for intuitive natural tilt orientation
                    const rotateX = (-yRel * maxTiltX).toFixed(2);
                    const rotateY = (xRel * maxTiltY).toFixed(2);

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;
                });

                // Smoothly reset transformations when cursor exits bounds
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                });
            });
        });
   