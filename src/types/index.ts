export interface TaskSummaryDTO {
    id: number;
    task: string;
    status: Status;
    color: Color;
}

export interface Color{
    color:string;
}

export interface Status{
    status:string;
}
