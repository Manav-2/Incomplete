class Food{
    constructor(){}
    foodStock(){

    }
    display(){
        var x = 80, y = 100;
        
        imageMode(CENTER);
        image(this.image, 720, 220, 70,70);
        
        if(this.foodStock!=0){
            for(var i = 0; i<this.foodStock; i++){
                if(i%10==0){
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x+30;
            }
        }

        var input = createInput("Name");
        var button = createButton("Play");

        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function (){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement("h3");
            greeting.html("Hello " + name);
            greeting.position(130,160);

        })

    }

}