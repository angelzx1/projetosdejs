let player = {
    x: 0,
    y: 0,
    move(x,y){
        this.x +=x
        this.y +=y
    },
    check(x){
        if(this.x >10 || this.x < 0){ 
            return true; 
        }
        return false;  
    }
}
player.move(4,5)
player.move(4,5)
console.log(player.x, player.y)
console.log(player.check())