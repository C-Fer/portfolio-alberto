const skills = [
  {
    title: 'After Efects',
    competency: 4,
    category: ['Edición de Video'],
  },
  {
    title: 'Adobe Premiere Pro',
    competency: 5,
    category: ['Edición de Video'],
  },
  {
    title: 'Adobe Illustrator',
    competency: 5,
    category: ['Editor de gráficos vectoriales'],
  },
  {
    title: 'Adobe Photoshop',
    competency: 3,
    category: ['Edición de Imagen'],
  },
  {
    title: 'Lightroom',
    competency: 4,
    category: ['Edición de Imagen'],
  },
  {
    title: 'Capcut',
    competency: 5,
    category: ['Edición de Video'],
  },
  {
    title: 'Effect House',
    competency: 3,
    category: ['Efectos de realidad aumentada'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
