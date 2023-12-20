import "../../assets/components/admin/overview.scss";

interface OverviewProps {
  data: {
    title: string;
    nums: string;
    className: string;
    icon: React.ReactNode;
  }[];
}

export default function Overview(props: OverviewProps) {
  const { data } = props;

  return (
    <div className="overview">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-sm-6 col-lg-3" key={index}>
            <div className="overview-card rounded">
              <div className={`icon ${item.className}`}>{item.icon}</div>
              <div className="content">
                <p className="fs-6 text-white m-0">{item.title}</p>
                <p className="fs-3 fw-bold text-white m-0">{item.nums}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
