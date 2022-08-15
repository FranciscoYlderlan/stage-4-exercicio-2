
const students = [];

const average = function (firstScore, secondScore) {
    return ((firstScore+secondScore)/2).toFixed(2);
}

function dataStudent() {
    let studentName = prompt("Informe o nome do aluno:");
    let firstScore = Number(prompt("Informe a primeira nota do aluno:"));
    let secondScore = Number(prompt("Informe a segunda nota do aluno:"));
    
    let mean = average(firstScore,secondScore);
    
    return {"name": studentName, 
            "firstScore": firstScore,
            "secondScore": secondScore, 
            "mean": mean,
            "passed": mean>=7? true: false
        }
}

function addStudent (dataStudent) {
    students.push(dataStudent)
}

function viewStudents(students) {
    if(students.length === 0) alert(`Não há candidatos cadastrados.`) 
    students.forEach(student => {
        alert(`A média do(a) estudante ${student.name} foi: ${student.mean}`)
        if (student.passed) {
            alert(`Parabéns ${student.name}, você foi aprovado(a) no concurso!`)     
        } else {
            alert(`Aluno(a) ${student.name}, não foi dessa vez. Tente novamente!`)
        }

    });
}

function menu() {
    let option = prompt(`Bem-vindo ao cadastro de canditados.
    Selecione a opção desejada!
    1. Cadastrar canditado.
    2. Visualizar resultados.
    3. Sair.            
    `)
    switch (option) {
        case "1":
            let data = dataStudent();
            addStudent(data);
            menu();
            break;
        case "2":
            viewStudents(students)
            menu();
            break;
        default:
            break;
    }
}

menu()