/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'PGL',
    position: 'Productor Audiovisual',
    url: 'https://pglmarketing.com/',
    startDate: '2024-08-01',
    summary: 'Encargado de realizar cubrimientos audiovisuales, grabar y editar videos. Mi trabajo incluye captar contenidos en vivo, gestionar la producción de los materiales y asegurarme de que cada video cumpla con los estándares de calidad, creatividad y comunicación visual requeridos para cada proyecto.',
  },
];

export default work;
