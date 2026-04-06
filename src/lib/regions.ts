// Map ISO 2-letter country codes to your specific regions
export const REGION_MAP: Record<string, string> = {
    // KSA (Specific Priority)
    'SA': 'ksa',

    // MEA (Middle East & Africa)
    'AE': 'mea', 'QA': 'mea', 'BH': 'mea', 'KW': 'mea', 'OM': 'mea', 'EG': 'mea', 'ZA': 'mea',

    // North America
    'US': 'north-america', 'CA': 'north-america', 'MX': 'north-america',

    // Europe & UK
    'GB': 'europe', 'DE': 'europe', 'FR': 'europe', 'IT': 'europe', 'ES': 'europe', 'NL': 'europe',

    // APAC
    'IN': 'apac', 'SG': 'apac', 'AU': 'apac', 'JP': 'apac', 'CN': 'apac',

    // LATAM
    'BR': 'latam', 'AR': 'latam', 'CO': 'latam', 'CL': 'latam', 'PE': 'latam'
};

export const DEFAULT_REGION = 'global';