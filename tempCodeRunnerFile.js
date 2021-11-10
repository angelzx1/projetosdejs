let brigadeiro = {
    x:" chocolate",
    y:" manteiga",
    z:" leite",
    a:this.x + this.y + this.z,
    mistura(){
        console.log("Misturando os ingredientes: " + this.x + this.y + this.z)
    },
    resultado(){
        if( this.a !== this.x+this.y+this.z){
            return true
        }
        console.log("O brigadeiro está completo!!")
    }
}
brigadeiro.mistura()
console.log(brigadeiro.resultado())