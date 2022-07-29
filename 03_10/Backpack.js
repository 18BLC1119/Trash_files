/**
 * Creating classes:
 * 
 * Class declaration: class Name{}
 * Class expression: const Name = class {}
 */

class Backpack{
    constructor(
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ){
        this.name=name;
        this.volume=volume;
        this.color=color;
        this.pocketNum=pocketNum;
        //this.strapLengthL=strapLengthL;
        //this.strapLengthR=strapLengthR;
        this.strapLengthL={
            left:strapLengthL,
            right:strapLengthR,
        };
        this.lidOpen=lidOpen;
    }
    //Add methods like normal functions;
    toggleLid(lidStatus){
        this.lidOpen=lidStatus;
    }
    newStrapLength(lengthLeft,lengthRight){
        this.strapLengthL.left=lengthLeft;
        this.strapLengthR.right=lengthRight;
    }
}

export default Backpack;