// Configuration: Set to false to hide the entire Education section
export const showEducationSection = true;

// Remove experience data - keeping only education
export const experienceData = [];

export const educationData = showEducationSection
  ? [
      {
        id: 1,
        degree: 'Diploma-in Computer Science & Technology',
        school: 'Pabna Polytechnic institute',
        year: '2024',
        description:
          'Specialized in Human-Computer Interaction and Artificial Intelligence.',
        gpa: '3.50/4.00',
      },
      {
        id: 2,
        degree: 'Computer Science and Engineering',
        school: '-----',
        year: '2028',
        description:
          "Dean's List all semesters. Capstone project focused on distributed systems.",
        gpa: '------',
      },
    ]
  : [];
