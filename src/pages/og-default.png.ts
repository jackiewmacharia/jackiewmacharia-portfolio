import type { APIRoute } from 'astro';
import { createElement } from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const fontRegular = readFileSync(fileURLToPath(import.meta.resolve('@fontsource/inter/files/inter-latin-400-normal.woff')));
const fontBold = readFileSync(fileURLToPath(import.meta.resolve('@fontsource/inter/files/inter-latin-700-normal.woff')));

export const GET: APIRoute = async () => {
  const svg = await satori(
    createElement('div', {
      style: {
        width: 1200,
        height: 630,
        background: '#09090b',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px',
        fontFamily: 'Inter',
      },
    }, [
      createElement('div', {
        key: 'site',
        style: { color: '#fbbf24', fontSize: 20, fontWeight: 400 },
      }, 'jackiewmacharia.dev'),
      createElement('div', {
        key: 'main',
        style: {
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          gap: 20,
        },
      }, [
        createElement('div', {
          key: 'name',
          style: { color: '#f4f4f5', fontSize: 72, fontWeight: 700, lineHeight: 1.1 },
        }, 'Jackie Macharia'),
        createElement('div', {
          key: 'title',
          style: { color: '#a1a1aa', fontSize: 28, fontWeight: 400 },
        }, 'Software Engineer building great user experiences.'),
      ]),
    ]),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: fontBold, weight: 700, style: 'normal' },
      ],
    },
  );

  const png = new Uint8Array(new Resvg(svg).render().asPng());

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
