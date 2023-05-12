export const SolutionCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="ag-format-container h-24rem w-auto">
      <div className="ag-courses_item">
        <a href="#" className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>

          <div className="ag-courses-item_title font-body">{description}</div>

          <div className="ag-courses-item_date-box font-title text-gold">
            {title}
          </div>
        </a>
      </div>
    </div>
  );
};
