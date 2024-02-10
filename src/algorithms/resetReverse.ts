export function ReverseList(vpArray:number[]):void{

    //let vlArray:number[] = new Array(vpArray)
    let vlMin:number = 0;
    let vlMax:number = vpArray.length - 1;

    while (vlMin < vlMax ) {
        [vpArray[vlMin],vpArray[vlMax]] = [vpArray[vlMax],vpArray[vlMin]];
        vlMin ++;
        vlMax --;
    } 
}