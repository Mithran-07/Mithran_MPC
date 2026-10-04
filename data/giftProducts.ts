// This file is auto-generated from the PDF catalogue extraction.
// Source: Mithran_Photo_Clickz_Final_Customized_Gifts_Catalogue(1).pdf

export interface GiftVariant {
  id?: string;
  name?: string;
  price?: number;
  size?: string;
  color?: string;
  sku?: string;
  [key: string]: unknown;
}

export interface GiftCustomization {
  enabled: boolean;
  type?: string;
  maxPhotos?: number;
  acceptedFormats?: string[];
  maxFileSize?: number;
  required?: boolean;
  [key: string]: unknown;
}

export interface GiftProduct {
  id?: string;
  slug?: string;
  name: string;
  category: string;
  description?: string;
  price?: number;
  basePrice?: number;
  variants?: GiftVariant[];
  sizes?: string[];
  colors?: string[];
  images?: string[];
  customization?: GiftCustomization;
  printArea?: unknown;
  mask?: string;
  mockup?: string;
  stockStatus?: string;
  active?: boolean;
  sourcePage?: number;
  [key: string]: unknown;
}

export const giftProducts: GiftProduct[] = [
  {
    "name": "WHITE CERAMIC Coffee Mugs 325 ml",
    "price": 220,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "325 ml"
    ],
    "colors": [
      "White"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Standard white ceramic coffee mug 325 ml with custom photo print. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 3
  },
  {
    "name": "COLOUR CERAMIC Coffee Mugs 325 ml",
    "price": 300,
    "category": "Mug Prints",
    "variants": [
      {
        "name": "Red",
        "price": 300
      },
      {
        "name": "Light Blue",
        "price": 300
      },
      {
        "name": "Yellow",
        "price": 300
      },
      {
        "name": "Brown",
        "price": 300
      },
      {
        "name": "Pink",
        "price": 300
      },
      {
        "name": "Orange",
        "price": 300
      },
      {
        "name": "Dark Blue",
        "price": 300
      },
      {
        "name": "Dark Green",
        "price": 300
      },
      {
        "name": "Apple Green",
        "price": 300
      },
      {
        "name": "Black",
        "price": 300
      }
    ],
    "sizes": [
      "325 ml"
    ],
    "colors": [
      "Red",
      "Light Blue",
      "Yellow",
      "Brown",
      "Pink",
      "Orange",
      "Dark Blue",
      "Dark Green",
      "Apple Green",
      "Black"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Dual tone ceramic coffee mugs 325 ml with colored interior and handle. Available in 10 colors. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 3
  },
  {
    "name": "WHITE CERAMIC Tea Cup 180 ml",
    "price": 280,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "180 ml"
    ],
    "colors": [
      "White"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Small white ceramic tea cup 180 ml with custom photo/logo print. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 3
  },
  {
    "name": "YELLOW CERAMIC Tea Cup 180 ml",
    "price": 320,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "180 ml"
    ],
    "colors": [
      "Yellow"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Small ceramic tea cup 180 ml with yellow interior and handle.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 3
  },
  {
    "name": "Blue BIG Mugs 450 ml",
    "price": 320,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "450 ml"
    ],
    "colors": [
      "Blue"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Large capacity ceramic mug 450 ml with blue rim, interior, and handle.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980",
    "sourcePage": 4
  },
  {
    "name": "Black PATCH MUG 325 ml",
    "price": 460,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "325 ml"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Glossy black ceramic mug with white printable patch area 325 ml.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 4
  },
  {
    "name": "HEART HANDLE RED MUG",
    "price": 400,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "325 ml"
    ],
    "colors": [
      "Red"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Ceramic coffee mug with red inner and red heart-shaped handle.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 4
  },
  {
    "name": "HEART HANDLE WHITE MUG",
    "price": 360,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "325 ml"
    ],
    "colors": [
      "White"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Ceramic white coffee mug with heart-shaped handle.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 4
  },
  {
    "name": "HEART SHAPE WHITE MUG",
    "price": 440,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "325 ml"
    ],
    "colors": [
      "White"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "White ceramic mug with heart-shaped rim/body indent and heart handle.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 4
  },
  {
    "name": "NORMAL HANDLE MAGIC MUG",
    "price": 440,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "325 ml"
    ],
    "colors": [
      "Black (reveals print when hot)"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Thermosensitive ceramic magic mug with standard handle; appears black cold and reveals photo when hot liquid is poured. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 4
  },
  {
    "name": "HEART HANDLE MAGIC MUG",
    "price": 480,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "325 ml"
    ],
    "colors": [
      "Black (reveals print when hot)"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Thermosensitive ceramic magic mug with heart-shaped handle; heat reactive.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 4
  },
  {
    "name": "HEART SHAPE MAGIC MUG",
    "price": 500,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "325 ml"
    ],
    "colors": [
      "Black (reveals print when hot)"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Thermosensitive ceramic magic mug with heart shape indentation body and heart handle; heat reactive.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 4
  },
  {
    "name": "FLOWERVASE MUG",
    "price": 300,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "Standard mug size"
    ],
    "colors": [
      "White with green rim"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 8,
    "modelNumber": null,
    "description": "Customized photo print mug designed as a flower vase with artificial flowers included.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980",
    "sourcePage": 5
  },
  {
    "name": "CORAL MUG",
    "price": 280,
    "category": "Mug Prints",
    "variants": [],
    "sizes": [
      "Standard mug size"
    ],
    "colors": [
      "White"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "White tapered ceramic coral coffee mug.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 5
  },
  {
    "name": "CHOCOLATE GIFT BOX - 5x5 inches",
    "price": 1400,
    "category": "Gift Box",
    "variants": [],
    "sizes": [
      "5x5 inches"
    ],
    "colors": [
      "Black and Red with Pink Ribbon"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 4,
    "modelNumber": null,
    "description": "Exploding chocolate gift box measuring 5x5 inches featuring personalized photos and Dairy Milk chocolates. Video demo and mask file QR codes included.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9150",
    "sourcePage": 5
  },
  {
    "name": "PRESS and LOCK - BRACELETS - UNIVERSAL SIZE",
    "price": 500,
    "category": "Metal Engraved Products",
    "variants": [
      {
        "name": "Silver",
        "price": 500
      },
      {
        "name": "Gold",
        "price": 500
      }
    ],
    "sizes": [
      "Universal Size"
    ],
    "colors": [
      "Silver",
      "Gold"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Custom name engraved press and lock metal bracelets in universal size. Available in Silver and Gold finish.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 6
  },
  {
    "name": "SS BRACELETS",
    "price": 300,
    "category": "Metal Engraved Products",
    "variants": [
      {
        "name": "Size 2.08",
        "price": 300
      },
      {
        "name": "Size 2.10",
        "price": 300
      },
      {
        "name": "Size 2.12",
        "price": 300
      },
      {
        "name": "Size 2.14",
        "price": 300
      },
      {
        "name": "Size 2.16",
        "price": 300
      }
    ],
    "sizes": [
      "2.08",
      "2.10",
      "2.12",
      "2.14",
      "2.16"
    ],
    "colors": [
      "Silver"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Stainless steel kada/bracelets with custom name engraving. Available in sizes 2.08, 2.10, 2.12, 2.14, 2.16.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 6
  },
  {
    "name": "SS TIFFIN BOX 5.5x4.25 inches",
    "price": 500,
    "category": "Metal Engraved Products",
    "variants": [],
    "sizes": [
      "5.5x4.25 inches"
    ],
    "colors": [
      "Silver"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Stainless steel tiffin lunch box with engraved photo and text on the lid.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 6
  },
  {
    "name": "SS PLATE 7x7 inches",
    "price": 400,
    "category": "Metal Engraved Products",
    "variants": [],
    "sizes": [
      "7x7 inches"
    ],
    "colors": [
      "Silver"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Stainless steel circular commemorative plate with engraved photo. Includes display stand.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 6
  },
  {
    "name": "SUBLIMATION PRINT ON BOTTLE 750 ml",
    "price": 640,
    "category": "Water Bottles",
    "variants": [],
    "sizes": [
      "750 ml"
    ],
    "colors": [
      "White"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Sublimation full-color photo printed bottle 750 ml with carabiner clip lid. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980",
    "sourcePage": 6
  },
  {
    "name": "BAMBOO 500 ml SS WATER BOTTLE",
    "price": 780,
    "category": "Water Bottles",
    "variants": [],
    "sizes": [
      "500 ml"
    ],
    "colors": [
      "Bamboo / Wood & Silver"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Bamboo outer finish stainless steel water bottle 500 ml with laser name engraving.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980; Engraving size 1.5 x 10 cm",
    "sourcePage": 6
  },
  {
    "name": "SMART BOTTLE",
    "price": 480,
    "category": "Water Bottles",
    "variants": [],
    "sizes": [
      "750 ml"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Smart LED temperature display stainless steel flask bottle with custom name engraving.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980; Engraving size 1.5 x 10 cm",
    "sourcePage": 6
  },
  {
    "name": "SS RED BOTTLE",
    "price": 460,
    "category": "Water Bottles",
    "variants": [],
    "sizes": [
      "750 ml"
    ],
    "colors": [
      "Red"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Stainless steel cola shape red bottle 750 ml with custom name engraving.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980; Engraving size 1.5 x 10 cm",
    "sourcePage": 6
  },
  {
    "name": "SPORTS BOTTLE BLACK",
    "price": 580,
    "category": "Water Bottles",
    "variants": [],
    "sizes": [
      "750 ml"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Stainless steel sports water bottle black with sipper lid handle and custom name engraving.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980; Engraving size 1.5 x 10 cm",
    "sourcePage": 6
  },
  {
    "name": "STAINLESS STEEL 1000 ml WATER BOTTLE",
    "price": 490,
    "category": "Water Bottles",
    "variants": [],
    "sizes": [
      "1000 ml"
    ],
    "colors": [
      "Silver"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Stainless steel 1000 ml silver water bottle with carry strap and custom name engraving.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980; 1000 ml -SS- SILVER",
    "sourcePage": 6
  },
  {
    "name": "FUR PILLOW SQUARE",
    "price": 600,
    "category": "Pillow Prints",
    "variants": [
      {
        "name": "RED SQUARE PILLOW (P3 - FSQR-RED)",
        "price": 600
      },
      {
        "name": "RAINBOW SQUARE PILLOW (P71 - RBSQ)",
        "price": 600
      },
      {
        "name": "WHITE SQUARE PILLOW (P4 - FSQW)",
        "price": 600
      }
    ],
    "sizes": [
      "15x15 inches (H15 x W15)"
    ],
    "colors": [
      "Red",
      "Rainbow",
      "White"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P3 - FSQR-RED / P71 - RBSQ / P4 - FSQW",
    "description": "Square fur pillow 15x15 inches with custom photo sublimation print. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 7
  },
  {
    "name": "FUR PILLOW HEART",
    "price": 560,
    "category": "Pillow Prints",
    "variants": [
      {
        "name": "RED (P5 - FHR - RED)",
        "price": 560
      },
      {
        "name": "RAINBOW (P72 - RBH - RAINBOW)",
        "price": 560
      },
      {
        "name": "WHITE (P8 - FHW - WHITE)",
        "price": 560
      },
      {
        "name": "PINK (P6 - FHP - PINK)",
        "price": 560
      },
      {
        "name": "YELLOW (P7 - FHY - YELLOW)",
        "price": 560
      },
      {
        "name": "BLUE (P9 - FHBL - BLUE)",
        "price": 560
      }
    ],
    "sizes": [
      "15x15 inches (H15 x W15)"
    ],
    "colors": [
      "Red",
      "Rainbow",
      "White",
      "Pink",
      "Yellow",
      "Blue"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P5-FHR / P72-RBH / P8-FHW / P6-FHP / P7-FHY / P9-FHBL",
    "description": "Heart shape fur pillow 15x15 inches with heart photo sublimation print. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 7
  },
  {
    "name": "CUTE FUR PILLOW (Heart 8x8)",
    "price": 300,
    "category": "Pillow Prints",
    "variants": [
      {
        "name": "RED (P10-CUTE FUR RED)",
        "price": 300
      },
      {
        "name": "BLUE (P13-CUTE FUR BLUE)",
        "price": 300
      },
      {
        "name": "PINK (P11-CUTE FUR PINK)",
        "price": 300
      },
      {
        "name": "YELLOW (P12- CUTE FUR YELLOW)",
        "price": 300
      },
      {
        "name": "WHITE (P-14-CUTE FUR WHITE)",
        "price": 300
      }
    ],
    "sizes": [
      "8x8 inches (H8 x W8)"
    ],
    "colors": [
      "Red",
      "Blue",
      "Pink",
      "Yellow",
      "White"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P10 / P13 / P11 / P12 / P-14",
    "description": "Mini cute heart-shaped fur pillow 8x8 inches with hanging loop and photo print. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 8
  },
  {
    "name": "P-19 - ROSE PETAL",
    "price": 760,
    "category": "Pillow Prints",
    "variants": [],
    "sizes": [
      "Standard pillow size"
    ],
    "colors": [
      "Red"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P-19",
    "description": "Heart shaped pillow decorated with full rose petal fabric texture around the photo frame. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 8
  },
  {
    "name": "COUPLE PILLOW",
    "price": 960,
    "category": "Pillow Prints",
    "variants": [],
    "sizes": [
      "Double heart width"
    ],
    "colors": [
      "Red"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "Twin connected heart shaped velvet embossed couple pillow with 2 separate photo slots. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9120",
    "sourcePage": 8
  },
  {
    "name": "VELVET HEART PILLOW",
    "price": 680,
    "category": "Pillow Prints",
    "variants": [],
    "sizes": [
      "Standard heart pillow size"
    ],
    "colors": [
      "Red"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Embossed red velvet heart pillow with center photo print. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 8
  },
  {
    "name": "RECTANGLE MEGENTA",
    "price": 700,
    "category": "Pillow Prints",
    "variants": [],
    "sizes": [
      "Rectangular cushion size"
    ],
    "colors": [
      "Magenta"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Magenta rectangular velvet/fabric pillow with centered photo print. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Spelled RECTANGLE MEGENTA in catalogue. Courier extra \u20b9100",
    "sourcePage": 8
  },
  {
    "name": "SATIN HEART",
    "price": 600,
    "category": "Pillow Prints",
    "variants": [],
    "sizes": [
      "Standard heart size"
    ],
    "colors": [
      "White with red frill/ruffle"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Heart shaped satin pillow with red pleated ruffle border. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980",
    "sourcePage": 9
  },
  {
    "name": "SATIN SQUARE",
    "price": 600,
    "category": "Pillow Prints",
    "variants": [],
    "sizes": [
      "Standard square size"
    ],
    "colors": [
      "White with red frill/ruffle"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Square shaped satin pillow with red pleated ruffle border. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980",
    "sourcePage": 9
  },
  {
    "name": "PHOTO ALBUM PILLOW - HAPPY BIRTHDAY",
    "price": 1600,
    "category": "Pillow Prints",
    "variants": [],
    "sizes": [
      "Album cushion size"
    ],
    "colors": [
      "Yellow theme / multicolor"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 6,
    "modelNumber": null,
    "description": "Book/album style foldable cushion with Happy Birthday theme and flappable cloth pages holding multiple photos. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9120",
    "sourcePage": 9
  },
  {
    "name": "PHOTO ALBUM PILLOW - WEDDING PILLOW",
    "price": 1600,
    "category": "Pillow Prints",
    "variants": [],
    "sizes": [
      "Album cushion size"
    ],
    "colors": [
      "Red / Wedding theme"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 6,
    "modelNumber": null,
    "description": "Book/album style foldable wedding/anniversary pillow ('Life's Album', 'A Lifetime of Love') with multiple photo pages and dates. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9120",
    "sourcePage": 9
  },
  {
    "name": "TEDDY BEAR -14 inches",
    "price": 1100,
    "category": "Teddy Bear Pillow Prints",
    "variants": [
      {
        "name": "RED (P56 - TBRD)",
        "price": 1100
      },
      {
        "name": "PINK (P58 - TBPK)",
        "price": 1100
      },
      {
        "name": "BLUE (P59 - TBBL)",
        "price": 1100
      },
      {
        "name": "YELLOW (P57 - TBYL)",
        "price": 1100
      }
    ],
    "sizes": [
      "14 inches"
    ],
    "colors": [
      "Red",
      "Pink",
      "Blue",
      "Yellow"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P56-TBRD / P58-TBPK / P59-TBBL / P57-TBYL",
    "description": "14-inch plush teddy bear holding a heart pillow with custom photo print. All mask file QR available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9120",
    "sourcePage": 10
  },
  {
    "name": "TEDDY BEAR -24 inches",
    "price": 2200,
    "category": "Teddy Bear Pillow Prints",
    "variants": [
      {
        "name": "RED (P55 - BTBRD RED)",
        "price": 2200
      },
      {
        "name": "PINK (P55 - BTBPK PINK)",
        "price": 2200
      }
    ],
    "sizes": [
      "24 inches"
    ],
    "colors": [
      "Red",
      "Pink"
    ],
    "additionalCharges": {
      "courier": 350,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P55 - BTBRD / P55 - BTBPK",
    "description": "Large 24-inch plush teddy bear holding a big heart pillow with custom photo print. Mask file QR available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9350",
    "sourcePage": 10
  },
  {
    "name": "PINK - PANDA PILLOW",
    "price": 800,
    "category": "Pillows for Kids",
    "variants": [],
    "sizes": [
      "Standard kid pillow size"
    ],
    "colors": [
      "Pink"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P23 - PP",
    "description": "Plush kids panda pillow in pink. Front view has panda face, back view has custom photo slot.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 10
  },
  {
    "name": "BLUE - PANDA PILLOW",
    "price": 800,
    "category": "Pillows for Kids",
    "variants": [],
    "sizes": [
      "Standard kid pillow size"
    ],
    "colors": [
      "Blue"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P25 - PBL",
    "description": "Plush kids panda pillow in blue. Front view has panda face, back view has custom photo slot.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 10
  },
  {
    "name": "SPIDER MAN PILLOW",
    "price": 800,
    "category": "Pillows for Kids",
    "variants": [],
    "sizes": [
      "Standard kid pillow size"
    ],
    "colors": [
      "Red / Black"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P20 - SM",
    "description": "Spider-Man themed kids cushion. Front view features Spider-Man mask, back view has photo slot.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 10
  },
  {
    "name": "MICKEY MOUSE PILLOW",
    "price": 800,
    "category": "Pillows for Kids",
    "variants": [],
    "sizes": [
      "Standard kid pillow size"
    ],
    "colors": [
      "Black / Multicolor"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "P22 - MM",
    "description": "Mickey Mouse shaped plush cushion for kids. Front view features Mickey Mouse face, back view has photo slot.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 10
  },
  {
    "name": "Satin FARMAN 12 X 8",
    "price": 300,
    "category": "Farman",
    "variants": [],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [
      "White / Multicolor"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Satin scroll wall hanging 12x8 inches with hanging rod and cord.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 11
  },
  {
    "name": "FAR 12X8 - VER",
    "price": 500,
    "category": "Farman",
    "variants": [],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [
      "Red & Gold border"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "FAR 12X8 - VER",
    "description": "Vertical scroll wall hanging 12x8 inches with ornate golden fringe and red velvet border. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 11
  },
  {
    "name": "FAR 12X8 - HOR",
    "price": 500,
    "category": "Farman",
    "variants": [],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [
      "Red & Gold border"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "FAR 12X8 - HOR",
    "description": "Horizontal scroll wall hanging 12x8 inches with ornate golden fringe and red velvet border.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 11
  },
  {
    "name": "FARMAN 12 X 18 inches - Vertical",
    "price": 900,
    "category": "Farman",
    "variants": [],
    "sizes": [
      "12x18 inches"
    ],
    "colors": [
      "Red & Gold border"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "FAR 12X18 - VER",
    "description": "Vertical scroll wall hanging 12x18 inches with ornate royal border and golden tassels. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980",
    "sourcePage": 11
  },
  {
    "name": "FARMAN 18 X 12 inches - Horizontal",
    "price": 900,
    "category": "Farman",
    "variants": [],
    "sizes": [
      "18x12 inches"
    ],
    "colors": [
      "Red & Gold border"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "FAR 18X12 - HOR",
    "description": "Horizontal scroll wall hanging 18x12 inches with ornate royal border and golden tassels. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980",
    "sourcePage": 11
  },
  {
    "name": "FARMAN 15 X 20 inches - Vertical",
    "price": 1500,
    "category": "Farman",
    "variants": [],
    "sizes": [
      "15x20 inches"
    ],
    "colors": [
      "White satin with gold rod and tassels"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "FAR 15 X 20 - VER",
    "description": "Large vertical royal scroll hanging 15x20 inches with metallic gold finial rod, hanging chain, and golden fringe. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9150",
    "sourcePage": 11
  },
  {
    "name": "FARMAN 15 X 20 inches - Horizontal",
    "price": 1500,
    "category": "Farman",
    "variants": [],
    "sizes": [
      "20x15 inches (15 x 20 HOR)"
    ],
    "colors": [
      "White satin with gold rod and tassels"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "FAR 15 X 20 - HOR",
    "description": "Large horizontal royal scroll hanging 15x20 inches with metallic gold finial rod, hanging chain, and golden fringe. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9150",
    "sourcePage": 11
  },
  {
    "name": "FARMAN 20X30 inches - Horizontal",
    "price": 3200,
    "category": "Farman",
    "variants": [],
    "sizes": [
      "20x30 inches"
    ],
    "colors": [
      "White satin with gold rod and tassels"
    ],
    "additionalCharges": {
      "courier": 250,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Extra large horizontal royal scroll wall hanging 20x30 inches (similar design to 15x20).",
    "needsVerification": false,
    "notes": "Courier extra \u20b9250",
    "sourcePage": 11
  },
  {
    "name": "FARMAN 20X30 inches - Vertical",
    "price": 3200,
    "category": "Farman",
    "variants": [],
    "sizes": [
      "20x30 inches"
    ],
    "colors": [
      "White satin with gold rod and tassels"
    ],
    "additionalCharges": {
      "courier": 250,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Extra large vertical royal scroll wall hanging 20x30 inches (similar design to 15x20).",
    "needsVerification": false,
    "notes": "Courier extra \u20b9250",
    "sourcePage": 11
  },
  {
    "name": "PRINTED FARMAN - SATIN CLOTH 10x20 inches",
    "price": 360,
    "category": "Printed Farman",
    "variants": [
      {
        "name": "PEACH FLOWERS (FAR - 2)",
        "price": 360
      },
      {
        "name": "PINK BUTTERFLY (FAR - 3)",
        "price": 360
      },
      {
        "name": "SANDAL COLOUR (FAR - 4)",
        "price": 360
      },
      {
        "name": "BLUE HBD (FAR - 5)",
        "price": 360
      },
      {
        "name": "GREEN FLOWERS (FAR - 6)",
        "price": 360
      },
      {
        "name": "YELLOW HBD (FAR - 7)",
        "price": 360
      },
      {
        "name": "GREEN HBD (FAR - 8)",
        "price": 360
      },
      {
        "name": "HAPPY FAMILY (FAR - 9)",
        "price": 360
      },
      {
        "name": "IVORY INVITATION (FAR - 10)",
        "price": 360
      }
    ],
    "sizes": [
      "10x20 inches"
    ],
    "colors": [
      "Peach",
      "Pink",
      "Sandal",
      "Blue",
      "Green",
      "Yellow",
      "Ivory"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "FAR-2 to FAR-10",
    "description": "Printed satin cloth scroll hangings 10x20 inches with hanging rods. Available in 9 design themes (Peach Flowers, Pink Butterfly, Sandal Colour, Blue HBD, Green Flowers, Yellow HBD, Green HBD, Happy Family, Ivory Invitation). Each model has individual QR code.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960; All variants \u20b9360 each",
    "sourcePage": 12
  },
  {
    "name": "ZIPPER POUCH - Velvet cloth",
    "price": 280,
    "category": "Zipper Pouch & Sash",
    "variants": [
      {
        "name": "ZP-RD ZIPPER POUCH - RED",
        "price": 280
      },
      {
        "name": "ZP-BL ZIPPER POUCH - BLUE",
        "price": 280
      },
      {
        "name": "ZP-MA ZIPPER POUCH - MAGENTA",
        "price": 280
      },
      {
        "name": "ZP-YE ZIPPER POUCH - YELLOW",
        "price": 280
      },
      {
        "name": "ZP-OR ZIPPER POUCH - ORANGE",
        "price": 280
      }
    ],
    "sizes": [
      "Standard pencil pouch size"
    ],
    "colors": [
      "Red",
      "Blue",
      "Magenta",
      "Yellow",
      "Orange"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "ZP-RD / ZP-BL / ZP-MA / ZP-YE / ZP-OR",
    "description": "Velvet cloth zipper pouches with personalized photo and name print. Available with 5 zipper/border colors. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 13
  },
  {
    "name": "SASH-PRINT - 2.5 inches width, 2 Meters length",
    "price": 300,
    "category": "Zipper Pouch & Sash",
    "variants": [
      {
        "name": "SASH - WHITE",
        "price": 300
      },
      {
        "name": "SASH - PINK",
        "price": 300
      },
      {
        "name": "SASH - GOLD",
        "price": 300
      }
    ],
    "sizes": [
      "2.5 inches width, 2 Meters length"
    ],
    "colors": [
      "White",
      "Pink",
      "Gold"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Custom printed celebration sashes for birthdays, pageants, and occasions. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 13
  },
  {
    "name": "VHS to PENDRIVE",
    "price": 980,
    "category": "Video Conversion Services",
    "variants": [],
    "sizes": [
      "Per Hour duration"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Video tape (VHS/video cassette) conversion to digital format on USB pendrive. Charged per hour.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100; *PENDRIVE COST EXTRA; Rate is \u20b9980 PER HOUR",
    "sourcePage": 13
  },
  {
    "name": "SUBLIMATION PRINTABLE T-SHIRTS",
    "price": 440,
    "category": "T - Shirt Printing",
    "variants": [],
    "sizes": [
      "18",
      "20",
      "22",
      "24",
      "26",
      "28",
      "30",
      "32",
      "34",
      "36",
      "38",
      "40",
      "42",
      "44"
    ],
    "colors": [
      "White"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "White round neck Serena material t-shirt (soft, smooth, comfortable) with A4 single side sublimation print (21 x 29.7 cm). Vibrant colors, won't crack or peel.",
    "needsVerification": false,
    "notes": "Courier charges \u20b960/- extra. Sizes range from kids 18 up to adult 44.",
    "sourcePage": 14
  },
  {
    "name": "CUSTOM DTF PRINTABLE COTTON ROUND NECK - BLACK T-SHIRTS",
    "price": 600,
    "category": "T - Shirt Printing",
    "variants": [],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "100% Cotton soft, breathable & comfortable premium quality black round neck t-shirt with single side custom DTF printing. Bright & long lasting colors.",
    "needsVerification": false,
    "notes": "Courier charges \u20b960/- extra. Starting from S size up to XXL.",
    "sourcePage": 14
  },
  {
    "name": "DTF Print on collar T. Shirts",
    "price": 680,
    "category": "T - Shirt Printing",
    "variants": [],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Parrot Green",
      "Red",
      "Orange",
      "Sky Blue",
      "Maroon",
      "Heather Grey",
      "Royal Blue",
      "Yellow",
      "Gold Yellow",
      "Black",
      "Charcoal Grey",
      "Bottle Green",
      "White",
      "Dark Red"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "180 GSM breathable fabric collar polo t-shirts with front logo print (3x3 inch) and back print (10x8 inch). Available in 14 attractive colors.",
    "needsVerification": false,
    "notes": "Courier charges \u20b960/- extra. Available sizes: S, M, L, XL, XXL.",
    "sourcePage": 14
  },
  {
    "name": "PHOTO PRINT ON CERAMIC TILE 4X4 inches",
    "price": 400,
    "category": "Tile Print",
    "variants": [],
    "sizes": [
      "4x4 inches"
    ],
    "colors": [
      "White ceramic tile base with full color print"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Square ceramic tile 4x4 inches with high gloss sublimation photo print. Includes tabletop plastic display stand. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 15
  },
  {
    "name": "PHOTO PRINT ON CERAMIC TILE 6X6 inches",
    "price": 500,
    "category": "Tile Print",
    "variants": [],
    "sizes": [
      "6x6 inches"
    ],
    "colors": [
      "White ceramic tile base with full color print"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Square ceramic tile 6x6 inches with high gloss sublimation photo print. Includes tabletop display stand. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 15
  },
  {
    "name": "PHOTO PRINT ON CERAMIC TILE 8X8 inches",
    "price": 700,
    "category": "Tile Print",
    "variants": [],
    "sizes": [
      "8x8 inches"
    ],
    "colors": [
      "White ceramic tile base with full color print"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Square ceramic tile 8x8 inches with high gloss sublimation photo print. Includes tabletop display stand. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b960",
    "sourcePage": 15
  },
  {
    "name": "PHOTO PRINT ON CERAMIC TILE 6X8 inches",
    "price": 640,
    "category": "Tile Print",
    "variants": [],
    "sizes": [
      "6x8 inches"
    ],
    "colors": [
      "White ceramic tile base with full color print"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Horizontal/landscape ceramic tile 6x8 inches with high gloss sublimation photo print. Includes tabletop stand. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b980",
    "sourcePage": 15
  },
  {
    "name": "PHOTO PRINT ON CERAMIC TILE 10X8 inches",
    "price": 800,
    "category": "Tile Print",
    "variants": [],
    "sizes": [
      "10x8 inches"
    ],
    "colors": [
      "White ceramic tile base with full color print"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Large landscape ceramic tile 10x8 inches with high gloss sublimation photo print. Includes tabletop stand. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 15
  },
  {
    "name": "PHOTO PRINT ON CERAMIC TILE 12X8 inches",
    "price": 980,
    "category": "Tile Print",
    "variants": [],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [
      "White ceramic tile base with full color print"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Large portrait ceramic tile 12x8 inches with high gloss sublimation photo print. Includes tabletop stand. Mask file QR code available.",
    "needsVerification": false,
    "notes": "Courier extra \u20b9100",
    "sourcePage": 15
  },
  {
    "name": "STONE 6X8 inches",
    "price": 900,
    "category": "Photo Stones",
    "variants": [],
    "sizes": [
      "6x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "SH-03",
    "description": "Sublimation natural rock stone photo print with black display stands",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-14. Model SH-03. Courier 80/- extra.",
    "sourcePage": 16
  },
  {
    "name": "HEART STONE 7.5X7.5 inches",
    "price": 980,
    "category": "Photo Stones",
    "variants": [],
    "sizes": [
      "7.5x7.5 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "SH-HRT",
    "description": "Heart-shaped sublimation rock stone photo print with black display stands",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-14. Model SH-HRT. Courier 100/- extra.",
    "sourcePage": 16
  },
  {
    "name": "CLASSIC ROCK 8X8 inches",
    "price": 960,
    "category": "Photo Stones",
    "variants": [],
    "sizes": [
      "8x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "SH-08",
    "description": "Classic cut natural rock stone photo print with black display stands",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-14. Model SH-08. Courier 100/- extra.",
    "sourcePage": 16
  },
  {
    "name": "ARCH STONE 8X8 inches",
    "price": 990,
    "category": "Photo Stones",
    "variants": [],
    "sizes": [
      "8x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "SH-02",
    "description": "Arch-shaped natural rock stone photo print with black display stands",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-14. Model SH-02. Courier 100/- extra.",
    "sourcePage": 16
  },
  {
    "name": "SQUARE STONE 8X8 inches",
    "price": 970,
    "category": "Photo Stones",
    "variants": [],
    "sizes": [
      "8x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "SH-25",
    "description": "Square natural rock stone photo print with black display stands",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-14. Model SH-25. Courier 100/- extra.",
    "sourcePage": 16
  },
  {
    "name": "STONE ON WOOD",
    "price": 1200,
    "category": "Photo Stones",
    "variants": [],
    "sizes": [
      "Product size 9.5x7 inches, print size 5x3.5 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "SH-38",
    "description": "Natural rock stone photo print mounted on rustic wooden plaque with stand",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-14. Model SH-38. Courier 100/- extra.",
    "sourcePage": 16
  },
  {
    "name": "STONE 12X8 inches",
    "price": 1600,
    "category": "Photo Stones",
    "variants": [],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "SH-04",
    "description": "Large rectangular natural rock stone photo print with black display stands",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-14. Model SH-04 (shown as SH -04). Courier 150/- extra.",
    "sourcePage": 16
  },
  {
    "name": "EMBOSSING 3D FRAME",
    "price": 600,
    "category": "Frames",
    "variants": [
      {
        "name": "EF1 - HEART",
        "price": 600
      },
      {
        "name": "EF2 - SQUARE",
        "price": 600
      },
      {
        "name": "EF3 - CIRCLE",
        "price": 600
      },
      {
        "name": "EF4 - RECTANGLE",
        "price": 600
      }
    ],
    "sizes": [
      "W 22 x H 14.5 cm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "EF1, EF2, EF3, EF4",
    "description": "Polymer material embossing 3D frame, size W 22 x H 14.5 cm, weight 265 gm. Available in 4 shape masks: Heart, Square, Circle, Rectangle.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-15. Polymer material, weight 265gm. Courier 80/- extra. Mask files available via QR code.",
    "sourcePage": 17
  },
  {
    "name": "6x8 cm RECTANGLE COLOUR CRYSTAL",
    "price": 800,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "6x8 cm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CC-6x8cm-REC",
    "description": "Sublimation color crystal rectangular block",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-16. Courier 60/- extra.",
    "sourcePage": 18
  },
  {
    "name": "6x8 cm SEMI RECTANGLE CORNER CUT",
    "price": 900,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "6x8 cm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CC-6x8cm-Semi REC",
    "description": "Sublimation semi rectangle color crystal with faceted corner cut",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-16. Courier 60/- extra.",
    "sourcePage": 18
  },
  {
    "name": "4X4 INCH ROUND CRYSTAL",
    "price": 1300,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "4x4 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CC-4X4 INCH - ROUND",
    "description": "Sublimation round color crystal with faceted bevelled edge on crystal pedestal base",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-16. Courier 80/- extra.",
    "sourcePage": 18
  },
  {
    "name": "HEART COLOUR CRYSTAL",
    "price": 1400,
    "category": "Crystals",
    "variants": [],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CC-HEART",
    "description": "Heart-shaped sublimation color crystal with faceted bevelled edge on crystal pedestal base",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-16. Courier 80/- extra.",
    "sourcePage": 18
  },
  {
    "name": "CUBE CLOCK 3.3 inches",
    "price": 600,
    "category": "Clocks",
    "variants": [],
    "sizes": [
      "3.3 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 3,
    "modelNumber": "CUBE CLOCK",
    "description": "Glowing 7-color LED digital alarm cube clock displaying time, date, day, temperature, with custom photo prints on sides",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-16. Courier 60/- extra. Multiple photo prints on cube faces.",
    "sourcePage": 18
  },
  {
    "name": "DIGITAL CLOCK PEN STAND 8x10.6 cm",
    "price": 800,
    "category": "Pen Stands",
    "variants": [],
    "sizes": [
      "8x10.6 cm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "DIGITAL CLOCK PEN STAND",
    "description": "Desk pen stand with digital clock showing time, date, day, temperature and custom text on front, with full color photo print on back",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-16. Courier 60/- extra. Front has digital clock & text customization, back has photo print.",
    "sourcePage": 18
  },
  {
    "name": "DOCTOR COAT PEN STAND 6x4 inches",
    "price": 360,
    "category": "Pen Stands",
    "variants": [],
    "sizes": [
      "6x4 inches"
    ],
    "colors": [
      "White"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "DOCTOR COAT PEN STAND",
    "description": "Doctor coat shaped desk pen stand with custom doctor name printed on coat pocket and pen",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-16. Courier 80/- extra. Customized with doctor's name on pocket and pen.",
    "sourcePage": 18
  },
  {
    "name": "PHOTO - METAL KEY CHAINS",
    "price": 240,
    "category": "Keychains",
    "variants": [
      {
        "name": "KC-03 HEART METAL KEY (SINGLE SIDE)",
        "price": 240
      },
      {
        "name": "KC-06 HOUSE METAL KEY (DOUBLE SIDE)",
        "price": 240
      },
      {
        "name": "KC-08 ROUND METAL KEY (DOUBLE SIDE)",
        "price": 240
      },
      {
        "name": "KC-51 DIAMOND METAL KEY (DOUBLE SIDE)",
        "price": 240
      },
      {
        "name": "KC-60 SQUARE METAL KEY (DOUBLE SIDE)",
        "price": 240
      },
      {
        "name": "KC-52 RECTANGLE METAL KEY (DOUBLE SIDE)",
        "price": 240
      }
    ],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "KC-03, KC-06, KC-08, KC-51, KC-60, KC-52",
    "description": "Metal photo keychains available in Heart (rhinestones), House, Round, Diamond, Square, and Rectangle shapes. All double-sided except KC-03 which is single-sided.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-17. Courier 60/- extra. KC-03 single side; KC-06, KC-08, KC-51, KC-60, KC-52 double side.",
    "sourcePage": 19
  },
  {
    "name": "HEART BOX SS KEY CHAIN DOUBLE SIDE",
    "price": 400,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "KC-138",
    "description": "Stainless steel heart-shaped opening locket box keychain with double side photo prints inside",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-17. Model KC-138. Courier 60/- extra.",
    "sourcePage": 19
  },
  {
    "name": "SS METAL KEY CHAIN DOUBLE SIDE",
    "price": 160,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "KEY - 110",
    "description": "Stainless steel rectangle metal keychain with double side custom name/signature engraving",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-17. Model KEY - 110. Courier 60/- extra.",
    "sourcePage": 19
  },
  {
    "name": "MINI PHOTO ALBUM (20 PICS)",
    "price": 480,
    "category": "Keychains",
    "variants": [],
    "sizes": [
      "4x5 cm each photo"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 20,
    "modelNumber": "",
    "description": "Mini pocket photo album keychain holding 20 photos (4x5 cm each photo)",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-17. Holds 20 individual photos. Courier 60/- extra.",
    "sourcePage": 19
  },
  {
    "name": "BLACK ACRYLIC KEYCHAIN DOUBLE SIDE",
    "price": 300,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "KEY - 114",
    "description": "Heart-shaped black acrylic keychain with double side photo laser engraving",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-17. Model KEY - 114. Courier 60/- extra.",
    "sourcePage": 19
  },
  {
    "name": "LONGLASTING POLYMER KEY CHAIN",
    "price": 160,
    "category": "Keychains",
    "variants": [
      {
        "name": "KEY-26 HEART KEY DOUBLE SIDE",
        "price": 160
      },
      {
        "name": "KEY-27 DOUBLE HEART KEY DOUBLE SIDE",
        "price": 160
      },
      {
        "name": "KEY-28 RECTANGLE KEY DOUBLE SIDE",
        "price": 160
      },
      {
        "name": "KEY-31 OVAL KEY DOUBLE SIDE",
        "price": 160
      },
      {
        "name": "KEY-32 SQUARE KEY DOUBLE SIDE",
        "price": 160
      },
      {
        "name": "KEY-102 ROUND KEY DOUBLE SIDE",
        "price": 160
      },
      {
        "name": "KEY-103 HOUSE KEY DOUBLE SIDE",
        "price": 160
      },
      {
        "name": "KEY-104 LOCK HEART KEY DOUBLE SIDE",
        "price": 160
      }
    ],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "KEY-26, KEY-27, KEY-28, KEY-31, KEY-32, KEY-102, KEY-103, KEY-104",
    "description": "Durable longlasting polymer double sided photo keychains available in 8 shapes: Heart, Double Heart, Rectangle, Oval, Square, Round, House, Lock Heart",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-18. Courier 60/- extra. All variants double sided.",
    "sourcePage": 20
  },
  {
    "name": "METAL HEART DOUBLE SIDE KEYCHAIN",
    "price": 200,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "KEY -129",
    "description": "Metal heart-shaped keychain with double side photo print",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-18. Model KEY -129. Courier 60/- extra.",
    "sourcePage": 20
  },
  {
    "name": "2 LETTER HEART KEYCHAIN",
    "price": 400,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Pink with Red Heart"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Customized 3D two initials/letters with heart keychain (e.g., B \u2764\ufe0f N)",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-18. Courier 60/- extra.",
    "sourcePage": 20
  },
  {
    "name": "VISITING CARD KEY CHAIN",
    "price": 120,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Visiting card style rectangular photo keychain with custom text and greetings",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-18. Courier 60/- extra.",
    "sourcePage": 20
  },
  {
    "name": "DANGLER KEY CHAIN",
    "price": 160,
    "category": "Keychains",
    "variants": [
      {
        "name": "KEY -99 DANGLER KEY - WHITE DOUBLE SIDE",
        "price": 160
      },
      {
        "name": "KEY -100 DANGLER KEY - PINK DOUBLE SIDE",
        "price": 160
      }
    ],
    "sizes": [],
    "colors": [
      "White",
      "Pink"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "KEY -99, KEY -100",
    "description": "Dangler bell-shaped keychain with double side photo print, available in White and Pink frames",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-18. Courier 60/- extra.",
    "sourcePage": 20
  },
  {
    "name": "PLASTIC KEY DOUBLE SIDE",
    "price": 100,
    "category": "Keychains",
    "variants": [
      {
        "name": "KEY -33 PLASTIC KEY - WHITE DOUBLE SIDE",
        "price": 100
      },
      {
        "name": "KEY -35 PLASTIC KEY - RED DOUBLE SIDE",
        "price": 100
      }
    ],
    "sizes": [],
    "colors": [
      "White",
      "Red"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "KEY -33, KEY -35",
    "description": "Round plastic frame keychain with double side photo print, available in White and Red frame borders",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-18. Courier 60/- extra.",
    "sourcePage": 20
  },
  {
    "name": "LUXOR KEY CHAINS Double Sided",
    "price": 120,
    "category": "Keychains",
    "variants": [
      {
        "name": "LX - 126 LUXOR HOME BLACK",
        "price": 120
      },
      {
        "name": "LX - 129 SEMI RECTANGLE BLACK",
        "price": 120
      },
      {
        "name": "LX - 127 LUXOR LONG RECTANGLE",
        "price": 120
      },
      {
        "name": "LX - 130 LUXOR RECTANGLE BLACK",
        "price": 120
      },
      {
        "name": "LX - 114 LUXOR HEART SILVER",
        "price": 120
      },
      {
        "name": "LX - 115 LUXOR HEXAGON SILVER",
        "price": 120
      },
      {
        "name": "LX - 116 LUXOR ROUND SILVER",
        "price": 120
      },
      {
        "name": "LX - 117 LUXOR DIAMOND SILVER",
        "price": 120
      },
      {
        "name": "LX - 118 LUXOR HEART RED",
        "price": 120
      },
      {
        "name": "LX - 119 LUXOR HEXAGON RED",
        "price": 120
      },
      {
        "name": "LX - 120 LUXOR ROUND RED",
        "price": 120
      },
      {
        "name": "LX - 121 LUXOR DIAMOND RED",
        "price": 120
      },
      {
        "name": "LX - 122 LUXOR HEART BLACK",
        "price": 120
      },
      {
        "name": "LX - 123 LUXOR HEXAGON BLACK",
        "price": 120
      },
      {
        "name": "LX - 124 LUXOR ROUND BLACK",
        "price": 120
      },
      {
        "name": "LX - 125 LUXOR DIAMOND BLACK",
        "price": 120
      }
    ],
    "sizes": [],
    "colors": [
      "Black",
      "Silver",
      "Red"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "LX-114 to LX-130",
    "description": "Polymer body double sided keychains with vibrant sublimation print on metal plates. Available in Heart, Hexagon, Round, Diamond, Home, Semi Rectangle, Long Rectangle, and Rectangle shapes with Silver, Red, or Black borders.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-19. Courier 60/- extra. All 16 models are \u20b9120 each.",
    "sourcePage": 21
  },
  {
    "name": "GUN METAL KEYCHAINS",
    "price": 240,
    "category": "Keychains",
    "variants": [
      {
        "name": "131- LONG RECTANGLE-GUN METAL KEY",
        "price": 240
      },
      {
        "name": "132- LONG HEXAGON-GUN METAL KEY",
        "price": 240
      },
      {
        "name": "133- LONG SEMI RECTANGLE-GUN METAL KEY",
        "price": 240
      },
      {
        "name": "134- OVAL SHAPE - GUN METAL KEY",
        "price": 240
      }
    ],
    "sizes": [
      "Design size width 2 cm x 5 cm (131, 132, 133)",
      "Design size width 2.5 cm x 4 cm (134)"
    ],
    "colors": [
      "Gun Metal"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "131, 132, 133, 134",
    "description": "Premium gun metal keychains with custom laser engraved motivational quotes/text",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-20. Courier 60/- extra.",
    "sourcePage": 22
  },
  {
    "name": "136-BUCKLE KEY CHAIN",
    "price": 240,
    "category": "Keychains",
    "variants": [
      {
        "name": "White Strap",
        "price": 240
      },
      {
        "name": "Blue Strap",
        "price": 240
      },
      {
        "name": "Grey Strap",
        "price": 240
      },
      {
        "name": "Brown Strap",
        "price": 240
      },
      {
        "name": "Red Strap",
        "price": 240
      },
      {
        "name": "Black Strap",
        "price": 240
      }
    ],
    "sizes": [
      "Design size width 2 cm x 1.4 cm"
    ],
    "colors": [
      "White",
      "Blue",
      "Grey",
      "Brown",
      "Red",
      "Black"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "136",
    "description": "Buckle carabiner leather strap keychain with customizable metal insert plate (2 cm x 1.4 cm). Available in 6 strap colors.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-20. Courier 60/- extra.",
    "sourcePage": 22
  },
  {
    "name": "ENGRAVING GUN METAL Key Chain",
    "price": 200,
    "category": "Keychains",
    "variants": [
      {
        "name": "135- GUN METAL KEY (2.5 cm x 3.5 cm)",
        "price": 200
      },
      {
        "name": "KEY - 111- GUN METAL DUMBLE SHAPE - DOUBLE SIDE (2 cm x 3.5 cm)",
        "price": 200
      },
      {
        "name": "KEY - 130- GUN METAL RECTANGLE DOUBLE SIDE (2.5 cm x 3.5 cm)",
        "price": 200
      },
      {
        "name": "KEY - 113 GUN METAL ROUND DOUBLE SIDE (2 cm x 2 cm)",
        "price": 200
      },
      {
        "name": "136- GUN METAL KEY (2 cm x 2 cm)",
        "price": 200
      }
    ],
    "sizes": [
      "2.5 cm x 3.5 cm",
      "2 cm x 3.5 cm",
      "2 cm x 2 cm"
    ],
    "colors": [
      "Gun Metal"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "135, KEY-111, KEY-130, KEY-113, 136",
    "description": "Engraved gun metal keychains available in rectangular, dumbbell, and round shapes with custom text, names, and logos",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-20. Courier 60/- extra.",
    "sourcePage": 22
  },
  {
    "name": "SS KEY CHAINS",
    "price": 300,
    "category": "Keychains",
    "variants": [
      {
        "name": "EYE (SS Pendant / Key Chain)",
        "price": 300
      },
      {
        "name": "BULLET (Royal Enfield Cutout)",
        "price": 300
      },
      {
        "name": "BIKE (Sports Bike Cutout)",
        "price": 300
      },
      {
        "name": "DOCTOR (Caduceus Medical Emblem)",
        "price": 300
      },
      {
        "name": "ADVOCATE (Advocate Band Emblem)",
        "price": 300
      },
      {
        "name": "CA (Chartered Accountant Emblem)",
        "price": 300
      },
      {
        "name": "GOLD BISCUIT (Gold Bar)",
        "price": 300
      },
      {
        "name": "CAR FRONT (Car Silhouette)",
        "price": 300
      },
      {
        "name": "SS RECTANGLE (Tag)",
        "price": 300
      },
      {
        "name": "CAR SIDE (Car Profile Cutout)",
        "price": 300
      }
    ],
    "sizes": [],
    "colors": [
      "Silver (Stainless Steel)",
      "Gold (Gold Biscuit)"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "EYE, BULLET, BIKE, DOCTOR, ADVOCATE, CA, GOLD BISCUIT, CAR FRONT, SS RECTANGLE, CAR SIDE",
    "description": "Precision laser-cut stainless steel customized key chains featuring personalized vehicle numbers, profession emblems (Doctor, Advocate, CA), bike/car silhouettes, or custom engravings",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-21. Courier 60/- extra. All 10 models are \u20b9300 each.",
    "sourcePage": 23
  },
  {
    "name": "SUBLIMATION MDF FRIDGE MAGNET - 4 inches",
    "price": 240,
    "category": "Fridge Magnets",
    "variants": [
      {
        "name": "FM-MDF-HEXAGON (3.35 x 3.9 inches)",
        "price": 240
      },
      {
        "name": "FM-MDF-HEART (4 x 3.5 inches)",
        "price": 240
      },
      {
        "name": "FM-MDF-HOME (4 x 3.5 inches)",
        "price": 240
      },
      {
        "name": "FM-MDF-2HEARTS (5 x 3.5 inches)",
        "price": 240
      },
      {
        "name": "FM-MDF-OVAL (4 x 3 inches)",
        "price": 240
      },
      {
        "name": "FM-MDF-RECTANGLE (4 x 2.7 inches)",
        "price": 240
      },
      {
        "name": "FM-MDF-ROUND (4 x 4 inches)",
        "price": 240
      }
    ],
    "sizes": [
      "4 inches",
      "3.35 x 3.9 inches",
      "4 x 3.5 inches",
      "5 x 3.5 inches",
      "4 x 3 inches",
      "4 x 2.7 inches",
      "4 x 4 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "FM-MDF-HEXAGON, FM-MDF-HEART, FM-MDF-HOME, FM-MDF-2HEARTS, FM-MDF-OVAL, FM-MDF-RECTANGLE, FM-MDF-ROUND",
    "description": "MDF wooden fridge magnets with vibrant glossy sublimation photo print. Available in 7 custom shapes.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-22. Courier 60/- extra. FM-MDF-2HEARTS can feature 2 photos or photo+text.",
    "sourcePage": 24
  },
  {
    "name": "METAL FRIDGE MAGNET",
    "price": 220,
    "category": "Fridge Magnets",
    "variants": [
      {
        "name": "FM-ME-HEART",
        "price": 220
      },
      {
        "name": "FM-ME-OVAL",
        "price": 220
      },
      {
        "name": "FM-ME-ROUND SHAPE",
        "price": 220
      },
      {
        "name": "FM-ME-SQUARE",
        "price": 220
      },
      {
        "name": "FM-ME-RECTANGLE",
        "price": 220
      }
    ],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "FM-ME-HEART, FM-ME-OVAL, FM-ME-ROUND SHAPE, FM-ME-SQUARE, FM-ME-RECTANGLE",
    "description": "Glossy metal sublimation fridge magnets available in Heart, Oval, Round, Square, and Rectangle shapes",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-22. Courier 60/- extra. Mask files available via QR code.",
    "sourcePage": 24
  },
  {
    "name": "FLEXIBLE FRIDGE MAGNETS RECTANGLE",
    "price": 100,
    "category": "Fridge Magnets",
    "variants": [
      {
        "name": "2 X 3 inch",
        "price": 100
      },
      {
        "name": "2 X 4 inch",
        "price": 120
      },
      {
        "name": "3 X 4 inch",
        "price": 160
      },
      {
        "name": "3.5 X 5 inch",
        "price": 200
      },
      {
        "name": "4 X 6 inch",
        "price": 280
      },
      {
        "name": "6 X 8 inch",
        "price": 440
      }
    ],
    "sizes": [
      "2 X 3 inch",
      "2 X 4 inch",
      "3 X 4 inch",
      "3.5 X 5 inch",
      "4 X 6 inch",
      "6 X 8 inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Flexible magnetic sheet photo prints for refrigerators, available in 6 rectangular sizes",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-23. Courier & packing charges: 60/-.",
    "sourcePage": 25
  },
  {
    "name": "FLEXIBLE FRIDGE MAGNETS HEART",
    "price": 160,
    "category": "Fridge Magnets",
    "variants": [
      {
        "name": "3 inch",
        "price": 160
      },
      {
        "name": "4 inch",
        "price": 200
      },
      {
        "name": "5 inch",
        "price": 300
      }
    ],
    "sizes": [
      "3 inch",
      "4 inch",
      "5 inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Flexible magnetic heart-shaped photo sheet prints for refrigerators, available in 3 sizes",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-23. Courier & packing charges: 60/-.",
    "sourcePage": 25
  },
  {
    "name": "5x5cm BUTTON FRIDGE MAGNET",
    "price": 160,
    "category": "Fridge Magnets",
    "variants": [
      {
        "name": "PERSONALISED",
        "price": 160
      },
      {
        "name": "CORPORATE",
        "price": 160
      }
    ],
    "sizes": [
      "5x5 cm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Square 5x5 cm button fridge magnet with rounded corners for personalized photo or corporate branding",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-23. Courier 60/- extra.",
    "sourcePage": 25
  },
  {
    "name": "PHOTO INSERT FRIDGE MAGNET",
    "price": 300,
    "category": "Fridge Magnets",
    "variants": [
      {
        "name": "Blue Frame",
        "price": 300
      },
      {
        "name": "White Frame",
        "price": 300
      }
    ],
    "sizes": [
      "Product size 10cm x 7.4cm, print size 7cm x 5cm"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Frame style magnetic fridge photo holder with insert window. Product size 10cm x 7.4cm, photo insert size 7cm x 5cm.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-23. Courier 60/- extra. Available in Blue and White.",
    "sourcePage": 25
  },
  {
    "name": "MOUSE PAD",
    "price": 300,
    "category": "Mouse Pads",
    "variants": [],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Sublimation custom printed fabric mouse pad with anti-slip rubber backing",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-23. Courier 60/- extra.",
    "sourcePage": 25
  },
  {
    "name": "SUBLIMATION BADGE 5X5cm",
    "price": 100,
    "category": "Badges",
    "variants": [],
    "sizes": [
      "5x5 cm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Square sublimation badge (5x5 cm) with safety pin fastener on reverse",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-24. Courier 60/- extra.",
    "sourcePage": 26
  },
  {
    "name": "SUBLIMATION BADGE 7X2cm",
    "price": 100,
    "category": "Badges",
    "variants": [],
    "sizes": [
      "7x2 cm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Rectangular sublimation name badge (7x2 cm) with safety pin fastener on reverse",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-24. Courier 60/- extra.",
    "sourcePage": 26
  },
  {
    "name": "ACRYLIC BADGE 82 x 28 mm",
    "price": 200,
    "category": "Badges",
    "variants": [],
    "sizes": [
      "82 x 28 mm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Clear acrylic name badge (82 x 28 mm) with pin back fastener",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-24. Courier 60/- extra.",
    "sourcePage": 26
  },
  {
    "name": "ACRYLIC CUSTOMISED BADGE 7X2cm",
    "price": 260,
    "category": "Badges",
    "variants": [],
    "sizes": [
      "7x2 cm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Contour die-cut acrylic customized badge (7x2 cm) with magnetic back fastener",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-24. Courier 60/- extra. Features custom contour shape and magnetic backing.",
    "sourcePage": 26
  },
  {
    "name": "MAGNETIC ACRYLIC BADGE 82 x 28 mm",
    "price": 200,
    "category": "Badges",
    "variants": [],
    "sizes": [
      "82 x 28 mm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Acrylic name badge (82 x 28 mm) with dual neodymium magnetic back fastener",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-24. Courier 60/- extra.",
    "sourcePage": 26
  },
  {
    "name": "ACRYLIC GOLD & SILVER PIN BADGE",
    "price": 160,
    "category": "Badges",
    "variants": [
      {
        "name": "Gold Pin Badge",
        "price": 160
      },
      {
        "name": "Silver Pin Badge",
        "price": 160
      }
    ],
    "sizes": [],
    "colors": [
      "Gold",
      "Silver"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Metallic acrylic pin name badge available in brushed Gold and Silver finishes with pin back fastener",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-24. Courier 60/- extra.",
    "sourcePage": 26
  },
  {
    "name": "KEY CHAIN ROUND BADGE 58 mm",
    "price": 100,
    "category": "Badges",
    "variants": [],
    "sizes": [
      "58 mm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "58 mm round button badge keychain with custom photo print",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-24. Courier 60/- extra.",
    "sourcePage": 26
  },
  {
    "name": "ROUND BADGE 58 mm",
    "price": 100,
    "category": "Badges",
    "variants": [],
    "sizes": [
      "58 mm"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "58 mm round button pin badge with custom print",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-24. Courier 60/- extra.",
    "sourcePage": 26
  },
  {
    "name": "CARICATURE - 1 (SUBLIMATION)",
    "price": 600,
    "category": "Caricatures",
    "variants": [
      {
        "name": "CC-1 Ramesh Roja (Couple)",
        "price": 600
      },
      {
        "name": "CC-2 Best Couple (Scooter)",
        "price": 600
      },
      {
        "name": "CC-3 Happy Birthday (Kid)",
        "price": 600
      },
      {
        "name": "CC-7 Virat Kohli (Biker)",
        "price": 600
      },
      {
        "name": "CC-8 Cute Girl",
        "price": 600
      },
      {
        "name": "CC-15 Family Doctor",
        "price": 600
      },
      {
        "name": "CC-9 Spider Man",
        "price": 600
      },
      {
        "name": "CC-10 Lovely Couple",
        "price": 600
      },
      {
        "name": "CC-14 Famous Doctor",
        "price": 600
      },
      {
        "name": "CC-11 Best professor",
        "price": 600
      },
      {
        "name": "CC-22 Sweet Girl",
        "price": 600
      },
      {
        "name": "CC-12 Best Teacher",
        "price": 600
      },
      {
        "name": "CC-23 Techie Guy",
        "price": 600
      },
      {
        "name": "CC-24 Techie",
        "price": 600
      },
      {
        "name": "CC-25 King & Queen",
        "price": 600
      }
    ],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CC-1, CC-2, CC-3, CC-7, CC-8, CC-15, CC-9, CC-10, CC-14, CC-11, CC-22, CC-12, CC-23, CC-24, CC-25",
    "description": "Sublimation personalized caricature cutouts on wooden base stand. Series 1 contains 15 popular themes: Birthday, Superhero, Doctors, Teachers/Professors, Techies, and Wedding/Love Couples.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-25. Courier 80/- extra. Single caricatures take 1 photo slot; couple caricatures (CC-1, CC-2, CC-10, CC-25) take 2 photo slots. All mask files available via QR code.",
    "sourcePage": 27
  },
  {
    "name": "CARICATURE - 2 (SUBLIMATION)",
    "price": 600,
    "category": "Caricatures",
    "variants": [
      {
        "name": "CC-26 My Colleague",
        "price": 600
      },
      {
        "name": "CC-30 Music Lover",
        "price": 600
      },
      {
        "name": "CC-36 New Couple",
        "price": 600
      },
      {
        "name": "CC-39 Bride & Groom",
        "price": 600
      },
      {
        "name": "CC-40 Cricket Lover",
        "price": 600
      },
      {
        "name": "CC-43 Happy Man",
        "price": 600
      },
      {
        "name": "CC-44 The Man",
        "price": 600
      },
      {
        "name": "CC-45 Gentleman",
        "price": 600
      },
      {
        "name": "CC-46 The Officer",
        "price": 600
      },
      {
        "name": "CC-48 Bike Lover",
        "price": 600
      },
      {
        "name": "CC-54 Wonder Girl",
        "price": 600
      },
      {
        "name": "CC-93 Happy Birthday",
        "price": 600
      },
      {
        "name": "CC-96 Traditional Couple",
        "price": 600
      },
      {
        "name": "CC-98 Cheerful Couple",
        "price": 600
      },
      {
        "name": "CC-97 CRICKETER",
        "price": 600
      }
    ],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CC-26, CC-30, CC-36, CC-39, CC-40, CC-43, CC-44, CC-45, CC-46, CC-48, CC-54, CC-93, CC-96, CC-98, CC-97",
    "description": "Sublimation personalized caricature cutouts on wooden base stand. Series 2 features 15 designs: Colleague, Music Lover, Cricketer/Cricket Lover, Gentleman, Officer, Biker, Wonder Girl, Birthday, and Couples.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-26. Courier 80/- extra. Single models have 1 photo slot; couple models (CC-36, CC-39, CC-96, CC-98) have 2 photo slots. All mask files available via QR code.",
    "sourcePage": 28
  },
  {
    "name": "CARICATURE - 3 (SUBLIMATION)",
    "price": 600,
    "category": "Caricatures",
    "variants": [
      {
        "name": "CC-55 Obedient",
        "price": 600
      },
      {
        "name": "CC-56 Charming",
        "price": 600
      },
      {
        "name": "CC-58 Dance Lover",
        "price": 600
      },
      {
        "name": "CC-60 Village Style",
        "price": 600
      },
      {
        "name": "CC-59 My Colleague",
        "price": 600
      },
      {
        "name": "CC-63 Happy Married Life",
        "price": 600
      },
      {
        "name": "CC-65 Kerala Couple",
        "price": 600
      },
      {
        "name": "CC-66 Made for each other",
        "price": 600
      },
      {
        "name": "CC-67 Smart Couple",
        "price": 600
      },
      {
        "name": "CC-62 Sudhir & Jayasri",
        "price": 600
      },
      {
        "name": "CC-64 Couple Ride",
        "price": 600
      },
      {
        "name": "CC-92 Happy Anniversary",
        "price": 600
      }
    ],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "CC-55, CC-56, CC-58, CC-60, CC-59, CC-63, CC-65, CC-66, CC-67, CC-62, CC-64, CC-92",
    "description": "Sublimation personalized caricature cutouts on wooden base stand. Series 3 features 12 designs: Classical Dance Lover, Charming/Obedient Girls, and Romantic/Wedding Couples (Kerala Couple, Village Style, Anniversary, Biker Couple).",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-27. Courier 80/- extra. Single models (CC-55, CC-56, CC-58) take 1 photo slot; all couple models (CC-60, CC-59, CC-63, CC-65, CC-66, CC-67, CC-62, CC-64, CC-92) take 2 photo slots. All mask files available via QR code.",
    "sourcePage": 29
  },
  {
    "name": "CARICATURE - 4 (SUBLIMATION)",
    "price": 600,
    "category": "Caricatures",
    "variants": [
      {
        "name": "CC-71 Happy Anniversary",
        "price": 600
      },
      {
        "name": "CC-72 Happy Married Life",
        "price": 600
      },
      {
        "name": "CC-85 Indian Beauty",
        "price": 600
      },
      {
        "name": "CC-86 Indian Queen",
        "price": 600
      },
      {
        "name": "CC-74 Wedding Couple",
        "price": 600
      },
      {
        "name": "CC-75 All The Best",
        "price": 600
      },
      {
        "name": "CC-73 Nice Couple",
        "price": 600
      },
      {
        "name": "CC-88 Perfect Couple",
        "price": 600
      },
      {
        "name": "CC-89 Romantic Couple",
        "price": 600
      },
      {
        "name": "CC-90 Super Couple",
        "price": 600
      },
      {
        "name": "CC-91 Smart Couple",
        "price": 600
      }
    ],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "CC-71, CC-72, CC-85, CC-86, CC-74, CC-75, CC-73, CC-88, CC-89, CC-90, CC-91",
    "description": "Sublimation personalized caricature cutouts on wooden base stand. Series 4 features 11 designs: Indian Beauty, Indian Queen, and Traditional & Modern Wedding/Anniversary Couples.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-28. Courier 80/- extra. Single models (CC-85, CC-86) take 1 photo slot; all couple models (CC-71, CC-72, CC-74, CC-75, CC-73, CC-88, CC-89, CC-90, CC-91) take 2 photo slots. All mask files available via QR code.",
    "sourcePage": 30
  },
  {
    "name": "8-inch Zigzag Round",
    "price": 2000,
    "category": "Resin Art",
    "variants": [
      {
        "name": "8-inch Model - 3",
        "price": 2000
      },
      {
        "name": "8-inch Model - 6",
        "price": 2000
      },
      {
        "name": "8-inch Model - 7",
        "price": 2000
      },
      {
        "name": "8-inch Model - 8",
        "price": 2000
      }
    ],
    "sizes": [
      "8-inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "Model - 3, Model - 6, Model - 7, Model - 8",
    "description": "8-inch Zigzag round customized resin art with metallic stand",
    "needsVerification": false,
    "notes": "Catalogue page 29. Four models shown with flower preservation, calendar, and couple photos",
    "sourcePage": 31
  },
  {
    "name": "10-inch Zigzag Round",
    "price": 3000,
    "category": "Resin Art",
    "variants": [
      {
        "name": "10-inch Model - 1",
        "price": 3000
      },
      {
        "name": "10-inch Model - 2",
        "price": 3000
      },
      {
        "name": "10-inch Model - 8",
        "price": 3000
      },
      {
        "name": "10-inch Model - 9",
        "price": 3000
      }
    ],
    "sizes": [
      "10-inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 2,
    "modelNumber": "Model - 1, Model - 2, Model - 8, Model - 9",
    "description": "10-inch Zigzag round customized resin art with stand",
    "needsVerification": false,
    "notes": "Catalogue page 29. Features floral preservation, infinity symbols, and calendar options",
    "sourcePage": 31
  },
  {
    "name": "12-inch Zigzag Round",
    "price": 4000,
    "category": "Resin Art",
    "variants": [
      {
        "name": "12-inch Model - 2",
        "price": 4000
      },
      {
        "name": "12-inch Model - 3",
        "price": 4000
      },
      {
        "name": "12-inch Model - 5",
        "price": 4000
      },
      {
        "name": "12-inch Model - 6",
        "price": 4000
      },
      {
        "name": "12-inch Model - 7",
        "price": 4000
      },
      {
        "name": "12-inch Model - 8",
        "price": 4000
      }
    ],
    "sizes": [
      "12-inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 200
    },
    "photoSlots": 3,
    "modelNumber": "Model - 2, Model - 3, Model - 5, Model - 6, Model - 7, Model - 8",
    "description": "12-inch Zigzag round customized resin art with stand",
    "needsVerification": false,
    "notes": "Catalogue page 29. Supports baby keepsake items (hospital tag, umbilical clamp, baby clothes, pregnancy test) and wedding floral preservation",
    "sourcePage": 31
  },
  {
    "name": "12 x 8 -inch Zigzag",
    "price": 3600,
    "category": "Resin Art",
    "variants": [
      {
        "name": "12x8-inch Model - 5",
        "price": 3600
      },
      {
        "name": "12x8-inch Model - 6",
        "price": 3600
      },
      {
        "name": "12x8-inch Model - 7",
        "price": 3600
      },
      {
        "name": "12x8-inch Model - 8",
        "price": 3600
      }
    ],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 2,
    "modelNumber": "Model - 5, Model - 6, Model - 7, Model - 8",
    "description": "12x8 inch rectangular zigzag shaped resin art plate with stand",
    "needsVerification": false,
    "notes": "Catalogue page 30. Preserves wedding cards, baby memories, and photos",
    "sourcePage": 32
  },
  {
    "name": "12x8 FRAME RESIN ART WORK",
    "price": 4800,
    "category": "Resin Art",
    "variants": [],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [
      "Gold Frame"
    ],
    "additionalCharges": {
      "courier": 200
    },
    "photoSlots": 2,
    "modelNumber": "",
    "description": "12x8 inch framed resin art work with floral preservation and wedding invites",
    "needsVerification": false,
    "notes": "Catalogue page 30",
    "sourcePage": 32
  },
  {
    "name": "12x12 FRAME RESIN ART WORK",
    "price": 7000,
    "category": "Resin Art",
    "variants": [],
    "sizes": [
      "12x12 inches"
    ],
    "colors": [
      "White Frame"
    ],
    "additionalCharges": {
      "courier": 250
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "12x12 inch square deep framed resin art work with floral garland preservation",
    "needsVerification": false,
    "notes": "Catalogue page 30",
    "sourcePage": 32
  },
  {
    "name": "12x18 FRAME RESIN ART WORK",
    "price": 9800,
    "category": "Resin Art",
    "variants": [],
    "sizes": [
      "12x18 inches"
    ],
    "colors": [
      "Gold Frame"
    ],
    "additionalCharges": {
      "courier": 400
    },
    "photoSlots": 2,
    "modelNumber": "",
    "description": "12x18 inch large framed resin art work preserving wedding invitations, couple photos, and varmala flowers",
    "needsVerification": false,
    "notes": "Catalogue page 30",
    "sourcePage": 32
  },
  {
    "name": "12x18 PREGNANT SHAPE RESIN ART WORK",
    "price": 6000,
    "category": "Resin Art",
    "variants": [],
    "sizes": [
      "12x18 inches"
    ],
    "colors": [
      "Gold & Blue"
    ],
    "additionalCharges": {
      "courier": 200
    },
    "photoSlots": 2,
    "modelNumber": "",
    "description": "12x18 inch pregnancy silhouette shaped resin art keepsake preserving pregnancy test, baby hospital tags, and newborn photos",
    "needsVerification": false,
    "notes": "Catalogue page 30",
    "sourcePage": 32
  },
  {
    "name": "8x8 inches HANGING HEART RESIN ART WORK",
    "price": 3800,
    "category": "Resin Art",
    "variants": [],
    "sizes": [
      "8x8 inches"
    ],
    "colors": [
      "Blue & Floral"
    ],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 2,
    "modelNumber": "",
    "description": "Heart shaped resin artwork on wooden base with hanging mini resin heart charm",
    "needsVerification": false,
    "notes": "Catalogue page 30",
    "sourcePage": 32
  },
  {
    "name": "7x7 inches HEART RESIN ART WORK",
    "price": 2400,
    "category": "Resin Art",
    "variants": [],
    "sizes": [
      "7x7 inches"
    ],
    "colors": [
      "Turquoise & White with pearls"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Heart shaped resin art keepsake bordered with pearls and mounted on metal display stand",
    "needsVerification": false,
    "notes": "Catalogue page 30",
    "sourcePage": 32
  },
  {
    "name": "14-inch 12 Months Round Clock",
    "price": 3800,
    "category": "Resin Art",
    "variants": [],
    "sizes": [
      "14-inch"
    ],
    "colors": [
      "Blue Ocean Theme"
    ],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 12,
    "modelNumber": "",
    "description": "14-inch round resin wall clock customized with 12 monthly baby milestone photos and parents' names",
    "needsVerification": false,
    "notes": "Catalogue page 30",
    "sourcePage": 32
  },
  {
    "name": "TABLE TOP CALENDAR- HORIZONTAL - 5.5X8 inches",
    "price": 750,
    "category": "Calendar",
    "variants": [],
    "sizes": [
      "5.5x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 12,
    "modelNumber": "",
    "description": "Horizontal table top desk calendar with 12 leaves, wire-o binding, and wooden base stand",
    "needsVerification": false,
    "notes": "Catalogue page 31. 12 leaves",
    "sourcePage": 33
  },
  {
    "name": "TABLE TOP CALENDAR- VERTICAL - 5.5X8 inches",
    "price": 750,
    "category": "Calendar",
    "variants": [],
    "sizes": [
      "5.5x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 12,
    "modelNumber": "",
    "description": "Vertical table top desk calendar with 12 leaves, wire-o binding, and wooden base stand",
    "needsVerification": false,
    "notes": "Catalogue page 31. 12 leaves",
    "sourcePage": 33
  },
  {
    "name": "W-CALENDAR TABLE TOP - 11X8 inches",
    "price": 1100,
    "category": "Calendar",
    "variants": [],
    "sizes": [
      "11x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 12,
    "modelNumber": "",
    "description": "Wide landscape table top calendar with 12 leaves and wire-o binding",
    "needsVerification": false,
    "notes": "Catalogue page 31. 12 leaves",
    "sourcePage": 33
  },
  {
    "name": "WALL HANGING CALENDAR - 12 LEAVES - 8X11 inches",
    "price": 700,
    "category": "Calendar",
    "variants": [],
    "sizes": [
      "8x11 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 12,
    "modelNumber": "",
    "description": "Wall hanging calendar with 12 leaves and hanger wire",
    "needsVerification": false,
    "notes": "Catalogue page 31. 12 leaves",
    "sourcePage": 33
  },
  {
    "name": "WALL HANGING CALENDAR - 12 LEAVES - 11X16 inches",
    "price": 1200,
    "category": "Calendar",
    "variants": [],
    "sizes": [
      "11x16 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 12,
    "modelNumber": "",
    "description": "Large wall hanging calendar with 12 leaves and wire hanger",
    "needsVerification": false,
    "notes": "Catalogue page 31. 12 leaves",
    "sourcePage": 33
  },
  {
    "name": "GLOSSY MDF CAKE CALENDAR - 8X12 inches",
    "price": 500,
    "category": "Calendar",
    "variants": [],
    "sizes": [
      "8x12 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Glossy MDF mounted wall calendar featuring photo print and daily tear-off sheet pad (cake)",
    "needsVerification": false,
    "notes": "Catalogue page 31",
    "sourcePage": 33
  },
  {
    "name": "GLOSSY MDF CAKE CALENDAR - 12X18 inches",
    "price": 900,
    "category": "Calendar",
    "variants": [],
    "sizes": [
      "12x18 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Large glossy MDF mounted wall calendar featuring photo print and daily tear-off sheet pad (cake)",
    "needsVerification": false,
    "notes": "Catalogue page 31",
    "sourcePage": 33
  },
  {
    "name": "FRAME CALENDAR HORIZONTAL",
    "price": 520,
    "category": "Calendar",
    "variants": [],
    "sizes": [
      "13x7 inches"
    ],
    "colors": [
      "Brown Textured Frame"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "13x7 inches horizontal framed wall hanging calendar with daily tear-off calendar pad",
    "needsVerification": false,
    "notes": "Catalogue page 31. Mask file QR code provided",
    "sourcePage": 33
  },
  {
    "name": "FRAME CALENDAR VERTICAL",
    "price": 520,
    "category": "Calendar",
    "variants": [],
    "sizes": [
      "13x7 inches"
    ],
    "colors": [
      "Brown Textured Frame"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "13x7 inches vertical framed wall hanging calendar with daily tear-off calendar pad",
    "needsVerification": false,
    "notes": "Catalogue page 31. Mask file QR code provided",
    "sourcePage": 33
  },
  {
    "name": "LED BACK LIGHT PHOTO FRAME",
    "price": 1600,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "10 X 8 inches",
        "price": 1600
      },
      {
        "name": "12 X 8 inches",
        "price": 1800
      },
      {
        "name": "12 X 10 inches",
        "price": 2000
      },
      {
        "name": "12 X 15 inches",
        "price": 2600
      },
      {
        "name": "12 X 18 inches",
        "price": 2900
      },
      {
        "name": "16 X 20 inches",
        "price": 4000
      }
    ],
    "sizes": [
      "10x8 inches",
      "12x8 inches",
      "12x10 inches",
      "12x15 inches",
      "12x18 inches",
      "16x20 inches"
    ],
    "colors": [
      "Brown Wooden Frame"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "LED back light illuminated photo frame with rich brown wooden border",
    "needsVerification": false,
    "notes": "Catalogue page 32. Courier & packing charges: 10x8: \u20b9120, 12x8: \u20b9120, 12x10: \u20b9140, 12x15: \u20b9200, 12x18: \u20b9250, 16x20: \u20b9400",
    "sourcePage": 34
  },
  {
    "name": "3D FLIP NAME",
    "price": 1000,
    "category": "Customized Gifts",
    "variants": [],
    "sizes": [],
    "colors": [
      "Blue & White"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Optical illusion 3D dual perspective flip name that shows two different names when viewed at 45 degree rotation",
    "needsVerification": false,
    "notes": "Catalogue page 32. Maximum -9 + 9 LETTERS ONLY. Demo video QR provided",
    "sourcePage": 34
  },
  {
    "name": "MAGIC MIRROR ROUND - SMALL",
    "price": 440,
    "category": "Magic Mirror",
    "variants": [],
    "sizes": [
      "Small"
    ],
    "colors": [
      "Black & White Base"
    ],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Round magic mirror with LED light that reveals customized photo when switched on",
    "needsVerification": false,
    "notes": "Catalogue page 32",
    "sourcePage": 34
  },
  {
    "name": "MAGIC MIRROR ROUND - BIG",
    "price": 500,
    "category": "Magic Mirror",
    "variants": [],
    "sizes": [
      "Big"
    ],
    "colors": [
      "Black & White Base"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Big round magic mirror with LED light transforming into photo frame",
    "needsVerification": false,
    "notes": "Catalogue page 32",
    "sourcePage": 34
  },
  {
    "name": "MAGIC MIRROR HEART - SMALL",
    "price": 460,
    "category": "Magic Mirror",
    "variants": [],
    "sizes": [
      "Small"
    ],
    "colors": [
      "White Base"
    ],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Small heart-shaped magic mirror with LED photo illumination",
    "needsVerification": false,
    "notes": "Catalogue page 32",
    "sourcePage": 34
  },
  {
    "name": "MAGIC MIRROR HEART - BIG",
    "price": 540,
    "category": "Magic Mirror",
    "variants": [],
    "sizes": [
      "Big"
    ],
    "colors": [
      "White Base"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Big heart-shaped magic mirror with LED photo illumination",
    "needsVerification": false,
    "notes": "Catalogue page 32",
    "sourcePage": 34
  },
  {
    "name": "ACRYLIC LED CAR PHOTO STANDS",
    "price": 1500,
    "category": "Car Photo Stands",
    "variants": [
      {
        "name": "ACRYLIC LED CAR STAND VERTICAL",
        "price": 1500
      },
      {
        "name": "ACRYLIC LED CAR STAND HORIZONTAL",
        "price": 1500
      }
    ],
    "sizes": [
      "Vertical Print size 7x9.1 cm",
      "Horizontal Print size 9.7x6.7 cm"
    ],
    "colors": [
      "White Stand"
    ],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Illuminated acrylic LED photo stand for car dashboard in vertical or horizontal orientation",
    "needsVerification": false,
    "notes": "Catalogue page 33",
    "sourcePage": 35
  },
  {
    "name": "ON AND OFF SWITCH ACRYLIC LED CAR PHOTO STANDS",
    "price": 1800,
    "category": "Car Photo Stands",
    "variants": [
      {
        "name": "ACRYLIC LED CAR STAND VERTICAL With On & Off SWITCH",
        "price": 1800
      },
      {
        "name": "ACRYLIC LED CAR STAND HORIZONTAL With On & Off SWITCH",
        "price": 1800
      }
    ],
    "sizes": [
      "Vertical Print size 7x9.1 cm",
      "Horizontal Print size 9.6x6.5 cm"
    ],
    "colors": [
      "White Stand with black switch"
    ],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Acrylic LED car dashboard photo stand with front push on/off switch",
    "needsVerification": false,
    "notes": "Catalogue page 33",
    "sourcePage": 35
  },
  {
    "name": "SHINY ACRYLIC CAR STAND Vertical",
    "price": 500,
    "category": "Car Photo Stands",
    "variants": [],
    "sizes": [],
    "colors": [
      "Glossy Multi-colour"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Vertical glossy shiny acrylic car photo stand with solid white pedestal base",
    "needsVerification": false,
    "notes": "Catalogue page 33",
    "sourcePage": 35
  },
  {
    "name": "SHINY ACRYLIC CAR STAND Horizontal",
    "price": 600,
    "category": "Car Photo Stands",
    "variants": [],
    "sizes": [],
    "colors": [
      "Glossy Multi-colour"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Horizontal glossy shiny acrylic car photo stand with solid white pedestal base",
    "needsVerification": false,
    "notes": "Catalogue page 33",
    "sourcePage": 35
  },
  {
    "name": "TRANSPARENT CAR PHOTO STAND VERTICAL PRINT SIZE 5X7.5 cm",
    "price": 240,
    "category": "Car Photo Stands",
    "variants": [],
    "sizes": [
      "5x7.5 cm"
    ],
    "colors": [
      "Clear Transparent"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Vertical crystal clear transparent acrylic car photo stand with fluted edge",
    "needsVerification": false,
    "notes": "Catalogue page 33",
    "sourcePage": 35
  },
  {
    "name": "TRANSPARENT CAR PHOTO STAND HORIZONTAL PRINT SIZE 6X4cm",
    "price": 200,
    "category": "Car Photo Stands",
    "variants": [],
    "sizes": [
      "6x4 cm"
    ],
    "colors": [
      "Clear Transparent"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Horizontal clear transparent acrylic car photo stand",
    "needsVerification": false,
    "notes": "Catalogue page 33",
    "sourcePage": 35
  },
  {
    "name": "TRANSPARENT CAR PHOTO STAND VERTICAL PRINT SIZE 6.4 X8.5 cm",
    "price": 280,
    "category": "Car Photo Stands",
    "variants": [],
    "sizes": [
      "6.4x8.5 cm"
    ],
    "colors": [
      "Clear Transparent"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Medium vertical clear transparent acrylic car photo stand",
    "needsVerification": false,
    "notes": "Catalogue page 33",
    "sourcePage": 35
  },
  {
    "name": "TRANSPARENT CAR PHOTO STAND PRINT SIZE 8.7 X 12.5 cm",
    "price": 360,
    "category": "Car Photo Stands",
    "variants": [],
    "sizes": [
      "8.7x12.5 cm"
    ],
    "colors": [
      "Clear Transparent"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Large vertical clear transparent acrylic car photo stand",
    "needsVerification": false,
    "notes": "Catalogue page 33",
    "sourcePage": 35
  },
  {
    "name": "2D PHOTO FLIP in 1 FRAME",
    "price": 440,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "6 x 4",
        "price": 440
      },
      {
        "name": "6 x 8",
        "price": 700
      },
      {
        "name": "10 x 8",
        "price": 900
      },
      {
        "name": "12 x 8",
        "price": 1000
      },
      {
        "name": "12 x 10",
        "price": 1500
      },
      {
        "name": "10 x 15",
        "price": 1800
      },
      {
        "name": "12 x 15",
        "price": 2200
      },
      {
        "name": "12 x 18",
        "price": 2400
      },
      {
        "name": "16 x 20",
        "price": 3600
      }
    ],
    "sizes": [
      "6x4",
      "6x8",
      "10x8",
      "12x8",
      "12x10",
      "10x15",
      "12x15",
      "12x18",
      "16x20"
    ],
    "colors": [
      "Black Frame"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "",
    "description": "Lenticular 2D flip photo frame showing 2 different photos when viewed from 45 degree angle",
    "needsVerification": false,
    "notes": "Catalogue page 34. Courier & packing charges: 6x4: \u20b960, 6x8: \u20b980, 10x8: \u20b9100, 12x8: \u20b9120, 12x10: \u20b9140, 10x15: \u20b9160, 12x15: \u20b9180, 12x18: \u20b9200, 16x20: \u20b9400. Demo video QR provided",
    "sourcePage": 36
  },
  {
    "name": "MOON LAMP 13cm",
    "price": 1400,
    "category": "Lamps",
    "variants": [],
    "sizes": [
      "13cm"
    ],
    "colors": [
      "Warm White / Yellow"
    ],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "13cm customized 3D engraved moon lamp with couple photo, text, and wooden geometric base stand",
    "needsVerification": false,
    "notes": "Catalogue page 34. Mask file QR code provided",
    "sourcePage": 36
  },
  {
    "name": "MOON LAMP 15cm",
    "price": 1600,
    "category": "Lamps",
    "variants": [],
    "sizes": [
      "15cm"
    ],
    "colors": [
      "Warm White / Yellow"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "15cm customized 3D engraved moon lamp with couple photo, text, and wooden geometric base stand",
    "needsVerification": false,
    "notes": "Catalogue page 34. Mask file QR code provided",
    "sourcePage": 36
  },
  {
    "name": "IN & OUT ACRYLIC NAME PLATE",
    "price": 800,
    "category": "Name Plates",
    "variants": [],
    "sizes": [
      "12 x 3 Inches"
    ],
    "colors": [
      "Black & Gold"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "12 x 3 inches acrylic professional office name plate featuring a sliding IN / OUT availability slider",
    "needsVerification": false,
    "notes": "Catalogue page 34",
    "sourcePage": 36
  },
  {
    "name": "GOLD ACRYLIC NAME PLATE",
    "price": 700,
    "category": "Name Plates",
    "variants": [],
    "sizes": [
      "12 x 3 Inches"
    ],
    "colors": [
      "Gold & Black"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "12 x 3 inches premium gold mirror acrylic name plate with black border and logo/designation engraving",
    "needsVerification": false,
    "notes": "Catalogue page 34",
    "sourcePage": 36
  },
  {
    "name": "CUSTOMIZED WALLET- NON LEATHER",
    "price": 320,
    "category": "Wallets",
    "variants": [
      {
        "name": "ONLY NAME",
        "price": 320
      },
      {
        "name": "NAME & LOGO",
        "price": 360
      },
      {
        "name": "NAME & IMAGE",
        "price": 400
      },
      {
        "name": "NAME , IMAGE & LOGO",
        "price": 480
      }
    ],
    "sizes": [],
    "colors": [
      "Tan / Brown"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Personalized non-leather bi-fold men's wallet with metal name plate, charm emblem, and laser engraved photo",
    "needsVerification": false,
    "notes": "Catalogue page 35. 23 metallic charm designs available (11, 14, 16, 36, 37, 38, 42, 47, 50, 57, 58, 61, 65, 69, 70, 80, 81, 96, 98, 100, 114, 115, 116)",
    "sourcePage": 37
  },
  {
    "name": "4 in1 WALLET SET - NON LEATHER",
    "price": 900,
    "category": "Gift Sets",
    "variants": [
      {
        "name": "4 in 1 - TAN - COLOUR",
        "price": 900
      },
      {
        "name": "4 in 1 - BLACK - COLOUR",
        "price": 900
      },
      {
        "name": "4 in 1 - BLUE - COLOUR",
        "price": 900
      }
    ],
    "sizes": [],
    "colors": [
      "Tan",
      "Black",
      "Blue"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "4-in-1 executive non-leather gift set comprising wallet, passport cover, eyewear case, and keychain in a premium gift box",
    "needsVerification": false,
    "notes": "Catalogue page 35",
    "sourcePage": 37
  },
  {
    "name": "NAMES ON PENCIL",
    "price": 180,
    "category": "Stationery",
    "variants": [],
    "sizes": [],
    "colors": [
      "Multi-colour pencils"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Personalized pencil combo offer: 10 engraved wooden pencils with custom name + 1 eraser + 1 sharpener",
    "needsVerification": false,
    "notes": "Catalogue page 35. Poster says 'ONLY \u20b9180/-' combo offer, while price bubble shows 200/-. Courier Extra 60/-",
    "sourcePage": 37
  },
  {
    "name": "BALL POINT PEN",
    "price": 90,
    "category": "Pens",
    "variants": [
      {
        "name": "PEN - 15 BALL POINT RD (Red)",
        "price": 90
      },
      {
        "name": "PEN - 16 BALL POINT BL (Blue)",
        "price": 90
      },
      {
        "name": "PEN - 17 BALL POINT BK (Black)",
        "price": 90
      }
    ],
    "sizes": [],
    "colors": [
      "Red",
      "Blue",
      "Black"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN - 15, PEN - 16, PEN - 17",
    "description": "Ball point pen with custom name engraving (40x4 mm)",
    "needsVerification": false,
    "notes": "Catalogue page 36. Name engraving size 40x4 mm",
    "sourcePage": 38
  },
  {
    "name": "TWO LINE METAL PEN",
    "price": 120,
    "category": "Pens",
    "variants": [
      {
        "name": "PEN - 10 TWO LINE RD (Red)",
        "price": 120
      },
      {
        "name": "PEN - 11 TWO LINE BK (Black)",
        "price": 120
      },
      {
        "name": "PEN - 12 TWO LINE BL (Blue)",
        "price": 120
      },
      {
        "name": "PEN - 13 TWO LINE GY (Grey)",
        "price": 120
      }
    ],
    "sizes": [],
    "colors": [
      "Red",
      "Black",
      "Blue",
      "Grey"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN - 10, PEN - 11, PEN - 12, PEN - 13",
    "description": "Two line metal pen with custom name engraving (40x4 mm)",
    "needsVerification": false,
    "notes": "Catalogue page 36. Name engraving size 40x4 mm",
    "sourcePage": 38
  },
  {
    "name": "WOODEN PEN",
    "price": 200,
    "category": "Pens",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural Wood"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN - 2 WOOD",
    "description": "Natural wooden pen with laser name engraving",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "METAL CAP WOODEN PEN",
    "price": 300,
    "category": "Pens",
    "variants": [],
    "sizes": [],
    "colors": [
      "Wood with Silver Metal Cap"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN - 4 WOOD METAL",
    "description": "Wooden barrel pen with metal cap and laser engraved name",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "TOUCH SCREEN METAL PEN - BLACK",
    "price": 140,
    "category": "Pens",
    "variants": [],
    "sizes": [],
    "colors": [
      "Black with Gold Trim"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN - 14",
    "description": "Black metal pen with stylus tip for mobile touchscreens and engraved name",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "PEN - 18 CAP GOLD METAL BK",
    "price": 340,
    "category": "Pens",
    "variants": [],
    "sizes": [],
    "colors": [
      "Black & Gold"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN - 18",
    "description": "Black metal pen with gold cap and clip, displayed in pen case",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "CRYSTAL STONES PEN",
    "price": 200,
    "category": "Pens",
    "variants": [
      {
        "name": "PEN - 5 CRYSTAL - RD (Red)",
        "price": 200
      },
      {
        "name": "PEN - 6 CRYSTAL - BK (Black)",
        "price": 200
      },
      {
        "name": "PEN - 7 CRYSTAL - BL (Blue)",
        "price": 200
      }
    ],
    "sizes": [],
    "colors": [
      "Red",
      "Black",
      "Blue"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN - 5, PEN - 6, PEN - 7",
    "description": "Metallic pen with upper transparent chamber filled with sparkling crystal stones",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "PEN-24 GOLD COLOUR METAL TWIST PEN with box",
    "price": 360,
    "category": "Pens",
    "variants": [],
    "sizes": [],
    "colors": [
      "Gold & Black"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN-24",
    "description": "Gold colour metal twist pen with engraved ornate patterns, comes with gift box",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "PROFESSION PEN with box",
    "price": 400,
    "category": "Pens",
    "variants": [
      {
        "name": "CA PEN with box",
        "price": 400
      },
      {
        "name": "DOCTOR PEN with box",
        "price": 400
      },
      {
        "name": "ADVOCATE PEN with box",
        "price": 400
      }
    ],
    "sizes": [],
    "colors": [
      "Black & Gold"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Professional pen with custom profession clip emblem (Chartered Accountant, Doctor, Advocate) and presentation box",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "PEN-21 - WOOD COLOUR PEN",
    "price": 440,
    "category": "Pens",
    "variants": [],
    "sizes": [],
    "colors": [
      "Wood grain & Gold"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN-21",
    "description": "Luxury thick wood-grain textured pen with gold ring accents and engraved name",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "BRASS PEN ONLY NAME ENGRAVING",
    "price": 680,
    "category": "Pens",
    "variants": [
      {
        "name": "PEN-20 - BALAJI",
        "price": 680
      },
      {
        "name": "PEN-20 - JESUS",
        "price": 680
      },
      {
        "name": "PEN-20 - MURUGAN / SUBRAMANYA",
        "price": 680
      }
    ],
    "sizes": [],
    "colors": [
      "Antique Brass Gold"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN-20",
    "description": "Solid brass spiritual pen deeply engraved with religious deities and personalized name",
    "needsVerification": false,
    "notes": "Catalogue page 36. Name engraving size 40x4 mm",
    "sourcePage": 38
  },
  {
    "name": "FEATHER TOUCH PEN",
    "price": 140,
    "category": "Pens",
    "variants": [
      {
        "name": "FEATHER TOUCH PEN - Black",
        "price": 140
      },
      {
        "name": "FEATHER TOUCH PEN - Green",
        "price": 140
      },
      {
        "name": "FEATHER TOUCH PEN - Coper",
        "price": 140
      },
      {
        "name": "FEATHER TOUCH PEN - Red",
        "price": 140
      },
      {
        "name": "FEATHER TOUCH PEN - Blue",
        "price": 140
      }
    ],
    "sizes": [],
    "colors": [
      "Black",
      "Green",
      "Copper",
      "Red",
      "Blue"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Feather touch smooth matte grip pen with rose gold trims and custom name engraving",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "PEN-19",
    "price": 180,
    "category": "Pens",
    "variants": [
      {
        "name": "PEN-19 -BROWN",
        "price": 180
      },
      {
        "name": "PEN-19 -SS",
        "price": 180
      },
      {
        "name": "PEN-19 -BLACK",
        "price": 180
      }
    ],
    "sizes": [],
    "colors": [
      "Brown",
      "Stainless Steel (SS)",
      "Black"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN-19",
    "description": "Metallic executive pen with polished accents and custom name",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "PEN-22 - TWO NAMES -TWIST PEN",
    "price": 480,
    "category": "Pens",
    "variants": [],
    "sizes": [],
    "colors": [
      "Silver with red hearts"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN-22",
    "description": "Twist mechanism couple pen engraved with two different names and heart motif, comes in display box",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "PEN-23 - DIAMOND GOLD PEN",
    "price": 280,
    "category": "Pens",
    "variants": [],
    "sizes": [],
    "colors": [
      "Gold"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "PEN-23",
    "description": "Gold finish slim pen crowned with a large multifaceted crystal diamond topper",
    "needsVerification": false,
    "notes": "Catalogue page 36",
    "sourcePage": 38
  },
  {
    "name": "Regular Pen Set",
    "price": 240,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Black & Silver"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Personalized black metal pen and engraved metal keychain set presented in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "CA Pen Set",
    "price": 500,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Black & Silver with Gold trim"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Chartered Accountant (CA) themed pen with CA clip emblem and matching CA keychain in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "Balaji Pen Set",
    "price": 700,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Antique Gold / Brass"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Lord Balaji brass embossed pen and metallic 3D Balaji deity keychain in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "Doctor Pen Set",
    "price": 500,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Black & Gold"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Doctor specialized pen with caduceus emblem and medical symbol keychain in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "Murugar Pen Set",
    "price": 700,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Antique Gold / Brass"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Lord Murugar brass engraved pen and metallic Murugar figurine keychain in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "Advocate Pen Set",
    "price": 500,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Black & Gold"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Advocate pen with scales of justice clip emblem and Advocate keychain in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "Shiva Pen Set",
    "price": 700,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Antique Gold / Brass"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Lord Shiva brass engraved pen and antique Shiva face keychain in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "Jesus Pen Set",
    "price": 700,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Antique Gold / Brass"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Jesus brass engraved pen and ornate metallic cross keychain in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "Sai Baba Pen Set",
    "price": 700,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Antique Gold / Brass"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Shirdi Sai Baba brass engraved pen and metallic Sai Baba figure keychain in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "Makka Madina Pen Set",
    "price": 700,
    "category": "Pen & Keychain Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Antique Gold / Brass"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Makka Madina 786 brass engraved pen and circular religious emblem keychain in gift box",
    "needsVerification": false,
    "notes": "Catalogue page 37",
    "sourcePage": 39
  },
  {
    "name": "NOTEBOOK DIARIES 120 PAGES",
    "price": 280,
    "category": "Diaries",
    "variants": [],
    "sizes": [
      "120 pages"
    ],
    "colors": [
      "Red",
      "Blue",
      "Black",
      "Grey"
    ],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Soft-touch texture stylish design notebook diary with 120 premium pages, magnetic closure flap, and custom name/logo branding",
    "needsVerification": false,
    "notes": "Catalogue page 38. Special price: 280/- each",
    "sourcePage": 40
  },
  {
    "name": "PREMIUM DIARY & PEN SET",
    "price": 380,
    "category": "Diaries / Gift Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Blue",
      "Red",
      "Black",
      "Grey"
    ],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "2 in 1 diary combo offer featuring premium notebook diary with matching metal engraved pen in gift packaging",
    "needsVerification": false,
    "notes": "Catalogue page 38. Inclusive of All Taxes",
    "sourcePage": 40
  },
  {
    "name": "3-IN-1 DIARY COMBO OFFER!",
    "price": 480,
    "category": "Diaries / Gift Sets",
    "variants": [],
    "sizes": [],
    "colors": [
      "Red",
      "Blue",
      "Black",
      "Grey"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Premium diary, keychain & pen gift set packed together in presentation box",
    "needsVerification": false,
    "notes": "Catalogue page 38. Price: 480/- each",
    "sourcePage": 40
  },
  {
    "name": "EXCLUSIVE 4-IN-1 DIARY COMBO OFFER",
    "price": 900,
    "category": "Diaries / Gift Sets",
    "variants": [],
    "sizes": [
      "120 Pages"
    ],
    "colors": [
      "Red",
      "Blue",
      "Black",
      "Grey"
    ],
    "additionalCharges": {
      "courier": 120
    },
    "photoSlots": 0,
    "modelNumber": "",
    "description": "Executive 4-in-1 combo set containing 120 pages premium diary, engraved metal pen, keychain, and temperature/water bottle in gift packaging",
    "needsVerification": false,
    "notes": "Catalogue page 38. Inclusive of All Taxes",
    "sourcePage": 40
  },
  {
    "name": "BACK LIGHT BED LAMP",
    "price": 300,
    "category": "Lamps",
    "variants": [
      {
        "name": "SQUARE",
        "price": 300
      },
      {
        "name": "ROUND / CIRCLE",
        "price": 300
      },
      {
        "name": "HEART",
        "price": 300
      }
    ],
    "sizes": [
      "3.5 inch x 3.5 inch"
    ],
    "colors": [
      "Square (black rim)",
      "Round (white rim)",
      "Heart (red rim)"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Plug & glow 3.5x3.5 inch night bed lamp with soft warm LED light, directly plugs into wall sockets with personalized photo",
    "needsVerification": false,
    "notes": "Catalogue page 39. Inclusive of All Taxes",
    "sourcePage": 41
  },
  {
    "name": "SS VISITING CARD BOX",
    "price": 450,
    "category": "Corporate Gifts / Card Holders",
    "variants": [],
    "sizes": [
      "Holds 15-20 business cards"
    ],
    "colors": [
      "Blue",
      "Black",
      "Silver",
      "Red/Maroon"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Premium stainless steel visiting card box with custom laser engraved name, logo, or photo; holds 15-20 business cards with multiple divider slots",
    "needsVerification": false,
    "notes": "Catalogue page 39. Price: 450/- per box",
    "sourcePage": 41
  },
  {
    "name": "MOON HEART LED",
    "price": 1000,
    "category": "Lamps",
    "variants": [],
    "sizes": [],
    "colors": [
      "Warm Gold / Crystal"
    ],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Illuminated faceted crystal crescent moon holding a suspended rotating heart photo frame on round gold LED base",
    "needsVerification": false,
    "notes": "Catalogue page 39",
    "sourcePage": 41
  },
  {
    "name": "AVAILABLE PHOTO PRINT on 4mm ACRYLIC SHEET",
    "price": 960,
    "category": "Acrylic Wall Prints",
    "variants": [
      {
        "name": "12 X 8",
        "price": 960
      },
      {
        "name": "12 X 10",
        "price": 1200
      },
      {
        "name": "10 X 15",
        "price": 1500
      },
      {
        "name": "12 X 15",
        "price": 1800
      },
      {
        "name": "12 X 18",
        "price": 2160
      },
      {
        "name": "16 X 20",
        "price": 3200
      },
      {
        "name": "16 X 24",
        "price": 3840
      },
      {
        "name": "20 X 24",
        "price": 4800
      },
      {
        "name": "20 X 30",
        "price": 6000
      },
      {
        "name": "24 X 30",
        "price": 7200
      }
    ],
    "sizes": [
      "12x8",
      "12x10",
      "10x15",
      "12x15",
      "12x18",
      "16x20",
      "16x24",
      "20x24",
      "20x30",
      "24x30"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "High-gloss direct photo print on 4mm thick acrylic sheet with backside wall mounting MDF board",
    "needsVerification": false,
    "notes": "Catalogue page 40. Courier & packing charges: 12x8: +100, 12x10: +120, 10x15: +150, 12x15: +180, 12x18: +200, 16x20: +350, 16x24: +500, 20x24: +700, 20x30: +900, 24x30: +1200",
    "sourcePage": 42
  },
  {
    "name": "ACRYLIC TABLE TOP PHOTO PRINT on 4mm ACRYLIC SHEET",
    "price": 400,
    "category": "Acrylic Table Tops",
    "variants": [
      {
        "name": "6X4",
        "price": 400
      },
      {
        "name": "5X7",
        "price": 500
      },
      {
        "name": "6X6",
        "price": 500
      },
      {
        "name": "6X9",
        "price": 600
      },
      {
        "name": "8x8",
        "price": 700
      },
      {
        "name": "10x8",
        "price": 800
      },
      {
        "name": "12x8",
        "price": 900
      }
    ],
    "sizes": [
      "6x4",
      "5x7",
      "6x6",
      "6x9",
      "8x8",
      "10x8",
      "12x8"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Glossy 4mm acrylic sheet tabletop photo display supported by metal desktop studs",
    "needsVerification": false,
    "notes": "Catalogue page 40. Courier charges: 6x4: 60, 5x7: 80, 6x6: 80, 6x9: 80, 8x8: 80, 10x8: 100, 12x8: 100",
    "sourcePage": 42
  },
  {
    "name": "WALL MOUNTED CANVAS PRINT",
    "price": 800,
    "category": "Canvas Prints",
    "variants": [
      {
        "name": "12 X 8",
        "price": 800
      },
      {
        "name": "12 X 10",
        "price": 1000
      },
      {
        "name": "10 X 15",
        "price": 1200
      },
      {
        "name": "12 X 15",
        "price": 1440
      },
      {
        "name": "12 X 18",
        "price": 1740
      },
      {
        "name": "16 X 20",
        "price": 2560
      },
      {
        "name": "16 X 24",
        "price": 3080
      },
      {
        "name": "20 X 24",
        "price": 3840
      },
      {
        "name": "20 X 30",
        "price": 4800
      },
      {
        "name": "24 X 30",
        "price": 5760
      }
    ],
    "sizes": [
      "12x8",
      "12x10",
      "10x15",
      "12x15",
      "12x18",
      "16x20",
      "16x24",
      "20x24",
      "20x30",
      "24x30"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Premium textured wall mounted gallery wrapped canvas photo print on sturdy wooden frame",
    "needsVerification": false,
    "notes": "Catalogue page 41. Courier & packing charges: 12x8: +80, 12x10: +100, 10x15: +120, 12x15: +150, 12x18: +150, 16x20: +250, 16x24: +400, 20x24: +500, 20x30: +800, 24x30: +1100",
    "sourcePage": 43
  },
  {
    "name": "HEART BOX 12 PIC PUZZLE",
    "price": 500,
    "category": "Gift Boxes / Customized Gifts",
    "variants": [],
    "sizes": [],
    "colors": [
      "Red",
      "Blue",
      "Darkblue",
      "Pink",
      "Magenta"
    ],
    "additionalCharges": {},
    "photoSlots": 12,
    "modelNumber": "",
    "description": "Heart shaped keepsake tin box adorned with rose ribbon, revealing an accordion pull-out photo strip with 12 pictures",
    "needsVerification": false,
    "notes": "Catalogue page 41. Mask file QR code provided",
    "sourcePage": 43
  },
  {
    "name": "GOLDEN CLOCK DATE PEN STAND",
    "price": 900,
    "category": "Desk Organizers / Pen Stands",
    "variants": [],
    "sizes": [],
    "colors": [
      "Black with Gold accents"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "Executive desk pen organizer featuring an analog quartz clock, manual date/month/day perpetual blocks, pen tumbler, and customized metallic plate with name/designation/photo",
    "needsVerification": false,
    "notes": "Catalogue page 41",
    "sourcePage": 43
  },
  {
    "name": "MINIATURE FRAME",
    "price": 2800,
    "category": "Miniature Frames",
    "variants": [
      {
        "name": "6X9 INCHES",
        "price": 2800
      },
      {
        "name": "12X8 INCHES",
        "price": 4800
      }
    ],
    "sizes": [
      "6x9 inches",
      "12x8 inches"
    ],
    "colors": [
      "Black Deep Box Frame"
    ],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 5,
    "modelNumber": "",
    "description": "3D handcrafted miniature themed shadow box frame with lifelike miniature stage props, custom cutouts, and LED backlighting",
    "needsVerification": false,
    "notes": "Catalogue page 42. Courier: 6x9 inches is \u20b9150, 12x8 inches is \u20b9250. Themes shown: Living Room Theme, Wedding Reception Theme, Birthday Theme, Retirement Theme, Birthday Theme 2, Stage Theme, Leader/Office Theme",
    "sourcePage": 44
  },
  {
    "name": "MULTI COLOUR ACRYLIC BED LAMP",
    "price": 400,
    "category": "Lamps",
    "variants": [
      {
        "name": "AC-B-LAMP-OVAL-H",
        "price": 400
      },
      {
        "name": "AC-B-LAMP-OVAL-V",
        "price": 400
      },
      {
        "name": "AC-B-LAMP-SLANT HRT",
        "price": 400
      },
      {
        "name": "AC-B-LAMP-STRAIGHT HRT",
        "price": 400
      },
      {
        "name": "AC-B-LAMP-RECTANGLE - H",
        "price": 400
      },
      {
        "name": "AC-B-LAMP-RECTANGLE - V",
        "price": 400
      },
      {
        "name": "AC-B-LAMP- ARROW HRT",
        "price": 400
      },
      {
        "name": "AC-B-LAMP- 3D HRT",
        "price": 400
      }
    ],
    "sizes": [
      "8x10 cm"
    ],
    "colors": [
      "Multi-colour RGB"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "AC-B-LAMP-OVAL-H, AC-B-LAMP-OVAL-V, AC-B-LAMP-SLANT HRT, AC-B-LAMP-STRAIGHT HRT, AC-B-LAMP-RECTANGLE - H, AC-B-LAMP-RECTANGLE - V, AC-B-LAMP- ARROW HRT, AC-B-LAMP- 3D HRT",
    "description": "8x10 cm multi-colour glowing acrylic night lamp with custom engraved photo and acrylic base",
    "needsVerification": false,
    "notes": "Catalogue page 43. 8 shape variants available",
    "sourcePage": 45
  },
  {
    "name": "ACRYLIC TABLE TOP 5x7 inches",
    "price": 1600,
    "category": "Lamps / Table Tops",
    "variants": [
      {
        "name": "ACRYLIC TABLE TOP - HEART",
        "price": 1600
      },
      {
        "name": "ACRYLIC TABLE TOP - RECTANGLE",
        "price": 1600
      },
      {
        "name": "ACRYLIC TABLE TOP - ARROW HEART",
        "price": 1600
      },
      {
        "name": "ACRYLIC TABLE TOP - MOON",
        "price": 1600
      }
    ],
    "sizes": [
      "5x7 inches"
    ],
    "colors": [
      "Warm White / White base"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "5x7 inches engraved acrylic tabletop night light with glowing pedestal base (available with wooden or oval light base)",
    "needsVerification": false,
    "notes": "Catalogue page 43",
    "sourcePage": 45
  },
  {
    "name": "SPOTIFY LED TABLE TOP 4.5x8 inches",
    "price": 1400,
    "category": "Lamps / Table Tops",
    "variants": [],
    "sizes": [
      "4.5x8 inches"
    ],
    "colors": [
      "Clear Acrylic with White LED base"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "4.5x8 inches acrylic Spotify player plaque featuring album artwork / customized photo, scannable Spotify song code, playback controls, and cylindrical LED light base",
    "needsVerification": false,
    "notes": "Catalogue page 43",
    "sourcePage": 45
  },
  {
    "name": "LED TABLE TOP LINE DRAWING 5x7 inches",
    "price": 1700,
    "category": "Lamps / Table Tops",
    "variants": [],
    "sizes": [
      "5x7 inches"
    ],
    "colors": [
      "Warm Yellow Glow with Wooden Base"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "",
    "description": "5x7 inches acrylic night light featuring custom artist line drawing sketch illustration on oval solid wood glowing LED base",
    "needsVerification": false,
    "notes": "Catalogue page 43",
    "sourcePage": 45
  },
  {
    "name": "6 X 8 - CUSTOMIZED CUTOUT",
    "price": 600,
    "category": "MDF - Customized Cutouts",
    "variants": [
      {
        "name": "Dance Pose Cutout",
        "price": 600
      },
      {
        "name": "Happy Mother's Cutout",
        "price": 600
      },
      {
        "name": "My Mom Cutout",
        "price": 600
      }
    ],
    "sizes": [
      "6x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Customized MDF cutout with wooden base support",
    "needsVerification": false,
    "notes": "Catalogue PAGE-44; 6x8 inches size cutout",
    "sourcePage": 46
  },
  {
    "name": "12X8 CUSTOMIZED CUTOUT",
    "price": 900,
    "category": "MDF - Customized Cutouts",
    "variants": [
      {
        "name": "Baby Cutout",
        "price": 900
      }
    ],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Customized horizontal MDF cutout on black base",
    "needsVerification": false,
    "notes": "Catalogue PAGE-44",
    "sourcePage": 46
  },
  {
    "name": "CUSTOMIZED MEMENTO CUTOUT - 12X10",
    "price": 1000,
    "category": "MDF - Customized Cutouts",
    "variants": [],
    "sizes": [
      "12x10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Customized memento cutout award/trophy with cutout figure and plaque on base",
    "needsVerification": false,
    "notes": "Catalogue PAGE-44",
    "sourcePage": 46
  },
  {
    "name": "12X18 CUSTOMIZED CUTOUT",
    "price": 1600,
    "category": "MDF - Customized Cutouts",
    "variants": [
      {
        "name": "Guru / Swamy Cutout",
        "price": 1600
      },
      {
        "name": "Happy Anniversary Couple Cutout",
        "price": 1600
      }
    ],
    "sizes": [
      "12x18 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Large customized MDF cutout on step wooden stand",
    "needsVerification": false,
    "notes": "Catalogue PAGE-44",
    "sourcePage": 46
  },
  {
    "name": "STANDY-RRR",
    "price": 1000,
    "category": "MDF - Standy Cutouts",
    "variants": [],
    "sizes": [
      "12x10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 4,
    "modelNumber": "STANDY-RRR",
    "description": "12 X 10 Standy cutout with 1 main figure cutout and 3 circular photo frames",
    "needsVerification": false,
    "notes": "Catalogue PAGE-45",
    "sourcePage": 47
  },
  {
    "name": "STANDY-HRS",
    "price": 1400,
    "category": "MDF - Standy Cutouts",
    "variants": [],
    "sizes": [
      "12x15 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 5,
    "modelNumber": "STANDY-HRS",
    "description": "12 X 15 Standy cutout with standing couple cutout, 3 heart photo frames, and 1 square frame",
    "needsVerification": false,
    "notes": "Catalogue PAGE-45",
    "sourcePage": 47
  },
  {
    "name": "WEDDING HEART CUT OUT",
    "price": 1400,
    "category": "MDF - Standy Cutouts",
    "variants": [],
    "sizes": [
      "15x12 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "15x12 inches wedding cutout featuring floral heart name plaque and standing couple",
    "needsVerification": false,
    "notes": "Catalogue PAGE-45",
    "sourcePage": 47
  },
  {
    "name": "STANDY- 4 HEARTS",
    "price": 1400,
    "category": "MDF - Standy Cutouts",
    "variants": [],
    "sizes": [
      "12x15 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 5,
    "modelNumber": "STANDY- 4 HEARTS",
    "description": "Standy cutout with standing couple and 4 stacked heart photo frames",
    "needsVerification": false,
    "notes": "Catalogue PAGE-45; Shares the 1,400/- price tier in middle section",
    "sourcePage": 47
  },
  {
    "name": "B'DAY CUTOUT - 8X8 inches",
    "price": 1000,
    "category": "MDF - Standy Cutouts",
    "variants": [],
    "sizes": [
      "8x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 15,
    "modelNumber": null,
    "description": "Birthday standy cutout featuring age number collage, custom child cutout, and photo name base",
    "needsVerification": false,
    "notes": "Catalogue PAGE-45",
    "sourcePage": 47
  },
  {
    "name": "B'DAY CUTOUT - 11X11 inches",
    "price": 1400,
    "category": "MDF - Standy Cutouts",
    "variants": [],
    "sizes": [
      "11x11 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 15,
    "modelNumber": null,
    "description": "Birthday standy cutout featuring age number collage, custom child cutout, and photo name base",
    "needsVerification": false,
    "notes": "Catalogue PAGE-45",
    "sourcePage": 47
  },
  {
    "name": "8 INCH MDF CLOCK",
    "price": 500,
    "category": "MDF Wall Clock",
    "variants": [],
    "sizes": [
      "8 inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CL-MDF-8",
    "description": "8 inch round MDF customized wall clock",
    "needsVerification": false,
    "notes": "Catalogue PAGE-46",
    "sourcePage": 48
  },
  {
    "name": "11 INCH MDF CLOCK",
    "price": 700,
    "category": "MDF Wall Clock",
    "variants": [],
    "sizes": [
      "11 inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CL-MDF-11",
    "description": "11 inch round MDF customized wall clock",
    "needsVerification": false,
    "notes": "Catalogue PAGE-46",
    "sourcePage": 48
  },
  {
    "name": "14 INCH MDF CLOCK",
    "price": 900,
    "category": "MDF Wall Clock",
    "variants": [],
    "sizes": [
      "14 inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 140,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CL-MDF-14",
    "description": "14 inch round MDF customized wall clock",
    "needsVerification": false,
    "notes": "Catalogue PAGE-46",
    "sourcePage": 48
  },
  {
    "name": "18 INCH MDF CLOCK",
    "price": 1200,
    "category": "MDF Wall Clock",
    "variants": [],
    "sizes": [
      "18 inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CL-MDF-18",
    "description": "18 inch round MDF customized wall clock",
    "needsVerification": false,
    "notes": "Catalogue PAGE-46",
    "sourcePage": 48
  },
  {
    "name": "11X10 INCH HEART MDF LAMINATED CLOCK",
    "price": 700,
    "category": "MDF Wall Clock",
    "variants": [],
    "sizes": [
      "11x10 inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "CL-MDF-HRT",
    "description": "Heart shaped MDF laminated customized wall clock with red border",
    "needsVerification": false,
    "notes": "Catalogue PAGE-46",
    "sourcePage": 48
  },
  {
    "name": "ACRYLIC WALL CLOCK - HEART",
    "price": 1200,
    "category": "Acrylic Wall Clock",
    "variants": [],
    "sizes": [
      "10x10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "AWC - HRT",
    "description": "Heart shaped acrylic photo wall clock 10x10 inches",
    "needsVerification": false,
    "notes": "Catalogue PAGE-47; Top section (All CLOCK 10x10)",
    "sourcePage": 49
  },
  {
    "name": "ACRYLIC WALL CLOCK - SQUARE",
    "price": 1200,
    "category": "Acrylic Wall Clock",
    "variants": [],
    "sizes": [
      "10x10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "AWC - SQ",
    "description": "Square shaped acrylic photo wall clock 10x10 inches",
    "needsVerification": false,
    "notes": "Catalogue PAGE-47; Top section (All CLOCK 10x10)",
    "sourcePage": 49
  },
  {
    "name": "ACRYLIC WALL CLOCK - SEMI SQUARE",
    "price": 1200,
    "category": "Acrylic Wall Clock",
    "variants": [],
    "sizes": [
      "10x10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "AWC - SSQ",
    "description": "Semi square shaped acrylic photo wall clock 10x10 inches",
    "needsVerification": false,
    "notes": "Catalogue PAGE-47; Top section (All CLOCK 10x10)",
    "sourcePage": 49
  },
  {
    "name": "ACRYLIC WALL CLOCK - ROUND",
    "price": 1200,
    "category": "Acrylic Wall Clock",
    "variants": [],
    "sizes": [
      "10x10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "AWC - ROU",
    "description": "Round shaped acrylic photo wall clock 10x10 inches",
    "needsVerification": false,
    "notes": "Catalogue PAGE-47; Top section (All CLOCK 10x10)",
    "sourcePage": 49
  },
  {
    "name": "ACRYLIC WALL CLOCK - MOON",
    "price": 1200,
    "category": "Acrylic Wall Clock",
    "variants": [],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Crescent moon shaped acrylic photo wall clock 12x8 inches",
    "needsVerification": false,
    "notes": "Catalogue PAGE-47; Bottom section (All CLOCK 12x8)",
    "sourcePage": 49
  },
  {
    "name": "ACRYLIC WALL CLOCK - OVAL",
    "price": 1200,
    "category": "Acrylic Wall Clock",
    "variants": [],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Oval shaped acrylic photo wall clock 12x8 inches",
    "needsVerification": false,
    "notes": "Catalogue PAGE-47; Bottom section (All CLOCK 12x8)",
    "sourcePage": 49
  },
  {
    "name": "ACRYLIC WALL CLOCK - ZIG ZAG",
    "price": 1200,
    "category": "Acrylic Wall Clock",
    "variants": [
      {
        "name": "Vertical",
        "price": 1200
      },
      {
        "name": "Horizontal",
        "price": 1200
      }
    ],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Zig zag wavy border acrylic photo wall clock available in vertical and horizontal orientations",
    "needsVerification": false,
    "notes": "Catalogue PAGE-47; Bottom section (All CLOCK 12x8)",
    "sourcePage": 49
  },
  {
    "name": "ACRYLIC WALL CLOCK - RECTANGULAR",
    "price": 1200,
    "category": "Acrylic Wall Clock",
    "variants": [
      {
        "name": "Horizontal",
        "price": 1200
      },
      {
        "name": "Vertical",
        "price": 1200
      }
    ],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Rectangular acrylic photo wall clock with rounded corners available in vertical and horizontal orientations",
    "needsVerification": false,
    "notes": "Catalogue PAGE-47; Bottom section (All CLOCK 12x8)",
    "sourcePage": 49
  },
  {
    "name": "ACRYLIC COLLAGE CLOCK - ACC-1",
    "price": 1300,
    "category": "Acrylic Collage Clocks",
    "variants": [],
    "sizes": [
      "10X10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 8,
    "modelNumber": "ACC-1",
    "description": "Round acrylic collage clock with 8 photo segments surrounding black clock dial",
    "needsVerification": false,
    "notes": "Catalogue PAGE-48",
    "sourcePage": 50
  },
  {
    "name": "ACRYLIC COLLAGE CLOCK - ACC-2",
    "price": 1300,
    "category": "Acrylic Collage Clocks",
    "variants": [],
    "sizes": [
      "10X10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 12,
    "modelNumber": "ACC-2",
    "description": "Round acrylic collage clock with 12 monthly baby photo slots around clock face",
    "needsVerification": false,
    "notes": "Catalogue PAGE-48; Ideal for 1-12 month milestones",
    "sourcePage": 50
  },
  {
    "name": "ACRYLIC COLLAGE CLOCK - ACC-3",
    "price": 1300,
    "category": "Acrylic Collage Clocks",
    "variants": [],
    "sizes": [
      "10X10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 5,
    "modelNumber": "ACC-3",
    "description": "Square acrylic collage clock with 5 collage photo frames and round center clock",
    "needsVerification": false,
    "notes": "Catalogue PAGE-48",
    "sourcePage": 50
  },
  {
    "name": "ACRYLIC COLLAGE CLOCK - ACC-4",
    "price": 1300,
    "category": "Acrylic Collage Clocks",
    "variants": [],
    "sizes": [
      "10X10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 8,
    "modelNumber": "ACC-4",
    "description": "Square acrylic collage clock with 8 grid photo frames around central clock hands",
    "needsVerification": false,
    "notes": "Catalogue PAGE-48",
    "sourcePage": 50
  },
  {
    "name": "ACRYLIC COLLAGE CLOCK - ACC-5",
    "price": 1300,
    "category": "Acrylic Collage Clocks",
    "variants": [],
    "sizes": [
      "10X10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 4,
    "modelNumber": "ACC-5",
    "description": "Square acrylic collage clock with 4 quadrant photos and central clock hands",
    "needsVerification": false,
    "notes": "Catalogue PAGE-48",
    "sourcePage": 50
  },
  {
    "name": "ACRYLIC COLLAGE CLOCK - ACC-6",
    "price": 1300,
    "category": "Acrylic Collage Clocks",
    "variants": [],
    "sizes": [
      "10X10 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 4,
    "modelNumber": "ACC-6",
    "description": "Quarter-round curved corner acrylic collage clock with 4 photo quadrants",
    "needsVerification": false,
    "notes": "Catalogue PAGE-48",
    "sourcePage": 50
  },
  {
    "name": "4 PIC SUBLIMATION 12 X 8 SIZE",
    "price": 600,
    "category": "Sublimation MDF Frames",
    "variants": [
      {
        "name": "Happy Birthday (MDF-4PIC-12X8 HBD)",
        "price": 600
      },
      {
        "name": "Happy Anniversary (MDF-4PIC-12X8 HA)",
        "price": 600
      },
      {
        "name": "Family (MDF-4PIC-12X8 FA)",
        "price": 600
      },
      {
        "name": "Love (MDF-4PIC-12X8 LO)",
        "price": 600
      },
      {
        "name": "Brother (MDF-4PIC-12X8 BR)",
        "price": 600
      },
      {
        "name": "Sister (MDF-4PIC-12X8 SI)",
        "price": 600
      },
      {
        "name": "Friend (MDF-4PIC-12X8 FR)",
        "price": 600
      }
    ],
    "sizes": [
      "12 X 8"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 4,
    "modelNumber": "MDF-4PIC-12X8",
    "description": "Cutout word sublimation MDF frame with 1 top photo slot inside cutout text and 3 rectangular photo slots below",
    "needsVerification": false,
    "notes": "Catalogue PAGE-49",
    "sourcePage": 51
  },
  {
    "name": "8 HEARTS SUBLIMATION MDF FRAMES",
    "price": 1200,
    "category": "Sublimation MDF Frames",
    "variants": [
      {
        "name": "Happy Anniversary (MDF-8HRT-12X18 HA)",
        "price": 1200
      },
      {
        "name": "Happy Wedding (MDF-8HRT-12X18 HW)",
        "price": 1200
      },
      {
        "name": "Happy Birthday (MDF-8HRT-12X18 HB)",
        "price": 1200
      }
    ],
    "sizes": [
      "12x18 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 8,
    "modelNumber": "MDF-8HRT-12X18",
    "description": "Sublimation MDF frame with top cutout title and 8 hanging heart-shaped photo slots",
    "needsVerification": false,
    "notes": "Catalogue PAGE-49",
    "sourcePage": 51
  },
  {
    "name": "12 PIC HEART SUBLIMATION CLOCK",
    "price": 1200,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14x14 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 13,
    "modelNumber": "MDF - SUB - 12 HRT CLOCK",
    "description": "14x14 inches round clock with 12 heart-shaped sublimation photo slots surrounding the central dial",
    "needsVerification": false,
    "notes": "Catalogue PAGE-50; 12 heart photos + 1 center clock dial photo",
    "sourcePage": 52
  },
  {
    "name": "12 PIC CIRCLE SUBLIMATION CLOCK",
    "price": 1200,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14x14 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 13,
    "modelNumber": "MDF - SUB - 12 CIR CLOCK",
    "description": "14x14 inches round clock with 12 circular sublimation photo slots surrounding the central dial",
    "needsVerification": false,
    "notes": "Catalogue PAGE-50; 12 circular photos + 1 center clock dial photo",
    "sourcePage": 52
  },
  {
    "name": "15 HEARTS 13X13 SUBLIMATION",
    "price": 1100,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "13x13 inches"
    ],
    "colors": [
      "Black with Red accent hearts"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 15,
    "modelNumber": "MDF - SUB - 15 HRT - 13X13",
    "description": "13x13 inches heart-shaped collage sublimation MDF frame with 15 photo hearts and center plaque",
    "needsVerification": false,
    "notes": "Catalogue PAGE-50",
    "sourcePage": 52
  },
  {
    "name": "15 HEARTS 18X16 SUBLIMATION",
    "price": 1400,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "18x16 inches"
    ],
    "colors": [
      "Black with Red accent hearts"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 15,
    "modelNumber": "MDF - SUB - 15 HRT - 18X16",
    "description": "18x16 inches large heart-shaped collage sublimation MDF frame with 15 photo hearts and center plaque",
    "needsVerification": false,
    "notes": "Catalogue PAGE-50",
    "sourcePage": 52
  },
  {
    "name": "MDF TREE SUBLIMATION",
    "price": 1300,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14x18 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 9,
    "modelNumber": "MDF - SUB - TF",
    "description": "14x18 inches family tree cutout MDF frame with 9 rectangular photo frames on branches",
    "needsVerification": false,
    "notes": "Catalogue PAGE-51",
    "sourcePage": 53
  },
  {
    "name": "HEART TREE MDF SUBLIMATION",
    "price": 1300,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "11x18 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 10,
    "modelNumber": "MDF - SUB - HRT TREE",
    "description": "11x18 inches standing tree cutout with 10 hanging heart sublimation pendants/charms on base",
    "needsVerification": false,
    "notes": "Catalogue PAGE-51",
    "sourcePage": 53
  },
  {
    "name": "12 PICS RECTANGLE CLOCK SUBLIMATION",
    "price": 1300,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "12x18 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 12,
    "modelNumber": "MDF - SUB - 12 PIC REC CLOCK",
    "description": "12x18 inches wall clock with 12 rectangular photo frames surrounding central clock dial",
    "needsVerification": false,
    "notes": "Catalogue PAGE-51",
    "sourcePage": 53
  },
  {
    "name": "10 PIC SUBLIMATION MDF FRAMES",
    "price": 1200,
    "category": "Sublimation MDF Frames",
    "variants": [
      {
        "name": "10 PIC HAPPY WEDDING (MDF-SUB-10PIC HW)",
        "price": 1200
      },
      {
        "name": "10 PIC HAPPY BIRTHDAY (MDF-SUB-10PIC HBD)",
        "price": 1200
      },
      {
        "name": "10 PIC HAPPY ANNIVERSARY (MDF-SUB-10PIC HA)",
        "price": 1200
      }
    ],
    "sizes": [],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 10,
    "modelNumber": "MDF-SUB-10PIC",
    "description": "Sublimation collage frame with 10 rectangular photos surrounding centerpiece title",
    "needsVerification": false,
    "notes": "Catalogue PAGE-52",
    "sourcePage": 54
  },
  {
    "name": "12-6 CLOCK MDF SUBLIMATION - 18X18 inches",
    "price": 1500,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "18X18 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 8,
    "modelNumber": "MDF-SUB-12-6 CLOCK - 18X18 inches",
    "description": "Large 18x18 inches round clock featuring big 12 and 6 numeric cutouts and 8 circular photo slots",
    "needsVerification": false,
    "notes": "Catalogue PAGE-52",
    "sourcePage": 54
  },
  {
    "name": "12-6 CLOCK MDF SUBLIMATION - 14X14 inches",
    "price": 1100,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14X14 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 8,
    "modelNumber": "MDF-SUB-12-6 CLOCK - 14X14 inches",
    "description": "14x14 inches round clock featuring big 12 and 6 numeric cutouts and 8 circular photo slots",
    "needsVerification": false,
    "notes": "Catalogue PAGE-52",
    "sourcePage": 54
  },
  {
    "name": "5 PIC SUBLIMATION MDF FRAMES - 5",
    "price": 1100,
    "category": "Sublimation MDF Frames",
    "variants": [
      {
        "name": "5 PIC Happy Birthday",
        "price": 1100
      },
      {
        "name": "5 PIC Happy Anniversary",
        "price": 1100
      },
      {
        "name": "5 PIC Happy Wedding",
        "price": 1100
      }
    ],
    "sizes": [],
    "colors": [
      "Black with Red accent hearts"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 5,
    "modelNumber": null,
    "description": "Cursive title MDF wall frame with 5 hanging tilted rectangular photo frames with small red hearts",
    "needsVerification": false,
    "notes": "Catalogue PAGE-53",
    "sourcePage": 55
  },
  {
    "name": "MULTI HEARTS 14X18 - CUTOUT",
    "price": 1500,
    "category": "Laminated Photo MDF Frame",
    "variants": [],
    "sizes": [
      "14X18 inches"
    ],
    "colors": [
      "Black with Red accent hearts"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 12,
    "modelNumber": null,
    "description": "Multi hearts laminated photo cutout frame with 1 large center heart and 11 outer hearts",
    "needsVerification": false,
    "notes": "Catalogue PAGE-53",
    "sourcePage": 55
  },
  {
    "name": "MULTI HEARTS 12X15 CUTOUT",
    "price": 1100,
    "category": "Laminated Photo MDF Frame",
    "variants": [],
    "sizes": [
      "12X15 inches"
    ],
    "colors": [
      "Black with Red accent hearts"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 14,
    "modelNumber": null,
    "description": "Multi hearts laminated photo cutout frame with center heart and surrounding heart collage",
    "needsVerification": false,
    "notes": "Catalogue PAGE-53",
    "sourcePage": 55
  },
  {
    "name": "17 PIC Circle - 18 X 18 inches",
    "price": 1500,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "18 X 18 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 17,
    "modelNumber": null,
    "description": "Large circular MDF grid frame containing 17 sublimation photo slots",
    "needsVerification": false,
    "notes": "Catalogue PAGE-54; MDF Circle Frame",
    "sourcePage": 56
  },
  {
    "name": "17 PIC Circle - 14 X 14 inches",
    "price": 1100,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14 X 14 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 17,
    "modelNumber": null,
    "description": "14x14 inches circular MDF grid frame containing 17 sublimation photo slots",
    "needsVerification": false,
    "notes": "Catalogue PAGE-54; MDF Circle Frame",
    "sourcePage": 56
  },
  {
    "name": "4 SQUARE MDF SUBLIMATION",
    "price": 900,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14x14 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 4,
    "modelNumber": null,
    "description": "Diamond layout MDF frame with center clock and 4 square sublimation photo slots",
    "needsVerification": false,
    "notes": "Catalogue PAGE-54",
    "sourcePage": 56
  },
  {
    "name": "SPINNER MDF SUBLIMATION",
    "price": 800,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14x14 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 9,
    "modelNumber": null,
    "description": "Pinwheel/spinner floral motif MDF sublimation frame with 1 center circle and 8 teardrop petal photos",
    "needsVerification": false,
    "notes": "Catalogue PAGE-54",
    "sourcePage": 56
  },
  {
    "name": "18 INCH DIAMOND MDF FRAME",
    "price": 1500,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "18 inch"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 13,
    "modelNumber": null,
    "description": "18 inch diamond lattice sublimation MDF frame holding 13 diamond photo tiles",
    "needsVerification": false,
    "notes": "Catalogue PAGE-55",
    "sourcePage": 57
  },
  {
    "name": "14 INCH DIAMOND MDF FRAME",
    "price": 1000,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14 inch"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 13,
    "modelNumber": null,
    "description": "14 inch diamond lattice sublimation MDF frame holding 13 diamond photo tiles",
    "needsVerification": false,
    "notes": "Catalogue PAGE-55",
    "sourcePage": 57
  },
  {
    "name": "LOVE - 5 PHOTO INSERT FRAME",
    "price": 900,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "12x18 inches"
    ],
    "colors": [
      "Black with Red heart"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 5,
    "modelNumber": null,
    "description": "12x18 inches 'Love' word cutout frame with 5 hanging photo inserts (Pic Size 6.3x8.7 cm each)",
    "needsVerification": false,
    "notes": "Catalogue PAGE-55; Pic Size - 6.3x8.7 cm 5-nos",
    "sourcePage": 57
  },
  {
    "name": "6 CUBES MDF FRAME",
    "price": 1200,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "12x18 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 6,
    "modelNumber": null,
    "description": "12x18 inches geometric overlapping isometric cube frame holding 6 sublimation photos",
    "needsVerification": false,
    "notes": "Catalogue PAGE-56",
    "sourcePage": 58
  },
  {
    "name": "3-HEARTS - 12inches (Standard)",
    "price": 500,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "12 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 3,
    "modelNumber": null,
    "description": "3 interconnected hearts cutout photo frame",
    "needsVerification": false,
    "notes": "Catalogue PAGE-56; Flat / single tier variant",
    "sourcePage": 58
  },
  {
    "name": "3-HEARTS - 12inches (Layered)",
    "price": 700,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "12 inches"
    ],
    "colors": [
      "Red border"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 3,
    "modelNumber": null,
    "description": "3 interconnected hearts cutout photo frame with red layered border",
    "needsVerification": false,
    "notes": "Catalogue PAGE-56; Multi-layered border variant",
    "sourcePage": 58
  },
  {
    "name": "SPARROW TREE",
    "price": 1000,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14x14 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 8,
    "modelNumber": null,
    "description": "14x14 inches tree silhouette frame with sparrow birds and 8 photo slots",
    "needsVerification": false,
    "notes": "Catalogue PAGE-56",
    "sourcePage": 58
  },
  {
    "name": "7 PIC MDF CLOCK",
    "price": 1200,
    "category": "Sublimation MDF Frames",
    "variants": [],
    "sizes": [
      "14x14 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 7,
    "modelNumber": null,
    "description": "14x14 inches 3x3 grid frame with 7 square photo slots, 1 clock module square, and connectors",
    "needsVerification": false,
    "notes": "Catalogue PAGE-56",
    "sourcePage": 58
  },
  {
    "name": "MDF CALENDAR",
    "price": 600,
    "category": "MDF Calendar",
    "variants": [],
    "sizes": [
      "8x8 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "8x8 inches customized MDF perpetual calendar with rotating date rings and custom photo",
    "needsVerification": false,
    "notes": "Catalogue PAGE-57",
    "sourcePage": 59
  },
  {
    "name": "RECTANGLE HEART COLLAGE CUTOUT",
    "price": 1400,
    "category": "Special Cutouts MDF",
    "variants": [],
    "sizes": [
      "18x15 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 32,
    "modelNumber": "32 PIC REC HRT COLLAGE",
    "description": "18x15 inches collage cutout forming a heart outline from 32 rectangular photos",
    "needsVerification": false,
    "notes": "Catalogue PAGE-57; Mask file provided, editing should be done at workplace",
    "sourcePage": 59
  },
  {
    "name": "MOON PHOTO COLLAGE",
    "price": 1300,
    "category": "Special Cutouts MDF",
    "variants": [],
    "sizes": [
      "14x12 inches"
    ],
    "colors": [
      "Blue / Night Sky"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 24,
    "modelNumber": "MOON COLLAGE",
    "description": "14x12 inches crescent moon photo collage cutout with hanging 'Love You To The Moon AND Back' center medallion",
    "needsVerification": false,
    "notes": "Catalogue PAGE-57; Mask file provided, editing should be done at workplace",
    "sourcePage": 59
  },
  {
    "name": "A4-BG COLLAGE CUT OUT",
    "price": 1200,
    "category": "MDF - BG Collage Cutout",
    "variants": [],
    "sizes": [
      "Collage print size W 11 X 8 inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 25,
    "modelNumber": null,
    "description": "MDF wooden standy featuring A4 background collage grid and 3D foreground standing figure cutout",
    "needsVerification": false,
    "notes": "Catalogue PAGE-58; Print size W 11 X 8 inch",
    "sourcePage": 60
  },
  {
    "name": "A3-BG COLLAGE CUT OUT",
    "price": 1800,
    "category": "MDF - BG Collage Cutout",
    "variants": [],
    "sizes": [
      "Collage print size W 16.5 X 11.5 inch"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 25,
    "modelNumber": null,
    "description": "MDF wooden standy featuring A3 background collage grid and 3D foreground standing figure cutout",
    "needsVerification": false,
    "notes": "Catalogue PAGE-58; Print size W 16.5 X 11.5 inch",
    "sourcePage": 60
  },
  {
    "name": "ALPHABET COLLAGE CUTOUT",
    "price": 800,
    "category": "Alphabet Collage Cutout",
    "variants": [
      {
        "name": "Alphabet A (ALB-A)",
        "price": 800
      },
      {
        "name": "Alphabet B (ALB-B)",
        "price": 800
      },
      {
        "name": "Alphabet C (ALB-C)",
        "price": 800
      },
      {
        "name": "Alphabet D (ALB-D)",
        "price": 800
      },
      {
        "name": "Alphabet E (ALB-E)",
        "price": 800
      },
      {
        "name": "Alphabet F (ALB-F)",
        "price": 800
      },
      {
        "name": "Alphabet G (ALB-G)",
        "price": 800
      },
      {
        "name": "Alphabet H (ALB-H)",
        "price": 800
      },
      {
        "name": "Alphabet I (ALB-I)",
        "price": 800
      },
      {
        "name": "Alphabet J (ALB-J)",
        "price": 800
      },
      {
        "name": "Alphabet K (ALB-K)",
        "price": 800
      },
      {
        "name": "Alphabet L (ALB-L)",
        "price": 800
      },
      {
        "name": "Alphabet M (ALB-M)",
        "price": 800
      },
      {
        "name": "Alphabet N (ALB-N)",
        "price": 800
      },
      {
        "name": "Alphabet O (ALB-O)",
        "price": 800
      },
      {
        "name": "Alphabet P (ALB-P)",
        "price": 800
      },
      {
        "name": "Alphabet Q (ALB-Q)",
        "price": 800
      },
      {
        "name": "Alphabet R (ALB-R)",
        "price": 800
      },
      {
        "name": "Alphabet S (ALB-S)",
        "price": 800
      },
      {
        "name": "Alphabet T (ALB-T)",
        "price": 800
      },
      {
        "name": "Alphabet U (ALB-U)",
        "price": 800
      },
      {
        "name": "Alphabet V (ALB-V)",
        "price": 800
      },
      {
        "name": "Alphabet W (ALB-W)",
        "price": 800
      },
      {
        "name": "Alphabet X (ALB-X)",
        "price": 800
      },
      {
        "name": "Alphabet Y (ALB-Y)",
        "price": 800
      },
      {
        "name": "Alphabet Z (ALB-Z)",
        "price": 800
      }
    ],
    "sizes": [
      "12x12 inches"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 7,
    "modelNumber": "ALB-A to ALB-Z",
    "description": "12x12 inches alphabet monogram collage cutout standy. All alphabets A through Z available.",
    "needsVerification": false,
    "notes": "Catalogue PAGE-58; Mask files provided (A-H, I-P, Q-Z)",
    "sourcePage": 60
  },
  {
    "name": "MEDAL 2.5 INCH",
    "price": 200,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "2.5 inch"
    ],
    "colors": [
      "Gold"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Customized award medal with ribbon, 2.5 inch diameter",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Red neck ribbon included",
    "sourcePage": 61
  },
  {
    "name": "MEDAL 3 INCH",
    "price": 300,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "3 inch"
    ],
    "colors": [
      "Gold"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Customized award medal with ribbon, 3 inch diameter",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Red neck ribbon included",
    "sourcePage": 61
  },
  {
    "name": "MMT - 63",
    "price": 400,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "10 inches"
    ],
    "colors": [
      "Gold with brown base"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 63",
    "description": "Crown wreath trophy memento with round photo insert and text plaque, 10 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59",
    "sourcePage": 61
  },
  {
    "name": "MMT - 13",
    "price": 440,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "9.5 inches"
    ],
    "colors": [
      "Gold with brown base"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 13",
    "description": "Star trophy memento with round photo insert and text plaque, 9.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Marked B80-boy star big beside base",
    "sourcePage": 61
  },
  {
    "name": "MMT - 03",
    "price": 600,
    "category": "Mementos",
    "variants": [],
    "sizes": [],
    "colors": [
      "Wood brown and gold"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 03",
    "description": "Curved wooden trophy plaque memento with gold metal plate printing/engraving",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Mask file available via QR code",
    "sourcePage": 61
  },
  {
    "name": "MMT - 55",
    "price": 400,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "8 inches"
    ],
    "colors": [
      "Wood brown and gold"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 55",
    "description": "Rectangular wooden award memento plaque with gold border plate, 8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Code C80-551/1",
    "sourcePage": 61
  },
  {
    "name": "MMT - 56",
    "price": 450,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "9.5 inches"
    ],
    "colors": [
      "Wood brown and gold"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 56",
    "description": "Rectangular wooden award memento plaque with gold border plate, 9.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Code C80-551/2",
    "sourcePage": 61
  },
  {
    "name": "MMT - 57",
    "price": 500,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "11 inches"
    ],
    "colors": [
      "Wood brown and gold"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 57",
    "description": "Rectangular wooden award memento plaque with photo insert and gold plate, 11 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Code C80-551/3",
    "sourcePage": 61
  },
  {
    "name": "MMT - 58",
    "price": 460,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "8 inches"
    ],
    "colors": [
      "Wood brown, gold, and red"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 58",
    "description": "Wooden plaque memento with red star cutout and round photo slot, 8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Code C80-510/1",
    "sourcePage": 61
  },
  {
    "name": "MMT - 59",
    "price": 280,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "7.5 inches"
    ],
    "colors": [
      "Black and gold with white round base"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 59",
    "description": "Curved award trophy on round base, 3rd prize / small size, 7.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Code C80-S9-S",
    "sourcePage": 61
  },
  {
    "name": "MMT - 60",
    "price": 300,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "8.5 inches"
    ],
    "colors": [
      "Black and gold with white round base"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 60",
    "description": "Curved award trophy on round base, 2nd prize / medium size, 8.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Code C80-S9-M",
    "sourcePage": 61
  },
  {
    "name": "MMT - 61",
    "price": 350,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "9.5 inches"
    ],
    "colors": [
      "Black and gold with white round base"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 61",
    "description": "Curved award trophy on round base, 1st prize / big size, 9.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-59; Code C80-S9-B",
    "sourcePage": 61
  },
  {
    "name": "MMT - 21",
    "price": 600,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "6x8 inches"
    ],
    "colors": [
      "Wood brown with gold plate"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 21",
    "description": "Wooden certificate of appreciation plaque memento, 6x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT - 22",
    "price": 800,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "8x10 inches"
    ],
    "colors": [
      "Wood brown with gold plate"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 22",
    "description": "Wooden certificate of appreciation plaque memento with round photo insert, 8x10 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT - 23",
    "price": 1000,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "9x12 inches"
    ],
    "colors": [
      "Wood brown with gold plate"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 23",
    "description": "Wooden certificate plaque memento, 9x12 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT - 24",
    "price": 1400,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "12x16 inches"
    ],
    "colors": [
      "Wood brown with gold plate"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 24",
    "description": "Large wooden certificate of appreciation plaque memento with photo insert, 12x16 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT - 37 - SUBLIMATION",
    "price": 1200,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "10.5x8 inches"
    ],
    "colors": [
      "Dark wood finish with gold ribbon rosette"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "MMT - 37",
    "description": "Sublimation wooden plaque memento with gold medal ribbon rosette and custom printed photos/certificate, 10.5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT - 47",
    "price": 600,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "5x8.5 inches"
    ],
    "colors": [
      "Wood brown with gold plate"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 47",
    "description": "Ornate shaped wooden memento plaque with photo insert and certificate, 5x8.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT 41",
    "price": 260,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "6 inches"
    ],
    "colors": [
      "Wood brown with flame pattern"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT 41",
    "description": "Flame shaped wooden award memento with round photo insert, 6 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT - 01",
    "price": 200,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "6x6 inches"
    ],
    "colors": [
      "Red wood finish with gold circular medal"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 01",
    "description": "Octagonal wooden plaque memento with Best Performer Award medal and photo insert, 6x6 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT - 82 - SUBLIMATION",
    "price": 1100,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "7.5x10 inches"
    ],
    "colors": [
      "Wood brown with gold emblem"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 82",
    "description": "Sublimation wooden plaque memento with diploma certificate and metal emblem crest, 7.5x10 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60; Mask file available via QR code",
    "sourcePage": 62
  },
  {
    "name": "MMT - 44",
    "price": 200,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "6 inches"
    ],
    "colors": [
      "Wood brown with blue and gold accents"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 44",
    "description": "Star Performer Employee of the Year wooden trophy memento, 6 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT - 45",
    "price": 240,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "7 inches"
    ],
    "colors": [
      "Wood brown with blue and gold accents"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 45",
    "description": "Star Performer Employee of the Year wooden trophy memento, 7 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "MMT - 46",
    "price": 280,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "7.5 inches"
    ],
    "colors": [
      "Wood brown with blue and gold accents"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "MMT - 46",
    "description": "Star Performer Employee of the Year wooden trophy memento, 7.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60",
    "sourcePage": 62
  },
  {
    "name": "ACRYLIC DISPLAY HOLDERS",
    "price": 100,
    "category": "Acrylic Display",
    "variants": [
      {
        "name": "2x3 inches VISITING CARD SIZE",
        "price": 100
      },
      {
        "name": "3.5X5 inches POST CARD SIZE",
        "price": 180
      },
      {
        "name": "4X6 inches MAXI SIZE",
        "price": 240
      },
      {
        "name": "6X8 inches A5 SIZE",
        "price": 440
      },
      {
        "name": "8.25 X11.75 inches A4 SIZE",
        "price": 700
      }
    ],
    "sizes": [
      "2x3 inches VISITING CARD SIZE",
      "3.5X5 inches POST CARD SIZE",
      "4X6 inches MAXI SIZE",
      "6X8 inches A5 SIZE",
      "8.25 X11.75 inches A4 SIZE"
    ],
    "colors": [
      "Clear acrylic"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Clear slant acrylic display stands / sign holders for QR codes, menus, visiting cards, and photos",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60; Courier charges: 2x3 (\u20b960), 3.5x5 (\u20b960), 4x6 (\u20b960), 6x8 (\u20b9100), 8.25x11.75 (\u20b9150)",
    "sourcePage": 62
  },
  {
    "name": "2 mm Acrylic QR stand",
    "price": 150,
    "category": "Acrylic Display",
    "variants": [
      {
        "name": "6x4",
        "price": 150
      },
      {
        "name": "6x9",
        "price": 320
      },
      {
        "name": "7x10",
        "price": 420
      },
      {
        "name": "8x12",
        "price": 580
      }
    ],
    "sizes": [
      "6x4",
      "6x9",
      "7x10",
      "8x12"
    ],
    "colors": [
      "Clear acrylic"
    ],
    "additionalCharges": {
      "courier": null,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "2 mm Acrylic QR stand for QR codes, menus, or photo display",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-60; Courier Extra; Photo print Extra Charge",
    "sourcePage": 62
  },
  {
    "name": "MMT - 75",
    "price": 500,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "8 inches"
    ],
    "colors": [
      "Wood brown with gold plate"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 75",
    "description": "Octagonal wooden plaque memento Certificate of Service, 8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-61; Has space to replace with your logo",
    "sourcePage": 63
  },
  {
    "name": "MMT - 76",
    "price": 1100,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "11 inches"
    ],
    "colors": [
      "Wood brown with ornate gold/white frame"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 76",
    "description": "Ornate carved wooden plaque memento Certificate of Participation, 11 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-61; Code S80-RS-57-small",
    "sourcePage": 63
  },
  {
    "name": "MMT - 77",
    "price": 1300,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "13 inches"
    ],
    "colors": [
      "Wood brown with ornate gold/white frame"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 77",
    "description": "Large ornate carved wooden plaque memento Certificate of Participation, 13 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-61; Code S80-RS-57-medium",
    "sourcePage": 63
  },
  {
    "name": "MMT - 80",
    "price": 900,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "11.5 inches"
    ],
    "colors": [
      "Wood brown with gold arch frame"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 80",
    "description": "Curved wooden plaque memento Certificate of Appreciation, 11.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-61; Code M80-812/3",
    "sourcePage": 63
  },
  {
    "name": "MMT - 81",
    "price": 1200,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "11.5 inches"
    ],
    "colors": [
      "Wood brown with horizontal gold plate"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 81",
    "description": "Horizontal wooden plaque award memento Award for Best Employee, 11.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-61; Code M80-564/3",
    "sourcePage": 63
  },
  {
    "name": "MMT - 72",
    "price": 800,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "10 inches"
    ],
    "colors": [
      "Wood brown with gold filigree plate"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 72",
    "description": "Decorative wooden plaque memento Certificate of Appreciation, 10 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-61; Code C80-550/4",
    "sourcePage": 63
  },
  {
    "name": "MMT - 73",
    "price": 880,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "11 inches"
    ],
    "colors": [
      "Wood brown with gold filigree plate"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 73",
    "description": "Decorative wooden plaque memento Certificate of Appreciation, 11 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-61; Code C80-550/5",
    "sourcePage": 63
  },
  {
    "name": "MMT - 74",
    "price": 960,
    "category": "Mementos",
    "variants": [],
    "sizes": [
      "12 inches"
    ],
    "colors": [
      "Wood brown with gold filigree plate"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "MMT - 74",
    "description": "Decorative wooden plaque memento Certificate of Appreciation, 12 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-61; Code C80-550/6",
    "sourcePage": 63
  },
  {
    "name": "COLOUR CRYSTAL CUBES",
    "price": 600,
    "category": "Crystals",
    "variants": [
      {
        "name": "4x4x6",
        "price": 600
      },
      {
        "name": "5x5x8",
        "price": 900
      },
      {
        "name": "6x6x10",
        "price": 1400
      },
      {
        "name": "12x8x5",
        "price": 2400
      }
    ],
    "sizes": [
      "4x4x6",
      "5x5x8",
      "6x6x10",
      "12x8x5"
    ],
    "colors": [
      "Full color photo print"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 3,
    "modelNumber": null,
    "description": "Colour crystal cubes customized with multi-sided photo printing",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-62; Courier charges: 4x4x6 (\u20b960), 5x5x8 (\u20b980), 6x6x10 (\u20b9100), 12x8x5 (\u20b9150)",
    "sourcePage": 64
  },
  {
    "name": "RADIUM PHOTO FRAME",
    "price": 400,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "6x4 inches",
        "price": 400
      },
      {
        "name": "6x8 inches",
        "price": 600
      },
      {
        "name": "8x10 inches",
        "price": 900
      },
      {
        "name": "12x8 inches",
        "price": 1000
      },
      {
        "name": "12x10 inches",
        "price": 1100
      },
      {
        "name": "10x15 inches",
        "price": 1300
      }
    ],
    "sizes": [
      "6x4 inches",
      "6x8 inches",
      "8x10 inches",
      "12x8 inches",
      "12x10 inches",
      "10x15 inches"
    ],
    "colors": [
      "Wood brown frame with radium glow effect"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Radium photo frame - only in pitch dark you can see the glowing effect",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-62; Courier charges: 6x4 (\u20b960), 6x8 (\u20b980), 8x10 (\u20b9100), 12x8 (\u20b9100), 12x10 (\u20b9120), 10x15 (\u20b9150)",
    "sourcePage": 64
  },
  {
    "name": "4x6 inch CRYSTALS with LED wooden base",
    "price": 3600,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "4x6 inch"
    ],
    "colors": [
      "Clear crystal with warm light wooden base"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "4x6 inch crystal plaque with engraved photos/text and illuminated LED wooden base",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-62",
    "sourcePage": 64
  },
  {
    "name": "SINGLE HEAD - 4 X 4 X 6 cm",
    "price": 700,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "4 X 4 X 6 cm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "3D laser engraved crystal cube with single head portrait, 4x4x6 cm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "SINGLE HEAD - 5 X 5 X 8 cm",
    "price": 1100,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "5 X 5 X 8 cm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "3D laser engraved crystal cube with single head portrait, 5x5x8 cm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "SINGLE HEAD - 6 X 6 X 10 cm",
    "price": 1800,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "6 X 6 X 10 cm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "3D laser engraved crystal cube with single head portrait, 6x6x10 cm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "SINGLE HEAD - 12X 8X 6 cm",
    "price": 3000,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "12X 8X 6 cm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Large 3D laser engraved crystal cube with single head portrait, 12x8x6 cm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "DOUBLE HEAD - 4 X 4 X 6 cm",
    "price": 800,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "4 X 4 X 6 cm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "3D laser engraved crystal cube with double head portrait, 4x4x6 cm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "DOUBLE HEAD - 5 X 5 X 8 cm",
    "price": 1200,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "5 X 5 X 8 cm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "3D laser engraved crystal cube with double head portrait, 5x5x8 cm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "DOUBLE HEAD - 6 X 6 X 10 cm",
    "price": 1900,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "6 X 6 X 10 cm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "3D laser engraved crystal cube with double head portrait, 6x6x10 cm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "DOUBLE HEAD - 12X 8X 6 cm",
    "price": 3100,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "12X 8X 6 cm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "Large 3D laser engraved crystal cube with double head portrait, 12x8x6 cm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "SINGLE HEAD - 6 X 8 X 3 cm",
    "price": 900,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "6 X 8 X 3 cm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "3D laser engraved crystal flat block with single head portrait, 6x8x3 cm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "3D CRYSTAL (TOWER - B) - 150 X 50 X 50 mm",
    "price": 2000,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "150 X 50 X 50 mm"
    ],
    "colors": [
      "Clear 3D crystal"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "TOWER - B",
    "description": "Tall tower 3D crystal block with full body laser engraving, 150x50x50 mm",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63",
    "sourcePage": 65
  },
  {
    "name": "HEART DIAMOND - 10X 8 X 40cm",
    "price": 3600,
    "category": "3D Crystals",
    "variants": [],
    "sizes": [
      "10X 8 X 40cm"
    ],
    "colors": [
      "Clear faceted 3D crystal"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "Faceted heart diamond shape 3D crystal with FREE fixed light base included",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-63; Size printed as 10X 8 X 40cm (likely 4cm thickness); Includes FREE fixed light base with USB cord",
    "sourcePage": 65
  },
  {
    "name": "2 SLANT HEARTS CRYSTAL 10X5 inches",
    "price": 2800,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "10X5 inches"
    ],
    "colors": [
      "Clear 2D crystal"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "Double slant hearts crystal on glass base with laser engraved couple photos and wedding text, 10x5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64; Mask file available via QR code",
    "sourcePage": 66
  },
  {
    "name": "SLANT HEART CRYSTAL - 5x5.5 inches",
    "price": 1500,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "5x5.5 inches"
    ],
    "colors": [
      "Clear 2D crystal"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Slant heart crystal on glass pedestal with engraved photo and text, 5x5.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "STRAIGHT HEART CRYTAL - 5.25x5.25 inches",
    "price": 1400,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "5.25x5.25 inches"
    ],
    "colors": [
      "Clear 2D crystal"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Straight heart crystal on glass pedestal with engraved family photo, 5.25x5.25 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64; Spelled STRAIGHT HEART CRYTAL in catalogue",
    "sourcePage": 66
  },
  {
    "name": "2D HEART - 4X4 inches",
    "price": 1800,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "4X4 inches"
    ],
    "colors": [
      "Clear 2D crystal"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Heart shaped 2D crystal on pedestal with laser engraving, 4x4 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "SQUARE CRYSTAL - 3.5x3.5 inches",
    "price": 900,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "3.5x3.5 inches"
    ],
    "colors": [
      "Clear 2D crystal"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Square crystal paperweight with laser engraved photo, 3.5x3.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "ROUND PAPER WEIGHT - 3.5x3.5",
    "price": 900,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "3.5x3.5 inches"
    ],
    "colors": [
      "Clear 2D crystal"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Round crystal paperweight with engraved logo and tagline, 3.5x3.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "RECTANGLE PAPER WEIGHT - 3x4 inches",
    "price": 900,
    "category": "Crystals",
    "variants": [],
    "sizes": [
      "3x4 inches"
    ],
    "colors": [
      "Clear 2D crystal"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Rectangle crystal paperweight with beveled edges and engraved logo, 3x4 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "CRYSTAL KEY CHAIN - HEART KEY",
    "price": 400,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Clear crystal with LED illumination"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Heart shape crystal keychain with LED light and laser engraved photo",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "CRYSTAL KEY CHAIN - RECTANGLE KEY",
    "price": 400,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Clear crystal with LED illumination"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Rectangle shape crystal keychain with LED light and laser engraved photo",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "CRYSTAL KEY CHAIN - ROUND KEY",
    "price": 400,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Clear crystal with LED illumination"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Round/octagonal shape crystal keychain with LED light and laser engraved photo",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "FIXED LIGHT BASE",
    "price": 200,
    "category": "Accessories",
    "variants": [],
    "sizes": [],
    "colors": [
      "Wood finish"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Round wooden fixed LED light base with attached USB cable for crystal illumination",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "ROTATING LIGHT BASE - SMALL",
    "price": 800,
    "category": "Accessories",
    "variants": [],
    "sizes": [
      "Small"
    ],
    "colors": [
      "Silver"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Silver round rotating multi-color LED light base - small",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "ROTATING LIGHT BASE - BIG",
    "price": 980,
    "category": "Accessories",
    "variants": [],
    "sizes": [
      "Big"
    ],
    "colors": [
      "Silver"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Silver round rotating multi-color LED light base - big",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-64",
    "sourcePage": 66
  },
  {
    "name": "ARCH RECTAGLE 4 X 5 - Inches",
    "price": 900,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4 X 5 Inches"
    ],
    "colors": [
      "Clear crystal (can do in colour for same price)"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "01",
    "description": "Arch rectangle crystal award, weight 380gm, 4x5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-65; Weight: 380gm; All models can be done in colour for the same price; Mask file via QR code",
    "sourcePage": 67
  },
  {
    "name": "45 TROPHY CRYSTAL 4 X 5 - Inches",
    "price": 1100,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4 X 5 Inches"
    ],
    "colors": [
      "Clear crystal with green tinted base accent (can do in colour for same price)"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "02",
    "description": "45 Trophy crystal award with pointed top, weight 370gm, 4x5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-65; Weight: 370gm; All models can be done in colour for the same price",
    "sourcePage": 67
  },
  {
    "name": "CA - 003 - 3.5x5.5 - Inches",
    "price": 900,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "3.5x5.5 Inches"
    ],
    "colors": [
      "Clear crystal (can do in colour for same price)"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "03",
    "description": "CA - 003 Star Performer Employee of the Year crystal award, weight 300gm, 3.5x5.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-65; Weight: 300gm; All models can be done in colour for the same price",
    "sourcePage": 67
  },
  {
    "name": "HEXAGON 5 X 5 - Inches",
    "price": 1100,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5 X 5 Inches"
    ],
    "colors": [
      "Clear crystal (can do in colour for same price)"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "04",
    "description": "Hexagon shape crystal award on crystal base, weight 450gm, 5x5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-65; Weight: 450gm; All models can be done in colour for the same price",
    "sourcePage": 67
  },
  {
    "name": "46 TROPHY CRYSTAL 4 X 6 - inches",
    "price": 1000,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4 X 6 inches"
    ],
    "colors": [
      "Clear crystal with black base (can do in colour for same price)"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "05",
    "description": "46 Trophy crystal award on black base, weight 360gm, 4x6 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-65; Weight: 360gm; All models can be done in colour for the same price",
    "sourcePage": 67
  },
  {
    "name": "MOON CUT 5 x 7 - Inches",
    "price": 1100,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5 x 7 Inches"
    ],
    "colors": [
      "Clear crystal (can do in colour for same price)"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "06",
    "description": "Moon cut curved crystal award on crystal pedestal, weight 500gm, 5x7 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-65; Weight: 500gm; All models can be done in colour for the same price",
    "sourcePage": 67
  },
  {
    "name": "DIAMOND CUT CIRCLE 5 X 5 - inches",
    "price": 1300,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5 X 5 inches"
    ],
    "colors": [
      "Clear faceted crystal (can do in colour for same price)"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "07",
    "description": "Diamond cut circular faceted crystal award on pedestal, weight 530gm, 5x5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-65; Weight: 530gm; All models can be done in colour for the same price",
    "sourcePage": 67
  },
  {
    "name": "2D ROUND 5X5 - inches",
    "price": 1200,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5X5 inches"
    ],
    "colors": [
      "Clear crystal with faceted rim (can do in colour for same price)"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "08",
    "description": "2D round crystal award with textured beveled rim on pedestal, weight 600gm, 5x5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-65; Weight: 600gm; All models can be done in colour for the same price",
    "sourcePage": 67
  },
  {
    "name": "MOON CIRCLE 6 X 6 - inches",
    "price": 1400,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6 X 6 inches"
    ],
    "colors": [
      "Clear crystal with textured moon rim (can do in colour for same price)"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "09",
    "description": "Moon circle crystal award with textured rim on crystal base, weight 550gm, 6x6 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-65; Weight: 550gm; All models can be done in colour for the same price",
    "sourcePage": 67
  },
  {
    "name": "SQUARE CUT 4 X 7 - inches",
    "price": 1400,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4 X 7 inches"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "10",
    "description": "Square cut beveled crystal award with blue base, weight 560gm, 4x7 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 560gm; Mask file via QR code",
    "sourcePage": 68
  },
  {
    "name": "FLAG CRYSTAL AWARD - 3 x 8 inches",
    "price": 1300,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "3 x 8 inches"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "11",
    "description": "Flag shape crystal award on blue base, weight 380gm, 3x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 380gm",
    "sourcePage": 68
  },
  {
    "name": "VICTORY AWARD 4 x 8 - INCHES",
    "price": 1300,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4 x 8 INCHES"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "12",
    "description": "Victory tapered crystal award on blue base, weight 480gm, 4x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 480gm",
    "sourcePage": 68
  },
  {
    "name": "MANGO TROPHY 5 X 8.5 - inches",
    "price": 1400,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5 X 8.5 inches"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "13",
    "description": "Mango/leaf shaped crystal trophy on blue pedestal, weight 720gm, 5x8.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 720gm",
    "sourcePage": 68
  },
  {
    "name": "CONE AWARDS 4.5 X 8 - inches",
    "price": 1300,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4.5 X 8 inches"
    ],
    "colors": [
      "Clear crystal with black round base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "14",
    "description": "Cone shaped crystal award on round black base, weight 540gm, 4.5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 540gm",
    "sourcePage": 68
  },
  {
    "name": "CRYSTAL TROPHY 4.5 X 6.5-inches",
    "price": 1300,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4.5 X 6.5-inches"
    ],
    "colors": [
      "Clear crystal on black base"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "15",
    "description": "Crystal trophy award on black rectangular base, weight 540gm, 4.5x6.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 540gm",
    "sourcePage": 68
  },
  {
    "name": "2D ROUND - 6 X 6-inches",
    "price": 1400,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6 X 6-inches"
    ],
    "colors": [
      "Clear crystal with clear pedestal"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "16",
    "description": "2D round crystal award with beveled edge on crystal pedestal, weight 840gm, 6x6 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 840gm",
    "sourcePage": 68
  },
  {
    "name": "ARC AWARD - 5 x 8-inches",
    "price": 1400,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5 x 8-inches"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "17",
    "description": "Arc top crystal award on blue base, weight 700gm, 5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 700gm",
    "sourcePage": 68
  },
  {
    "name": "BLUE SQUARE - 4 X 8-inches",
    "price": 1300,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4 X 8-inches"
    ],
    "colors": [
      "Clear crystal with blue base and diamond inset"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "18",
    "description": "Rectangular crystal award with blue base and yellow/gold diamond photo inset, weight 570gm, 4x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 570gm",
    "sourcePage": 68
  },
  {
    "name": "BLUE PILLAR CUT - 4 X 8-inches",
    "price": 1200,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4 X 8-inches"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "19",
    "description": "Slanted top blue pillar cut crystal award, weight 460gm, 4x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-66; Weight: 460gm",
    "sourcePage": 68
  },
  {
    "name": "LEAF CIRCLE - 6 X 6.5 - inches",
    "price": 1500,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6 X 6.5 - inches"
    ],
    "colors": [
      "Clear crystal"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "20",
    "description": "Circular crystal award with leaf patterned wreath edge on crystal base, weight 780gm, 6x6.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 780gm; Mask file via QR code",
    "sourcePage": 69
  },
  {
    "name": "DIAMOND CRYSTAL AWARD - 2 X 8- Inches",
    "price": 1500,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "2 X 8- Inches"
    ],
    "colors": [
      "Clear crystal with diamond top and yellow insert"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "21",
    "description": "Tall tapered crystal pillar topped with faceted crystal diamond, weight 460gm, 2x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 460gm",
    "sourcePage": 69
  },
  {
    "name": "CRYSTAL TROPHY 5 X 8 - inches",
    "price": 1500,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5 X 8 - inches"
    ],
    "colors": [
      "Clear crystal with blue curved side accent and blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "22",
    "description": "Star Service award crystal trophy with blue crescent accent and clear pedestal, weight 640gm, 5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 640gm",
    "sourcePage": 69
  },
  {
    "name": "OCTAGON BLACK BASE 6 X 7.5- inches",
    "price": 1700,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6 X 7.5- inches"
    ],
    "colors": [
      "Clear crystal with black layered base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "23",
    "description": "Octagon crystal award mounted on double layered black and clear base, weight 940gm, 6x7.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 940gm",
    "sourcePage": 69
  },
  {
    "name": "STAR CRYSTAL - 6.5 X 6.5 - inches",
    "price": 1400,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6.5 X 6.5 - inches"
    ],
    "colors": [
      "Clear crystal"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "24",
    "description": "Five-pointed star crystal award on layered crystal pedestal, weight 560gm, 6.5x6.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 560gm",
    "sourcePage": 69
  },
  {
    "name": "ROCK CRYSTAL AWARD - 3.5 x 9 - inches",
    "price": 1200,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "3.5 x 9 - inches"
    ],
    "colors": [
      "Clear crystal with faceted top"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "25",
    "description": "Faceted rock cut pointed crystal obelisk award on pedestal, weight 520gm, 3.5x9 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 520gm",
    "sourcePage": 69
  },
  {
    "name": "CUP CRYSTAL - 4 X 8 - inches",
    "price": 1600,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "4 X 8 - inches"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "26",
    "description": "Curved cup/vase shaped crystal award on blue crystal base, weight 750gm, 4x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 750gm",
    "sourcePage": 69
  },
  {
    "name": "PILLAR CUT CRYSTAL - 3.5 X 8 - inches",
    "price": 1500,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "3.5 X 8 - inches"
    ],
    "colors": [
      "Clear crystal with round dark base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "27",
    "description": "Slant-cut crystal pillar award mounted on round black/blue base, weight 700gm, 3.5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 700gm",
    "sourcePage": 69
  },
  {
    "name": "SLANT RECTANGLE - 5 X 7.5 - inches",
    "price": 1500,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5 X 7.5 - inches"
    ],
    "colors": [
      "Clear crystal with faceted top bevel"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "28",
    "description": "Slant top rectangle crystal service award on clear base, weight 700gm, 5x7.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 700gm",
    "sourcePage": 69
  },
  {
    "name": "PILLAR CIRCLE - 3 X 8.5 - Inches",
    "price": 1400,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "3 X 8.5 - Inches"
    ],
    "colors": [
      "Clear crystal with round photo medallion and blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "29",
    "description": "Tall rectangular crystal pillar with circular round photo inset and blue base, weight 500gm, 3x8.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-67; Weight: 500gm",
    "sourcePage": 69
  },
  {
    "name": "75 TROPHY CRYSTAL BIG 5.5X7.5 - Inches",
    "price": 1600,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5.5X7.5 - Inches"
    ],
    "colors": [
      "Clear crystal with black base"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "30",
    "description": "Large trophy crystal shield award on black pedestal, weight 700gm, 5.5x7.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Weight: 700gm; Mask file via QR code",
    "sourcePage": 70
  },
  {
    "name": "PEAK TROPHY 6 X 8.5 - Inches",
    "price": 1600,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6 X 8.5 - Inches"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "31",
    "description": "Peak scalloped edge crystal trophy on blue crystal base, weight 760gm, 6x8.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Weight: 760gm",
    "sourcePage": 70
  },
  {
    "name": "OCTAGON 2 BASE 6 X 7 - Inches",
    "price": 1800,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6 X 7 - Inches"
    ],
    "colors": [
      "Clear crystal with double base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "32",
    "description": "Octagon cut crystal award on double layered clear base, weight 900gm, 6x7 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Weight: 900gm",
    "sourcePage": 70
  },
  {
    "name": "2D - ROUND CRYSTAL 7 x 7 - inches",
    "price": 2000,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "7 x 7 - inches"
    ],
    "colors": [
      "Clear crystal with wreath engraving and crystal pedestal"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "33",
    "description": "Large 2D round crystal award with laurel wreath border on heavy pedestal, weight 1100gm, 7x7 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Weight: 1100gm",
    "sourcePage": 70
  },
  {
    "name": "RECTANGLE BLACK BASE 5.5 X 7.5 - Inches",
    "price": 1800,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5.5 X 7.5 - Inches"
    ],
    "colors": [
      "Clear crystal with beveled corners and black base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "34",
    "description": "Rectangular crystal award with chamfered corners on black pedestal, weight 820gm, 5.5x7.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Weight: 820gm",
    "sourcePage": 70
  },
  {
    "name": "LAMP BLUE BASE 5.5 X 8 - Inches",
    "price": 1800,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5.5 X 8 - Inches"
    ],
    "colors": [
      "Clear crystal with blue pedestal base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "35",
    "description": "Diamond lamp facet shape crystal award on blue base, weight 725gm, 5.5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Weight: 725gm",
    "sourcePage": 70
  },
  {
    "name": "FRAME AWARD 5 X 7- inches",
    "price": 2000,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5 X 7- inches"
    ],
    "colors": [
      "Clear crystal with scalloped edge on clear base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "36",
    "description": "Chiseled rock frame edge crystal award on pedestal, weight 830gm, 5x7 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Weight: 830gm",
    "sourcePage": 70
  },
  {
    "name": "EVEREST CRYSTAL 6.5 x 10 - inches",
    "price": 2000,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6.5 x 10 - inches"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "37",
    "description": "Everest peak mountain shape crystal trophy on blue crystal base, weight 860gm, 6.5x10 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Weight: 860gm",
    "sourcePage": 70
  },
  {
    "name": "FRAME AWARD 6 X 8.5 - Inches",
    "price": 2200,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6 X 8.5 - Inches"
    ],
    "colors": [
      "Clear crystal with scalloped edge on clear base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "38",
    "description": "Large chiseled rock frame edge crystal award on pedestal, weight 1040gm, 6x8.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Weight: 1040gm",
    "sourcePage": 70
  },
  {
    "name": "CA 18 - 5.5X 8-inches",
    "price": 2100,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5.5X 8-inches"
    ],
    "colors": [
      "Clear crystal with laurel wreath and blue base"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "39",
    "description": "CA 18 Oval shield crystal award with engraved wreath on blue base, weight 650gm, 5.5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-68; Model shown as CA 18; Weight: 650gm",
    "sourcePage": 70
  },
  {
    "name": "2 CIRCLES CRYSTAL 7.5x8 - inches",
    "price": 2100,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "7.5x8 - inches"
    ],
    "colors": [
      "Clear crystal with round color photo insert"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "40",
    "description": "Double circle shooting star service award crystal on pedestal, weight 1350gm, 7.5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-69; Weight: 1350gm; Mask file via QR code",
    "sourcePage": 71
  },
  {
    "name": "CA - 20 5x8 - inches",
    "price": 1800,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5x8 - inches"
    ],
    "colors": [
      "Clear crystal with black base"
    ],
    "additionalCharges": {
      "courier": 180,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "41",
    "description": "CA - 20 Certificate of Excellence crystal award on black base, weight 730gm, 5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-69; Weight: 730gm",
    "sourcePage": 71
  },
  {
    "name": "CA - 21 5x8 - inches",
    "price": 1800,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "5x8 - inches"
    ],
    "colors": [
      "Clear crystal with black base"
    ],
    "additionalCharges": {
      "courier": 180,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "42",
    "description": "CA - 21 Certificate of Excellence crystal award on bevel black base, weight 730gm, 5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-69; Weight: 730gm",
    "sourcePage": 71
  },
  {
    "name": "BCT-1 CRYSTAL TROPHY Big 2 BASE 6 x 11 - inches",
    "price": 3200,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6 x 11 - inches"
    ],
    "colors": [
      "Clear crystal with double crystal base and Star Performer plate"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "43",
    "description": "BCT-1 Large shield crystal trophy with double tiered base and Star Performer gold plaque, weight 1200gm, 6x11 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-69; Weight: 1200gm; Model BCT-1",
    "sourcePage": 71
  },
  {
    "name": "BCT-2 CRYSTAL TROPHY Big BLUE BASE - 6.5 x 11.5 inches",
    "price": 2800,
    "category": "Crystal Awards",
    "variants": [],
    "sizes": [
      "6.5 x 11.5 inches"
    ],
    "colors": [
      "Clear crystal with blue base"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "44",
    "description": "BCT-2 Large faceted crystal trophy on blue crystal base, weight 1070gm, 6.5x11.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-69; Weight: 1070gm; Model BCT-2",
    "sourcePage": 71
  },
  {
    "name": "6x4 - WOOD ENGRAVING",
    "price": 500,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "6x4 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 6 X 4",
    "description": "Custom laser engraved wooden photo plaque, 6x4 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70",
    "sourcePage": 72
  },
  {
    "name": "5x7 - WOOD ENGRAVING",
    "price": 700,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "5x7 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 5 X 7",
    "description": "Custom laser engraved wooden photo plaque with inspirational quote/photo, 5x7 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70",
    "sourcePage": 72
  },
  {
    "name": "6x8 - WOOD ENGRAVING",
    "price": 900,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "6x8 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 6 X 8",
    "description": "Custom laser engraved wooden photo plaque with quote/photo, 6x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70",
    "sourcePage": 72
  },
  {
    "name": "10x8 - WOOD ENGRAVING",
    "price": 1300,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "10x8 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 10 X 8",
    "description": "Custom laser engraved wooden portrait plaque, 10x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70",
    "sourcePage": 72
  },
  {
    "name": "12x8 - WOOD ENGRAVING",
    "price": 1600,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "12x8 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 12 X 8",
    "description": "Custom laser engraved wooden couple portrait plaque, 12x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70",
    "sourcePage": 72
  },
  {
    "name": "18x12 - WOOD ENGRAVING",
    "price": 3600,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "18x12 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 200,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 12 X 18",
    "description": "Large retirement / memento laser engraved wooden plaque, 18x12 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70; Model printed as WO - 12 X 18",
    "sourcePage": 72
  },
  {
    "name": "KEY-22 HEART KEY SINGLE SIDE",
    "price": 200,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "KEY-22",
    "description": "Heart shape wooden keychain with single side photo engraving",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70; For double side engraving charges extra \u20b9100/-; All wood key mask via QR code",
    "sourcePage": 72
  },
  {
    "name": "KEY-21 LONG RECTANGLE KEY SINGLE SIDE",
    "price": 200,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "KEY-21",
    "description": "Long rectangle shape wooden keychain with single side photo engraving",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70; For double side engraving charges extra \u20b9100/-",
    "sourcePage": 72
  },
  {
    "name": "KEY-23 DOUBLE HEART KEY SINGLE SIDE",
    "price": 200,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "KEY-23",
    "description": "Double heart shape wooden keychain with single side photo engraving",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70; For double side engraving charges extra \u20b9100/-",
    "sourcePage": 72
  },
  {
    "name": "KEY-24 OVAL KEY SINGLE SIDE",
    "price": 200,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "KEY-24",
    "description": "Oval shape wooden keychain with single side photo engraving",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70; For double side engraving charges extra \u20b9100/-",
    "sourcePage": 72
  },
  {
    "name": "KEY-25 BIG RECTANGLE KEY SINGLE SIDE",
    "price": 200,
    "category": "Keychains",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "KEY-25",
    "description": "Big rectangle shape wooden keychain with single side photo engraving",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-70; For double side engraving charges extra \u20b9100/-",
    "sourcePage": 72
  },
  {
    "name": "zig zag wood 8.5x5.5 inches",
    "price": 1100,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "8.5x5.5 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - ZZ",
    "description": "Zig zag wave edge wooden plaque with laser engraved couple photo, 8.5x5.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-71; Mask file via QR code",
    "sourcePage": 73
  },
  {
    "name": "6X7 HEART WOOD",
    "price": 1000,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "6x7 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 6X7 HR",
    "description": "Heart shape wooden plaque with photo engraving, 6x7 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-71",
    "sourcePage": 73
  },
  {
    "name": "10X8 HEART WOOD",
    "price": 1600,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "10x8 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 10X8 HR",
    "description": "Heart shape wooden plaque with couple photo engraving, 10x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-71",
    "sourcePage": 73
  },
  {
    "name": "SINGLE HEART WOOD 8x10 inches",
    "price": 1800,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "8x10 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - SI - HR",
    "description": "Heart shape wooden cutout on 'Happy Married Life' stand with couple photo engraving, 8x10 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-71",
    "sourcePage": 73
  },
  {
    "name": "2 HEART WOOD 13x8 inches",
    "price": 2400,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "13x8 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - DU - HR",
    "description": "Dual heart wooden plaque on 'Happy WEDDING' stand with photo and names engraved, 13x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-71",
    "sourcePage": 73
  },
  {
    "name": "I LOVE YOU WOOD - 5.5x6.5 in",
    "price": 1400,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "5.5x6.5 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "'I \u2764\ufe0f You' header cutout wooden plaque with laser engraved photo, 5.5x6.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-71",
    "sourcePage": 73
  },
  {
    "name": "GUITAR WOOD 15.5x7 in",
    "price": 2400,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "15.5x7 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - GUITAR",
    "description": "Electric guitar shape wooden plaque with photo and 'Happy Anniversary' engraving, 15.5x7 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-71",
    "sourcePage": 73
  },
  {
    "name": "10 INCH ROUND WOOD ENGRAVING CLOCK",
    "price": 1900,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "10 inch"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 120,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - CL - 10X10",
    "description": "10 inch round wooden wall/desk clock with engraved photo, numerals, and anniversary text",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-71",
    "sourcePage": 73
  },
  {
    "name": "KEY HOLDER 5x9.5 inches",
    "price": 900,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "5x9.5 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - KH",
    "description": "House shaped wooden key holder with 3 hooks, family photo, and 'HAPPY FAMILY' engraving, 5x9.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-72; Mask file via QR code",
    "sourcePage": 74
  },
  {
    "name": "PRIDE WOOD 12x6.5 inches",
    "price": 1500,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "12x6.5 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - PW",
    "description": "Scalloped edge wooden plaque with couple photo and wedding anniversary engraving, 12x6.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-72",
    "sourcePage": 74
  },
  {
    "name": "APPLE WOOD 8.5x8 inches",
    "price": 1500,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "8.5x8 inches"
    ],
    "colors": [
      "Natural wood engraving"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - APP",
    "description": "Apple shaped wooden plaque with photo and birthday wishes engraving, 8.5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-72",
    "sourcePage": 74
  },
  {
    "name": "FLOWER HEART WOOD 11.5x6.5 inches",
    "price": 1300,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "11.5x6.5 inches"
    ],
    "colors": [
      "Natural wood with color photo insert"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "WO - FH",
    "description": "Scalloped wooden plaque with heart color photo insert and laser engraved couple photo with wedding text, 11.5x6.5 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-72; Photo Size: W 4.5 X 4.5 INCH, Heart Engraving Size: W 4.5 X 3.5 INCH",
    "sourcePage": 74
  },
  {
    "name": "FRAME & 2 HEART WOOD 15.5x8 inches",
    "price": 2800,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "15.5x8 inches"
    ],
    "colors": [
      "Natural wood with color photo frame"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "WO - F & 2H",
    "description": "Wooden frame with color photo slot and two engraved wooden hearts, 15.5x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-72; Photo Size: W 3.5 X 5.5 INCH, Big Heart Engraving Size: W 6 X 4 INCH, Small Heart Engraving Size: W 2 X 1.5 INCH",
    "sourcePage": 74
  },
  {
    "name": "PHOTO and GREATINGS on WOOD",
    "price": 900,
    "category": "Wood Engraving",
    "variants": [
      {
        "name": "6 x 8",
        "price": 900
      },
      {
        "name": "12 x 8",
        "price": 1600
      },
      {
        "name": "12 x 18",
        "price": 3600
      }
    ],
    "sizes": [
      "6 x 8",
      "12 x 8",
      "12 x 18"
    ],
    "colors": [
      "Wood with color photo"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Combination of full color photo print and laser engraved greetings on wooden plaque",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-72; Courier & packing charges: 6x8 (\u20b980), 12x8 (\u20b9120), 12x18 (\u20b9200); Spelled GREATINGS in catalogue",
    "sourcePage": 74
  },
  {
    "name": "LOVE WOOD 14x8 inches",
    "price": 3600,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "14x8 inches"
    ],
    "colors": [
      "Natural wood with color photo frame"
    ],
    "additionalCharges": {
      "courier": 150,
      "packing": 0
    },
    "photoSlots": 2,
    "modelNumber": "WO - LW",
    "description": "LOVE cutout wood plaque with color photo frame, heart couple engraving, and Happy Anniversary base, 14x8 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-72; Photo Size: W 4 X 6 INCH, Heart Engraving Size: W 5.5 X 3.5 INCH, Text Heart Engraving Size: W 9 X 1.5 INCH",
    "sourcePage": 74
  },
  {
    "name": "TRIANGLE PEN STAND WITH PEN PHOTO AND TEXT ENGRAVING",
    "price": 500,
    "category": "Pen Stands",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Triangle wooden desk pen stand with pen, customized with laser engraved photo and text",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73",
    "sourcePage": 75
  },
  {
    "name": "TRIANGLE PEN STAND WITH PEN ONLY TEXT ENGRAVING",
    "price": 440,
    "category": "Pen Stands",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Triangle wooden desk pen stand with pen, customized with laser engraved text only",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73",
    "sourcePage": 75
  },
  {
    "name": "FOLDABLE PEN STAND WITH PEN",
    "price": 340,
    "category": "Pen Stands",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": "WO - PS - FD",
    "description": "Foldable easel style wooden pen stand with pen and laser engraved logo/text",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73",
    "sourcePage": 75
  },
  {
    "name": "DATE PEN STAND WITH PEN",
    "price": 900,
    "category": "Pen Stands",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 80,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - PS - DT",
    "description": "Perpetual calendar wooden date blocks with pen stand, pen, and laser engraved photo and text",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73",
    "sourcePage": 75
  },
  {
    "name": "PEN BOX - WOOD",
    "price": 240,
    "category": "Wooden Gifts",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - PBOX",
    "description": "Hinged wooden pen box with custom laser engraved portrait and wish message",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73",
    "sourcePage": 75
  },
  {
    "name": "12 X 5 INCH WOOD ENGRAVING CLOCK",
    "price": 1400,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "12 X 5 INCH"
    ],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 12 X 5 CLOCK",
    "description": "12 x 5 inch wooden clock with engraved photo, roman numerals, and text, available in horizontal or vertical orientation",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73; Available in HORIZONTAL or VERTICAL orientation",
    "sourcePage": 75
  },
  {
    "name": "NAME PLATE WOOD ENGRAVING",
    "price": 900,
    "category": "Wood Engraving",
    "variants": [],
    "sizes": [
      "12 X 4 inches"
    ],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 100,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO - 12 X 4 - NAME",
    "description": "Custom laser engraved wooden door/wall name plate with family photo and names, 12x4 inches",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73",
    "sourcePage": 75
  },
  {
    "name": "WOODEN PEN DRIVE BOX",
    "price": 500,
    "category": "Wooden Gifts",
    "variants": [],
    "sizes": [],
    "colors": [
      "Natural wood"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": "WO-PDB-SL",
    "description": "Sliding lid wooden pen drive box with customized laser engraved portrait and message",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73",
    "sourcePage": 75
  },
  {
    "name": "3D PEN DRIVE BOX with PHOTO",
    "price": 500,
    "category": "Pen Drive Boxes",
    "variants": [],
    "sizes": [],
    "colors": [
      "White 3D box with color photo"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "3D printed pen drive box customized with color photo and names",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73; Pen drive is only for reference",
    "sourcePage": 75
  },
  {
    "name": "3D PEN DRIVE BOX with 3D TEXT",
    "price": 500,
    "category": "Pen Drive Boxes",
    "variants": [],
    "sizes": [],
    "colors": [
      "White 3D box with raised red/color 3D text"
    ],
    "additionalCharges": {
      "courier": 60,
      "packing": 0
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "3D printed pen drive box customized with raised 3D embossed lettering",
    "needsVerification": false,
    "notes": "Catalogue page: PAGE-73; Pen drive is only for reference",
    "sourcePage": 75
  },
  {
    "name": "METALLIC FRAMES",
    "price": 700,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "6X8",
        "price": 700
      },
      {
        "name": "8X10",
        "price": 960
      },
      {
        "name": "12X8",
        "price": 1100
      },
      {
        "name": "12X10",
        "price": 1200
      },
      {
        "name": "10X15",
        "price": 1200
      },
      {
        "name": "12X15",
        "price": 1300
      },
      {
        "name": "12X18",
        "price": 1400
      },
      {
        "name": "16X20",
        "price": 2600
      },
      {
        "name": "16X24",
        "price": 3000
      }
    ],
    "sizes": [
      "6X8",
      "8X10",
      "12X8",
      "12X10",
      "10X15",
      "12X15",
      "12X18",
      "16X20",
      "16X24"
    ],
    "colors": [
      "Gold",
      "Black",
      "Copper"
    ],
    "additionalCharges": {
      "courier": 80,
      "notes": "Courier extra: 6X8: \u20b980, 8X10: \u20b9100, 12X8: \u20b9100, 12X10: \u20b9120, 10X15: \u20b9150, 12X15: \u20b9180, 12X18: \u20b9200, 16X20: \u20b9300, 16X24: \u20b9400"
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Metallic frames in Gold, Black, and Copper finishes across various sizes",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-74",
    "sourcePage": 76
  },
  {
    "name": "3D LETTER PEN STAND",
    "price": 1000,
    "category": "Desk Accessories",
    "variants": [],
    "sizes": [],
    "colors": [
      "Red & Black"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Personalized 3D letter initial stand with engraved name on letter and accompanying pen holder with customized pen",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-74",
    "sourcePage": 76
  },
  {
    "name": "50mm CAMERA LENS Photo Puzzle Gift",
    "price": 500,
    "category": "Novelty Gifts",
    "variants": [],
    "sizes": [
      "50mm"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 1,
    "modelNumber": "EL-NIKKOR 50mm 1:2.8 Nikon",
    "description": "Camera lens replica photo puzzle gift that opens with aperture mechanism to reveal photo inside. Demo video QR provided. Only one piece will come.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-74",
    "sourcePage": 76
  },
  {
    "name": "18 PIC PUZZLE BOX",
    "price": 1200,
    "category": "Explosion Box",
    "variants": [],
    "sizes": [],
    "colors": [],
    "additionalCharges": {
      "courier": 80
    },
    "photoSlots": 18,
    "modelNumber": null,
    "description": "Multi-layered explosion/puzzle box featuring an outer box and nested inner box holding 18 photos. Demo video QR and mask file QR available.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-74",
    "sourcePage": 76
  },
  {
    "name": "4 FRAMES COLLAGE",
    "price": 600,
    "category": "Collage Frames",
    "variants": [
      {
        "name": "4F - BLACK",
        "price": 600
      },
      {
        "name": "4F - GOLD",
        "price": 600
      },
      {
        "name": "4F - BROWN",
        "price": 600
      },
      {
        "name": "4F - WHITE",
        "price": 600
      },
      {
        "name": "4F - SILVER",
        "price": 600
      }
    ],
    "sizes": [
      "Insert photo 6X4 Inches"
    ],
    "colors": [
      "Black",
      "Gold",
      "Brown",
      "White",
      "Silver"
    ],
    "additionalCharges": {
      "courier": 120
    },
    "photoSlots": 4,
    "modelNumber": "4F",
    "description": "4-photo collage frame for 6x4 inch photos. Photo print cost extra.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-75. Photo print cost extra.",
    "sourcePage": 77
  },
  {
    "name": "5 FRAMES COLLAGE",
    "price": 800,
    "category": "Collage Frames",
    "variants": [
      {
        "name": "5F - GD (Gold)",
        "price": 800
      },
      {
        "name": "5F - BK (Black)",
        "price": 800
      },
      {
        "name": "5F - BR (Brown)",
        "price": 800
      },
      {
        "name": "5F - SL (Silver)",
        "price": 800
      }
    ],
    "sizes": [
      "6X4 Inches (4 photos), Middle 4x4 Inches (1 photo)"
    ],
    "colors": [
      "Gold",
      "Black",
      "Brown",
      "Silver"
    ],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 5,
    "modelNumber": "5F",
    "description": "5-photo collage frame fitting four 6x4 inch photos and one middle 4x4 inch photo. Photo print cost extra.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-75. Photo print cost extra.",
    "sourcePage": 77
  },
  {
    "name": "TREE FRAMES COLLAGE",
    "price": 1100,
    "category": "Collage Frames",
    "variants": [
      {
        "name": "6TF - BK (Black)",
        "price": 1100
      },
      {
        "name": "6TF - BR (Brown)",
        "price": 1100
      },
      {
        "name": "6TF - GD (Gold)",
        "price": 1100
      },
      {
        "name": "6TF - SL (Silver)",
        "price": 1100
      }
    ],
    "sizes": [
      "6X4 inches (2 Horizontal, 2 Vertical) and 4x4 Inches (2 pics)"
    ],
    "colors": [
      "Black",
      "Brown",
      "Gold",
      "Silver"
    ],
    "additionalCharges": {
      "courier": 200
    },
    "photoSlots": 6,
    "modelNumber": "6TF",
    "description": "Tree collage frame structure with 'Best Wishes' tree trunk base. Accommodates 6 photos. Photo print cost extra.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-76. Photo print cost extra.",
    "sourcePage": 78
  },
  {
    "name": "3 - HEXAGON COLLAGE",
    "price": 600,
    "category": "Hexagon Collage Frames",
    "variants": [],
    "sizes": [
      "Each hexagon print size 5x5 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 3,
    "modelNumber": null,
    "description": "3-piece connected hexagon collage frame. Photo print cost extra.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-77. Photo print cost extra.",
    "sourcePage": 79
  },
  {
    "name": "4 - HEXAGON COLLAGE",
    "price": 800,
    "category": "Hexagon Collage Frames",
    "variants": [],
    "sizes": [
      "Each hexagon print size 5x5 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 120
    },
    "photoSlots": 4,
    "modelNumber": null,
    "description": "4-piece connected hexagon collage frame. Photo print cost extra.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-77. Photo print cost extra.",
    "sourcePage": 79
  },
  {
    "name": "5 - HEXAGON COLLAGE",
    "price": 1000,
    "category": "Hexagon Collage Frames",
    "variants": [],
    "sizes": [
      "Each hexagon print size 5x5 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 5,
    "modelNumber": null,
    "description": "5-piece connected hexagon collage frame. Photo print cost extra.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-77. Photo print cost extra.",
    "sourcePage": 79
  },
  {
    "name": "6 - HEXAGON COLLAGE",
    "price": 1200,
    "category": "Hexagon Collage Frames",
    "variants": [],
    "sizes": [
      "Each hexagon print size 5x5 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 180
    },
    "photoSlots": 6,
    "modelNumber": null,
    "description": "6-piece connected hexagon collage frame. Photo print cost extra.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-77. Photo print cost extra.",
    "sourcePage": 79
  },
  {
    "name": "7 - HEXAGON COLLAGE",
    "price": 1400,
    "category": "Hexagon Collage Frames",
    "variants": [],
    "sizes": [
      "Each hexagon print size 5x5 inches"
    ],
    "colors": [
      "Black"
    ],
    "additionalCharges": {
      "courier": 200
    },
    "photoSlots": 7,
    "modelNumber": null,
    "description": "7-piece connected hexagon collage frame. Photo print cost extra.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-77. Photo print cost extra.",
    "sourcePage": 79
  },
  {
    "name": "HALF INCH PHOTO FRAMES",
    "price": 160,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "6 x 4 (With Print)",
        "price": 160
      },
      {
        "name": "6 x 4 (Without Print)",
        "price": 100
      },
      {
        "name": "6 x 8",
        "price": 220
      },
      {
        "name": "10 x 8",
        "price": 320
      },
      {
        "name": "12 x 8",
        "price": 360
      }
    ],
    "sizes": [
      "6 x 4",
      "6 x 8",
      "10 x 8",
      "12 x 8"
    ],
    "colors": [
      "01 - HALF INCH BROWN",
      "02 - HALF INCH MAROON",
      "03 - HALF INCH WHITE",
      "04 - HALF INCH MAROON GOLD",
      "05 - HALF INCH BLACK",
      "06 - HALF INCH ANTIQUE GOLD",
      "07 - HALF INCH SILVER DESIGN",
      "08 - HALF INCH NATURAL",
      "09 - HALF INCH BLACK CHECKED",
      "10 - HALF INCH BROWN CHECKED",
      "11 - HALF INCH SILVER LINE BLACK",
      "12 - HALF INCH GOLD CHROME",
      "13 - HALF INCH GOLD ROPE"
    ],
    "additionalCharges": {
      "courier": 60,
      "notes": "Courier & packing charges: 6x4: \u20b960, 6x8: \u20b980, 10x8: \u20b9100, 12x8: \u20b9100"
    },
    "photoSlots": 1,
    "modelNumber": "Models 01 to 13",
    "description": "Half inch photo frame with print matt lamination. Available in 13 moulding stick design models.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-78",
    "sourcePage": 80
  },
  {
    "name": "MINI TWIN FRAME WITH ALL HALF INCH DESIGN STICK",
    "price": 200,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "With Print",
        "price": 200
      },
      {
        "name": "Without Print",
        "price": 160
      }
    ],
    "sizes": [
      "Mini Twin Frame"
    ],
    "colors": [
      "Available with all half inch design sticks (Models 01 to 13)"
    ],
    "additionalCharges": {
      "courier": 60
    },
    "photoSlots": 2,
    "modelNumber": null,
    "description": "Mini twin folding photo frame made using any half inch design stick model.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-78",
    "sourcePage": 80
  },
  {
    "name": "3/4 Inch PHOTO FRAMES - 1",
    "price": 180,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "6 x 4 (With Print)",
        "price": 180
      },
      {
        "name": "6 x 4 (Without Print)",
        "price": 120
      },
      {
        "name": "6 x 8",
        "price": 230
      },
      {
        "name": "10 x 8",
        "price": 340
      },
      {
        "name": "12 x 8",
        "price": 380
      }
    ],
    "sizes": [
      "6 x 4",
      "6 x 8",
      "10 x 8",
      "12 x 8"
    ],
    "colors": [
      "3/4-1 - CHECKED BROWN",
      "3/4-2 - BROWN GOLD",
      "3/4-3 - BLACK",
      "3/4-4 - GOLD LINE",
      "3/4-5 - CHECKED BLACK"
    ],
    "additionalCharges": {
      "courier": 60,
      "notes": "Courier & packing charges: 6x4: \u20b960, 6x8: \u20b980, 10x8: \u20b9100, 12x8: \u20b9100"
    },
    "photoSlots": 1,
    "modelNumber": "3/4-1 to 3/4-5",
    "description": "3/4 inch photo frames with print and matt lamination. 5 frame stick models available.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-79",
    "sourcePage": 81
  },
  {
    "name": "PENCIL ART- Digital",
    "price": 1500,
    "category": "Artist Works",
    "variants": [
      {
        "name": "12 x 8 - SINGLE HEAD",
        "price": 1500
      },
      {
        "name": "12 x 8 - TWO HEAD",
        "price": 1700
      },
      {
        "name": "12 x 18 - SINGLE HEAD",
        "price": 1900
      },
      {
        "name": "12 x 18 - TWO HEAD",
        "price": 2200
      }
    ],
    "sizes": [
      "12 x 8",
      "12 x 18"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "notes": "Courier charges: 12x8: \u20b9100, 12x18: \u20b9200"
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Digital pencil art portrait framed. Working Time: 1 Working day.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-79",
    "sourcePage": 81
  },
  {
    "name": "OIL PAINTING- Digital",
    "price": 1800,
    "category": "Artist Works",
    "variants": [
      {
        "name": "12 x 8 - SINGLE HEAD",
        "price": 1800
      },
      {
        "name": "12 x 8 - TWO HEAD",
        "price": 2000
      },
      {
        "name": "12 x 18 - SINGLE HEAD",
        "price": 2200
      },
      {
        "name": "12 x 18 - TWO HEAD",
        "price": 2400
      }
    ],
    "sizes": [
      "12 x 8",
      "12 x 18"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 100,
      "notes": "Courier charges: 12x8: \u20b9100, 12x18: \u20b9200"
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Digital oil painting portrait framed. Working Time: 2 Working days.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-79",
    "sourcePage": 81
  },
  {
    "name": "ONE INCH PHOTO FRAMES - 1",
    "price": 200,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "6 x 4 (With Print)",
        "price": 200
      },
      {
        "name": "6 x 4 (Without Print)",
        "price": 140
      },
      {
        "name": "6 x 8",
        "price": 240
      },
      {
        "name": "10 x 8",
        "price": 360
      },
      {
        "name": "12 x 8",
        "price": 400
      },
      {
        "name": "12 x 10",
        "price": 480
      },
      {
        "name": "10 x 15",
        "price": 600
      },
      {
        "name": "12 x 15",
        "price": 720
      },
      {
        "name": "12 x 18",
        "price": 800
      }
    ],
    "sizes": [
      "6 x 4",
      "6 x 8",
      "10 x 8",
      "12 x 8",
      "12 x 10",
      "10 x 15",
      "12 x 15",
      "12 x 18"
    ],
    "colors": [
      "20 - HALF INCH GOLD CHROME",
      "21 - ONE INCH BEST MAROON GOLD",
      "22 - ONE INCH BUTTON GOLD",
      "23 - ONE INCH OXFORD MAROON GOLD",
      "24 - ONE INCH CHECKED BLACK",
      "25 - ONE INCH CHECKED BROWN",
      "44 - ONE INCH ANTIQUE SILVER",
      "26 - ONE INCH MAROON",
      "27 - ONE INCH BLACK",
      "28 - ONE INCH WHITE",
      "29 - ONE INCH BROWN"
    ],
    "additionalCharges": {
      "courier": 60,
      "notes": "Courier & packing charges: 6x4: \u20b960, 6x8: \u20b980, 10x8: \u20b9100, 12x8: \u20b9100, 12x10: \u20b9120, 10x15: \u20b9150, 12x15: \u20b9180, 12x18: \u20b9200"
    },
    "photoSlots": 1,
    "modelNumber": "Models 20 to 29, 44",
    "description": "One inch photo frame with print matt lamination. 11 moulding models shown.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-80",
    "sourcePage": 82
  },
  {
    "name": "TWIN FRAMES (ONE INCH)",
    "price": 400,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "TWIN FRAME 6X4 With Print",
        "price": 400
      },
      {
        "name": "TWIN FRAME 6X4 Without Print",
        "price": 300
      },
      {
        "name": "TWIN FRAME 6X8 With Print",
        "price": 660
      },
      {
        "name": "TWIN FRAME 6X8 Without Print",
        "price": 500
      }
    ],
    "sizes": [
      "6X4",
      "6X8"
    ],
    "colors": [
      "Available in any one inch flat frame stick model except 20 & 21"
    ],
    "additionalCharges": {},
    "photoSlots": 2,
    "modelNumber": null,
    "description": "Twin folding frames made from one inch flat frame stick models (any model except 20 & 21).",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-80 & PAGE-81",
    "sourcePage": 82
  },
  {
    "name": "ONE INCH PHOTO FRAMES - 2",
    "price": 200,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "6 x 4 (With Print)",
        "price": 200
      },
      {
        "name": "6 x 4 (Without Print)",
        "price": 140
      },
      {
        "name": "6 x 8",
        "price": 240
      },
      {
        "name": "10 x 8",
        "price": 360
      },
      {
        "name": "12 x 8",
        "price": 400
      },
      {
        "name": "12 x 10",
        "price": 480
      },
      {
        "name": "10 x 15",
        "price": 600
      },
      {
        "name": "12 x 15",
        "price": 720
      },
      {
        "name": "12 x 18",
        "price": 800
      }
    ],
    "sizes": [
      "6 x 4",
      "6 x 8",
      "10 x 8",
      "12 x 8",
      "12 x 10",
      "10 x 15",
      "12 x 15",
      "12 x 18"
    ],
    "colors": [
      "31 - ONE INCH TWO LINE GOLD",
      "32 - ONE INCH SILVER VIRUS",
      "33 - ONE INCH ANTIQUE GOLD",
      "51 - ANTIQUE BLACK",
      "39 - NET BROWN",
      "41 - BLACK SINGLE LINE SILVER",
      "42 - NATURAL WOOD",
      "43 - MAROON BLOCKS",
      "46 - ONE INCH SKY BLUE",
      "47 - ONE INCH ZIGZAG GOLD LINE",
      "48 - ONE INCH SILVER GOLD",
      "50 - ONE INCH RICH MAROON"
    ],
    "additionalCharges": {
      "courier": 60,
      "notes": "Courier & packing charges: 6x4: \u20b960, 6x8: \u20b980, 10x8: \u20b9100, 12x8: \u20b9100, 12x10: \u20b9120, 10x15: \u20b9150, 12x15: \u20b9180, 12x18: \u20b9200"
    },
    "photoSlots": 1,
    "modelNumber": "Models 31, 32, 33, 39, 41, 42, 43, 46, 47, 48, 50, 51",
    "description": "One inch photo frame with print matt lamination. 12 moulding models shown.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-81",
    "sourcePage": 83
  },
  {
    "name": "1.25 to 1.5 INCH PHOTO FRAMES",
    "price": 900,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "12 x 15",
        "price": 900
      },
      {
        "name": "12 x 18",
        "price": 1080
      },
      {
        "name": "16 x 20",
        "price": 1600
      },
      {
        "name": "18 x 18",
        "price": 1620
      },
      {
        "name": "16 x 24",
        "price": 1920
      },
      {
        "name": "20 x 20",
        "price": 2000
      },
      {
        "name": "18 x 24",
        "price": 2160
      },
      {
        "name": "20 x 24",
        "price": 2400
      },
      {
        "name": "20 x 30",
        "price": 3000
      },
      {
        "name": "24 x 30",
        "price": 3600
      },
      {
        "name": "24 x 36",
        "price": 4320
      }
    ],
    "sizes": [
      "12 x 15",
      "12 x 18",
      "16 x 20",
      "18 x 18",
      "16 x 24",
      "20 x 20",
      "18 x 24",
      "20 x 24",
      "20 x 30",
      "24 x 30",
      "24 x 36"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 160,
      "notes": "Courier & packing charges: 12x15: \u20b9160, 12x18: \u20b9200, 16x20: \u20b9300, 18x18: \u20b9300, 16x24: \u20b9400, 20x20: \u20b9400, 18x24: \u20b9500, 20x24: \u20b9600, 20x30: \u20b9900, 24x30: \u20b91200, 24x36: \u20b91400"
    },
    "photoSlots": 1,
    "modelNumber": "Models 151, 152, 153, 154, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166",
    "description": "1.25 to 1.5 inch photo framing with laminated print across 15 moulding stick options.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-82",
    "sourcePage": 84
  },
  {
    "name": "1.75 to 2 INCH PHOTO FRAMES",
    "price": 1920,
    "category": "Photo Frames",
    "variants": [
      {
        "name": "16 x 20",
        "price": 1920
      },
      {
        "name": "18 x 18",
        "price": 1944
      },
      {
        "name": "16 x 24",
        "price": 2304
      },
      {
        "name": "20 x 20",
        "price": 2400
      },
      {
        "name": "18 x 24",
        "price": 2592
      },
      {
        "name": "20 x 24",
        "price": 2880
      },
      {
        "name": "20 x 30",
        "price": 3600
      },
      {
        "name": "24 x 30",
        "price": 4320
      },
      {
        "name": "24 x 36",
        "price": 5184
      }
    ],
    "sizes": [
      "16 x 20",
      "18 x 18",
      "16 x 24",
      "20 x 20",
      "18 x 24",
      "20 x 24",
      "20 x 30",
      "24 x 30",
      "24 x 36"
    ],
    "colors": [],
    "additionalCharges": {
      "courier": 300,
      "notes": "Courier & packing charges: 16x20: \u20b9300, 18x18: \u20b9300, 16x24: \u20b9400, 20x20: \u20b9400, 18x24: \u20b9500, 20x24: \u20b9600, 20x30: \u20b9900, 24x30: \u20b91200, 24x36: \u20b91400"
    },
    "photoSlots": 1,
    "modelNumber": "Models 203, 204, 205, 206, 207, 208, 209, 210, 211",
    "description": "Photo framing with print and matt laminated. Priced at Per Square inch 6rs.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-83. Rate: Per Square inch 6rs.",
    "sourcePage": 85
  },
  {
    "name": "2 to 2.50 INCH PHOTO FRAMES",
    "price": 7,
    "category": "Photo Frames",
    "variants": [],
    "sizes": [
      "Custom sizes (Per Square inch)"
    ],
    "colors": [
      "Gold ornate",
      "Brown antique ornate"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": "Models 255, 257",
    "description": "Photo framing with print and matt laminated. Heavy ornate decorative moulding. Rate: Per Square inch 7rs.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-83. Priced at \u20b97 per square inch.",
    "sourcePage": 85
  },
  {
    "name": "7 X 7 INCH GOLD CLOCK SQUARE CLOCK",
    "price": 640,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [
      "7 x 7 inch"
    ],
    "colors": [
      "Gold"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": "1308",
    "description": "7x7 inch square shaped personalized wall clock with gold border and custom photo dial",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "7 X 7 INCH GOLD CLOCK ROUND CLOCK",
    "price": 640,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [
      "7 x 7 inch"
    ],
    "colors": [
      "Gold"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": "1307",
    "description": "7x7 inch round personalized wall clock with gold border and custom photo dial",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "6.5 x 9 INCH OVAL SHAPE CLOCK",
    "price": 500,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [
      "6.5 x 9 inch"
    ],
    "colors": [],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": "497",
    "description": "6.5x9 inch oval shape personalized photo wall clock",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "8.5 INCH GOLD ROUND CLOCK",
    "price": 800,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [
      "8.5 inch"
    ],
    "colors": [
      "Gold"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": "189-PLAIN",
    "description": "8.5 inch round gold rim personalized wall clock with custom photo dial",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "10 INCH GOLD ROUND CLOCK",
    "price": 1000,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [
      "10 inch"
    ],
    "colors": [
      "Gold / Ivory"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": "659-IVORY",
    "description": "10 inch gold round personalized wall clock with custom photo dial",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "12 INCH GOLD ROUND CLOCK",
    "price": 1300,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [
      "12 inch"
    ],
    "colors": [
      "Gold / Ivory"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": "559-IVORY",
    "description": "12 inch gold round personalized wall clock with custom photo dial",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "VINAYAKA CLOCK- BROWN",
    "price": 1000,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [],
    "colors": [
      "Brown"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Lord Vinayaka / Ganesha carved design brown wall clock with round custom photo dial",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "VINAYAKA CLOCK TWO TONE GOLD",
    "price": 1000,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [],
    "colors": [
      "Two Tone Gold"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Lord Vinayaka / Ganesha carved design two tone gold wall clock with round custom photo dial",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "10 INCH GOLD SQUARE CLOCK",
    "price": 1000,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [
      "10 inch"
    ],
    "colors": [
      "Gold / Ivory"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": "589-IVORY",
    "description": "10 inch gold square personalized wall clock with custom photo dial",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "12 INCH GOLD SQUARE CLOCK",
    "price": 1300,
    "category": "Wall Clocks",
    "variants": [],
    "sizes": [
      "12 inch"
    ],
    "colors": [
      "Gold / Ivory"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": "VQ-02-IVORY",
    "description": "12 inch gold square personalized wall clock with custom photo dial",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84",
    "sourcePage": 86
  },
  {
    "name": "PRINT ON METAL SHEET WITH FRAME",
    "price": 500,
    "category": "Metal Prints",
    "variants": [
      {
        "name": "METAL SHEET 6X8-WHITE",
        "price": 500
      },
      {
        "name": "METAL SHEET 12X8-SILVER",
        "price": 700
      },
      {
        "name": "METAL SHEET 12X16-GOLD",
        "price": 1200
      }
    ],
    "sizes": [
      "6X8",
      "12X8",
      "12X16"
    ],
    "colors": [
      "White",
      "Silver",
      "Gold"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": null,
    "description": "High gloss print on metal sheet mounted in elegant wooden frame. Available in White (6x8), Silver (12x8), and Gold (12x16).",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-85",
    "sourcePage": 87
  },
  {
    "name": "PRINT ON METAL SHEET ON MARBLE FINISH MDF",
    "price": 600,
    "category": "MDF Frames",
    "variants": [
      {
        "name": "MD - 053 (Heart Shape)",
        "price": 600
      },
      {
        "name": "MD - 031 (Apple Shape)",
        "price": 600
      },
      {
        "name": "MD - 012 (Curved Rectangle Landscape)",
        "price": 600
      },
      {
        "name": "MD - 022 (Curved Scroll Horizontal)",
        "price": 600
      }
    ],
    "sizes": [
      "MD - 053: W-29.5 cm, H-25 cm (Weight: 668g)",
      "MD - 031: W-28 cm, H-30 cm (Weight: 721g)",
      "MD - 012: W-29.8 cm, H-24.5 cm (Weight: 766g)",
      "MD - 022: W-19.7 cm, H-34 cm (Weight: 687g)"
    ],
    "colors": [
      "Marble Finish"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": "MD-053, MD-031, MD-012, MD-022",
    "description": "High gloss metal sheet print on marble finish MDF base. Material: MDF. Mask file available.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-85. Product name also given as PRINT ON METAL SHEET MDF FRAMES.",
    "sourcePage": 87
  },
  {
    "name": "PRINT ON METAL SHEET EASEL FRAMES",
    "price": 800,
    "category": "Easel Frames",
    "variants": [
      {
        "name": "5X7 HORIZONTAL",
        "price": 800
      },
      {
        "name": "5X7 VERTICAL",
        "price": 800
      },
      {
        "name": "10X8 HORIZONTAL",
        "price": 980
      },
      {
        "name": "10X8 VERTICAL",
        "price": 980
      }
    ],
    "sizes": [
      "5X7 Horizontal",
      "5X7 Vertical",
      "10X8 Horizontal",
      "10X8 Vertical"
    ],
    "colors": [
      "Natural Wood Stand"
    ],
    "additionalCharges": {},
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Metal sheet photo print displayed on natural wooden easel tabletop stand.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-85",
    "sourcePage": 87
  },
  {
    "name": "ART GALLERY MINIATURE 10X8 INCHES",
    "price": 3800,
    "category": "Miniature Art Frames",
    "variants": [],
    "sizes": [
      "10X8 INCHES"
    ],
    "colors": [
      "Black frame"
    ],
    "additionalCharges": {
      "courier": 150
    },
    "photoSlots": 7,
    "modelNumber": null,
    "description": "3D shadow box art gallery miniature featuring 7 miniature ornate golden framed photos on wall and miniature figurines of people standing and admiring the pictures.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84 (second instance of PAGE-84 in catalogue)",
    "sourcePage": 88
  },
  {
    "name": "RESIN ART WORKS - WALL HANGING 10x15 inches",
    "price": 3800,
    "category": "Resin Art",
    "variants": [],
    "sizes": [
      "10x15 inches"
    ],
    "colors": [
      "Gold and floral resin"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 1,
    "modelNumber": null,
    "description": "Handcrafted resin wall hanging featuring a round photo plaque connected by metal chains to a customized family/couple name plaque with floral embellishments and gold border.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84 (second instance of PAGE-84 in catalogue)",
    "sourcePage": 88
  },
  {
    "name": "RESIN CLOCK 10 inch",
    "price": 3200,
    "category": "Resin Art",
    "variants": [],
    "sizes": [
      "10 inch"
    ],
    "colors": [
      "Glossy Black with Gold Flakes"
    ],
    "additionalCharges": {
      "courier": 100
    },
    "photoSlots": 0,
    "modelNumber": null,
    "description": "Custom handcrafted 10 inch resin clock in glossy black with gold flakes, Roman numerals, customized couple names and special date. Display stand included.",
    "needsVerification": false,
    "notes": "Catalogue printed page: PAGE-84 (second instance of PAGE-84 in catalogue)",
    "sourcePage": 88
  }
];

import { v4 as uuidv4 } from 'uuid';

export const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const padPage = (num: number) => {
  return num.toString().padStart(3, '0');
};

export const normalizedGiftProducts = giftProducts.map((p, index) => {
  const nameStr = p.name || `unknown-product-${index}`;
  const slug = p.slug || nameStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  // Set default image from the catalogue page
  const images = p.images || (p.sourcePage ? [`/catalogue_pages/page_${padPage(p.sourcePage)}.png`] : []);

  return {
    ...p,
    id: p.id || `prod_${uuidv4()}`,
    slug: slug,
    category: p.category || 'personalized-gifts',
    basePrice: p.basePrice || (p.price ? parseFloat(String(p.price).replace(/[^0-9.]/g, '')) : 0) || 0,
    customization: p.customization || { enabled: true, type: "photo-upload", maxPhotos: typeof p.photoSlots === 'number' ? p.photoSlots : 1 },
    images
  };
});

const featuredCategoryKeywords = ['keychain', 'frame', 'crystal', 'mug', 'clock'];

export const getCategories = () => {
  const categoriesMap = new Map<string, { name: string; slug: string; count: number; cleanImage: string | null; isFeatured: boolean }>();
  
  normalizedGiftProducts.forEach(p => {
    if (!categoriesMap.has(p.category)) {
      const isFeatured = featuredCategoryKeywords.some(kw => p.category.toLowerCase().includes(kw));
      // Never use raw PDF catalogue page scans (/catalogue_pages/...) as category cards
      const rawImage = p.images && p.images.length > 0 ? p.images[0] : null;
      const cleanImage = rawImage && !rawImage.includes('/catalogue_pages/') ? rawImage : null;

      categoriesMap.set(p.category, {
        name: p.category,
        slug: slugify(p.category),
        count: 0,
        cleanImage,
        isFeatured
      });
    }
    const cat = categoriesMap.get(p.category);
    if (cat) cat.count += 1;
  });
  
  return Array.from(categoriesMap.values()).sort((a, b) => a.name.localeCompare(b.name));
};

export const getProductsByCategory = (categorySlug: string) => {
  return normalizedGiftProducts.filter(p => slugify(p.category) === categorySlug);
};

export const getProductBySlug = (categorySlug: string, productSlug: string) => {
  return normalizedGiftProducts.find(p => slugify(p.category) === categorySlug && p.slug === productSlug);
};

export const getCategoryByName = (slug: string) => {
  const Objectcats = getCategories();
  return Objectcats.find(c => c.slug === slug || slugify(c.name) === slug);
};
