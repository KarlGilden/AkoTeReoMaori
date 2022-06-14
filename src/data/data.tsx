export interface IQuestion{
    title?: string | undefined,
    option1?:string | undefined,
    option2?:string | undefined,
    option3?:string | undefined,
    option4?:string | undefined,
    option5?:string | undefined,
    answer?: string | undefined,
    complete?: boolean | undefined,
    correct?: boolean | undefined
  }
  
  export interface ILesson{
    id: number,
    title:string,
    description:string,
    text: string
    questions: IQuestion[],
    type: number
  
  }

 export const courses: ILesson[] = [
    {
      "id": 1,
      "title":"Story 1",
      "description":"A simple story in Te Reo Maori",
      "text": `Ka ara a Mike i te 6:00 i te ata i nga ata katoa. 
      
      Ka mahia e ia te parakuihi me te inu kawhe. 
      
      Ka taraiwa ia ki te mahi i tana motuka. 
      
      Ka tiimata ana mahi i te 7:30 am. 
      
      He tunu kai a Mike i te wharekai. 
      
      Ka hangaia e ia he kai ma nga kaihoko hiakai.
      
      No nga whenua maha nga kaihoko.
      
      He maha o raatau reo e korero ana.
      
      Ka tutaki a Mike ki nga taangata hoahoa.
      
      He harikoa a Mike i a ia e korero ana ki nga kaihoko.`,
      "questions": [
        {
        "title": "Ka ara a Mike i te 6:00 i te ata i nga ata katoa.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      },         
      {
        "title": "Ka mahia e ia te parakuihi me te inu kawhe.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      },
      {
        "title": "Ka taraiwa ia ki te mahi i tana motuka.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      },
      {
        "title": "Ka tiimata ana mahi i te 7:30 am.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      },
      {
        "title": "He tunu kai a Mike i te wharekai.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      },
      {
        "title": "Ka hangaia e ia he kai ma nga kaihoko hiakai.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      },
      {
        "title": "No nga whenua maha nga kaihoko.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      },
      {
        "title": "He maha o raatau reo e korero ana.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      },
      {
        "title": "Ka tutaki a Mike ki nga taangata hoahoa.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      },
      {
        "title": "He harikoa a Mike i a ia e korero ana ki nga kaihoko.",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "answer":"string",
        "complete": false,
        "correct": false
      }
      ],
      "type": 0
    },
    {
      "id": 2,
      "title":"Dialogue 1",
      "description":"A short dialogue between two friends",
      "text": "Tane: Kia Ora;Wahine: Kia Ora; Tane: Kei te pehea koe?; Wahine: Kei te pai ahau. Me koe?; Tane: Kei te pai ahau!",
      "questions": [
        {
        "title": "string",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "complete": false,
        "correct": false
      }
      ],
      "type": 1
    }
  ]