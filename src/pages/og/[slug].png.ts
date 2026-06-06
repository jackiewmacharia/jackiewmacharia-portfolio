import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { createElement } from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import OgImage from '../../components/OgImage';

type Props = { post: CollectionEntry<'blog'> };

const fontRegular = readFileSync(fileURLToPath(import.meta.resolve('@fontsource/inter/files/inter-latin-400-normal.woff')));
const fontBold = readFileSync(fileURLToPath(import.meta.resolve('@fontsource/inter/files/inter-latin-700-normal.woff')));

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map(post => ({
    params: { slug: post.id },
    props: { post },
  }));
};

export const GET: APIRoute<Props> = async ({ props: { post } }) => {
  const svg = await satori(
    createElement(OgImage, {
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags,
    }),
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
