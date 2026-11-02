"use client";

import React, { useEffect, useRef } from "react";

/**
 * GlyphScene — Built from unslop/references/effects.md & unslop-hero-after.webp
 *
 * Draws a dramatic geometric stealth-relay wing slicing through nocturnal strata
 * entirely out of 8px monospace financial/cryptographic glyphs (`. : 1 7 4 0 8 $ % #`),
 * with 1px leader-line callout tags pinned to key coordinates.
 */

const CHARS = " .:17408$%#";
const CELL = 7;
const FPS = 10;

interface Callout {
  label: string;
  targetX: number; // 0..1 normalized on canvas
  targetY: number;
  tagX: number;
  tagY: number;
}

const CALLOUTS: Callout[] = [
  {
    label: "Escrow $150 USDG",
    targetX: 0.25,
    targetY: 0.24,
    tagX: 0.12,
    tagY: 0.16,
  },
  {
    label: "Matched · 38ms",
    targetX: 0.56,
    targetY: 0.34,
    tagX: 0.61,
    tagY: 0.22,
  },
  {
    label: "Intent #1042",
    targetX: 0.44,
    targetY: 0.46,
    tagX: 0.28,
    tagY: 0.56,
  },
  {
    label: "Poseidon 0x9f2c",
    targetX: 0.81,
    targetY: 0.42,
    tagX: 0.72,
    tagY: 0.31,
  },
  {
    label: "Burned 0.75 $VEIL",
    targetX: 0.65,
    targetY: 0.62,
    tagX: 0.69,
    tagY: 0.72,
  },
];

function paintSceneToBuffer(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.clearRect(0, 0, w, h);

  // 1. Nocturnal cobalt-ink vertical field on the right, fading to pure dark on the left
  const bgGrad = ctx.createLinearGradient(0, 0, w, 0);
  bgGrad.addColorStop(0.0, "rgba(13, 13, 15, 0)");
  bgGrad.addColorStop(0.22, "rgba(16, 20, 38, 0.35)");
  bgGrad.addColorStop(0.65, "rgba(22, 34, 72, 0.65)");
  bgGrad.addColorStop(1.0, "rgba(28, 46, 98, 0.85)");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // 2. Soft volumetric cloud / data strata behind the craft
  const drawCloudCluster = (cx: number, cy: number, rx: number, ry: number, color: string) => {
    const g = ctx.createRadialGradient(cx, cy, rx * 0.1, cx, cy, rx);
    g.addColorStop(0, color);
    g.addColorStop(0.6, color.replace(/[\d.]+\)$/, "0.35)"));
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1, ry / rx);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  // Lower-left cloud bank
  drawCloudCluster(w * 0.32, h * 0.56, w * 0.22, h * 0.14, "rgba(92, 104, 138, 0.65)");
  drawCloudCluster(w * 0.45, h * 0.62, w * 0.24, h * 0.15, "rgba(110, 122, 156, 0.55)");
  // Upper-mid cloud bank
  drawCloudCluster(w * 0.64, h * 0.29, w * 0.18, h * 0.12, "rgba(125, 138, 174, 0.6)");
  // Right trailing cloud bank
  drawCloudCluster(w * 0.82, h * 0.58, w * 0.26, h * 0.18, "rgba(104, 118, 158, 0.7)");

  // 3. The Geometric Stealth Relay / Paper-Wing Prism
  // Nose at (0.24, 0.23), Swept back to right
  const nose = { x: w * 0.24, y: h * 0.23 };
  const wingTop = { x: w * 0.82, y: h * 0.42 };
  const centerCreaseTop = { x: w * 0.62, y: h * 0.45 };
  const centerFoldDeep = { x: w * 0.74, y: h * 0.54 };
  const wingBottom = { x: w * 0.64, y: h * 0.63 };
  const tailNotch = { x: w * 0.69, y: h * 0.49 };

  // Facet A: Main illuminated left/lower-mid wing (bright ivory-white)
  const facetAGrad = ctx.createLinearGradient(nose.x, nose.y, wingBottom.x, wingBottom.y);
  facetAGrad.addColorStop(0, "#ffffff");
  facetAGrad.addColorStop(0.65, "#f0f2f7");
  facetAGrad.addColorStop(1, "#cfd5e2");
  ctx.fillStyle = facetAGrad;
  ctx.beginPath();
  ctx.moveTo(nose.x, nose.y);
  ctx.lineTo(centerCreaseTop.x, centerCreaseTop.y);
  ctx.lineTo(wingBottom.x, wingBottom.y);
  ctx.closePath();
  ctx.fill();

  // Facet B: Deep inner fold shadow (warm copper-earth & amber shadow)
  const facetBGrad = ctx.createLinearGradient(nose.x, nose.y, centerFoldDeep.x, centerFoldDeep.y);
  facetBGrad.addColorStop(0, "#8c583a");
  facetBGrad.addColorStop(0.6, "#6e4228");
  facetBGrad.addColorStop(1, "#4e2d1a");
  ctx.fillStyle = facetBGrad;
  ctx.beginPath();
  ctx.moveTo(nose.x, nose.y);
  ctx.lineTo(centerCreaseTop.x, centerCreaseTop.y);
  ctx.lineTo(centerFoldDeep.x, centerFoldDeep.y);
  ctx.closePath();
  ctx.fill();

  // Facet C: Under-fuselage warm gold reflection
  ctx.fillStyle = "#d9a75c";
  ctx.beginPath();
  ctx.moveTo(centerCreaseTop.x, centerCreaseTop.y);
  ctx.lineTo(centerFoldDeep.x, centerFoldDeep.y);
  ctx.lineTo(wingBottom.x, wingBottom.y);
  ctx.closePath();
  ctx.fill();

  // Facet D: Upper-right starboard wing (crisp silver-white)
  const facetDGrad = ctx.createLinearGradient(nose.x, nose.y, wingTop.x, wingTop.y);
  facetDGrad.addColorStop(0, "#ffffff");
  facetDGrad.addColorStop(0.5, "#e6eaf2");
  facetDGrad.addColorStop(1, "#b8c2d6");
  ctx.fillStyle = facetDGrad;
  ctx.beginPath();
  ctx.moveTo(nose.x, nose.y);
  ctx.lineTo(wingTop.x, wingTop.y);
  ctx.lineTo(tailNotch.x, tailNotch.y);
  ctx.lineTo(centerCreaseTop.x, centerCreaseTop.y);
  ctx.closePath();
  ctx.fill();

  // Soft edge vignette so left and bottom blend cleanly into #0f0f10
  const fadeLeft = ctx.createLinearGradient(0, 0, w * 0.22, 0);
  fadeLeft.addColorStop(0, "rgba(15, 15, 16, 1)");
  fadeLeft.addColorStop(1, "rgba(15, 15, 16, 0)");
  ctx.fillStyle = fadeLeft;
  ctx.fillRect(0, 0, w * 0.22, h);

  const fadeBottom = ctx.createLinearGradient(0, h * 0.78, 0, h);
  fadeBottom.addColorStop(0, "rgba(15, 15, 16, 0)");
  fadeBottom.addColorStop(1, "rgba(15, 15, 16, 1)");
  ctx.fillStyle = fadeBottom;
  ctx.fillRect(0, h * 0.78, w, h * 0.22);
}

export default function GlyphScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = 680;
    const height = 460;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const columns = Math.floor(width / CELL);
    const rows = Math.floor(height / CELL);

    // 1. Render procedural scene once into low-res sampler canvas
    const sample = document.createElement("canvas");
    sample.width = columns;
    sample.height = rows;
    const sampler = sample.getContext("2d", { willReadFrequently: true });
    if (!sampler) return;
    paintSceneToBuffer(sampler, columns, rows);
    const pixels = sampler.getImageData(0, 0, columns, rows).data;

    // 2. Build glyph atlas once
    const atlas = document.createElement("canvas");
    atlas.width = CELL * CHARS.length;
    atlas.height = CELL;
    const pen = atlas.getContext("2d");
    if (!pen) return;
    pen.font = `600 ${CELL}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
    pen.textAlign = "center";
    pen.textBaseline = "middle";
    pen.fillStyle = "#ffffff";
    [...CHARS].forEach((char, index) => {
      pen.fillText(char, index * CELL + CELL / 2, CELL / 2);
    });

    // 3. Extract cell luminance and color once
    interface CellData {
      x: number;
      y: number;
      light: number;
      color: string;
      seed: number;
    }
    const cells: CellData[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const i = (y * columns + x) * 4;
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3] / 255;
        const light = ((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255) * a;
        if (light > 0.04) {
          cells.push({
            x,
            y,
            light,
            color: `rgb(${r},${g},${b})`,
            seed: Math.random(),
          });
        }
      }
    }

    const tinted = document.createElement("canvas");
    tinted.width = CELL;
    tinted.height = CELL;
    const tint = tinted.getContext("2d");
    if (!tint) return;

    const draw = (step: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const c of cells) {
        const jitter = Math.sin(c.seed * 999 + step * 0.7) > 0.91 ? 1 : 0;
        const pick = Math.min(CHARS.length - 1, Math.floor(c.light * CHARS.length) + jitter);
        if (pick <= 0) continue;

        tint.globalCompositeOperation = "copy";
        tint.drawImage(atlas, pick * CELL, 0, CELL, CELL, 0, 0, CELL, CELL);
        tint.globalCompositeOperation = "source-in";
        tint.fillStyle = c.color;
        tint.fillRect(0, 0, CELL, CELL);
        ctx.drawImage(tinted, c.x * CELL, c.y * CELL);
      }
    };

    draw(0);

    let frame = 0;
    let last = 0;
    let step = 0;
    let visible = true;

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      if (!visible || now - last < 1000 / FPS) return;
      last = now;
      draw(++step);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] select-none overflow-hidden">
      {/* Glyph Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover object-right"
        aria-label="Confidential agent execution relay rendered in cryptographic glyphs"
      />

      {/* SVG 1px Leader Lines & Anchor Squares (Signature detail from unslop-hero-after) */}
      <svg
        viewBox="0 0 680 460"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMaxYMid slice"
      >
        {CALLOUTS.map((c, idx) => {
          const tx = c.targetX * 680;
          const ty = c.targetY * 460;
          const bx = c.tagX * 680;
          const by = c.tagY * 460;
          return (
            <g key={idx}>
              {/* 1px Crisp Leader Line */}
              <line
                x1={tx}
                y1={ty}
                x2={bx}
                y2={by}
                stroke="#4cc38a"
                strokeWidth="1.2"
              />
              {/* 5x5 Anchor Square on the Glyph Surface */}
              <rect
                x={tx - 2.5}
                y={ty - 2.5}
                width="5"
                height="5"
                fill="#0f0f10"
                stroke="#4cc38a"
                strokeWidth="1.2"
              />
            </g>
          );
        })}
      </svg>

      {/* Pinned Callout Tags */}
      {CALLOUTS.map((c, idx) => (
        <div
          key={idx}
          style={{
            left: `${c.tagX * 100}%`,
            top: `${c.tagY * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute px-2.5 py-1 rounded-[4px] bg-[#4cc38a] text-[#09140e] font-mono text-[11px] font-medium tracking-tight shadow-[0_4px_12px_rgba(0,0,0,0.45)] whitespace-nowrap pointer-events-none"
        >
          {c.label}
        </div>
      ))}
    </div>
  );
}

