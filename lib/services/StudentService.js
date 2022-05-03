class StudentService {
    static filterCertificatedStudents(students) {
        const certificatedStudents = students.map((student) => {
            if (student.haveCertification === true) {
                return student.email;
            }
        });

        return certificatedStudents;
    }
}

module.exports = StudentService;