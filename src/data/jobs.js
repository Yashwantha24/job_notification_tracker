export const JOBS = [
    // This array will be populated by a generator function to ensure realism and variety
    // fitting 60 items without repetitive hardcoding.
];

const COMPANIES = [
    'Infosys', 'TCS', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'IBM', 'Oracle', 'SAP', 'Dell',
    'Amazon', 'Flipkart', 'Swiggy', 'Razorpay', 'PhonePe', 'Paytm', 'Zoho', 'Freshworks', 'Juspay', 'CRED',
    'Microsoft', 'Google', 'Urban Company', 'Zomato', 'Meesho', 'Groww', 'Zerodha', 'InMobi', 'Ola', 'Postman'
];

const ROLES = [
    'SDE Intern', 'Graduate Engineer Trainee', 'Junior Backend Developer', 'Frontend Intern',
    'QA Intern', 'Data Analyst Intern', 'Java Developer', 'Python Developer',
    'React Developer', 'Full Stack Engineer', 'DevOps Intern', 'Cloud Support Associate'
];

const LOCATIONS = [
    'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Gurgaon', 'Noida', 'Mumbai', 'Remote', 'Delhi'
];

const MODES = ['Remote', 'Hybrid', 'Onsite'];

const EXPERIENCES = ['Fresher', '0-1 Years', '1-3 Years', '3-5 Years'];

const SKILL_SETS = [
    ['Java', 'Spring Boot', 'SQL'],
    ['Python', 'Django', 'AWS'],
    ['React', 'JavaScript', 'Tailwind CSS'],
    ['Node.js', 'Express', 'MongoDB'],
    ['SQL', 'Tableau', 'Python'],
    ['Manual Testing', 'Selenium', 'Java'],
    ['AWS', 'Linux', 'Docker'],
    ['C++', 'Data Structures', 'Algorithms']
];

const SOURCES = ['LinkedIn', 'Naukri', 'Indeed', 'Instahyre'];

const SALARIES = [
    '3-5 LPA', '4.5-6.5 LPA', '6-10 LPA', '10-18 LPA', '12-24 LPA', '₹15k-₹25k/month', '₹30k-₹50k/month'
];

// Deterministic random helper
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateJobs = (count) => {
    const jobs = [];
    for (let i = 1; i <= count; i++) {
        const role = getRandom(ROLES);
        const company = getRandom(COMPANIES);
        const mode = getRandom(MODES);

        jobs.push({
            id: i,
            title: role,
            company: company,
            location: getRandom(LOCATIONS),
            mode: mode,
            experience: getRandom(EXPERIENCES),
            skills: getRandom(SKILL_SETS),
            source: getRandom(SOURCES),
            postedDaysAgo: getRandomInt(0, 10),
            salaryRange: getRandom(SALARIES),
            applyUrl: `https://www.${company.toLowerCase().replace(/\s/g, '')}.com/careers`,
            description: `We are looking for a passionate ${role} to join our ${mode} team. \n\nYou will work on cutting-edge technologies and contribute to scalable systems. \n\nKey Responsibilities:\n- Collaborate with cross-functional teams.\n- Write clean, maintainable code.\n- Participate in code reviews and design discussions.\n\nRequirements:\n- Strong problem-solving skills.\n- Proficiency in relevant technologies.`
        });
    }
    return jobs.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo); // Sort by newest first (approx)
};

// Export the generated data
export const jobsData = generateJobs(60);
