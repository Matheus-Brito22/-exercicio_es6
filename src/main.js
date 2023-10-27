const alunos = [
    {
        nome: "Matheus", nota: "8,0"
    },
    {
        nome: "Vinicius", nota: "5,0"
    },
    {
        nome: "Vitoria", nota: "7,0"
    },
    {
        nome: "Pedro", nota: "9,0"
    },
    {
        nome: "Aline", nota: "5,5"
    },
    {
        nome: "Nathalia", nota: "6,0"
    }
]


const aprovados = alunos.filter(
    function(notaAluno){
     return notaAluno.nota >= '6'
    });


    console.log(aprovados);
