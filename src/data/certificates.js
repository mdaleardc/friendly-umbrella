/**
 * certificates.js
 * Just two fields — ID and image file.
 * All details are on the certificate image itself.
 *
 * QR code URL: https://rohingyaapp.netlify.app/verify/[id]
 * Image files: /public/certificates/
 */
 

const certificates = [
  { id: "LRF-4Q9N-JX82-MP7A", imageFile: "LRF-4Q9N-JX82-MP7A.png" },
  // { id: "RLF-2025-003", imageFile: "RLF-2025-003.png" },
];

export default certificates;

export function getCertificate(id) {
  return certificates.find((c) => c.id === id) || null;
}
