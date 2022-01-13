import { EXPERIENCE_DATA } from "../../../../data/experience-data";
import SingleExperience from "./experience/SingleExperience";

const Experience = () => {
  return (
    <div data-aos="fade-up-right" data-aos-duration="1000" className="p-1 m-0">
      <div className="p-0 m-0 d-flex flex-column flex-md-row">
        <div className="p-0 m-0 mb-2 mb-md-0 home-experience-title">
          Experience
        </div>
        <div className="p-0 m-0 ms-md-4 w-100 d-flex flex-column">
          {EXPERIENCE_DATA.map(({ id, title, date, name, where, desc }) => (
            <>
              <SingleExperience
                key={`singleExperience${id}`}
                title={title}
                date={date}
                name={name}
                where={where}
                desc={desc}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
