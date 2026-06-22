import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { execSync } from 'child_process'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const files = [
    'tokens.css',
    'reset.css',
    'grid.css',
    'spacing.css',
    'sizing.css',
    'display.css',
    'typography.css',
    'colors.css',
    'effects.css',
    'animation.css',
    'forms.css',
    'scroll.css',
    'print.css',
]

const srcDir = join(__dirname, 'src', 'css')
const distDir = join(__dirname, 'dist')

mkdirSync(distDir, { recursive: true })

const banner = `/*! FluxGrid CSS v${JSON.parse(readFileSync('package.json', 'utf8')).version} | MIT License | https://fluxgrid-css.vercel.app/ */\n`

const bundle = files
    .map(f => readFileSync(join(srcDir, f), 'utf8'))
    .join('\n')

const full = banner + bundle
writeFileSync(join(distDir, 'fluxgrid.css'), full)
console.log('dist/fluxgrid.css')

execSync(`npx csso dist/fluxgrid.css --output dist/fluxgrid.min.css`, { stdio: 'inherit' })
console.log('dist/fluxgrid.min.css')