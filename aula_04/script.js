let studentName = prompt('Informe abaixo o nome e sobrenome do aluno separados por espaço:');
let grades = prompt('Informe as notas do aluno ao longo dos quatro bimestres separadas por espaço:');
let minimumGrade = prompt('Informe a nota a ser usada como média:');

function getReport(){
    checkStudentData(studentName, grades, minimumGrade);
    const completeName = studentName.trim();
    const studentAverage = getStudentAverage(grades.split(' '));
    const studentStatus = studentAverage >= Number.parseFloat(minimumGrade) ? 'Aprovado': 'Reprovado';
    return `O estudante ${completeName} foi ${studentStatus} possuindo uma média de ${studentAverage.toFixed(2)}`;
};

function checkStudentData(){
    while(studentName.trim().split(' ').length < 2){
        studentName = prompt('Nome de aluno inválido. Informe-o novamente:');
    }
    while(grades.trim().split(' ').length != 4){
        grades = prompt('Notas inválidas. Informe-as novamente:');
    }
    while(minimumGrade.trim().length < 1 || minimumGrade.length > 10 ){
        minimumGrade = prompt('Médias inválida. Informe-a novamente');
    }
}

function getStudentAverage(grades){
    const average = grades.reduce((acc, grade) => acc + Number.parseFloat(grade), 0) / 4;
    return average;
}

const studentReport = getReport();
alert(studentReport);
