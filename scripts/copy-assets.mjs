import { readdir, copyFile, mkdir } from 'fs/promises';
import { join } from 'path';

const srcDir = join(process.cwd(), 'src', 'assets');
const outDir = join(process.cwd(), 'public', 'dist');

async function ensureOut() {
  await mkdir(outDir, { recursive: true });
}

async function run() {
  await ensureOut();
  const files = await readdir(srcDir);
  const pngs = files.filter(f => f.toLowerCase().endsWith('.png') || f.toLowerCase().endsWith('.svg'));
  // Map up to three images to delivery, office, flow in alphabetical order
  pngs.sort();
  const targets = ['delivery.png', 'office.png', 'flow.png'];
  for (let i = 0; i < Math.min(pngs.length, targets.length); i++) {
    const src = join(srcDir, pngs[i]);
    const dest = join(outDir, targets[i]);
    await copyFile(src, dest);
    console.log(`Copied ${pngs[i]} -> public/dist/${targets[i]}`);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
