import styles from './SkillList.module.css';

type SkillListProps = {
  title: string;
  skills: string[];
};

export const skills: SkillListProps[] = [
  {
    title: 'GIS Softwares',
    skills: ['QGIS', 'ArcGIS', 'GDAL/OGR', '2D AUTOCAD', 'Google Earth'],
  },
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Web Mapping',
    skills: [
      'Leaflet',
      'MapLibre',
      'Mapbox GL',
      'Deck GL',
      'ArcGIS SDK JS',
      'Google Earth Engine',
    ],
  },
  {
    title: 'Web Frameworks',
    skills: ['NextJS', 'React', 'Django', 'Fast API', 'Calcite Esri'],
  },
  {
    title: 'Workflows',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Geopandas',
      'Github Actions',
      'Docker',
    ],
  },
];

export default function SkillList({ title, skills }: SkillListProps) {
  return (
    <div className={styles.list}>
      <span className="font-green">{title}</span>
      <ul className={styles.list}>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
