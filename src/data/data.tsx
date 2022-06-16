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

export interface IResultQuestion{
  correct: boolean,
  userAnswer: string,
  answer: string | undefined
}

export interface IResult{
  questions: IResultQuestion[]
}

export const results: IResult = {
  questions: []
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
        "title": "_ ara a Mike i te 6:00 i te ata i nga ata katoa.",
        "option1":"Ka",
        "option2":"Hua",
        "option3":"Kei",
        "option4":"Te",
        "option5":"Ana",
        "answer":"Ka",
        "complete": false,
        "correct": false
      },         
      {
        "title": "Ka mahia e _ te parakuihi me te inu kawhe.",
        "option1":"I",
        "option2":"Tenei",
        "option3":"Au",
        "option4":"Ia",
        "option5":"Ahau",
        "answer":"Ia",
        "complete": false,
        "correct": false
      },
      {
        "title": "Ka taraiwa ia _ te mahi i tana motuka.",
        "option1":"E",
        "option2":"Ki",
        "option3":"Ana",
        "option4":"Toku",
        "option5":"Ono",
        "answer":"Ki",
        "complete": false,
        "correct": false
      },
      {
        "title": "Ka tiimata ana _ i te 7:30 am.",
        "option1":"Whenua",
        "option2":"Mahi",
        "option3":"Kai",
        "option4":"Wharekai",
        "option5":"Ingoa",
        "answer":"Mahi",
        "complete": false,
        "correct": false
      },
      {
        "title": "He tunu _ a Mike i te wharekai.",
        "option1":"Nga",
        "option2":"Ata",
        "option3":"Mahi",
        "option4":"Te",
        "option5":"Kai",
        "answer":"Kai",
        "complete": false,
        "correct": false
      },
      {
        "title": "Ka hangaia e ia he kai ma _ kaihoko hiakai.",
        "option1":"Te",
        "option2":"Rua",
        "option3":"Nga",
        "option4":"E",
        "option5":"Ia",
        "answer":"Nga",
        "complete": false,
        "correct": false
      },
      {
        "title": "No nga _ maha nga kaihoko.",
        "option1":"Whaanau",
        "option2":"Ma",
        "option3":"E",
        "option4":"Ahau",
        "option5":"Whenua",
        "answer":"Whenua",
        "complete": false,
        "correct": false
      },
      {
        "title": "_ maha o raatau reo e korero ana.",
        "option1":"Te",
        "option2":"He",
        "option3":"Kei",
        "option4":"Whenua",
        "option5":"Nga",
        "answer":"He",
        "complete": false,
        "correct": false
      },
      {
        "title": "Ka tutaki a Mike ki nga _ hoahoa.",
        "option1":"Ahau",
        "option2":"Aha",
        "option3":"Ana",
        "option4":"Taangata",
        "option5":"Mahi",
        "answer":"Taangata",
        "complete": false,
        "correct": false
      },
      {
        "title": "He harikoa a Mike i _ ia e korero ana ki nga kaihoko.",
        "option1":"A",
        "option2":"E",
        "option3":"Ko",
        "option4":"Te",
        "option5":"Ia",
        "answer":"A",
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