export interface TaskSummaryDTO {
    id: number;
    task: string;
    status: Status;
    color: Color;
}

// export interface Color{
//     color:number;
// }

// export interface Status{
//     status:string;
// }

export enum Status {
    PENDING,
    PLANNED,
    INPROGRESS,
    DONE
}

export enum Color {
    RED,
    ORANGE,
    YELLOW,
    GREEN,
    BLUE,
    PURPLE,
    NONE
}
