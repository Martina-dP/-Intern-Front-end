export interface Content {
    type : 'text' | 'video' | 'audio' | 'podcast';
    data : string;
}

export interface Lesson {
    title : string;
    description : string;
    topics : string[];
    content : Content[]
}

export interface Module {
    title : string;
    lessons : Lesson[];
}

export interface Course {
    id : number;
    title : string;
    description : string;
    modules : Module[]
}

export interface Info {
    [key: string]: any; 
}

export interface State {
    info: Info;
    allInfo: Info[]; 
}

export interface Action {
    type: string;
    payload: any
}
