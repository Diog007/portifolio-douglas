// src/components/CyberBackground.tsx

import React, { useRef, useEffect } from 'react';

interface Vec2 {
  x: number;
  y: number;
}

class Particle {
  // Ajuste a faixa de cores (hue) para tons de ciano e azul do seu projeto
  hue = Math.random() * 40 + 190; // Faixa de 190 (ciano) a 230 (azul)

  constructor(
    public pos: Vec2,
    public vel: Vec2,
    public size: number,
    private readonly canvasSize: Vec2
  ) {}

  update(): void {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    if (this.pos.x < 0 || this.pos.x > this.canvasSize.x) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > this.canvasSize.y) this.vel.y *= -1;

    // Variação sutil de cor para o efeito neon
    this.hue = (this.hue + 0.1);
    if (this.hue > 630) this.hue = 190;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
    // Usando cores mais vibrantes que combinam com o layout
    ctx.fillStyle = `hsl(${this.hue}, 80%, 60%)`; 
    ctx.fill();
  }
}

interface CyberBackgroundProps {
  density?: number;
  // A prop 'style' permite que o componente pai controle a aparência do canvas
  style?: React.CSSProperties; 
}

export const CyberBackground: React.FC<CyberBackgroundProps> = ({ density = 1, style }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef<Vec2>({ x: -1e3, y: -1e3 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ratio = window.devicePixelRatio || 1;

    const setupCanvas = () => {
      // O canvas agora usa o tamanho do seu container, e não da janela inteira
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(ratio, ratio);
    };

    const createParticles = () => {
      const { width, height } = canvas;
      const canvasSize = { x: width / ratio, y: height / ratio };
      const count = (canvasSize.x < 768 ? 40 : 80) * density;
      particles.current = Array.from({ length: count }, () => {
        const size = Math.random() * 2.5 + 1;
        return new Particle(
          { x: Math.random() * canvasSize.x, y: Math.random() * canvasSize.y },
          { x: Math.random() - 0.5, y: Math.random() - 0.5 },
          size,
          canvasSize
        );
      });
    };
    
    setupCanvas();
    createParticles();

    const handleResize = () => {
      setupCanvas();
      createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouse.current = { x: -1e3, y: -1e3 };
    };

    // Os listeners agora são na 'window' para capturar o mouse em toda a tela
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      const canvasSize = { x: canvas.width / ratio, y: canvas.height / ratio };
      ctx.clearRect(0, 0, canvasSize.x, canvasSize.y);

      for (const p of particles.current) {
        p.update();
        p.draw(ctx);

        const dx = mouse.current.x - p.pos.x;
        const dy = mouse.current.y - p.pos.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 140) {
          ctx.strokeStyle = `rgba(0, 224, 255, ${1 - dist / 140})`; // Cor ciano
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(p.pos.x, p.pos.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }
      }

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dist = Math.hypot(a.pos.x - b.pos.x, a.pos.y - b.pos.y);

          if (dist < 90) {
            ctx.strokeStyle = `rgba(39, 255, 154, ${1 - dist / 90})`; // Cor verde neon
            ctx.lineWidth = 0.25;
            ctx.beginPath();
            ctx.moveTo(a.pos.x, a.pos.y);
            ctx.lineTo(b.pos.x, b.pos.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [density]);

  return <canvas ref={canvasRef} style={{ ...style }} />;
};