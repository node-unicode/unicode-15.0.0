import { brotliDecompressSync } from 'node:zlib';
import decodePropertyMap from '../decode-property-map.mjs';

export default decodePropertyMap(JSON.parse(brotliDecompressSync(Buffer.from('H0MHACyOd2AShxcN1hgP5dYbXJY9ORVLlxvb+m0HAkqWiBsU7gCoVFqSSMRthS06bEmAkQYoReGDpe0itZT37jpj5WMTyqhXgep6b3f/hBaB8oV5Js2wx2kl3EQ+1ff/5FO6CBuHGfaQleQwHkBD8UmoyqjSVQMYV3ZJo80eBhW9K7BoClYtXWY9QPw1zInV3XtyKnuWmjr6x/wh', 'base64'))));
