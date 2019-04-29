import puppeteer from 'puppeteer';

let computing = false;
const queue = [];
let browser;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const generateMapPreview = async (map) => {
  const page = await browser.newPage();
  await page.goto(`${process.env.FRONTEND_URL}/__map-preview-screen.html?mapCoordinates=${map.coordinates}`);
  await page.setViewport({ width: 460, height: 360 });
  await sleep(30000);
  const base64 = await page.screenshot({ encoding: 'base64' });
  page.close();

  // eslint-disable-next-line no-param-reassign
  map.imgUrl = `data:image/jpeg;base64,${base64}`;
  map.save();
};

const generateMapPreviews = async () => {
  if (queue.length === 0) {
    computing = false;
    browser.close();
    browser = null;
    return;
  }

  computing = true;
  const map = queue.pop();

  if (!browser) browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  await generateMapPreview(map);
  generateMapPreviews();
};

export default function queueMapPreviewGeneration(map) {
  queue.push(map);
  if (!computing) generateMapPreviews();
}
