class StudentService {
    static filterCertificatedStudents(students) {
        const filterStudents = students.filter((student) => {
            if (student.haveCertification === true) {
                return student;
            }
        });
        const certificatedStudents = filterStudents.map((student) => {
            if (student.haveCertification === true) {
                return student.email;
            }
        });

        return certificatedStudents;
    }

    static filterStudentsByCredits (students) {
        const filterStudents = students.filter((student) => {
            if (student.credits > 500) {
                return student;
            }
        });

        return filterStudents;
    }
}

module.exports = StudentService;