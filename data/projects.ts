import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "loan-risk-prediction-system",
    number: "01",
    title: "Loan Risk Prediction System",
    description:
      "An end-to-end machine learning system that predicts whether a loan applicant is likely to repay a loan or become a defaulter.",
    businessContext:
      "Banks need to assess credit risk before lending money.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "SHAP",
      "Streamlit",
      "Joblib",
    ],
    highlights: [
      "Explainable predictions using SHAP",
      "Model comparison across multiple classifiers",
      "Joblib model serialization",
    ],
    github: "https://github.com/SyedaBismaa/Loan_Risk_Prediction",
    demo: "https://loanriskprediction-sybi.streamlit.app/",
    category: "Supervised",
    overview: [
      {
        title: "Overview",
        content: [
          "This project builds a risk assessment pipeline for loan approval decisions using structured financial data.",
          "The goal is to support better credit assessment decisions while keeping the model interpretable for stakeholders.",
        ],
      },
    ],
    problemStatement: [
      {
        title: "Problem Statement",
        content: [
          "Banks need a reliable way to estimate the probability of default before approving credit.",
          "A model that combines historical applicant behavior with interpretable predictions helps reduce uncertainty in lending decisions.",
        ],
      },
    ],
    businessContextDetails: [
      {
        title: "Business Context",
        content: [
          "Banks need to assess credit risk before lending money.",
          "The project supports risk review by comparing candidate models and surfacing the features that influence repayment outcomes.",
        ],
      },
    ],
    dataset: [
      {
        title: "Dataset",
        content: [
          "The system uses applicant-level loan data containing behavioral, demographic, and financial attributes.",
          "Details coming soon.",
        ],
      },
    ],
    dataCleaning: [
      {
        title: "Data Cleaning",
        content: [
          "Missing values were reviewed and handled according to feature type.",
          "Categorical values were normalized and the dataset was prepared for model training.",
        ],
      },
    ],
    exploratoryDataAnalysis: [
      {
        title: "Exploratory Data Analysis",
        content: [
          "Address-level and applicant-level patterns were examined to understand risk-related trends.",
          "Feature distributions and relationships were reviewed before model development.",
        ],
      },
    ],
    featureEngineering: [
      {
        title: "Feature Engineering",
        content: [
          "New attributes were derived to capture repayment risk more effectively.",
          "Features were selected based on their predictive value and interpretability.",
        ],
      },
    ],
    modelSelection: [
      {
        title: "Model Selection",
        content: [
          "Logistic Regression, Decision Tree, AdaBoost, and XGBoost were evaluated.",
          "XGBoost was selected based on comparative performance after benchmarking multiple models.",
        ],
      },
    ],
    evaluation: [
      {
        title: "Evaluation",
        content: [
          "The models were compared using Accuracy, Precision, Recall, F1 Score, and Confusion Matrix.",
          "The final selection was based on the balance between predictive power and business relevance.",
        ],
      },
    ],
    explainability: [
      {
        title: "Explainability",
        content: [
          "SHAP values were used to interpret the influence of each feature on the final prediction.",
          "The project emphasizes transparency in model reasoning for credit-related decision support.",
        ],
      },
    ],
    deployment: [
      {
        title: "Deployment",
        content: [
          "The trained model was serialized with Joblib and deployed in a Streamlit application.",
          "The app provides an interactive interface for model predictions and explainability views.",
        ],
      },
    ],
    learnings: [
      {
        title: "Learnings",
        content: [
          "The project reinforced the importance of balancing model performance with interpretability for real-world lending decisions.",
          "It also highlighted how deployment-ready systems require thoughtful evaluation and clear stakeholder communication.",
        ],
      },
    ],
  },
  {
    slug: "banking-product-recommendation-system",
    number: "02",
    title: "Banking Product Recommendation System",
    description:
      "A customer segmentation and recommendation system that helps banks identify relevant financial products based on customer demographics, account information, and transaction behaviour.",
    businessContext:
      "Banks offer products such as credit cards, loans, insurance, and savings accounts.",
    technologies: ["Python", "Pandas", "Scikit-learn", "K-Means", "DBSCAN", "SQL"],
    highlights: [
      "Customer segmentation using unsupervised learning",
      "Product recommendation logic for different clusters",
      "Fallback recommendations for new customers",
    ],
    github: "https://github.com/SyedaBismaa/Recommendation-System-ML",
    demo: "https://recommendation-system-ml-tldmkmp6qcegg65onftsro.streamlit.app/",
    category: "Unsupervised",
    overview: [
      {
        title: "Overview",
        content: [
          "The system segments customer profiles and recommends relevant banking products based on shared behavior patterns.",
          "It is designed to help banks prioritize product marketing by understanding customer groups.",
        ],
      },
    ],
    problemStatement: [
      {
        title: "Problem Statement",
        content: [
          "Many banking customers have needs that are not obvious from a single transaction snapshot.",
          "This project uses clustering to discover segments and surface suitable product opportunities.",
        ],
      },
    ],
    businessContextDetails: [
      {
        title: "Business Context",
        content: [
          "Banks offer products such as credit cards, loans, insurance, and savings accounts.",
          "The recommendation layer helps align product suggestions with customer characteristics and financial behavior.",
        ],
      },
    ],
    dataset: [
      {
        title: "Dataset",
        content: [
          "Customer demographics, account attributes, and transaction history were used for segmentation.",
          "Details coming soon.",
        ],
      },
    ],
    dataCleaning: [
      {
        title: "Data Cleaning",
        content: [
          "Duplicate records and inconsistent field values were standardised before clustering.",
          "The data was transformed to fit a scalable segmentation workflow.",
        ],
      },
    ],
    exploratoryDataAnalysis: [
      {
        title: "Exploratory Data Analysis",
        content: [
          "Customer profiles were analysed to understand variation across income, account usage, and spending habits.",
          "The exploration stage informed cluster interpretation and recommendation strategy.",
        ],
      },
    ],
    featureEngineering: [
      {
        title: "Feature Engineering",
        content: [
          "Customer attributes and engagement patterns were aggregated into meaningful behavioural features.",
          "This improved cluster quality and allowed product recommendations to be grounded in observable patterns.",
        ],
      },
    ],
    modelSelection: [
      {
        title: "Model Selection",
        content: [
          "K-Means and DBSCAN were compared for customer segmentation using clustering quality and interpretability.",
          "The Elbow Method was used to guide the selection of cluster count where relevant.",
        ],
      },
    ],
    evaluation: [
      {
        title: "Evaluation",
        content: [
          "Cluster structures were evaluated through separation, interpretability, and business usefulness.",
          "The final model aimed to produce actionable customer groups rather than only numerical clusters.",
        ],
      },
    ],
    explainability: [
      {
        title: "Explainability",
        content: [
          "Feature distributions within each cluster were reviewed to explain why a segment was assigned to a product group.",
          "The recommendation logic remains transparent and easy to understand for business users.",
        ],
      },
    ],
    deployment: [
      {
        title: "Deployment",
        content: [
          "The recommendation flow was packaged in a reusable analysis workflow to support iteration and reuse.",
          "Details coming soon.",
        ],
      },
    ],
    learnings: [
      {
        title: "Learnings",
        content: [
          "This project highlighted how clustering can turn raw customer information into more actionable business insights.",
          "The model choice matters less than ensuring the outputs align with real business decisions.",
        ],
      },
    ],
  },
  {
    slug: "job-recommendation-salary-prediction-system",
    number: "03",
    title: "Job Recommendation / Salary Prediction System",
    description:
      "A candidate-focused recommendation system designed to identify higher-paying opportunities based on skills, qualifications, and job attributes.",
    businessContext:
      "Candidates often need help matching their background to roles and salary expectations.",
    technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "Feature Engineering"],
    highlights: [
      "Candidate-job matching logic",
      "Skills and qualification-based profiling",
      "Salary opportunity analysis",
    ],
    github: "https://github.com/SyedaBismaa/Job_Market_Analysis",
    category: "Data Analysis",
    overview: [
      {
        title: "Overview",
        content: [
          "This project explores the relationship between candidate attributes, job characteristics, and earning potential.",
          "The aim is to help users identify opportunities that better match their profile and growth trajectory.",
        ],
      },
    ],
    problemStatement: [
      {
        title: "Problem Statement",
        content: [
          "Candidates may struggle to identify which roles align well with their skills, experience, and expected salary range.",
          "A structured recommendation system can organize this decision-making process more intelligently.",
        ],
      },
    ],
    businessContextDetails: [
      {
        title: "Business Context",
        content: [
          "Candidates often need help matching their background to roles and salary expectations.",
          "Details coming soon.",
        ],
      },
    ],
    dataset: [
      {
        title: "Dataset",
        content: [
          "The project uses candidate characteristics, skills, qualifications, job attributes, and company attributes.",
          "Details coming soon.",
        ],
      },
    ],
    dataCleaning: [
      {
        title: "Data Cleaning",
        content: [
          "The workflow includes standardising inconsistent qualification and skill labels.",
          "Missing values and incomplete records are handled to keep the data usable for analysis.",
        ],
      },
    ],
    exploratoryDataAnalysis: [
      {
        title: "Exploratory Data Analysis",
        content: [
          "Patterns in candidate profile distribution and compensation trends were reviewed across fields and skill categories.",
          "The exploration helps define which features carry the strongest signal in the matching process.",
        ],
      },
    ],
    featureEngineering: [
      {
        title: "Feature Engineering",
        content: [
          "Skill and qualification features were transformed to support more meaningful job-to-candidate comparisons.",
          "This stage prepares the data for recommendation and salary-oriented analysis.",
        ],
      },
    ],
    modelSelection: [
      {
        title: "Model Selection",
        content: [
          "The solution uses a combination of analytical matching and prediction-oriented modeling approaches.",
          "Details coming soon.",
        ],
      },
    ],
    evaluation: [
      {
        title: "Evaluation",
        content: [
          "The project studies alignment between candidate profiles and opportunity attributes.",
          "Details coming soon.",
        ],
      },
    ],
    explainability: [
      {
        title: "Explainability",
        content: [
          "The output explains which factors contribute most to a strong job match or salary expectation.",
          "Details coming soon.",
        ],
      },
    ],
    deployment: [
      {
        title: "Deployment",
        content: [
          "The pipeline is structured for further deployment into a candidate recommendation interface.",
          "Details coming soon.",
        ],
      },
    ],
    learnings: [
      {
        title: "Learnings",
        content: [
          "The project reinforced the need to balance candidate fit, salary signals, and practical representation of job data.",
          "It also surface how data quality affects the reliability of recommendation systems.",
        ],
      },
    ],
  },
  {
    slug: "telecom-churn-analysis",
    number: "04",
    title: "Telecom Churn Analysis",
    description:
      "A telecom churn analysis project focused on understanding customer behaviour and identifying factors associated with customer churn.",
    businessContext:
      "The project supports retention analysis by identifying customers with higher churn risk.",
    technologies: ["Python", "Pandas", "Excel", "NumPy", "Scikit-learn", "SQL"],
    highlights: [
      "Exploratory data analysis and churn diagnosis",
      "WOE and IV analysis",
      "Customer segmentation for business insight",
    ],
    github: "https://github.com/SyedaBismaa/Telecom_Churn_Prediction",
    category: "Deployment",
    overview: [
      {
        title: "Overview",
        content: [
          "The project examines telecom customer behavior to understand which patterns are associated with churn.",
          "The analysis combines descriptive statistics, feature diagnostics, and segmentation to surface actionable insights.",
        ],
      },
    ],
    problemStatement: [
      {
        title: "Problem Statement",
        content: [
          "Customer churn is influenced by a wide range of behavioral and usage patterns.",
          "The analysis focuses on identifying the most relevant drivers before teams launch retention strategies.",
        ],
      },
    ],
    businessContextDetails: [
      {
        title: "Business Context",
        content: [
          "The project is designed to support understanding of customer churn patterns and retention risk.",
          "Excel was used as part of the analysis workflow alongside Python-based exploratory and feature analysis.",
        ],
      },
    ],
    dataset: [
      {
        title: "Dataset",
        content: [
          "Customer usage, account, and service behavior information was used to assess churn signals.",
          "Details coming soon.",
        ],
      },
    ],
    dataCleaning: [
      {
        title: "Data Cleaning",
        content: [
          "The dataset was cleaned for missing values, outliers, and inconsistent categories before deeper analysis.",
          "This ensured that churn behavior patterns were evaluated on a dependable base.",
        ],
      },
    ],
    exploratoryDataAnalysis: [
      {
        title: "Exploratory Data Analysis",
        content: [
          "Customer behavior was studied across service usage, tenure, and engagement indicators.",
          "The analysis used visual and statistical summaries to reveal risk-related patterns.",
        ],
      },
    ],
    featureEngineering: [
      {
        title: "Feature Engineering",
        content: [
          "The workflow included feature derivation, WOE, IV, and VIF analysis to understand variable contribution and multicollinearity.",
          "These steps helped refine the variables most relevant for churn interpretation.",
        ],
      },
    ],
    modelSelection: [
      {
        title: "Model Selection",
        content: [
          "The project focused on understanding patterns and drivers rather than only maximizing prediction scores.",
          "Customer segmentation and business insight generation were central to the analytical workflow.",
        ],
      },
    ],
    evaluation: [
      {
        title: "Evaluation",
        content: [
          "The project assesses which features contribute most strongly to churn behavior and segmentation outcomes.",
          "The goal was to produce interpretable business insight, not simply a single classification metric.",
        ],
      },
    ],
    explainability: [
      {
        title: "Explainability",
        content: [
          "Feature relevance and segment interpretation help explain why certain customer groups are at greater churn risk.",
          "The analysis focuses on transparency and business understanding.",
        ],
      },
    ],
    deployment: [
      {
        title: "Deployment",
        content: [
          "This analysis is structured for business reporting and follow-up retention workflows.",
          "Details coming soon.",
        ],
      },
    ],
    learnings: [
      {
        title: "Learnings",
        content: [
          "The project shows how analytics can uncover churn patterns before they become a larger operational problem.",
          "It also reinforced the importance of interpretable features in business-facing data science work.",
        ],
      },
    ],
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, Project>;
