import '../../assets/components/admin/breadcrumb.scss';



interface BreadcrumbProps {
  pageName: string;
  pageTitle: string;
}

export default function Breadcrumb(props: BreadcrumbProps) {
  const { pageName, pageTitle } = props;

  return (
    <div className="page-header row no-gutters py-4">
      <div className="text-sm-left text-md-left mb-sm-0 col-12 col-sm-4 mb-3">
        <span className="text-uppercase page-subtitle">{pageName}</span>
        <h3 className="page-title">{pageTitle}</h3>
      </div>
    </div>
  );
}
