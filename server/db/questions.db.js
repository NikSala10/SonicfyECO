const questions = [
  {
    artist: "Sabrina Carpenter",
    questions: [
      {
        
        question1: "In what year did Sabrina Carpenter release her debut album 'Eyes Wide Open'?",
        option1: "2014",
        option2: "2015",
        option3: "2016",
        correctAnswer: "2015"
      },
      {
        
        question2: "Which of these songs is NOT on the album Emails I Can't Send?",
        option1:  "because i liked a boy",
        option2:  "Feather"  ,
        option3: "Vicious",
        correctAnswer: "Feather"
      },
      {
        
        question3: "I'm working late, 'cause I'm a singer\n(Sign)\ncome and get this pollen",
        correctAnswer: "I'm working late, 'cause I'm a singer\nOh, he looks so cute wrapped 'round my finger\nMy twisted humor makes him laugh so often\nMy honey bee, come and get this pollen",
        image: "https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Sabri%20sign.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2I2ODAwNTlmLTNiZWYtNDc0YS04N2JlLTFkZmM5YTgwN2E0OCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvU2Ficmkgc2lnbi5wbmciLCJpYXQiOjE3NDYzMjczMTQsImV4cCI6MTc3Nzg2MzMxNH0.OIAIqdAzHYNhGGn5nsoIe1apxlPcGXXtHeKkGP4-mvE",
        songName: "Espresso"
      }
    ]
  },
  {
    artist: "Shakira",
    questions: [
      {
       
        question1: "What was Shakira's first album in English?",
        option1: "Laundry Service",
        option2: "Oral Fixation Vol. 2",
        option3: "Pies Descalzos",
        correctAnswer: "Laundry Service"
      },
      {
        
        question2: "Which Shakira song became the official anthem of the 2010 World Cup?",
        option1: "Hips Don't Lie",
        option2: "Waka Waka",
        option3: "La La La",
        correctAnswer: "Waka Waka"
      },
      {
        
        question3: "YElla se hace la bruta pa' cotizarse\ncon mi tigre",
        correctAnswer: "Ella se hace la bruta pa' cotizarse conmigo en frente\nElla se hace la gata en celo contigo\nTe cotorrea al oído pa' tenerte en alta\nElla muere por ti, tú por mí es que matas\nYo sigo tranquila, como una paloma de esquina\nMientras ella se pasa en su BM al lado mío\nYo, de aquí, no me voy\nLo que está pa' mí, ninguna va a poder quitármelo de un tirón\nYo soy loca con mi tigre",
        image: "https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Shaki%20sign%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2I2ODAwNTlmLTNiZWYtNDc0YS04N2JlLTFkZmM5YTgwN2E0OCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvU2hha2kgc2lnbiAoMSkucG5nIiwiaWF0IjoxNzQ2MzI3MzAxLCJleHAiOjE3Nzc4NjMzMDF9.P3tPoW3ovSw45TSgs1bLOsU8KYWCAACjz6x1vBn0eds",
        songName: "Loca"
      }
    ]
  },
  {
    artist: "Lady Gaga",
    questions: [
      {
       
        question1: "What was Lady Gaga's first single to reach #1 on the Billboard Hot 100?",
        option1: "Poker Face",
        option2: "Just Dance ",
        option3: "Bad Romance",
        correctAnswer: "Just Dance"
      },
      {
       
        question2: "What is the name of the Lady Gaga song that won the Oscar for Best Original Song?",
        option1: "Always Remember Us This Way",
        option2: "Til It Happens to You",
        option3: "Shallow",
        correctAnswer: "2008"
      },
      {
      
        question3: "Pay the toll to the angels\n(Sign)\nIn the magic",
        correctAnswer: "Pay the toll to the angels\nDrawin' circles in the clouds\nKeep your mind on the distance\nWhen the devil turns around\nHold me in your heart tonight\nIn the magic",
        image: "https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Lady%20sing.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2I2ODAwNTlmLTNiZWYtNDc0YS04N2JlLTFkZmM5YTgwN2E0OCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvTGFkeSBzaW5nLnBuZyIsImlhdCI6MTc0NjMyNzI4NywiZXhwIjoxNzc3ODYzMjg3fQ.k6NhosSqQt6AjFegUktgCVR5LCqC35BcuMFA3zebMx4",
        songName: "Abracadabra"
      }
    ]
  },
  {
    artist: "Arctic Monkeys",
    questions: [
      {
        
        question1: "What is the name of Arctic Monkeys' debut album released in 2006?",
        option1: "Favourite Worst Nightmare",
        option2: "Humbug",
        option3: "Whatever People Say I Am, That's What I'm Not",
        correctAnswer: "Whatever People Say I Am, That's What I'm Not"
      },
      {
        
        question2: "Which of these songs was the first to reach #1 in the UK?",
        option1: "I Bet You Look Good on the Dancefloor",
        option2: " Do I Wanna Know?",
        option3: "R U Mine?",
        correctAnswer: "I Bet You Look Good on the Dancefloor"
      },
      {
      
        question3: "You got the lights\n(Sing)\ndrop coloured tongue",
        correctAnswer: "You got the lights on in the afternoon\nAnd the nights are drawn out long\nAnd you're kissin' to cut through the gloom\nWith a cough drop coloured tongue",
        image: "https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Artic%20sign.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2I2ODAwNTlmLTNiZWYtNDc0YS04N2JlLTFkZmM5YTgwN2E0OCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvQXJ0aWMgc2lnbi5wbmciLCJpYXQiOjE3NDYzMjcyNzAsImV4cCI6MTc3Nzg2MzI3MH0.LDX4GJeOlNYXyPnfdreDSh5BTXA6Qgr4msA8t6wtrGs",
        songName: "Knee Socks"
      }
    ]
  }
];

const getAllQuestions = async () => {
  return questions;
};

module.exports = {
  getAllQuestions,
}