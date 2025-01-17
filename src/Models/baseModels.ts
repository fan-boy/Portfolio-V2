export interface Work{
    id:number,
    imageSrc:string,
    title:string,
    link:string,
    service:string,
    url:string,
    description:string,
    color:string
}

export interface Graphics{
    type:GraphicsType,
    url:string
}

export enum GraphicsType{
    Illustration ='illustration',
    photograph = 'photograph',
    gencode = "gencode"

}