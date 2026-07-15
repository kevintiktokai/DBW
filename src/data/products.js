// Product data transcribed from DBW's 2026 PPE Catalogue and
// Farming & Mining Catalogue. Prices shown exactly as printed ("from $X").
// Images are the exact photos extracted from the catalogue PDFs.

const img = import.meta.glob('../assets/products/*.{png,jpg}', {
  eager: true,
  import: 'default',
})

const p = (name) =>
  img[`../assets/products/${name}.png`] || img[`../assets/products/${name}.jpg`]

export const CATEGORIES = [
  'All',
  'Safety & PPE',
  'Steel',
  'Valves',
  'Pipes & Fittings',
  'Welding & Cutting',
  'Fencing',
  'Timber, Boards & Doors',
  'Site Essentials',
]

export const PRODUCTS = [
  // ---------- PPE CATALOGUE 2026 ----------
  { name: 'Hard Hats', cat: 'Safety & PPE', price: 'from $1.50', img: p('hard-hats') },
  { name: 'Safety Goggles', cat: 'Safety & PPE', price: 'from $1', img: p('goggles') },
  { name: 'Safety Eye Glasses', cat: 'Safety & PPE', price: 'from $1', img: p('safety-glasses') },
  { name: 'Earplugs', cat: 'Safety & PPE', price: 'from $0.35', img: p('earplugs') },
  { name: 'Earmuffs', cat: 'Safety & PPE', price: 'from $1.80', img: p('earmuffs') },
  { name: 'Dust Masks', cat: 'Safety & PPE', price: 'from $5 / box', img: p('dust-mask') },
  { name: 'Twin-Filter Respirator', cat: 'Safety & PPE', price: 'from $8.50', img: p('respirator'), badge: 'Best seller' },
  { name: 'Worksuits', cat: 'Safety & PPE', price: 'from $12', img: p('worksuits') },
  { name: 'Acid-Proof Worksuits', cat: 'Safety & PPE', price: 'from $35', img: p('acid-proof-worksuits') },
  { name: 'Flame-Retardant Worksuits', cat: 'Safety & PPE', price: 'from $40', img: p('flame-retardant-worksuits') },
  { name: 'Overalls', cat: 'Safety & PPE', price: 'from $15', img: p('overalls') },
  { name: 'Safety Shoes — Steel & Non-Steel Toe', cat: 'Safety & PPE', price: 'from $25', img: p('safety-shoes') },
  { name: 'Sisi Ladies Safety Shoes', cat: 'Safety & PPE', price: 'from $55', img: p('sisi-ladies-safety-shoes') },
  { name: 'High-Cut Boots', cat: 'Safety & PPE', price: 'from $30', img: p('high-cut-boot') },
  { name: 'Sisi Ladies High-Cut Boots', cat: 'Safety & PPE', price: 'from $56', img: p('sisi-ladies-high-cut-boot') },
  { name: 'CAT Chelsea Safety Boots', cat: 'Safety & PPE', price: '$980', img: p('cat-chelsea-safety-boot') },
  { name: 'CAT Honey Safety Boots', cat: 'Safety & PPE', price: '$975', img: p('cat-honey-safety-boot') },
  { name: 'Gumboots — Steel & Non-Steel Toe', cat: 'Safety & PPE', price: 'from $9.50', img: p('gumboots'), badge: 'Best seller' },
  { name: 'Dust Coats', cat: 'Safety & PPE', price: 'from $12', img: p('dust-coats') },
  { name: 'Rain Caps', cat: 'Safety & PPE', price: 'from $11.80', img: p('rain-caps') },
  { name: "Welder's Aprons", cat: 'Safety & PPE', price: 'from $6', img: p('welders-apron') },
  { name: 'Knee Spats', cat: 'Safety & PPE', price: 'from $7', img: p('knee-spats') },
  { name: 'Ankle Spats', cat: 'Safety & PPE', price: 'from $4', img: p('ankle-spats') },
  { name: 'Kidney Belts', cat: 'Safety & PPE', price: 'from $7', img: p('kidney-belts') },
  { name: 'Safety Belts & Harnesses', cat: 'Safety & PPE', price: 'from $35', img: p('safety-belts') },
  { name: 'Reflective Vests', cat: 'Safety & PPE', price: 'from $2.20', img: p('reflective-vest') },
  { name: 'Dromex Gloves', cat: 'Safety & PPE', price: 'from $2.20', img: p('dromax-gloves') },
  { name: 'PVC Gloves — Short & Long', cat: 'Safety & PPE', price: 'from $1.70', img: p('pvc-gloves') },
  { name: 'Goat Skin Gloves', cat: 'Safety & PPE', price: 'from $3.30', img: p('goat-skin-gloves') },
  { name: 'Leather Gloves — Short & Long', cat: 'Safety & PPE', price: 'from $2.50', img: p('leather-gloves') },
  { name: 'Rainsuits', cat: 'Safety & PPE', price: 'from $10', img: p('rainsuits'), badge: 'Best seller' },

  // ---------- FARMING & MINING CATALOGUE — STEEL ----------
  { name: 'Round Tubes', cat: 'Steel', img: p('round-tubes') },
  { name: 'Lipped Channel', cat: 'Steel', img: p('lipped-channel') },
  { name: 'Angle Iron', cat: 'Steel', img: p('angle-iron') },
  { name: 'Deformed Bars', cat: 'Steel', img: p('deformed-bars') },
  { name: 'Galvanised Sheets', cat: 'Steel', img: p('galvanised-sheets') },
  { name: 'Mild Steel Plates', cat: 'Steel', img: p('mild-steel-plates') },
  { name: 'Expanded Mesh', cat: 'Steel', img: p('expanded-mesh') },
  { name: 'Grating', cat: 'Steel', img: p('grating') },

  // ---------- VALVES ----------
  { name: 'Glencock Valves', cat: 'Valves', img: p('glencock-valves') },
  { name: 'Cast Iron Gate Valves', cat: 'Valves', img: p('cast-iron-gate-valve') },
  { name: 'Cast Iron Non-Return Valves', cat: 'Valves', img: p('cast-iron-non-return-valve') },
  { name: 'Ballcock Valves', cat: 'Valves', img: p('ballcock-valves') },
  { name: 'Flanged Valves', cat: 'Valves', img: p('flanged-valves') },
  { name: 'Pipe Flanges', cat: 'Valves', img: p('pipe-flanges') },
  { name: 'Butterfly Valves', cat: 'Valves', img: p('butterfly-valves') },

  // ---------- PIPES & FITTINGS ----------
  { name: 'Galvanised Pipes & Fittings', cat: 'Pipes & Fittings', img: p('galvanised-pipes-fittings') },
  { name: 'PVC Pipes & Fittings', cat: 'Pipes & Fittings', img: p('pvc-pipes-fittings') },
  { name: 'HDPE Poly Pipes & Fittings', cat: 'Pipes & Fittings', img: p('hdpe-poly-pipes') },
  { name: 'Black Steel Pipes', cat: 'Pipes & Fittings', img: p('black-steel-pipes') },
  { name: 'Steam Pipes', cat: 'Pipes & Fittings', img: p('steam-pipes') },
  { name: 'Copper Pipes & Fittings', cat: 'Pipes & Fittings', img: p('copper-pipes-fittings') },

  // ---------- WELDING & CUTTING ----------
  { name: 'Welding Machines', cat: 'Welding & Cutting', img: p('welding-machine') },
  { name: 'Welding Rods', cat: 'Welding & Cutting', img: p('welding-rods') },
  { name: 'Drill Bit Sets', cat: 'Welding & Cutting', img: p('drill-bit-sets') },
  { name: 'Cutting Discs', cat: 'Welding & Cutting', img: p('cutting-disc') },
  { name: 'Diamond Discs', cat: 'Welding & Cutting', img: p('diamond-disc') },
  { name: 'Grinding Discs', cat: 'Welding & Cutting', img: p('grinding-disc') },

  // ---------- FENCING ----------
  { name: 'Palisade Fencing', cat: 'Fencing', img: p('palisade-fencing') },
  { name: 'Diamond Razor Wire', cat: 'Fencing', img: p('diamond-razor-wire') },
  { name: 'Diamond Fence & Accessories', cat: 'Fencing', img: p('diamond-fence') },

  // ---------- TIMBER, BOARDS & DOORS (company profile) ----------
  { name: 'Structural & Rough Sawn Timber — All Sizes', cat: 'Timber, Boards & Doors', img: p('rough-sawn-timber') },
  { name: 'Shutter, Structural & Furniture Boards', cat: 'Timber, Boards & Doors', img: p('boards') },
  { name: 'Interior & Exterior Doors', cat: 'Timber, Boards & Doors', img: p('doors') },
  { name: 'Sanitary Ware', cat: 'Timber, Boards & Doors', img: p('sanitary-ware') },

  // ---------- SITE ESSENTIALS ----------
  { name: 'Hand & Power Tools', cat: 'Site Essentials', img: p('hand-tools') },
  { name: 'Barrier Tape', cat: 'Site Essentials', img: p('barrier-tape') },
  { name: 'Black Plastic Sheeting', cat: 'Site Essentials', img: p('black-plastic-sheeting'), badge: 'Best seller' },
  { name: 'Full PPE Range', cat: 'Site Essentials', img: p('all-ppe') },
]
