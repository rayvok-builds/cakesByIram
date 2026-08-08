export interface ThemeConfig {
  plum: string;
  berry: string;
  gold: string;
  blush: string;
  ivory: string;
  paper: string;
  ink: string;
}

export interface FlavourItem {
  id: string;
  icon: 'biscoff' | 'velvet' | 'lemon' | 'caramel' | 'pistachio' | 'hazelnut' | 'strawberry' | 'cookie';
  name: string;
  image: string;
  description: string;
}

export interface GalleryTile {
  id: string;
  size: 'large' | 'medium' | 'small';
  tag: string;
  title: string;
  icon: 'wedding' | 'birthday' | 'cupcake' | 'celebration' | 'tier' | 'detail';
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  attribution: string;
  event: string;
}

export interface SiteConfig {
  business: {
    name: string;
    logo: string;
    tagline: string;
    location: string;
    postcode: string;
    serviceArea: string;
    instagramHandle: string;
    instagramUrl: string;
    email: string;
    phone: string;
    phoneUrl: string;
  };
  theme: ThemeConfig;
  hero: {
    eyebrow: string;
    headlineTop: string;
    headlineEmphasis: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    badge: string;
    marqueeImages: string[];
  };
  flavours: {
    eyebrow: string;
    heading: string;
    subtext: string;
    items: FlavourItem[];
    footnote: string;
    footnoteCta: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    subtext: string;
    tiles: GalleryTile[];
    note: string;
    instagramCta: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: ProcessStep[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    items: TestimonialItem[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    subtext: string;
    primary: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    studioInfo: string[];
    copyright: string;
    credit: string;
  };
}

export const siteConfig: SiteConfig = {
  business: {
    name: "Cakes by Iram",
    logo: "/logo.webp",
    tagline: "Handcrafted bespoke wedding & celebration cakes made to order in Birmingham.",
    location: "Birmingham, B10",
    postcode: "B10 9JF",
    serviceArea: "Birmingham & surrounding areas",
    instagramHandle: "@cakesbyiram",
    instagramUrl: "https://www.instagram.com/cakesbyiram/",
    email: "iram-hussain@outlook.com",
    phone: "+44 7871 394253",
    phoneUrl: "tel:+447871394253",
  },
  theme: {
    plum: "#4A1942",
    berry: "#C24868",
    gold: "#C79A4B",
    blush: "#F3DCE0",
    ivory: "#FBF5EC",
    paper: "#FFFDF9",
    ink: "#2B1B22",
  },
  hero: {
    eyebrow: "Bespoke Cakes · Birmingham",
    headlineTop: "Cakes made to",
    headlineEmphasis: "remember.",
    subtext: "Handcrafted wedding & celebration cakes designed with elegance, baked fresh in Birmingham.",
    primaryCta: "Enquire for your date",
    secondaryCta: "See our cakes",
    badge: "Now booking · Birmingham & surrounding areas",
    marqueeImages: [
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130771/757656924_18100284815184797_1719305328659117142_n_mz0mhq.jpg",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130772/757701178_18100252148184797_5995927474108890805_n_tbknqz.jpg",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130773/762584382_18100798055184797_8567698286858158795_n_lllvna.jpg",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130828/768230287_18101018288184797_1273851267035073544_n_iguyus.jpg",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130827/764532015_18100709903184797_776575287581748137_n_kj4hwc.jpg",
    ],
  },
  flavours: {
    eyebrow: "Flavour Menu",
    heading: "A flavour for every celebration.",
    subtext: "Baked fresh with fine ingredients and layered with silky handcrafted buttercreams.",
    items: [
      {
        id: "biscoff",
        icon: "biscoff",
        name: "Lotus Biscoff",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786189700/90da2bdf927534115c5f7a80e1d4948e_yitvep.jpg",
        description: "Light Biscoff sponge layered with smooth Biscoff spread and whipped buttercream.",
      },
      {
        id: "red-velvet",
        icon: "velvet",
        name: "Red Velvet",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786189635/163e2ecf77d82f71430361fd1a3c2ad2_cyuoks.jpg",
        description: "Classic vibrant red velvet sponge with smooth vanilla buttercream or rich cream cheese filling.",
      },
      {
        id: "lemon-raspberry",
        icon: "lemon",
        name: "Lemon & Raspberry",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786189669/788d0660624a58e815c4c4a2becfb6d7_shyiqz.jpg",
        description: "Zesty lemon sponge infused with tangy raspberry compote and lemon buttercream.",
      },
      {
        id: "salted-caramel",
        icon: "caramel",
        name: "Salted Caramel",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786190294/baf82b00fa387d118e14f58c8a3a458b_u7t3or.jpg",
        description: "Moist brown sugar sponge with rich caramel drip and sea-salted caramel buttercream.",
      },
      {
        id: "pistachio-white-choc",
        icon: "pistachio",
        name: "Pistachio & White Chocolate",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786189952/d9ddca42ceea952a4b14688b44fda41b_zgyvlq.jpg",
        description: "Nutty pistachio sponge paired with silky white chocolate ganache filling.",
      },
      {
        id: "chocolate-hazelnut",
        icon: "hazelnut",
        name: "Chocolate Hazelnut",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786189833/c7b314ad835dfbdf0479763d9b140226_oelqvv.jpg",
        description: "Indulgent dark chocolate sponge layered with roasted hazelnut praline buttercream.",
      },
      {
        id: "strawberries-cream",
        icon: "strawberry",
        name: "Strawberries & Cream",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786189973/b333a895679a9a736fb09a648259d599_ctg1nd.jpg",
        description: "Fluffy vanilla bean sponge with fresh strawberry compote and light cream filling.",
      },
      {
        id: "cookies-cream",
        icon: "cookie",
        name: "Cookies & Cream",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786190097/5c461d7eb3632bf8668532c5fb8d99e1_tahflo.jpg",
        description: "Chocolate cookie-crumb sponge layered with crushed Oreo buttercream.",
      },
    ],
    footnote: "Have a custom flavour profile or dietary requirement in mind?",
    footnoteCta: "Ask us in your enquiry",
  },
  gallery: {
    eyebrow: "Our Portfolio",
    heading: "A few of our favourites.",
    subtext: "Every cake is an original design — inspiration photos are welcomed to guide design, never copied.",
    tiles: [
      {
        id: "g1",
        size: "large",
        tag: "Luxury Wedding Tier",
        title: "Botanical Floral Wedding Cake",
        icon: "wedding",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130830/766321969_18101111336184797_2864962014543448914_n_zvzmv5.jpg",
      },
      {
        id: "g2",
        size: "medium",
        tag: "Textured Celebration",
        title: "Elegant Layered Cake",
        icon: "celebration",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130828/768230287_18101018288184797_1273851267035073544_n_iguyus.jpg",
      },
      {
        id: "g3",
        size: "medium",
        tag: "Birthday Tier",
        title: "Custom Birthday Creation",
        icon: "birthday",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130828/768615273_18101111315184797_2592861975480366557_n_o0zkzz.jpg",
      },
      {
        id: "g4",
        size: "small",
        tag: "Floral Detail",
        title: "Hand-Piped Floral Accent",
        icon: "detail",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130827/765930108_18100798013184797_6839510389580056731_n_p0nuwu.jpg",
      },
      {
        id: "g5",
        size: "small",
        tag: "Buttercream Finish",
        title: "Textured Buttercream Tier",
        icon: "tier",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130773/761779776_18100601270184797_5407944257071560866_n_ibipxs.jpg",
      },
      {
        id: "g6",
        size: "small",
        tag: "Celebration",
        title: "Modern Minimalist Cake",
        icon: "celebration",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130773/758427127_18100169888184797_6346319436020484053_n_eo22xm.jpg",
      },
      {
        id: "g7",
        size: "medium",
        tag: "Wedding Tier",
        title: "Classic White & Gold Wedding Tier",
        icon: "wedding",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130773/761545678_18100487249184797_4141814582570977164_n_woafzy.jpg",
      },
      {
        id: "g8",
        size: "small",
        tag: "Custom Palette",
        title: "Bespoke Colourway Cake",
        icon: "tier",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130772/760689853_18100486883184797_51756004096946437_n_gxgq6q.jpg",
      },
      {
        id: "g9",
        size: "small",
        tag: "Cupcakes & Mini",
        title: "Matching Cupcake Selection",
        icon: "cupcake",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130771/757345859_18100075748184797_616215286924431062_n_bjhnfw.jpg",
      },
      {
        id: "g10",
        size: "small",
        tag: "Bridal Detail",
        title: "Pearl & Velvet Ribbons",
        icon: "detail",
        image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1786130771/763248911_18100601246184797_6253085117109644857_n_jzsfl2.jpg",
      },
    ],
    note: "Original bespoke cake designs handcrafted in Birmingham.",
    instagramCta: "See more recent work on Instagram",
  },
  process: {
    eyebrow: "How It Works",
    heading: "From enquiry to your first slice.",
    steps: [
      {
        number: "1",
        title: "Send Your Enquiry",
        description: "Share your date, guest count, and design inspiration via our online form or Instagram DM.",
      },
      {
        number: "2",
        title: "Secure Your Booking",
        description: "A 50% non-refundable deposit holds your date (orders under £60 are paid in full).",
      },
      {
        number: "3",
        title: "Collection or Delivery",
        description: "Free collection from B10 9JF or venue delivery in Birmingham (balance due prior to date).",
      },
    ],
  },
  testimonials: {
    eyebrow: "Kind Words",
    heading: "Loved by our clients across Birmingham.",
    items: [
      {
        id: "t1",
        quote: "Exactly the cake we pictured — and it tasted even better than it looked. Everyone at the reception was asking where we got it!",
        attribution: "Amara & Yasir",
        event: "Wedding at Edgbaston",
      },
      {
        id: "t2",
        quote: "Iram created the most breathtaking 3-tier birthday cake for my daughter's 21st! The Lotus Biscoff sponge was pure perfection.",
        attribution: "Shabnam K.",
        event: "Celebration, Solihull",
      },
      {
        id: "t3",
        quote: "The attention to detail on our bridal shower cake was unmatched. Beautiful, moist, and not overly sweet. Will definitely order again!",
        attribution: "Chloe M.",
        event: "Bridal Shower, Sutton Coldfield",
      },
      {
        id: "t4",
        quote: "From initial enquiry to delivery at the venue, the service was seamless. Best Red Velvet cake in Birmingham by far!",
        attribution: "Haris P.",
        event: "Birthday Party, Harborne",
      },
      {
        id: "t5",
        quote: "The salted caramel drip cake was an absolute showstopper for our anniversary party. Thank you so much Iram!",
        attribution: "Priya & Dev",
        event: "Anniversary Celebration, Birmingham",
      },
    ],
  },
  cta: {
    eyebrow: "Get In Touch",
    heading: "Let's design your cake.",
    subtext: "Fill in the enquiry form below or reach out via Instagram DM / WhatsApp to check availability.",
    primary: "Send Instagram DM",
    secondary: "Email Studio",
  },
  footer: {
    tagline: "Bespoke wedding & celebration cakes made to order in Birmingham.",
    studioInfo: [
      "Studio: Birmingham, UK (B10 9JF)",
      "Collection: Free by appointment",
      "Delivery: Birmingham & West Midlands",
    ],
    copyright: "Cakes by Iram. All rights reserved.",
    credit: "Cake Studio Template",
  },
};
