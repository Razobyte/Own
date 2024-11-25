import React, { useEffect, useRef } from 'react';

const FloatingBackground = () => {
  const canvasRef = useRef(null);

  class Ball {
    constructor(x, y, dx, dy, radius, color, isBlurred) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = color;
      this.isBlurred = isBlurred;
      // Reduced opacity for subtle background effect
      this.alpha = isBlurred ? 0.2 : 0.1;  // Set a low opacity to make balls less distracting
    }

    draw(ctx) {
      ctx.beginPath();
      
      if (this.isBlurred) {
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 100; // Add blur effect
        ctx.fillStyle = `${this.color}${Math.floor(this.alpha * 255).toString(16).padStart(2, '0')}`;
      } else {
        ctx.shadowBlur = 0;
        ctx.fillStyle = `${this.color}${Math.floor(this.alpha * 255).toString(16).padStart(2, '0')}`;
      }
      
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();
      
      // Reset shadow blur after drawing
      ctx.shadowBlur = 0;
    }

    update(canvas) {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      this.draw(canvas.getContext('2d'));
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let balls = [];

    const colors = [
      '#333333', // primary-color
      '#A9A9A9', // accent-1
      '#F0F0F0', // accent-2
      '#005BBB', // highlight
    ];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      balls = [];
      // Increase number of balls to 50
      for (let i = 0; i < 50; i++) {
        // Reduced the maximum radius to make the balls smaller
        const radius = Math.random() * 30 + 10; // Range: 10 to 40
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const isBlurred = Math.random() < 0.33;
        
        balls.push(new Ball(x, y, dx, dy, radius, color, isBlurred));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach(ball => ball.update(canvas));
      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20"
    />
  );
};

export default FloatingBackground;
