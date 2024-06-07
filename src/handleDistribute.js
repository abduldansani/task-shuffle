export const handleDistribute = (topics, students) => {
  const shuffledTopics = [...topics];
  for (let i = shuffledTopics.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledTopics[i], shuffledTopics[j]] = [shuffledTopics[j], shuffledTopics[i]];
  }

  const assignedTopics = students.map(student => ({
    student,
    topics: []
  }));

  shuffledTopics.forEach((topic, index) => {
    const studentIndex = index % students.length;
    assignedTopics[studentIndex].topics.push(topic);
  });

  // const shuffledStudents = [...students];
  // for (let i = shuffledStudents.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [shuffledStudents[i], shuffledStudents[j]] = [shuffledStudents[j], shuffledStudents[i]];
  // }

  // const leftovers = shuffledTopics.slice(students.length * Math.floor(shuffledTopics.length / students.length));
  // leftovers.forEach((topic, index) => {
  //   const randomIndex = Math.floor(Math.random() * students.length);
  //   assignedTopics[randomIndex].topics.push(topic);
  // });

  return assignedTopics;
};