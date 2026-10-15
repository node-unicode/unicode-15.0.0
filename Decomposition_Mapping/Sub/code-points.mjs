import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE0WTwQ3EMAgEG+JhbDBQC0r/bZzYI+THJDY7ECXTdG9KXvo8VHAomaVBCqxBC7zhUobcBit4jzllXG6Igj52VgGO+dmLUrxrppToelPq6vpQKnctlLq7Vko9XV9Kla6NUrVrp9TbdVBq55aE9N3DlG67u55NeTvtHEppiyOU8j6vsd9OVmt7X3gt54Wg5N3XZVHe95hw3Wldwd67m9TeVy9Eau+rNyLY+9vtFrSxlAH3wAIDTMx8vGj9ae+4yLU9/I8+w0g3GYaA6bCCv34XbMPYhfkw4i2GA9Otl22Bx8fg5+Nj8PPJs/92Js/g59Pf4Bc8DL/4+sMvvv7wi5nX4Bczr8MvJt/hFzOfwy8m3/HX3I/x4/DM6/9v+L3HZ+R4nucHINrcSYIDAAA=', 'base64'))));
