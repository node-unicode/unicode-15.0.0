import { gunzipSync } from 'node:zlib';
import decodePropertyMap from '../decode-property-map.mjs';

export default decodePropertyMap(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE4s20DEx0FHyy89LVdIx0DHUUfIvSM2DMp1z8ovBwiaWuJQgicJVG5Gk2tjc3IigA3AJW1iYEtRrZEKEBaYmhN1AWImZsTG5XsEdaAidBkT4dvAImxP2kbHhgPrHxIDs6BpmwmZkB4QxEZnXwIxwEUOdCKVTfJoYmQ9owiG/wCRJ2NTI3JLqHjUjXCzQsrohqsQhmKBNLMzhCT8WAHrwiYlEBwAA', 'base64'))));
