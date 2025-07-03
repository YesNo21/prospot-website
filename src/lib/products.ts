export interface Product {
  id: string;
  title: string;
  trademarkedName: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  whatItDoes: string[];
  whyYouLoveIt: string[];
  keyCap?: string[];
  businessImpact?: string[];
  deploymentScalability?: string[];
}

export const products: Product[] = [
  {
    id: 'proguide',
    title: 'ProGuide',
    trademarkedName: 'ProGuide™',
    tagline: 'Your On-Shelf Shopping Assistant',
    description: 'Think of ProGuide as a virtual store associate standing right next to your products.',
    icon: 'MessageSquare',
    color: 'blue',
    whatItDoes: [
      'Lets customers chat or speak with it on a small screen or their phone',
      'Answers questions: "Where\'s gluten-free pasta?" or "Show me shampoo for dry hair"',
      'Points shoppers down the aisle, suggests alternatives if an item is out of stock, and even teaches quick tips ("Try this recipe!")',
      'Can hand off to a real employee or direct people to check-out when they\'re ready'
    ],
    whyYouLoveIt: [
      'Shoppers find what they want faster—no more wandering aisles',
      'Stores see more items added to each customer\'s basket',
      'Works around the clock without extra staffing'
    ],
    keyCap: [
      'Natural-language chatbot (text & voice) trained on product specs, promotions and inventory levels',
      'Real-time shelf-map integration: guide shoppers to products, substitutions or complementary items',
      'Contextual micro-learning: "Did you know?" tips, ingredient deep dives and demo videos at point of decision',
      'Seamless hand-off to human associates or checkout when needed'
    ],
    businessImpact: [
      '+18% conversion among assisted shoppers',
      '30-second average interaction yields 1.4 additional items per basket',
      '24/7 coverage reduces staffing burden and scales expertise across all stores'
    ],
    deploymentScalability: [
      'Cloud-hosted AI engine with per-store microsites',
      'SDK for integration into kiosks, mobile apps or voice-enabled shelf-edge devices',
      'Multi-language support and role-based content management'
    ]
  },
  {
    id: 'prosense',
    title: 'ProSense',
    trademarkedName: 'ProSense™',
    tagline: 'Smart Shelves That Talk Back',
    description: 'Imagine shelves that notice when someone lifts a product—and instantly share details or deals.',
    icon: 'Cpu',
    color: 'orange',
    whatItDoes: [
      'Small sensors under each product detect when it\'s picked up and for how long',
      'Triggers nearby screens or shoppers\' phones to show recipes, videos or special offers',
      'Tracks which items get picked up most, so you know what\'s grabbing attention'
    ],
    whyYouLoveIt: [
      'Shoppers learn more about products right when they\'re interested',
      'You boost impulse buys—if someone holds a snack, offer a drink combo',
      'No more printing endless paper signs—everything updates digitally'
    ],
    keyCap: [
      'Weight-sensing or RFID-triggered sensors that detect product lift and duration',
      'Instant content push via embedded e-paper tags, nearby digital screens or shopper smartphone',
      'A/B testing engine for messaging: demo videos, recipes, up-sell/cross-sell prompts',
      'Data capture: who, when, how long—fed into analytics dashboard for SKU-level insights'
    ],
    businessImpact: [
      '+22% impulse lift on promoted SKUs',
      '40% reduction in static-sign printing costs',
      'Data-driven promo planning: scale winners, retire underperformers'
    ],
    deploymentScalability: [
      'Retrofit onto existing shelving with plug-and-play modules',
      'Centralized CMS to manage sensor-triggered experiences across regions',
      'Edge-processing option for low-latency, offline failover'
    ]
  },
  {
    id: 'prodisplay',
    title: 'ProDisplay',
    trademarkedName: 'ProDisplay™',
    tagline: 'Dynamic Touch-Screens for Every Aisle',
    description: 'Turn ordinary screens into interactive, helpful guides that change with your store.',
    icon: 'Monitor',
    color: 'purple',
    whatItDoes: [
      'Wall-mounted or freestanding touch-screens show product highlights, videos and maps',
      'Adjusts content by time of day (e.g., lunch recipes at noon) or local promotions',
      'Lets customers scan a barcode to pull up details or call for help with a tap'
    ],
    whyYouLoveIt: [
      'Gives shoppers information exactly when they need it',
      'Cuts down lines and frustrated customers—people self-serve answers',
      'You can update promotions instantly from any computer'
    ],
    keyCap: [
      '32"–65" high-brightness touchscreens with camera-based audience analytics',
      'Contextual playlists: time of day, footfall levels, localized promotions, shopper profiles',
      'Two-way interactions: surveys, QR-code downloads, click-to-call associates or e-commerce sites',
      'Remote content management and full-stack reporting on impressions, taps, dwell time'
    ],
    businessImpact: [
      '+15% uplift in promoted category sales',
      '20% reduction in queue abandonment via on-demand "find-my-item" maps',
      'Cross-sell revenue boost when pairing dynamic video with pop-up product showcases'
    ],
    deploymentScalability: [
      'All-in-one media players with PoE or standard power',
      'Cloud-based playlist scheduling and role permissions per region/store',
      'Open APIs for integration with loyalty, CRM and third-party ad networks'
    ]
  },
  {
    id: 'prosample',
    title: 'ProSample',
    trademarkedName: 'ProSample™',
    tagline: 'Easy, Trackable Product Demos',
    description: 'Sampling new products should be fun and friction-free—for both staff and shoppers.',
    icon: 'Beaker',
    color: 'green',
    whatItDoes: [
      'A simple mobile app guides your team through each sampling event',
      'Tracks how many people tried a sample, who they are, and what they bought afterward',
      'Sends follow-up coupons or messages to people who showed interest'
    ],
    whyYouLoveIt: [
      'Set up campaigns in minutes, not days',
      'See clear data on which samples lead to real sales',
      'Turn one-time tasters into repeat buyers'
    ],
    keyCap: [
      'Campaign builder: define sample SKUs, target audiences, geofence triggers and redemption rules',
      'Mobile app for staff: scan QR codes on sampling stations, track tester demographics, capture consent',
      'Real-time KPI dashboard: sample uptake, coupon downloads, trial-to-purchase conversion',
      'Post-campaign analytics: cohort A/B comparisons, retailer portal for share-of-voice reporting'
    ],
    businessImpact: [
      '+12% conversion from trial to purchase',
      '50% faster campaign set-up versus manual processes',
      'Data-backed insights into shopper segment affinities and sampling ROI'
    ],
    deploymentScalability: [
      'iOS/Android staff app with offline mode',
      'Integration with loyalty programs for targeted re-engagement',
      'Automated email/SMS follow-ups to trialists for continuous nurture'
    ]
  },
  {
    id: 'proimmersive',
    title: 'ProImmersive',
    trademarkedName: 'ProImmersive™',
    tagline: 'Virtual and Augmented Reality Experiences',
    description: 'Let shoppers "try before they buy" without opening a box—or even stepping into another room.',
    icon: 'Glasses',
    color: 'pink',
    whatItDoes: [
      'AR on phones or special mirrors shows makeup on a customer\'s face, or how a sofa fits a room',
      'VR stations let people step inside a virtual car, kitchen or living space to explore features',
      'Captures which options people play with most, so you know what resonates'
    ],
    whyYouLoveIt: [
      'Reduces returns—customers are more confident before they buy',
      'Creates memorable brand moments that get shared on social media',
      'Flexible setups—from simple phone-based AR to full VR pods in flagship stores'
    ],
    keyCap: [
      'AR product visualizers: virtual furniture placement, cosmetics try-on, garment fit demos via smartphone or mirror',
      'In-store VR stations: full 360° product experiences (e.g., vehicle walk-arounds, home-makeover mock-ups)',
      'Analytics on interactions: dwell time per feature, click-through on virtual renderings, share rates',
      'Content management system for 3D assets, animations and metadata tagging'
    ],
    businessImpact: [
      '25% reduction in returns for apparel and home-goods',
      '+30% deeper engagement (time-in-experience) versus standard product demos',
      'Premium-brand differentiation drives foot traffic and earned social media buzz'
    ],
    deploymentScalability: [
      'Cloud pipeline for 3D asset ingestion, optimization and distribution',
      'White-label AR SDK for retailer apps or web',
      'On-premises VR bundles for flagship stores with turnkey installation'
    ]
  }
];