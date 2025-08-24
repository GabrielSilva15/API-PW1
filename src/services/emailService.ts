
export class EmailService{
    constructor(){}

    async execute( to:string, subject:string, message:string ){
        const response = await fetch("http://localhost:3000/send-email",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              to,
              subject,
              message
            })
    })

   const result = await response.json();
   console.log(result)
        
    }
}
