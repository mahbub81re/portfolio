export const sendEmail = async (formData) => {

    
    try {
    const res = await fetch("/api/send", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });
    
         const data = await res.json();
    
        return data;
       } catch (e) {
       console.log(e);
      }
}