export interface IQuestion{
    title: string,
    option1:string,
    option2:string,
    option3:string,
    option4:string,
    option5:string,
    complete: boolean,
    correct: boolean
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
      "text": "He hōtaka pānui a Te Huinga Raukura mā ngā ākonga e tīmata ana ki te tuhi me te pānui i te reo Māori. E hāngai atu ana tēnei huinga, arā ko Te Huinga Ruakura: Kahukura, ki ngā taumata Kiekie A, E me te I.",
      "questions": [
        {
        "title": "Question 1",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
        "complete": false,
        "correct": false
      },         
      {
        "title": "Question 2",
        "option1":"string",
        "option2":"string",
        "option3":"string",
        "option4":"string",
        "option5":"string",
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