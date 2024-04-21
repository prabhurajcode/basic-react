
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';


const planData =[
  {
    name: "FREE",
    price : "$0/month",
    no_of_users : "Single User",
    storage :"50GB Storage",
    public_projects : "Unlimited Public Projects",
    access : "Community Access",
    private_projects : "Unlimited Private Projects",
    is_private_projects_applicable:"false",
    support :"Dedicated Phone Support",
    is_support_applicable: "false",
    subdomain : "Free Subdomain",
    is_subdomain_applicable:"false",
    report: "Monthly Status Report",
    is_report_applicable:"false",
  },

  {
    name: "PLUS",
    price : "$9/month",
    no_of_users : "5 Users",
    storage :"50GB Storage",
    public_projects : "Unlimited Public Projects",
    access : "Community Access",
    private_projects : "Unlimited Private Projects",
    support :"Dedicated Phone Support",
    subdomain : "Free Subdomain",
    report: "Monthly Status Report",
    is_report_applicable:"false",
  },
  {
    name: "PRO",
    price : "$49/month",
    no_of_users : "Single User",
    storage :"50GB Storage",
    public_projects : "Unlimited Public Projects",
    access : "Community Access",
    private_projects : "Unlimited Private Projects",
    support :"Dedicated Phone Support",
    subdomain : "Free Subdomain",
    report: "Monthly Status Report"
  }
]

function App() {
  return (
    <div className="container">
      {planData.map((plan, index) => (
        <div className="pricing-card" key={index}>
          <h6><span className="text-muted">{plan.name}</span></h6>
          <p>{plan.price}</p>
          <hr className="divider" /> 
          <ul>
            <li><i className="fas fa-check"></i>  {plan.no_of_users}</li>
            <li><i className="fas fa-check"></i>  {plan.storage}</li>
            <li><i className="fas fa-check"></i>  {plan.public_projects}</li>
            <li><i className="fas fa-check"></i>  {plan.access}</li>
            <li>
             {plan.is_private_projects_applicable === "false" ? (
               <span>
                 <i className="fas fa-times text-muted"></i> <span className="text-muted">{plan.private_projects}</span>
               </span>
             ) : (
               <span>
                 <i className="fas fa-check"></i> {plan.private_projects}
               </span>
             )}
            </li>
            <li>
              {plan.is_support_applicable === "false" ? (
                <span>
                  <i className="fas fa-times text-muted"></i>  <span className="text-muted">{plan.support}</span>
                </span>
              ) : (
                <span>
                  <i className="fas fa-check"></i>  {plan.support}
                </span>
              )}
            </li>
            <li>
              {plan.is_subdomain_applicable === "false" ? (
                <span>
                  <i className="fas fa-times text-muted"></i>  <span className="text-muted">{plan.subdomain}</span>
                </span>
              ) : (
                <span>
                  <i className="fas fa-check"></i>  {plan.subdomain}
                </span>
              )}
            </li>
            <li>
              {plan.is_report_applicable === "false" ? (
                <span>
                  <i className="fas fa-times text-muted"></i>  <span className="text-muted">{plan.report}</span>
                </span>
              ) : (
                <span>
                  <i className="fas fa-check"></i>  {plan.report}
                </span>
              )}
            </li>
          </ul>
          <button className='button'>BUTTON</button>
        </div>
      ))}
    </div>
  );
}

export default App;

