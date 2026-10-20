// Copy the published workshop and its linked downloads without private build inputs.
const fs = require('node:fs');
const path = require('node:path');
const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/sync-workshop.cjs /path/to/workshop-site');
const target = path.resolve(__dirname, '../static/did-eprc-workshop');
const files = [
  'index.html', 'slides.html', 'workshop.html', 'code.html', 'data.html',
  'resources.html', 'codebook.html', 'styles.css', 'syntax.css', 'workshop.js',
  'workshop.Rmd', 'code/workshop_lab.R', 'assets/EPRC-DID-Workshop.pdf',
  'assets/data/simple_did_district.csv', 'assets/data/simple_did_district.dta',
  'assets/data/staggered_did_district.csv', 'assets/data/staggered_did_district.dta',
  'assets/figures/lab-pretrends-plot-1.png', 'slides/slides_eprc_template.pdf'
];
for (const file of files) {
  if (!fs.existsSync(path.join(source, file))) throw new Error('Missing source file: ' + file);
}
for (const file of files) {
  const dest = path.join(target, file);
  fs.mkdirSync(path.dirname(dest), {recursive: true});
  fs.copyFileSync(path.join(source, file), dest);
}
console.log(`Copied ${files.length} published workshop files to ${target}`);
