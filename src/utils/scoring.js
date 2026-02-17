/**
 * Calculates the match score for a job based on user preferences.
 * 
 * Scoring Rules:
 * +25 if roleKeyword in title
 * +15 if roleKeyword in description
 * +15 if location matches
 * +10 if mode matches
 * +10 if experience matches
 * +15 if skill overlap
 * +5 if posted <= 2 days
 * +5 if source is LinkedIn
 * 
 * @param {Object} job - The job object
 * @param {Object} prefs - The user preferences object
 * @returns {Object} - { score: number, color: string }
 */
export const calculateMatchScore = (job, prefs) => {
    if (!prefs) return { score: 0, color: 'text-primary-text/40 bg-primary-text/5' };

    let score = 0;
    const roleKeywords = prefs.roleKeywords ? prefs.roleKeywords.toLowerCase().split(',').map(k => k.trim()).filter(k => k) : [];
    const userSkills = prefs.skills ? prefs.skills.toLowerCase().split(',').map(k => k.trim()).filter(k => k) : [];

    // 1. Role Keywords in Title (+25)
    const titleMatch = roleKeywords.some(keyword => job.title.toLowerCase().includes(keyword));
    if (titleMatch) score += 25;

    // 2. Role Keywords in Description (+15)
    const descMatch = roleKeywords.some(keyword => job.description.toLowerCase().includes(keyword));
    if (descMatch) score += 15;

    // 3. Location Match (+15)
    // Handle multi-select location if it's an array, or comma-separated string
    const prefLocations = Array.isArray(prefs.preferredLocations)
        ? prefs.preferredLocations
        : (prefs.preferredLocations ? prefs.preferredLocations.toLowerCase().split(',').map(l => l.trim()) : []);

    // Check if job location includes any preferred location
    const locationMatch = prefLocations.some(loc => job.location.toLowerCase().includes(loc));
    if (locationMatch) score += 15;

    // 4. Mode Match (+10)
    // Handle array or object of booleans or simple string
    let modeMatch = false;
    if (Array.isArray(prefs.preferredMode)) {
        modeMatch = prefs.preferredMode.includes(job.mode);
    } else if (typeof prefs.preferredMode === 'object') {
        // If stored as { Remote: true, Hybrid: false }
        modeMatch = prefs.preferredMode[job.mode];
    } else {
        // String comparison
        modeMatch = job.mode === prefs.preferredMode;
    }
    if (modeMatch) score += 10;

    // 5. Experience Match (+10)
    if (prefs.experienceLevel && job.experience === prefs.experienceLevel) {
        score += 10;
    }

    // 6. Skill Overlap (+15)
    // Job skills is an array of strings
    const jobSkills = job.skills.map(s => s.toLowerCase());
    const skillMatch = userSkills.some(skill => jobSkills.some(js => js.includes(skill)));
    if (skillMatch) score += 15;

    // 7. Freshness (+5)
    if (job.postedDaysAgo <= 2) score += 5;

    // 8. Source (+5)
    if (job.source === 'LinkedIn') score += 5;

    // Cap at 100
    score = Math.min(score, 100);

    // Determine Color
    let colorClass = 'text-primary-text/40 bg-primary-text/5'; // <40 Grey
    if (score >= 80) colorClass = 'text-green-700 bg-green-50 border border-green-200';
    else if (score >= 60) colorClass = 'text-amber-700 bg-amber-50 border border-amber-200';
    else if (score >= 40) colorClass = 'text-primary-text/80 bg-primary-text/10 border border-primary-text/20';

    return { score, colorClass };
};
