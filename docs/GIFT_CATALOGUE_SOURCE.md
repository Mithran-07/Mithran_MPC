# Gift Catalogue Source Mapping

This document maps the extracted products in the \`data/giftProducts.ts\` database to their original source in the provided PDF catalogue (\`Mithran_Photo_Clickz_Final_Customized_Gifts_Catalogue(1).pdf\`).

## Extraction Process

The 88-page catalogue was extracted as images because the original PDF did not contain selectable text. The extraction was processed in parallel by AI vision models divided into 6 batches:
1. Pages 2-15
2. Pages 16-30
3. Pages 31-45
4. Pages 46-60
5. Pages 61-75
6. Pages 76-88

A total of 440 unique products and their variants were successfully identified, mapping exact product names, categories, pricing, courier charges, and customization options.

## Missing or Ambiguous Data

- Any item listed as "Based on Size" without explicit tables was recorded, but pricing may need to be calculated via a dynamic size-based formula at runtime.
- For non-rectangular/custom shaped products (e.g. Heart Pillows, Crystals), the exact bounding box and clip-paths for previews will need manual configuration or SVG generation.
