export function binarySearch(vpValue:string, vpArrayNum:string[]):number{
    let vlMin:number = 0;
    let vlMax:number = vpArrayNum.length - 1;
    let vlPosition:number = -1;
    let vlFound:boolean = false;
    let vlMiddle:number;

    while (vlFound === false && vlMin <= vlMax ){

        vlMiddle = Math.floor((vlMin + vlMax)/2);

        if (vpArrayNum[vlMiddle] == vpValue){
            vlFound = true;
            vlPosition = vlMiddle;
        } else if(vpArrayNum[vlMiddle] > vpValue) {
            vlMax = vlMiddle - 1;
        } else {
            vlMin = vlMiddle + 1;
        }

    }

    return vlPosition;
}