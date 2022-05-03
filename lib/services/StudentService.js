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
}

module.exports = StudentService;