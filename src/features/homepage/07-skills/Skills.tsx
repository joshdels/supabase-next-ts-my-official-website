import { ButtonMain } from '@/shared/components/buttons/Buttons';
import SkillList, { skills } from './SkillList';
import styles from './Skills.module.css';

export default function SkillSection() {
  return (
    <>
      <div className="container-dark">
        <div className="container-content">
          <div className={`container-context ${styles['skill-container']}`}>
            <span className="font-green">{`// tools i work with`}</span>
            <h2>
              My <strong>Toolbox</strong>
            </h2>

            <div className={styles.list}>
              {skills.map((item, index) => (
                <SkillList key={index} {...item} />
              ))}
            </div>
            <ButtonMain workOnly={true} />
          </div>
        </div>
      </div>
    </>
  );
}
