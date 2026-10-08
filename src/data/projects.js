import manifest from '../../public/previews/manifest.json'

// The manifest is the catalogue: slugs, URLs, image paths and dimensions.
// Trade labels and copy live here so the two stay in sync by slug.
const copy = {
  'hvac-chinook': {
    trade: 'Heating & cooling',
    accent: '#ff7a45',
    description:
      'Furnace and AC company. Service list, coverage areas, and a 24/7 emergency line pinned to the top of every page.',
  },
  'plumbing-mission': {
    trade: 'Plumbing',
    accent: '#3fe0a8',
    description:
      'Inner-city plumber, organised around the problem you are calling about: burst line, no hot water, backed-up drain.',
  },
  'landscape-foothills': {
    trade: 'Landscaping',
    accent: '#7dcc6a',
    description:
      'Landscaping and snow removal in south Calgary, built to carry a business through both seasons.',
  },
  'kitchen-bridgeland': {
    trade: 'Restaurant',
    accent: '#ffb14a',
    description: 'Neighbourhood restaurant. Seasonal menu, wine list, and reservations.',
  },
  'dental-kensington': {
    trade: 'Dental',
    accent: '#7ec8ff',
    description: 'Dental clinic covering family, cosmetic, and emergency visits.',
  },
  'painting-truepro': {
    trade: 'Painting',
    accent: '#d4a1ff',
    description: 'Painting contractor. Interior, exterior, and cabinet refinishing.',
  },
}

export const sites = manifest
  .filter((entry) => copy[entry.slug])
  .map((entry) => ({ ...entry, ...copy[entry.slug] }))
