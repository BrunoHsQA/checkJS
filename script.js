function Estudante(nome, faltas, notas){
    this.nome = nome
    this.faltas = faltas
    this.notas = notas


this.calcularMedia = function() {
  const Somanota = this.notas.reduce(((acumulador, numero) => acumulador + numero))
  const media = Somanota / this.notas.length
  return media
}

  this.faltas1 = function(){
    return (this.faltas += 1);
  }

}



const jeriscleido = new Estudante("jeriscleido", 234, [-2,-17, 1200])

const Griselda = new Estudante("Griselda", 50, [-7,-89, 543])

const Rodofina = new Estudante("Rodofina", -67, [-14,6, 897])

const Heilao = new Estudante("Heilao", 6, [-2,-90, 1009])

const george = new Estudante("george", 0, [-2,-12, 7])

console.log(jeriscleido.calcularMedia(this.notas))

console.log(Griselda.calcularMedia(this.notas))

console.log(Rodofina.calcularMedia(this.notas))

console.log(Heilao.calcularMedia(this.notas))

console.log(george.calcularMedia(this.notas));


const curso = {
  escolinha: "do didi",
  aprovacao: 5000,
  faltasMaxima: 0,
  Alunos:[
    "jeriscleido", "Griselda", "Rodofina", "Heilao", "george"
  ]
}

const novoAluno = {
   Alunos:[],
   aluno: function(){
     for(let i = 0; i<this.Alunos.length; i++){
       console.log(this.Alunos[i]);
     }

   }

}
       novoAluno.Alunos.push (new Estudante ("Abigael Natte"))

console.log(novoAluno)
