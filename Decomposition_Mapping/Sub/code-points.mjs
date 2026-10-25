import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H2EB+GVBz/MteDYp6BnqtvpvcNQH0dIs7SCCMUk3NkspRgHP/67A//xFbG2u7hku1UM/xQMIXFHE8eEhEDi7bIrSYEbkqiaJzP9vJ6CcpYjp//u7SkBu9gy13IDht4D7pos82VU6kGW5+2bP800B', 'base64')).toString());
