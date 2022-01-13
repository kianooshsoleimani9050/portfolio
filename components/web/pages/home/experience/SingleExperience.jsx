const SingleExperience = ({
  title = "",
  date = "",
  name = "",
  where = "",
  desc = "",
  className = "",
}) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="600"
      className={`p-0 m-0 mb-5 w-100 d-flex flex-column ${className}`}
    >
      <div className="p-0 m-0 w-100 d-flex align-items-center justify-content-between">
        <h4 className="home-single-experience-title">{title}</h4>
        <span className="home-single-experience-date">{date}</span>
      </div>
      <span className="w-100 mb-1 home-single-experience-name">{name}</span>
      <span className="w-100 mb-1 home-single-experience-where">{where}</span>
      <p className="p-0 m-0 w-100 home-single-experience-desc">{desc}</p>
    </div>
  );
};

export default SingleExperience;
