export interface Work{
    id:number,
    imgSrc:string,
    title:string,
    service:string,
    url:string
}

export interface Graphics{
    type:GraphicsType,
    url:string
}

export enum GraphicsType{
    Illustration ='illustration',
    photograph = 'photograph'

}